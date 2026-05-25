const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const pubDir = path.join(__dirname, 'public', 'products');
const mapFile = path.join(__dirname, 'src', 'data', 'productImages.ts');

const manualMappings = [
    {
        slug: 'gw1114-tb',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\Industrial Modbus Gateway\\Model No_ GW1114 4DI(RS-485)-TB-P(12-48VDC) To Ethernet Modbus Gateway.jpg'
    },
    {
        slug: 'mt-tlc485',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\Industrial Serial Converter\\Model No_ TLC485 Passive Pocket RS-232 to RS-485 Interface Converter.jpg'
    },
    {
        slug: 'mt-pcan-fdc-2-usb',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\CAN to Serial Converter\\Model No_ MT-PCAN-FDC+2-USB P-CAN-FDC+2-USB Adapter.jpg'
    },
    {
        slug: '5-wire-resistive',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\Touch Screen\\Resistive Touch Screen.jpg'
    },
    {
        slug: 'mt-kiosk-1850t',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\Touch Screen Kiosk.jpg'
    },
    {
        slug: 'mt-kiosk-2150t',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\Touch Screen Kiosk.jpg'
    },
    {
        slug: 'mt-kiosk-3200t',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\Touch Screen Kiosk.jpg'
    },
    {
        slug: 'kiosk-4300',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\Touch Screen Kiosk.jpg'
    },
    {
        slug: 'kiosk-5500t',
        srcFile: 'D:\\rashwin-latest\\Archive 13 (1)\\images\\Touch Screen Kiosk.jpg'
    }
];

async function run() {
    let content = fs.readFileSync(mapFile, 'utf8');
    let additions = '\n  // MANUAL FIXES FOR TYPO FILES\n';

    for (const mapping of manualMappings) {
        if (!fs.existsSync(mapping.srcFile)) continue;

        const outPath = path.join(pubDir, `${mapping.slug}.webp`);
        await sharp(mapping.srcFile).webp({ quality: 80 }).toFile(outPath);

        additions += `  "${mapping.slug}": "/products/${mapping.slug}.webp",\n`;
    }

    content = content.replace(/};?\s*$/, additions + '};\n');
    fs.writeFileSync(mapFile, content);
    console.log("Manual fixes applied!");
}

run();
