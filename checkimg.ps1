$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$zips = Get-ChildItem -LiteralPath $imgDir -Filter '*.zip' -File
Write-Host "=== ALL ZIP FILES ==="
Write-Host "Total zips: $($zips.Count)"
Write-Host ""
foreach ($z in $zips) {
    Write-Host "$($z.Name)  ($([math]::Round($z.Length/1024))KB)"
}

Write-Host ""
Write-Host "=== ALL FOLDERS ==="
$dirs = Get-ChildItem -LiteralPath $imgDir -Directory
foreach ($d in $dirs) {
    $count = (Get-ChildItem -LiteralPath $d.FullName -File -Recurse).Count
    Write-Host "$($d.Name)  ($count files)"
}

Write-Host ""
Write-Host "=== ALL LOOSE JPGs ==="
$jpgs = Get-ChildItem -LiteralPath $imgDir -Filter '*.jpg' -File
foreach ($j in $jpgs) {
    Write-Host "$($j.Name)"
}
