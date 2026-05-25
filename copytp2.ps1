$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK: $slug"
}

# ── Flame Proof Panel PC (2 files) ──
$dir = Join-Path $imgDir 'Flame Proof Panel PC'
$files = Get-ChildItem -LiteralPath $dir -File -Recurse
foreach ($f in $files) {
    $n = $f.Name
    if ($n -match 'ATEX.*MIPC-1560T') { CopyImg $f.FullName 'atex-mipc-1560t-r' }
    elseif ($n -match 'MIPC-1700T.*Flame') { CopyImg $f.FullName 'mipc-1700t-flame-proof' }
}

# ── Industrial Touch Panel PC 8K Series (3 files) ──
$dir = Join-Path $imgDir 'Industrial Touch Panel PC 8K Series'
$files = Get-ChildItem -LiteralPath $dir -File -Recurse
foreach ($f in $files) {
    $n = $f.Name
    if ($n -match 'MIPC-1040T-8K') { CopyImg $f.FullName 'mipc-1040t-8k-r' }
    elseif ($n -match 'MIPC-1500T-8K') { CopyImg $f.FullName 'mipc-1500t-8k-r' }
    elseif ($n -match 'MIPC-2150T-8K') { CopyImg $f.FullName 'mipc-2150t-8k-r' }
}

# ── Industrial Touch Panel PC R (13 files) ──
$dir = Join-Path $imgDir 'Industrial Touch Panel PC R'
$files = Get-ChildItem -LiteralPath $dir -File -Recurse
foreach ($f in $files) {
    $n = $f.Name
    if ($n -match 'MIPC-1010T-R') { CopyImg $f.FullName 'mipc-1010t-r' }
    elseif ($n -match 'MIPC-1040T-R') { CopyImg $f.FullName 'mipc-1040t-r' }
    elseif ($n -match 'MIPC-1210T-R') { CopyImg $f.FullName 'mipc-1210t-r' }
    elseif ($n -match 'MIPC-1500T-R ') { CopyImg $f.FullName 'mipc-1500t-r' }
    elseif ($n -match 'MIPC-1560T-R') { CopyImg $f.FullName 'mipc-1560t-r' }
    elseif ($n -match 'MIPC-1700T-R') { CopyImg $f.FullName 'mipc-1700t-r' }
    elseif ($n -match 'MIPC-1850T-R') { CopyImg $f.FullName 'mipc-1850t-r' }
    elseif ($n -match 'MIPC-1900T-R') { CopyImg $f.FullName 'mipc-1900t-r' }
    elseif ($n -match 'MIPC-2150T-R') { CopyImg $f.FullName 'mipc-2150t-r' }
    elseif ($n -match 'MIPC-2400T-R') { CopyImg $f.FullName 'mipc-2400t-r' }
    elseif ($n -match 'MIPC-2700T-R') { CopyImg $f.FullName 'mipc-2700t-r' }
    elseif ($n -match 'MIPC-3200T-R') { CopyImg $f.FullName 'mipc-3200t-r' }
    elseif ($n -match 'MIPC-8000T-R') { CopyImg $f.FullName 'mipc-8000t-r' }
}

Write-Host "`nALL DONE!"
