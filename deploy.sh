#!/bin/bash
# ============================================================
# Rashwin Industries — One-Click VPS Deployment Script
# Run this on your Hostinger VPS after uploading dist.zip
# ============================================================

set -e

APP_DIR="/var/www/rashwin"
PORT=3000

echo "🚀 Rashwin Industries — VPS Deployment"
echo "========================================"

# 1. Install Node.js 20 if not present
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi
echo "✅ Node.js $(node -v)"

# 2. Install PM2 globally if not present
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    sudo npm install -g pm2
fi
echo "✅ PM2 $(pm2 -v)"

# 3. Create app directory
echo "📁 Setting up $APP_DIR..."
sudo mkdir -p $APP_DIR
cd $APP_DIR

# 4. Unzip if dist.zip exists in current directory
if [ -f "dist.zip" ]; then
    echo "📦 Extracting dist.zip..."
    unzip -o dist.zip
    rm dist.zip
fi

# 5. Install production dependencies
echo "📦 Installing dependencies..."
npm install --omit=dev

# 6. Stop existing instance if running
pm2 delete rashwin 2>/dev/null || true

# 7. Start with PM2
echo "🔥 Starting server on port $PORT..."
PORT=$PORT pm2 start dist/server/server.js --name rashwin

# 8. Save PM2 config and setup auto-start on reboot
pm2 save
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME 2>/dev/null || true

# 9. Setup Nginx reverse proxy
if command -v nginx &> /dev/null; then
    echo "🌐 Configuring Nginx..."
    sudo tee /etc/nginx/sites-available/rashwin > /dev/null <<'NGINX'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX
    sudo ln -sf /etc/nginx/sites-available/rashwin /etc/nginx/sites-enabled/rashwin
    sudo rm -f /etc/nginx/sites-enabled/default
    sudo nginx -t && sudo systemctl reload nginx
    echo "✅ Nginx configured"
else
    echo "⚠️  Nginx not installed. Install it with: sudo apt install nginx"
fi

echo ""
echo "========================================="
echo "✅ DEPLOYMENT COMPLETE!"
echo "========================================="
echo "🌍 Site: http://$(hostname -I | awk '{print $1}')"
echo "📊 Logs: pm2 logs rashwin"
echo "🔄 Restart: pm2 restart rashwin"
echo "❌ Stop: pm2 stop rashwin"
echo "========================================="
