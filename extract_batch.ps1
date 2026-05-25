$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function ExtractAndList($zipName) {
    $zip = Join-Path $imgDir "$zipName.zip"
    if (Test-Path -LiteralPath $zip) {
        $dir = Join-Path $imgDir $zipName
        if (-not (Test-Path -LiteralPath $dir)) {
            Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
        }
        $files = Get-ChildItem -LiteralPath $dir -File -Recurse
        Write-Host "=== $zipName ($($files.Count) files) ==="
        foreach ($f in $files) {
            Write-Host "  FILE: $($f.Name)"
        }
    } else {
        Write-Host "Not found: $zipName.zip"
    }
}

ExtractAndList 'ISA SLOT Motherboard'
ExtractAndList 'Industrial MINI 3.5 Inch Motherboards'
ExtractAndList 'Industrial Managed Switches'
ExtractAndList 'Industrial Unmanaged Switches'
ExtractAndList 'Industrial POE Managed Switches'
ExtractAndList 'Industrial Managed Fiber Switches'

Write-Host "DONE Extracting"
