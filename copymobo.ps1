$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK: $slug"
}

# ── XEON Industrial Motherboard ──
$zip = Join-Path $imgDir 'XEON Industrial Motherboard.zip'
if (Test-Path -LiteralPath $zip) {
    $dir = Join-Path $imgDir 'XEON Industrial Motherboard'
    if (-not (Test-Path -LiteralPath $dir)) {
        Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
    }
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    Write-Host "=== XEON Industrial Motherboard ($($files.Count) files) ==="
    foreach ($f in $files) {
        $n = $f.Name
        Write-Host "  FILE: $n"
        if ($n -match 'MT-520-1590') { CopyImg $f.FullName 'mt-520-1590' }
        elseif ($n -match 'MB-ATX-XEON-C262') { CopyImg $f.FullName 'mb-atx-xeon-c262' }
        elseif ($n -match 'MB-ATX-XEON-R680E') { CopyImg $f.FullName 'mb-atx-xeon-r680e' }
        else { Write-Host "  UNMATCHED: $n" }
    }
} else {
    Write-Host "No XEON zip found"
}

# ── micro ATX Industrial Motherboard ──
$zip = Join-Path $imgDir 'micro ATX Industrial Motherboard.zip'
if (Test-Path -LiteralPath $zip) {
    $dir = Join-Path $imgDir 'micro ATX Industrial Motherboard'
    if (-not (Test-Path -LiteralPath $dir)) {
        Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
    }
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    Write-Host "`n=== micro ATX Industrial Motherboard ($($files.Count) files) ==="
    foreach ($f in $files) {
        $n = $f.Name
        Write-Host "  FILE: $n"
        if ($n -match 'MB-mATX-1314G-Q670') { CopyImg $f.FullName 'mb-matx-1314g-q670' }
        elseif ($n -match 'MT-mATX-23G-B75') { CopyImg $f.FullName 'mt-matx-23g-b75' }
        elseif ($n -match 'MB-mATX-1314G-H610') { CopyImg $f.FullName 'mb-matx-1314g-h610' }
        elseif ($n -match 'MT-mATX-23G-Q77M3') { CopyImg $f.FullName 'mt-matx-23g-q77m3' }
        elseif ($n -match 'MT-mATX-6789G-Q250') { CopyImg $f.FullName 'mt-matx-6789g-q250' }
        else { Write-Host "  UNMATCHED: $n" }
    }
} else {
    Write-Host "`nNo micro ATX zip found"
}
