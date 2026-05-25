# Extract new zips
$newZips = @(
    "Industrial PC.zip",
    "Industrial Rackmount PC and Workstation PC.zip",
    "Industrial Touch Screen Display.zip",
    "Industrial Data Communication Products.zip"
)

$imgDir = "d:\rashwin-latest\Archive 13 (1)\images"

foreach ($z in $newZips) {
    $path = Join-Path $imgDir $z
    if (Test-Path $path) {
        Expand-Archive -Path $path -DestinationPath $imgDir -Force
        Write-Host "Extracted: $z"
    } else {
        Write-Host "NOT FOUND: $z"
    }
}

# Now copy ALL jpg files to public/products
$dest = "d:\rashwin-latest\Archive 13 (1)\public\products"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

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
Write-Host "Total images in public/products:"
(Get-ChildItem -Path $dest -Filter "*.jpg" -File).Count
