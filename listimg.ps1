$dir = 'd:\rashwin-latest\Archive 13 (1)\public\products'
$files = Get-ChildItem -LiteralPath $dir -Recurse -File
foreach ($f in $files) {
    $rel = $f.FullName.Substring($dir.Length + 1).Replace('\', '/')
    Write-Host $rel
}
