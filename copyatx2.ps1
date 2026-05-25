$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images\Industrial ATX Motherboard'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK: $slug"
}

$files = Get-ChildItem -LiteralPath $imgDir -File -Recurse
foreach ($f in $files) {
    $n = $f.Name
    if ($n -match 'MB-520-i7-1165G7-4HD') { CopyImg $f.FullName 'mb-520-i7-1165g7-4hd' }
    elseif ($n -match 'MB-520-PCE-5132') { CopyImg $f.FullName 'mb-520-pce-5132' }
    elseif ($n -match 'MB-ATX-1314G-H610-4PCI') { CopyImg $f.FullName 'mb-atx-1314g-h610-4pci' }
    elseif ($n -match 'MB-ATX-1314G-H610 ') { CopyImg $f.FullName 'mb-atx-1314g-h610' }
    elseif ($n -match 'MB-ATX-1314G-Q670') { CopyImg $f.FullName 'mb-atx-1314g-q670' }
    elseif ($n -match 'MB-ATX-23G-B75') { CopyImg $f.FullName 'mb-atx-23g-b75' }
    elseif ($n -match 'MB-ATX-6789G-H110') { CopyImg $f.FullName 'mb-atx-6789g-h110' }
    elseif ($n -match 'MT-ATX-1011G-H570') { CopyImg $f.FullName 'mt-atx-1011g-h570' }
    elseif ($n -match '202\.jpg') { CopyImg $f.FullName 'mb-atx-4g-h81' }
    else { Write-Host "UNMATCHED: $n" }
}
Write-Host "DONE!"
