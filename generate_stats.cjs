const fs = require('fs');
const path = require('path');

const productsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.ts'), 'utf8');
const imagesContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'productImages.ts'), 'utf8');

const mappedSlugs = new Set();
const mapRegex = /"([^"]+)":\s*"/g;
let match;
while ((match = mapRegex.exec(imagesContent)) !== null) {
    mappedSlugs.add(match[1]);
}

let totalItems = 0;
const allItems = [];
const itemRegex = /slug:\s*["']([^"']+)["'][^}]*?(?:modelNo:\s*["']([^"']+)["'])?[^}]*?title:\s*["']([^"']+)["']/g;
while ((match = itemRegex.exec(productsContent)) !== null) {
    totalItems++;
    allItems.push({
        slug: match[1],
        title: match[3],
        isMissing: !mappedSlugs.has(match[1])
    });
}

const missing = allItems.filter(i => i.isMissing);

const md = `
# Complete Image Mapping Statistics

**Total Items in Catalog:** ${totalItems}
**Successfully Mapped Images:** ${mappedSlugs.size}
**Pending / Missing Images:** ${missing.length}

---

### Detailed Breakdown of Missing Images

*(Note: The list of ${missing.length} items here represents exactly what is pending. This includes some category layout headers which do not strictly require images).*

${missing.map(m => `- **${m.title}** (\`${m.slug}\`)`).join('\n')}

`;

fs.writeFileSync('detailed_stats.md', md);
console.log(`Generated stats. Total: ${totalItems}, Mapped: ${mappedSlugs.size}, Missing: ${missing.length}`);
