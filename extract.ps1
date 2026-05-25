$zips = Get-ChildItem "d:\rashwin-latest\Archive 13 (1)\images\*.zip"
foreach ($z in $zips) {
    Expand-Archive -Path $z.FullName -DestinationPath "d:\rashwin-latest\Archive 13 (1)\images" -Force
    Write-Host "Extracted: $($z.Name)"
}
