const fs = require('fs');
const path = require('path');

const file = 'd:/rashwin-latest/Archive 13 (1)/src/data/productImages.ts';
let content = fs.readFileSync(file, 'utf8');

const additions = `  // BATCH ADDITIONS
  "mb-520-3-5-j1900": "/products/mb-520-3-5-j1900.jpg",
  "mb-520-j1900-3-5-en50155": "/products/mb-520-j1900-3-5-en50155.jpg",
  "mt-520-3-5-j1900-en50155-v2": "/products/mt-520-3-5-j1900-en50155-v2.jpg",
  "mt-iems-10p-8l-2sfp": "/products/mt-iems-10p-8l-2sfp.jpg",
  "mt-iems-16p-8l-8sfp": "/products/mt-iems-16p-8l-8sfp.jpg",
  "mt-iems-20p-16l-4sfp": "/products/mt-iems-20p-16l-4sfp.jpg",
  "mt-iems-24p-8l-16sfp": "/products/mt-iems-24p-8l-16sfp.jpg",
  "mt-iems-24p-l3": "/products/mt-iems-24p-l3.jpg",
  "mt-iems-26p-24l-2sfp": "/products/mt-iems-26p-24l-2sfp.jpg",
  "mt-iems-28p-24l-4sfp": "/products/mt-iems-28p-24l-4sfp.jpg",
  "mt-iems-m12-i": "/products/mt-iems-m12-i.jpg",
  "ies2005": "/products/ies2005.jpg",
  "ies2008": "/products/ies2008.jpg",
  "mt-ieus-16p-ge": "/products/mt-ieus-16p-ge.jpg",
  "mt-ieus-5p-4c-1sfp": "/products/mt-ieus-5p-4c-1sfp.jpg",
  "mt-ieus-24p-ge": "/products/mt-ieus-24p-ge.jpg",
  "mt-ieus-5p-ge": "/products/mt-ieus-5p-ge.jpg",
  "mt-ieus-8p-ge": "/products/mt-ieus-8p-ge.jpg",
  "mt-iems-10p-8poe-2sfp": "/products/mt-iems-10p-8poe-2sfp.jpg",
  "mt-iems-12p-8l-4sfp": "/products/mt-iems-12p-8l-4sfp.jpg",
  "mt-iems-12p-8poe-4sfp": "/products/mt-iems-12p-8poe-4sfp.jpg",
  "mt-iems-28p-24poe-4sfp": "/products/mt-iems-28p-24poe-4sfp.jpg",
  "mt-iems-6p-4poe-2sfp": "/products/mt-iems-6p-4poe-2sfp.jpg",
  "mt-iems-8poe-2sfp-g": "/products/mt-iems-8poe-2sfp-g.jpg",
  "mt-iems-l3-12p-8poe-4sfp": "/products/mt-iems-l3-12p-8poe-4sfp.jpg",
  "mt-iems-l3-28p-24poe-4sfp-10g": "/products/mt-iems-l3-28p-24poe-4sfp-10g.jpg",
  "mt-iems-poe-16p": "/products/mt-iems-poe-16p.jpg",
  "mt-iems-poe-6p-4l-2sfp": "/products/mt-iems-poe-6p-4l-2sfp.jpg",
  "mt-iems-20p-4sfp": "/products/mt-iems-20p-4sfp.jpg",
  "mt-iems-16p-8l-8sfp-fiber": "/products/mt-iems-16p-8l-8sfp-fiber.jpg",
  "mt-iems-l2-16p-8poe-8sfp": "/products/mt-iems-l2-16p-8poe-8sfp.jpg",
  "mt-ieus-5poe-ge": "/products/mt-ieus-5poe-ge.jpg",
};`;

content = content.replace(/};?\s*$/, additions + '\n');
fs.writeFileSync(file, content);
console.log('productImages.ts updated successfully.');
