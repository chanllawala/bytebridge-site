# Fix Tailwind CSS configuration
Write-Host "Installing @tailwindcss/postcss..." -ForegroundColor Yellow

# Activate Node.js first
$nodePath = "$env:LOCALAPPDATA\nvm\v22.21.1"
$npmPath = Join-Path $nodePath "node_modules\npm\bin"
if (Test-Path (Join-Path $nodePath "node.exe")) {
    $env:PATH = "$nodePath;$npmPath;$env:PATH"
}

npm install @tailwindcss/postcss@^4.1.16

Write-Host ""
Write-Host "✓ Installation complete!" -ForegroundColor Green
Write-Host "Now run: .\start-dev.ps1" -ForegroundColor Cyan

