// @ts-nocheck
import server from "../dist/server/server.js";
import fs from "fs";
import path from "path";

export const config = {
  runtime: 'nodejs',
  api: {
    bodyParser: false, // Disables Vercel's default body parser so we can read the stream
  },
};

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const urlStr = req.url || '/';
    const url = new URL(urlStr, `${protocol}://${host}`);
    
    // --- STATIC ASSET SERVING ---
    // This makes the deployment foolproof regardless of Vercel Output Directory settings
    if (urlStr.startsWith('/assets/') || urlStr === '/favicon.ico') {
      const filePath = path.join(process.cwd(), 'dist', 'client', urlStr.split('?')[0]);
      if (fs.existsSync(filePath)) {
        if (filePath.endsWith('.css')) res.setHeader('Content-Type', 'text/css');
        else if (filePath.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript');
        else if (filePath.endsWith('.svg')) res.setHeader('Content-Type', 'image/svg+xml');
        else if (filePath.endsWith('.woff2')) res.setHeader('Content-Type', 'font/woff2');
        else if (filePath.endsWith('.woff')) res.setHeader('Content-Type', 'font/woff');
        else if (filePath.endsWith('.ttf')) res.setHeader('Content-Type', 'font/ttf');
        else if (filePath.endsWith('.png')) res.setHeader('Content-Type', 'image/png');
        else if (filePath.endsWith('.webp')) res.setHeader('Content-Type', 'image/webp');
        else if (filePath.endsWith('.ico')) res.setHeader('Content-Type', 'image/x-icon');
        else if (filePath.endsWith('.json')) res.setHeader('Content-Type', 'application/json');
        
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        const content = fs.readFileSync(filePath);
        res.statusCode = 200;
        res.end(content);
        return;
      }
    }
    // --- END STATIC ASSET SERVING ---
    
    const headers = new Headers();
    for (const key in req.headers) {
      if (req.headers[key] !== undefined) {
        if (Array.isArray(req.headers[key])) {
          req.headers[key].forEach(v => headers.append(key, v));
        } else {
          headers.set(key, req.headers[key]);
        }
      }
    }

    let body = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = await new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
      });
    }

    const request = new Request(url.href, {
      method: req.method,
      headers,
      body,
    });

    const response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
      res.end();
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Error in SSR node function:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
