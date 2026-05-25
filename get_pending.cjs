const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'src', 'data', 'products.ts');
const mappedFile = path.join(__dirname, 'src', 'data', 'productImages.ts');

const productsContent = fs.readFileSync(productsFile, 'utf8');
const imagesContent = fs.readFileSync(mappedFile, 'utf8');

// 1. Get all mapped slugs
const mappedSlugs = new Set();
const mapRegex = /"([^"]+)":\s*"/g;
let match;
while ((match = mapRegex.exec(imagesContent)) !== null) {
    mappedSlugs.add(match[1]);
}

// 2. We want to organize by parent if possible, but let's just get everything
const unmapped = [];
const itemRegex = /slug:\s*["']([^"']+)["'][^}]*?(?:modelNo:\s*["']([^"']+)["'])?[^}]*?title:\s*["']([^"']+)["']/g;
while ((match = itemRegex.exec(productsContent)) !== null) {
    const slug = match[1];
    const modelNo = match[2] || '';
    const title = match[3];
    if (!mappedSlugs.has(slug)) {
        unmapped.push({ slug, modelNo, title });
    }
}

// Group them by some heuristic (like first word) or just dump them
const reportPath = path.join(__dirname, 'unmapped_report.json');
fs.writeFileSync(reportPath, JSON.stringify(unmapped, null, 2));
console.log(`Generated report with ${unmapped.length} pending items.`);
