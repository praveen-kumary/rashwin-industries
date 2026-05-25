const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');
const productsFile = path.join(__dirname, 'src', 'data', 'products.ts');
const mappedFile = path.join(__dirname, 'src', 'data', 'productImages.ts');

const productsContent = fs.readFileSync(productsFile, 'utf8');
const imagesContent = fs.readFileSync(mappedFile, 'utf8');

const mappedSlugs = new Set();
const mapRegex = /"([^"]+)":\s*"/g;
let match;
while ((match = mapRegex.exec(imagesContent)) !== null) {
    mappedSlugs.add(match[1]);
}

const allProducts = [];
const itemRegex = /slug:\s*["']([^"']+)["'][^}]*?(?:modelNo:\s*["']([^"']+)["'])?[^}]*?title:\s*["']([^"']+)["']/g;
while ((match = itemRegex.exec(productsContent)) !== null) {
    allProducts.push({ slug: match[1], modelNo: match[2] || '', title: match[3] });
}

const allImageFiles = [];
function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    for (const file of fs.readdirSync(dir)) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
        } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png')) {
            allImageFiles.push({ name: file, path: fullPath });
        }
    }
}
scanDir(imgDir);

const unmappedProducts = allProducts.filter(p => !mappedSlugs.has(p.slug));
const missingMatches = [];

unmappedProducts.forEach(p => {
    const searchTerms = [];
    if (p.modelNo) {
        searchTerms.push(p.modelNo.toLowerCase().trim());
        const cleanModel = p.modelNo.toLowerCase().replace(/[\s\-\/]/g, '');
        if (cleanModel) searchTerms.push(cleanModel);
    }
    
    if (!p.modelNo) {
        searchTerms.push(p.slug.toLowerCase());
    }

    const matches = allImageFiles.filter(img => {
        const imgName = img.name.toLowerCase();
        const cleanName = imgName.replace(/[\s\-\/_]/g, '');
        
        return searchTerms.some(term => {
            const cleanTerm = term.replace(/[\s\-\/_]/g, '');
            return imgName.includes(term) || cleanName.includes(cleanTerm);
        });
    });

    if (matches.length > 0) {
        // Just take the first match
        missingMatches.push({ product: p, file: matches[0] });
    }
});

if (missingMatches.length > 0) {
    console.log(`=== FOUND ${missingMatches.length} MISSING IMAGES ===`);
    
    let psScript = `$pubDir = 'd:\\rashwin-latest\\Archive 13 (1)\\public\\products'\n`;
    let additions = `  // BATCH ADDITIONS\n`;
    
    missingMatches.forEach(m => {
        console.log(`Matched: ${m.product.slug} -> ${m.file.name}`);
        psScript += `Copy-Item -LiteralPath '${m.file.path}' -Destination (Join-Path $pubDir '${m.product.slug}.jpg') -Force\n`;
        additions += `  "${m.product.slug}": "/products/${m.product.slug}.jpg",\n`;
    });
    
    fs.writeFileSync('copy_missing.ps1', psScript);
    
    // Now update productImages.ts
    const updatedContent = imagesContent.replace(/};?\s*$/, additions + '};\n');
    fs.writeFileSync(mappedFile, updatedContent);
    
    console.log("Scripts generated and productImages.ts updated!");
} else {
    console.log("No missing images found.");
}
