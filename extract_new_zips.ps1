$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'

$zips = Get-ChildItem -Path $imgDir -Filter '*.zip'
Write-Host "Found $($zips.Count) zip files."

foreach ($zip in $zips) {
    $folderName = [System.IO.Path]::GetFileNameWithoutExtension($zip.Name)
    $folderPath = Join-Path $imgDir $folderName
    
    if (-not (Test-Path -LiteralPath $folderPath)) {
        Write-Host "Extracting new zip: $($zip.Name) ..."
        Expand-Archive -LiteralPath $zip.FullName -DestinationPath $folderPath -Force
    }
}
Write-Host "Extraction check complete."
