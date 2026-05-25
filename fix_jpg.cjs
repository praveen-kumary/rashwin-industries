const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, 'src', 'routes', 'products', '$categorySlug.index.tsx');
let content = fs.readFileSync(target, 'utf8');
content = content.replace(/\.jpg/g, '.webp');
content = content.replace(/\.png/g, '.webp');
fs.writeFileSync(target, content);
console.log('Fixed category index page');
