const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');

const pendingWords = [
    'kiosk', '1850', '2150', '3200', '4300', '5500', 
    '5-wire', 'resistive', '5wire', 
    '520-iot', 'gw1114', '277-s-sc', 'imf', 'imf204', 'imf208', 'mc201', 'pcan-fdc', 'tlc485', 
    '5u-k545n', 'mb-520-i7-7500u'
];

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const found = [];

walkDir(imgDir, function(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.jpg' || ext === '.png' || ext === '.jpeg') {
        const lowerName = path.basename(filePath).toLowerCase();
        
        pendingWords.forEach(word => {
            if (lowerName.includes(word)) {
                found.push({ file: filePath, word });
            }
        });
    }
});

console.log("Found related files for pending items:");
found.forEach(f => console.log(`${f.word}: ${f.file}`));
