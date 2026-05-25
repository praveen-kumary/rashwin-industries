const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const pubDir = path.join(__dirname, 'public', 'products');
const mapFile = path.join(__dirname, 'src', 'data', 'productImages.ts');

async function processImages() {
    console.log('Starting image conversion...');
    const files = fs.readdirSync(pubDir);
    let converted = 0;
    
    for (const file of files) {
        if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            const inputPath = path.join(pubDir, file);
            const outputPath = path.join(pubDir, `${baseName}.webp`);
            
            try {
                await sharp(inputPath)
                    .webp({ quality: 80, effort: 4 })
                    .toFile(outputPath);
                
                // If successful, delete the original
                fs.unlinkSync(inputPath);
                converted++;
            } catch (err) {
                console.error(`Failed to convert ${file}:`, err);
            }
        }
    }
    
    console.log(`Successfully converted ${converted} images to .webp!`);
    
    // Now update productImages.ts
    let content = fs.readFileSync(mapFile, 'utf8');
    const originalLen = content.length;
    
    content = content.replace(/\.jpg/g, '.webp');
    content = content.replace(/\.jpeg/g, '.webp');
    content = content.replace(/\.png/g, '.webp');
    
    fs.writeFileSync(mapFile, content);
    console.log('Updated productImages.ts to use .webp extensions.');
}

processImages();
