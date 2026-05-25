$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK: $slug"
}

# ── Flame Proof Panel PC ──
$zip = Join-Path $imgDir 'Flame Proof Panel PC.zip'
$dir = Join-Path $imgDir 'Flame Proof Panel PC'
if (-not (Test-Path -LiteralPath $dir)) {
    Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
}
$files = Get-ChildItem -LiteralPath $dir -File -Recurse
Write-Host "=== Flame Proof Panel PC ($($files.Count) files) ==="
foreach ($f in $files) { Write-Host "  $($f.Name)" }

# ── Industrial Touch Panel PC 8K Series ──
$zip = Join-Path $imgDir 'Industrial Touch Panel PC 8K Series.zip'
$dir = Join-Path $imgDir 'Industrial Touch Panel PC 8K Series'
if (-not (Test-Path -LiteralPath $dir)) {
    Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
}
$files = Get-ChildItem -LiteralPath $dir -File -Recurse
Write-Host "`n=== Industrial Touch Panel PC 8K Series ($($files.Count) files) ==="
foreach ($f in $files) { Write-Host "  $($f.Name)" }

# ── Industrial Touch Panel PC R ──
$zip = Join-Path $imgDir 'Industrial Touch Panel PC R.zip'
$dir = Join-Path $imgDir 'Industrial Touch Panel PC R'
if (-not (Test-Path -LiteralPath $dir)) {
    Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
}
$files = Get-ChildItem -LiteralPath $dir -File -Recurse
Write-Host "`n=== Industrial Touch Panel PC R ($($files.Count) files) ==="
foreach ($f in $files) { Write-Host "  $($f.Name)" }

# ── Waterproof loose image ──
$wpImg = Join-Path $imgDir 'Industrial Waterproof Touch Panel PC Model No MIPC-1500T-R-IP66 Waterproof Panel PC.jpg'
if (Test-Path -LiteralPath $wpImg) {
    CopyImg $wpImg 'mipc-1500t-r-ip66'
    Write-Host "Copied waterproof sub-item image"
}

Write-Host "`nDONE!"
