const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');

const pendingWords = [
    'r680', 'iot', '277', 'imf', 'mc201', '5u', '7500u', 'ring-501'
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
