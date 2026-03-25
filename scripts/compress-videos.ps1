# ============================================================
# Video Compression Script for BC School Website
# Run this script once FFmpeg is installed.
#
# Install FFmpeg first:
#   winget install Gyan.FFmpeg
# Then restart PowerShell and run:
#   .\scripts\compress-videos.ps1
# ============================================================

$BC = "public\BC"

Write-Host ""
Write-Host "=== Compressing hero.mp4 (background video - low quality OK) ==="
ffmpeg -i "$BC\hero.mp4" `
  -vcodec libx264 -crf 28 -preset slow `
  -vf "scale=1280:-2" `
  -movflags +faststart `
  -an `
  "$BC\hero_compressed.mp4"

Write-Host ""
Write-Host "=== Compressing Vedio.mp4 (campus tour - keep decent quality) ==="
ffmpeg -i "$BC\Vedio.mp4" `
  -vcodec libx264 -crf 24 -preset slow `
  -vf "scale=1280:-2" `
  -movflags +faststart `
  "$BC\Vedio_compressed.mp4"

Write-Host ""
Write-Host "=== File size comparison ==="
$files = @("hero.mp4","hero_compressed.mp4","Vedio.mp4","Vedio_compressed.mp4")
foreach ($f in $files) {
    $path = "$BC\$f"
    if (Test-Path $path) {
        $size = [math]::Round((Get-Item $path).Length / 1MB, 2)
        Write-Host "  $f  ->  $size MB"
    }
}

Write-Host ""
Write-Host "Review the compressed files, then run:"
Write-Host "  Remove-Item '$BC\hero.mp4'"
Write-Host "  Rename-Item '$BC\hero_compressed.mp4' 'hero.mp4'"
Write-Host "  Remove-Item '$BC\Vedio.mp4'"
Write-Host "  Rename-Item '$BC\Vedio_compressed.mp4' 'Vedio.mp4'"
