$dir = 'd:\rashwin-latest\Archive 13 (1)\src\routes\products'
$files = Get-ChildItem -LiteralPath $dir
foreach ($f in $files) {
    if ($f.Name -match 'seriesSlug\.index\.tsx$' -and $f.Name -notmatch 'productSlug') {
        $newName = $f.Name -replace '\.index\.tsx$', '.tsx'
        Write-Host "Reverting $($f.Name) -> $newName"
        Rename-Item -LiteralPath $f.FullName -NewName $newName
    }
}
