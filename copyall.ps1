$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

# Helper: copy and report
function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    if (Test-Path -LiteralPath $src) {
        Copy-Item -LiteralPath $src -Destination $dest -Force
        Write-Host "OK: $slug"
    } else {
        Write-Host "MISSING: $src"
    }
}

# ── Celeron CPU Box PC ──
$dir = Join-Path $imgDir 'Celeron CPU-Industrial Embedded Box PC'
if (Test-Path -LiteralPath $dir) {
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    foreach ($f in $files) {
        $n = $f.Name
        if ($n -match 'C2-L2.*v2') { CopyImg $f.FullName 'mbox-520-c2-l2-v2' }
        elseif ($n -match 'C2-L2.*v1') { CopyImg $f.FullName 'mbox-520-c2-l2-v1' }
        elseif ($n -match 'C-4L') { CopyImg $f.FullName 'mbox-520-c-4l' }
        elseif ($n -match 'N3150') { CopyImg $f.FullName 'mbox-520-n3150' }
        elseif ($n -match 'J1900-6L') { CopyImg $f.FullName 'mbox-520-j1900-6l' }
        elseif ($n -match 'C4-4L') { CopyImg $f.FullName 'mbox-520-c4-4l' }
        else { Write-Host "UNMATCHED Celeron: $n" }
    }
}

# ── Core i3 Box PC ──
$dir = Join-Path $imgDir 'Core i3 -Industrial Embedded Box PC'
if (Test-Path -LiteralPath $dir) {
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    foreach ($f in $files) {
        $n = $f.Name
        if ($n -match 'I3-4010U|I3-7167U') { CopyImg $f.FullName 'mbox-520-i3-4010u' }
        elseif ($n -match 'I3-6C-6U') { CopyImg $f.FullName 'mbox-520-i3-6c-6u' }
        elseif ($n -match 'I3-4L-6C') { CopyImg $f.FullName 'mbox-520-i3-4l-6c' }
        else { Write-Host "UNMATCHED i3: $n" }
    }
}

# ── Core i5 Box PC ──
$dir = Join-Path $imgDir 'Core-i5 Industrial Embedded Box PC'
if (Test-Path -LiteralPath $dir) {
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    foreach ($f in $files) {
        $n = $f.Name
        if ($n -match 'EN50155') { CopyImg $f.FullName 'en50155-mbox-520-i5' }
        elseif ($n -match 'M9-BLUE' -and $n -notmatch 'PRO') { CopyImg $f.FullName 'mbox-520-m9-blue' }
        elseif ($n -match 'I5-6C-6U-2HD') { CopyImg $f.FullName 'mbox-520-i5-6c-6u-2hd' }
        elseif ($n -match 'I5-6C-6U' -and $n -notmatch '2HD' -and $n -notmatch '12G') { CopyImg $f.FullName 'mbox-520-i5-6c-6u' }
        elseif ($n -match 'I5-M7-8265U') { CopyImg $f.FullName 'mbox-520-i5-m7-8265u' }
        elseif ($n -match 'M11-G') { CopyImg $f.FullName 'mbox-520-m11-g' }
        elseif ($n -match 'B5500') { CopyImg $f.FullName 'mbox-b5500' }
        elseif ($n -match 'M3 Series') { CopyImg $f.FullName 'mbox-520-m3' }
        elseif ($n -match 'NINO-IP68') { CopyImg $f.FullName 'nino-ip68-g1' }
        elseif ($n -match 'I5-7267U') { CopyImg $f.FullName 'mbox-520-i5-7267u-l2-6c' }
        elseif ($n -match 'M9-PRO') { CopyImg $f.FullName 'mbox-520-m9-pro-blue' }
        elseif ($n -match 'I5-4L-6C') { CopyImg $f.FullName 'mbox-520-i5-4l-6c' }
        elseif ($n -match 'i5-1OG-4L|i5-10G-4L') { CopyImg $f.FullName 'mbox-520-i5-10g-4l' }
        else { Write-Host "UNMATCHED i5: $n" }
    }
}

