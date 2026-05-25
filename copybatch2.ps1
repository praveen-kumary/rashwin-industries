$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK: $slug"
}

# 1. Industrial MINI 3.5 Inch Motherboards
$dir = Join-Path $imgDir 'Industrial MINI 3.5 Inch Motherboards'
CopyImg (Join-Path $dir 'Model No_ MB-520-3.5-J1900 Industrial MINI 3.5 Inch Motherboard.jpg') 'mb-520-3-5-j1900'
CopyImg (Join-Path $dir 'Model No_ MB-520-J1900-3.5-EN50155 Industrial MINI 3.5 Inch EN50155 Standard Motherboard.jpg') 'mb-520-j1900-3-5-en50155'
CopyImg (Join-Path $dir 'Model No_ MT-520-3.5-J1900-EN50155(V2.0) Industrial MINI 3.5 Inch Motherboard.jpg') 'mt-520-3-5-j1900-en50155-v2'

# 2. Industrial Managed Switches
$dir = Join-Path $imgDir 'Industrial Managed Switches'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-10P-8L-2SFP 10-port 10_100M_1000M L2+ Managed Industrial Ethernet Switch.jpg') 'mt-iems-10p-8l-2sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-16P-8L-8SFP Indutsrial Ethernet Managed Switch.jpg') 'mt-iems-16p-8l-8sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-20P-16L-4SFP 20-port 10_100M_1000M L2+ Managed Industrial Ethernet Switch.jpg') 'mt-iems-20p-16l-4sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-24P-8L-16SFP 16-port 10_100M_1000M L2+ Managed Industrial Ethernet Switch.jpg') 'mt-iems-24p-8l-16sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-24P-L3 Industrial Grade 24 Port Managed Ethernet Switch.jpg') 'mt-iems-24p-l3'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-26P-24L-2SFP 26-port 10_100M_1000M Industrial Ethernet Switch.jpg') 'mt-iems-26p-24l-2sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-28P-24L-4SFP 28-port 10G Uplink L3 Managed Industrial Ethernet Switch 4-Port 1_10G SFP 24-Port 10_100_1000Base-T RJ45.jpg') 'mt-iems-28p-24l-4sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-M12-I Gigabit 8-port Layer 2 Management Strengthened Industrial Switch.jpg') 'mt-iems-m12-i'

# 3. Industrial Unmanaged Switches
$dir = Join-Path $imgDir 'Industrial Unmanaged Switches'
CopyImg (Join-Path $dir 'Model No_ IES2005 5 Port Industrial Ethernet Switch.jpg') 'ies2005'
CopyImg (Join-Path $dir 'Model No_ IES2008 8 Port Industrial Ethernet Switch.jpg') 'ies2008'
CopyImg (Join-Path $dir 'Model No_ MT- IEUS-16P-GE 18-port 10_100_1000M Industrial Ethernet Switch.jpg') 'mt-ieus-16p-ge'
CopyImg (Join-Path $dir 'Model No_ MT- IEUS-5P-4C-1SFP Industrial Ethernet Unmanaged switch with SFP Slots Model_ MT- IEUS-5P-4C-1SFP.jpg') 'mt-ieus-5p-4c-1sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEUS-24P-GE 24-port 10_100_1000M Industrial Ethernet Switch.jpg') 'mt-ieus-24p-ge'
CopyImg (Join-Path $dir 'Model No_ MT-IEUS-5P-GE 5-port 10_100M_1000M Industrial Ethernet Switch.jpg') 'mt-ieus-5p-ge'
CopyImg (Join-Path $dir 'Model No_ MT-IEUS-8P-GE 8-port 10_100M_1000M Industrial Ethernet Switch.jpg') 'mt-ieus-8p-ge'

# 4. Industrial POE Managed Switches
$dir = Join-Path $imgDir 'Industrial POE Managed Switches'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-10P-8POE-2SFP 10-port 10_100M_1000M L2 WEB Managed Industrial PoE Ethernet Switch.jpg') 'mt-iems-10p-8poe-2sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-12P-8L-4SFP 12-port 10_100M_1000M L2+ Managed Industrial PoE Ethernet Switch.jpg') 'mt-iems-12p-8l-4sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-12P-8POE-4SFP 12-port 10_100M_1000M L2+ Managed Industrial PoE Ethernet Switch.jpg') 'mt-iems-12p-8poe-4sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-28P-24POE-4SFP Industrial POE Manged Switch.jpg') 'mt-iems-28p-24poe-4sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-6P-4POE-2SFP 6-port 10_100M_1000M L2 WEB Managed Industrial PoE Ethernet Switch.jpg') 'mt-iems-6p-4poe-2sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-8POE-2SFP-G Industrial POE Managed Switches.jpg') 'mt-iems-8poe-2sfp-g'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-L3-12P-8POE-4SFP 12-port 10G Uplink L3 Managed PoE Industrial Ethernet Switch.jpg') 'mt-iems-l3-12p-8poe-4sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-L3-28P-24POE-4SFP-10G Industrial POE Manged Switch.jpg') 'mt-iems-l3-28p-24poe-4sfp-10g'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-POE-16P Managed Network Switch with 16_GE UTP+4_ GE Combo port.jpg') 'mt-iems-poe-16p'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-PoE-6P-4L-2SFP Industrial Ethernet Managed Switches.jpg') 'mt-iems-poe-6p-4l-2sfp'

# 5. Industrial Managed Fiber Switches
$dir = Join-Path $imgDir 'Industrial Managed Fiber Switches'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS- 20P-4SFP Industrial Managed Ethernet Fiber Switch.jpg') 'mt-iems-20p-4sfp'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-16P-8L-8SFP Industrial Managed Ethernet Fiber Switch.jpg') 'mt-iems-16p-8l-8sfp-fiber'
CopyImg (Join-Path $dir 'Model No_ MT-IEMS-L2-16P-8POE-8SFP Industrial Managed Ethernet Fiber Switch.jpg') 'mt-iems-l2-16p-8poe-8sfp'

# 6. Loose file POE Unmanaged
CopyImg (Join-Path $imgDir 'Industrial POE Unmanaged Switches Model No Model No MT-IEUS-5POE-GE 5 Port Industrial Un Managed Giga Bit Ethernet Switch.jpg') 'mt-ieus-5poe-ge'

Write-Host "DONE COPYING"
