$publicDir = "d:\rashwin-latest\Archive 13 (1)\public\products"
$images = Get-ChildItem -Path $publicDir -Filter "*.jpg" -File | ForEach-Object { $_.Name }
Write-Host "Available images:"
foreach ($img in $images) {
    Write-Host "  $img"
}
Write-Host "`nTotal: $($images.Count) images"
