const fs = require('fs');
const path = require('path');

const productsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.ts'), 'utf8');

const missingSlugs = [
    'mt-277-s-sc-20km', 'imf-2100', 'imf204-2f', 'imf208-2f', '277', 'mt-520-ring-501', 'mc201-f',
    'mt-520-iot-ir-4g-r680', 'mt-5u-k545n', 'mb-520-i7-7500u'
];

let currentCategory = '';
let currentSeries = '';
let currentItem = '';

const lines = productsContent.split('\n');
const results = {};

for (const line of lines) {
    if (line.match(/slug:\s*["']([^"']+)["']/)) {
        const slug = line.match(/slug:\s*["']([^"']+)["']/)[1];
        
        // Very basic heuristic based on indentation to track hierarchy
        const indent = line.search(/\S/);
        
        if (indent === 4) {
            currentCategory = line.match(/title:\s*["']([^"']+)["']/) ? line.match(/title:\s*["']([^"']+)["']/)[1] : slug;
            // Wait, title is on the next line usually. We can just use the slug for tracking.
            currentCategory = slug;
        } else if (indent === 8) {
            currentSeries = slug;
        } else if (indent === 10 || indent === 12) {
            currentItem = slug;
        }

        if (missingSlugs.includes(slug)) {
            // Find the title for the item by looking ahead a couple of lines
            let title = slug;
            for (let i = 0; i < 5; i++) {
                if (lines[lines.indexOf(line) + i] && lines[lines.indexOf(line) + i].match(/title:\s*["']([^"']+)["']/)) {
                    title = lines[lines.indexOf(line) + i].match(/title:\s*["']([^"']+)["']/)[1];
                    break;
                }
            }
            results[slug] = {
                title,
                category: currentCategory,
                series: currentSeries
            };
        }
    }
}

for (const slug of missingSlugs) {
    if (results[slug]) {
        console.log(`- **${results[slug].title}** (\`${slug}\`)`);
        console.log(`  Location: Category: \`${results[slug].category}\` -> Series: \`${results[slug].series}\``);
    } else {
        console.log(`- (Not found in hierarchy parser) \`${slug}\``);
    }
}