# ── Industrial Edge Computing (main zip - has individual item images) ──
$dir = Join-Path $imgDir 'Industrial Edge Computing'
if (Test-Path -LiteralPath $dir) {
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    foreach ($f in $files) {
        $n = $f.Name
        if ($n -match 'I7-M7-1165G7') { CopyImg $f.FullName 'mbox-520-i7-m7-1165g7' }
        elseif ($n -match 'I7-8250U|I7-10510U') { CopyImg $f.FullName 'mbox-520-i7-8250u-l2-6c' }
        elseif ($n -match 'I7-6C-6U-10G') { CopyImg $f.FullName 'mbox-520-i7-6c-6u-10g' }
        elseif ($n -match 'I7-6C-6U-13G') { CopyImg $f.FullName 'mbox-520-i7-6c-6u-13g' }
        elseif ($n -match 'OPS-520') { CopyImg $f.FullName 'ops-520-i5-4200m' }
        elseif ($n -match 'AI-Z-12G') { CopyImg $f.FullName 'mbox-520-ai-z-12g' }
        elseif ($n -match 'AI-6789G') { CopyImg $f.FullName 'mbox-520-ai-6789g' }
        elseif ($n -match 'I7-2PCI') { CopyImg $f.FullName 'mbox-520-i7-2pci' }
        elseif ($n -match 'MZ-AI-1234G') { CopyImg $f.FullName 'mbox-520-mz-ai-1234g' }
        elseif ($n -match 'PZ-AI') { CopyImg $f.FullName 'mbox-520-pz-ai-i9-9g' }
        elseif ($n -match 'PCIE-ITX-1011G') { CopyImg $f.FullName 'mbox-520-pcie-itx-1011g' }
        elseif ($n -match 'GPU-i-89G') { CopyImg $f.FullName 'mbox-520-gpu-i-89g' }
        elseif ($n -match 'i9-3L-6C-12U') { CopyImg $f.FullName 'mbox-520-i9-3l-6c-12u' }
        elseif ($n -match 'JETSON.*4C-128') { CopyImg $f.FullName 'mt-520-jetson-nvidia-4c' }
        elseif ($n -match 'JETSON.*6C-384') { CopyImg $f.FullName 'mt-520-jetson-nvidia-6c' }
        else { Write-Host "UNMATCHED EdgeComp: $n" }
    }
}

# ── Modbus Gateway ──
$dir = Join-Path $imgDir 'Industrial Modbus Gateway'
if (Test-Path -LiteralPath $dir) {
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    foreach ($f in $files) {
        $n = $f.Name
        if ($n -match 'MOOTEK-3202') { CopyImg $f.FullName 'mootek-3202-gateway' }
        elseif ($n -match 'GW1101') { CopyImg $f.FullName 'gw1101' }
        elseif ($n -match 'GW1102') { CopyImg $f.FullName 'gw1102' }
        elseif ($n -match 'GW1114.*4 PORT') { CopyImg $f.FullName 'gw1114' }
        elseif ($n -match 'GW1114.*To Ethernet') { CopyImg $f.FullName 'gw1114-2' }
        elseif ($n -match 'GW1118') { CopyImg $f.FullName 'gw1118' }
        elseif ($n -match 'MooGate 700') { CopyImg $f.FullName 'mbox-moogate-700' }
        elseif ($n -match 'MooGate 600') { CopyImg $f.FullName 'mbox-moogate-600' }
        else { Write-Host "UNMATCHED Gateway: $n" }
    }
}

# ── AMD Ryzen ──
$dir = Join-Path $imgDir 'AMD Ryzen Motherboard'
if (Test-Path -LiteralPath $dir) {
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    foreach ($f in $files) {
        $n = $f.Name
        if ($n -match 'R2000') { CopyImg $f.FullName 'mt-520-ryz-r2000' }
        elseif ($n -match 'V2000') { CopyImg $f.FullName 'mt-520-ryz-v2000' }
        elseif ($n -match 'B650') { CopyImg $f.FullName 'mt-520-ryz-b650' }
        else { Write-Host "UNMATCHED AMD: $n" }
    }
}

# ── Android Motherboard ──
$dir = Join-Path $imgDir 'Android Motherboard'
if (Test-Path -LiteralPath $dir) {
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    foreach ($f in $files) {
        $n = $f.Name
        if ($n -match 'AND-11') { CopyImg $f.FullName 'mt-520-and-11' }
        elseif ($n -match 'AND[^-]' -or $n -match 'AND\.') { CopyImg $f.FullName 'mt-520-and' }
        else { Write-Host "UNMATCHED Android: $n" }
    }
}

# ── Digital Signage OPS ──
$opsImg = Join-Path $imgDir '_Model No OPS-520-I5-4200M Intel Core i5 i3 i7 GEN DDR3 RAM 4 x USB  HDMI.jpg'
if (Test-Path -LiteralPath $opsImg) { CopyImg $opsImg 'ops-520-i5-4200m' }

Write-Host "`nDONE - All images processed!"
