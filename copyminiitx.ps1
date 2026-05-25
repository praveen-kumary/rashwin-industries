$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK: $slug"
}

# ── Industrial MINI ITX Motherboard ──
$zip = Join-Path $imgDir 'Industrial MINI ITX Motherboard.zip'
if (Test-Path -LiteralPath $zip) {
    $dir = Join-Path $imgDir 'Industrial MINI ITX Motherboard'
    if (-not (Test-Path -LiteralPath $dir)) {
        Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
    }
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    Write-Host "=== Industrial MINI ITX Motherboard ($($files.Count) files) ==="
    foreach ($f in $files) {
        $n = $f.Name
        Write-Host "  FILE: $n"
        if ($n -match 'MB-520-MITX-i7-4HD') { CopyImg $f.FullName 'mb-520-mitx-i7-4hd' }
        elseif ($n -match 'MT-520-I7-6500U-2L') { CopyImg $f.FullName 'mt-520-i7-6500u-2l' }
        elseif ($n -match 'MT-520-QM6300-6C') { CopyImg $f.FullName 'mt-520-qm6300-6c' }
        elseif ($n -match 'MT-ITX-6789G-3600') { CopyImg $f.FullName 'mt-itx-6789g-3600' }
        elseif ($n -match 'MB-520-I3-8130U') { CopyImg $f.FullName 'mb-520-i3-8130u' }
        elseif ($n -match 'MB-520-I3-6100U') { CopyImg $f.FullName 'mb-520-i3-6100u' }
        elseif ($n -match 'MT-520-6600') { CopyImg $f.FullName 'mt-520-6600' }
        elseif ($n -match 'MT-520-11U') { CopyImg $f.FullName 'mt-520-11u' }
        elseif ($n -match 'MH-520-J1900-4L') { CopyImg $f.FullName 'mh-520-j1900-4l' }
        elseif ($n -match 'MT-ITX-HB1011G') { CopyImg $f.FullName 'mt-itx-hb1011g' }
        elseif ($n -match 'MT-520-J1900') { CopyImg $f.FullName 'mt-520-j1900' }
        elseif ($n -match 'MT-ITX-1213G-H610') { CopyImg $f.FullName 'mt-itx-1213g-h610' }
        elseif ($n -match 'MB-520-i7-7500U') { CopyImg $f.FullName 'mb-520-i7-7500u' }
        else { Write-Host "  UNMATCHED: $n" }
    }
} else {
    Write-Host "No MINI ITX zip found"
}
