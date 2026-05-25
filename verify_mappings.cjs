const fs = require('fs');
const path = require('path');

const mapContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'productImages.ts'), 'utf8');

const mapRegex = /"([^"]+)":\s*"([^"]+)"/g;
let match;
let missingFiles = [];
let total = 0;

while ((match = mapRegex.exec(mapContent)) !== null) {
    const slug = match[1];
    let imgPath = match[2];
    
    // Convert `/products/...` to `public/products/...`
    const absolutePath = path.join(__dirname, 'public', imgPath.replace(/^\//, ''));
    
    total++;
    if (!fs.existsSync(absolutePath)) {
        missingFiles.push({ slug, expectedPath: imgPath });
    }
}

console.log(`Total mapped: ${total}`);
console.log(`Missing on disk: ${missingFiles.length}`);

if (missingFiles.length > 0) {
    console.log("These are mapped but DO NOT exist on disk:");
    missingFiles.forEach(f => console.log(`${f.slug} -> ${f.expectedPath}`));
}
