$content = Get-Content 'd:\rashwin-latest\Archive 13 (1)\src\data\products.ts' -Raw

# Count slug entries at item level
$itemSlugs = [regex]::Matches($content, '\{ slug: "')
Write-Host "Total slug entries (items + subItems): $($itemSlugs.Count)"

# Count subItems arrays
$subArrays = [regex]::Matches($content, 'subItems: \[')
Write-Host "Products with sub-models: $($subArrays.Count)"

# Count lines with 'slug:' inside subItems blocks
$lines = Get-Content 'd:\rashwin-latest\Archive 13 (1)\src\data\products.ts'
$inSub = $false
$subCount = 0
$itemCount = 0
$seriesCount = 0
$catCount = 0

foreach ($line in $lines) {
    if ($line -match 'icon:') { $catCount++ }
    if ($line -match 'series: \[') { }
    if ($line -match '^\s+slug: "' -and $line -match 'title: "') { }
    if ($line -match 'subItems: \[') { $inSub = $true; continue }
    if ($inSub -and $line -match '\]') { $inSub = $false; continue }
    if ($inSub -and $line -match 'slug:') { $subCount++ }
}

Write-Host ""
Write-Host "=== DETAILED COUNT ==="
Write-Host "Categories: $catCount"

# Manual approach - grep for patterns
$allSlugs = [regex]::Matches($content, '\{ slug: "[^"]+",')
Write-Host "All entries with slug: $($allSlugs.Count)"

$subItemsEntries = [regex]::Matches($content, 'subItems: \[')
Write-Host "Items that have subItems: $($subItemsEntries.Count)"
