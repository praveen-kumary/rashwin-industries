const fs = require('fs');
const path = require('path');

const file = 'd:/rashwin-latest/Archive 13 (1)/src/data/productImages.ts';
let content = fs.readFileSync(file, 'utf8');

const additions = `  // FINAL MISSED ADDITIONS
  "ir-touchscreen": "/products/ir-touchscreen.jpg",
};`;

content = content.replace(/};?\s*$/, additions + '\n');
fs.writeFileSync(file, content);
console.log('productImages.ts updated successfully.');
