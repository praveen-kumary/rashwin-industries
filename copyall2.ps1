$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK: $slug"
}

# ── AI GPU Box PC ──
$dir = Join-Path $imgDir 'Industrial AI Embedded Box PC With Graphics Card'
if (-not (Test-Path -LiteralPath $dir)) {
    $zip = Join-Path $imgDir 'Industrial AI Embedded Box PC With Graphics Card.zip'
    Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
}
$files = Get-ChildItem -LiteralPath $dir -File -Recurse
Write-Host "=== AI GPU Box PC ($($files.Count) files) ==="
foreach ($f in $files) {
    $n = $f.Name
    Write-Host "  FILE: $n"
    if ($n -match 'AI-Z-12G') { CopyImg $f.FullName 'mbox-520-ai-z-12g' }
    elseif ($n -match 'AI-6789G') { CopyImg $f.FullName 'mbox-520-ai-6789g' }
    elseif ($n -match 'I7-2PCI') { CopyImg $f.FullName 'mbox-520-i7-2pci' }
    elseif ($n -match 'MZ-AI-1234G') { CopyImg $f.FullName 'mbox-520-mz-ai-1234g' }
    elseif ($n -match 'PZ-AI') { CopyImg $f.FullName 'mbox-520-pz-ai-i9-9g' }
    elseif ($n -match 'PCIE-ITX-1011G') { CopyImg $f.FullName 'mbox-520-pcie-itx-1011g' }
    elseif ($n -match 'GPU-i-89G') { CopyImg $f.FullName 'mbox-520-gpu-i-89g' }
    else { Write-Host "  UNMATCHED: $n" }
}

# ── JETSON-NVIDIA ──
$dir = Join-Path $imgDir 'JETSON-NVIDIA MINI AI Edge Computing'
if (-not (Test-Path -LiteralPath $dir)) {
    $zip = Join-Path $imgDir 'JETSON-NVIDIA MINI AI Edge Computing.zip'
    Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
}
$files = Get-ChildItem -LiteralPath $dir -File -Recurse
Write-Host "`n=== JETSON-NVIDIA ($($files.Count) files) ==="
foreach ($f in $files) {
    $n = $f.Name
    Write-Host "  FILE: $n"
    if ($n -match '4C-128') { CopyImg $f.FullName 'mt-520-jetson-nvidia-4c' }
    elseif ($n -match '6C-384') { CopyImg $f.FullName 'mt-520-jetson-nvidia-6c' }
    else { Write-Host "  UNMATCHED: $n" }
}

# ── Core i7 (check if zip exists) ──
$zip = Join-Path $imgDir 'Core i7-Industrial Embedded Box PC.zip'
if (Test-Path -LiteralPath $zip) {
    $dir = Join-Path $imgDir 'Core i7-Industrial Embedded Box PC'
    Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    Write-Host "`n=== Core i7 ($($files.Count) files) ==="
    foreach ($f in $files) {
        $n = $f.Name
        Write-Host "  FILE: $n"
        if ($n -match 'I7-M7-1165G7') { CopyImg $f.FullName 'mbox-520-i7-m7-1165g7' }
        elseif ($n -match 'I7-8250U|I7-10510U') { CopyImg $f.FullName 'mbox-520-i7-8250u-l2-6c' }
        elseif ($n -match 'I7-6C-6U-10G') { CopyImg $f.FullName 'mbox-520-i7-6c-6u-10g' }
        elseif ($n -match 'I7-6C-6U-13G') { CopyImg $f.FullName 'mbox-520-i7-6c-6u-13g' }
        else { Write-Host "  UNMATCHED: $n" }
    }
} else {
    Write-Host "`nNo Core i7 zip found"
}

# ── Core i9 ──
$zip = Join-Path $imgDir 'Core i9-Industrial Embedded Box PC.zip'
if (Test-Path -LiteralPath $zip) {
    $dir = Join-Path $imgDir 'Core i9-Industrial Embedded Box PC'
    Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    Write-Host "`n=== Core i9 ($($files.Count) files) ==="
    foreach ($f in $files) {
        Write-Host "  FILE: $($f.Name)"
        CopyImg $f.FullName 'mbox-520-i9-3l-6c-12u'
    }
} else {
    Write-Host "`nNo Core i9 zip found"
}

# ── Loose i9 image ──
$i9Img = Join-Path $imgDir '_Model No MBOX-520-i9-3L-6C-12U Core I9-Industrial Embedded Box PC.jpg'
if (Test-Path -LiteralPath $i9Img) {
    CopyImg $i9Img 'mbox-520-i9-3l-6c-12u'
    Write-Host "Copied loose i9 image"
}

Write-Host "`nDONE!"
