const fs = require('fs');
const path = require('path');

const productsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.ts'), 'utf8');
const itemRegex = /slug:\s*["']([^"']+)["'][^}]*?(?:modelNo:\s*["']([^"']+)["'])?[^}]*?title:\s*["']([^"']+)["']/g;
const allProducts = [];
let match;
while ((match = itemRegex.exec(productsContent)) !== null) {
  allProducts.push({ slug: match[1], modelNo: match[2] || '', title: match[3] });
}

const imagesContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'productImages.ts'), 'utf8');
const mappedSlugs = new Set();
const mapRegex = /"([^"]+)":\s*"/g;
while ((match = mapRegex.exec(imagesContent)) !== null) { mappedSlugs.add(match[1]); }

const unmapped = allProducts.filter(p => !mappedSlugs.has(p.slug));
console.log(`Unmapped items: ${unmapped.length}`);

const imgDir = path.join(__dirname, 'images');
const allImageFiles = [];
function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) scanDir(fullPath);
    else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
      allImageFiles.push({ name: file, path: fullPath });
    }
  }
}
scanDir(imgDir);

const foundMatches = [];
unmapped.forEach(p => {
  const searchTerms = [];
  if (p.modelNo) {
      searchTerms.push(p.modelNo.toLowerCase());
      if (p.modelNo.includes('-')) {
          const parts = p.modelNo.split('-');
          if (parts.length > 2) searchTerms.push(parts.slice(1).join('-').toLowerCase());
      }
  }
  
  const matches = allImageFiles.filter(img => {
    const imgName = img.name.toLowerCase();
    // Exclude if it's already copied (exact slug match usually)
    // We only want files in subdirectories or unmapped loose files
    if (searchTerms.some(term => imgName.includes(term)) || imgName.includes(p.slug.toLowerCase())) {
        return true;
    }
    return false;
  });
  
  if (matches.length > 0) {
    foundMatches.push({ product: p, files: matches });
  }
});

console.log(`Found potential images for ${foundMatches.length} unmapped items:`);
foundMatches.forEach(m => {
    console.log(`- ${m.product.slug} (Model: ${m.product.modelNo})`);
    m.files.forEach(f => console.log(`    MATCH: ${f.name}`));
});
