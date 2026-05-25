$source = "d:\rashwin-latest\Archive 13 (1)\images"
$dest = "d:\rashwin-latest\Archive 13 (1)\public\products"

# Create destination folder
New-Item -ItemType Directory -Force -Path $dest | Out-Null

# Copy all jpg files
$jpgs = Get-ChildItem -Path $source -Filter "*.jpg" -File
foreach ($f in $jpgs) {
    # Replace special characters in filename for web compatibility
    $newName = $f.Name -replace '[_ ]', '-' -replace '[^a-zA-Z0-9\-\.]', '' -replace '--+', '-'
    $newName = $newName.ToLower()
    Copy-Item -Path $f.FullName -Destination (Join-Path $dest $newName) -Force
    Write-Host "$($f.Name) -> $newName"
}

Write-Host "`nTotal: $($jpgs.Count) images copied"
