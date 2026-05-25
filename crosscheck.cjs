const fs = require('fs');
const path = require('path');

// 1. Read products.ts to get all slugs
const productsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.ts'), 'utf8');

// A crude but effective regex to find slugs, modelNo, titles of items and subItems
const itemRegex = /slug:\s*["']([^"']+)["'][^}]*?(?:modelNo:\s*["']([^"']+)["'])?[^}]*?title:\s*["']([^"']+)["']/g;

const allProducts = [];
let match;
while ((match = itemRegex.exec(productsContent)) !== null) {
  allProducts.push({
    slug: match[1],
    modelNo: match[2] || '',
    title: match[3]
  });
}

// 2. Read productImages.ts to get existing mappings
const imagesContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'productImages.ts'), 'utf8');
const mappedSlugs = new Set();
const mapRegex = /"([^"]+)":\s*"/g;
while ((match = mapRegex.exec(imagesContent)) !== null) {
  mappedSlugs.add(match[1]);
}

// Find unmapped slugs
const unmapped = allProducts.filter(p => !mappedSlugs.has(p.slug));
console.log(`Total Products/Items/SubItems found: ${allProducts.length}`);
console.log(`Total Mapped Images: ${mappedSlugs.size}`);
console.log(`Unmapped Items: ${unmapped.length}`);

// 3. Scan all images in 'images' directory
const imgDir = path.join(__dirname, 'images');
const allImageFiles = [];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
      allImageFiles.push({ name: file, path: fullPath });
    }
  }
}

scanDir(imgDir);

console.log(`Total Image Files in /images: ${allImageFiles.length}\n`);

// 4. Try to match unmapped items to available images
console.log('=== UNMAPPED ITEMS ===');
unmapped.forEach(p => {
  console.log(`[ ] ${p.slug} | Model: ${p.modelNo} | Title: ${p.title}`);
  
  // Try to find a potential match
  const searchTerms = [];
  if (p.modelNo) searchTerms.push(p.modelNo.toLowerCase());
  // also add parts of model no, e.g. MT-520-1590 -> 1590
  if (p.modelNo && p.modelNo.includes('-')) {
    const parts = p.modelNo.split('-');
    if (parts.length > 2) {
      searchTerms.push(parts.slice(1).join('-').toLowerCase());
    }
  }
  
  const matches = allImageFiles.filter(img => {
    const imgName = img.name.toLowerCase();
    return searchTerms.some(term => imgName.includes(term)) || imgName.includes(p.slug.toLowerCase());
  });
  
  if (matches.length > 0) {
    console.log(`    POTENTIAL MATCHES:`);
    matches.forEach(m => console.log(`      -> ${m.name}`));
  }
});
