const fs = require('fs');
const content = fs.readFileSync('d:/rashwin-latest/Archive 13 (1)/src/data/products.ts', 'utf8');

// Count categories (icon: pattern)
const categories = (content.match(/icon:\s+\w+,/g) || []).length;

// Count series blocks (items: [)
const series = (content.match(/items:\s*\[/g) || []).length;

// Count items with slug inside items arrays
const allSlugs = (content.match(/\{ slug: "/g) || []).length;

// Count subItems arrays
const subItemArrays = (content.match(/subItems:\s*\[/g) || []).length;

// Count individual sub-item entries (slugs inside subItems)
const lines = content.split('\n');
let inSubItems = false;
let subItemCount = 0;
let itemCount = 0;
let depth = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('subItems: [')) {
    inSubItems = true;
    depth = 0;
    for (const ch of line) {
      if (ch === '[') depth++;
      if (ch === ']') depth--;
    }
    // Count slugs on same line
    const matches = line.match(/slug: "/g);
    if (matches) subItemCount += matches.length - 1; // subtract the parent
    continue;
  }
  if (inSubItems) {
    for (const ch of line) {
      if (ch === '[') depth++;
      if (ch === ']') depth--;
    }
    if (depth <= 0) {
      inSubItems = false;
      continue;
    }
    const matches = line.match(/slug: "/g);
    if (matches) subItemCount += matches.length;
  }
}

// Top-level items = all slugs - sub-item slugs - category slugs - series slugs
console.log('=== FINAL END-TO-END COUNT ===');
console.log('Total slug entries:', allSlugs);
console.log('Categories:', categories);
console.log('Series (with items arrays):', series);
console.log('Items with subItems:', subItemArrays);
console.log('Sub-item entries:', subItemCount);
console.log('Top-level items (total slugs - subs - cats - series):', allSlugs - subItemCount - categories - series);
console.log('');
console.log('GRAND TOTAL PRODUCT ENTRIES:', (allSlugs - categories - series));
