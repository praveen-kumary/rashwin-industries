$imgDir = "d:\rashwin-latest\Archive 13 (1)\images"
$dest = "d:\rashwin-latest\Archive 13 (1)\public\products"

$jpgs = Get-ChildItem -Path $imgDir -Filter "*.jpg" -File
$newCount = 0
foreach ($f in $jpgs) {
    $newName = $f.Name -replace '[_ ]', '-' -replace '[^a-zA-Z0-9\-\.]', '' -replace '--+', '-'
    $newName = $newName.ToLower()
    $destPath = Join-Path $dest $newName
    if (-not (Test-Path $destPath)) {
        Copy-Item -Path $f.FullName -Destination $destPath -Force
        Write-Host "NEW: $($f.Name) -> $newName"
        $newCount++
    }
}

Write-Host "`nNew images added: $newCount"
