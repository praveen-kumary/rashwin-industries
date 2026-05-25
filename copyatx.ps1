$imgDir = 'd:\rashwin-latest\Archive 13 (1)\images'
$pubDir = 'd:\rashwin-latest\Archive 13 (1)\public\products'

function CopyImg($src, $slug) {
    $dest = Join-Path $pubDir "$slug.jpg"
    Copy-Item -LiteralPath $src -Destination $dest -Force
    Write-Host "OK: $slug"
}

# ── Industrial ATX Motherboard ──
$zip = Join-Path $imgDir 'Industrial ATX Motherboard.zip'
if (Test-Path -LiteralPath $zip) {
    $dir = Join-Path $imgDir 'Industrial ATX Motherboard'
    if (-not (Test-Path -LiteralPath $dir)) {
        Expand-Archive -LiteralPath $zip -DestinationPath $dir -Force
    }
    $files = Get-ChildItem -LiteralPath $dir -File -Recurse
    Write-Host "=== Industrial ATX Motherboard ($($files.Count) files) ==="
    foreach ($f in $files) { Write-Host "  $($f.Name)" }
} else {
    Write-Host "No Industrial ATX Motherboard.zip found"
}
