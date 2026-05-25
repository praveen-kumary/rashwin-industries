$src = 'd:\rashwin-latest\Archive 13 (1)\images\NUC Mini PC'
$dst = 'd:\rashwin-latest\Archive 13 (1)\public\products'

$files = Get-ChildItem -LiteralPath $src -File
foreach ($f in $files) {
    if ($f.Name -match 'MUC-520-F3') {
        Copy-Item -LiteralPath $f.FullName -Destination (Join-Path $dst 'muc-520-f3-i7-1255u.jpg') -Force
        Write-Host "Copied -> muc-520-f3-i7-1255u.jpg"
    }
    elseif ($f.Name -match 'MUC-520-U5') {
        Copy-Item -LiteralPath $f.FullName -Destination (Join-Path $dst 'muc-520-u5.jpg') -Force
        Write-Host "Copied -> muc-520-u5.jpg"
    }
    elseif ($f.Name -match 'MUC-520-I5') {
        Copy-Item -LiteralPath $f.FullName -Destination (Join-Path $dst 'muc-520-i5-1235u.jpg') -Force
        Write-Host "Copied -> muc-520-i5-1235u.jpg"
    }
}
