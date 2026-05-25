const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inPath = path.join(__dirname, 'public', 'industrial_sectors.png');
const outPath = path.join(__dirname, 'public', 'industrial_sectors.webp');

if (fs.existsSync(inPath)) {
    sharp(inPath)
        .webp({ quality: 80 })
        .toFile(outPath)
        .then(() => {
            console.log("Converted industrial_sectors.png to webp");
        })
        .catch(err => console.error(err));
} else {
    console.log("industrial_sectors.png not found in public folder");
}
