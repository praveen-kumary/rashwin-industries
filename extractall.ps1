$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

# Get all zip files
$zips = Get-ChildItem -LiteralPath $imgDir -Filter '*.zip' -File
foreach ($z in $zips) {
    $extractDir = Join-Path $imgDir ($z.BaseName)
    if (-not (Test-Path -LiteralPath $extractDir)) {
        Write-Host "Extracting: $($z.Name)"
        Expand-Archive -LiteralPath $z.FullName -DestinationPath $extractDir -Force
    } else {
        Write-Host "Already extracted: $($z.Name)"
    }
    
    # List files inside
    $files = Get-ChildItem -LiteralPath $extractDir -File -Recurse
    foreach ($f in $files) {
        Write-Host "  -> $($f.Name) ($($f.Length) bytes)"
    }
}
