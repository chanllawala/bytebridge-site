# Activate Node.js v22.21.1 from nvm
$nodePath = "$env:LOCALAPPDATA\nvm\v22.21.1"
$npmPath = Join-Path $nodePath "node_modules\npm\bin"

if (Test-Path (Join-Path $nodePath "node.exe")) {
    # Add Node.js and npm to PATH for this session
    $env:PATH = "$nodePath;$npmPath;$env:PATH"
    
    Write-Host "Node.js activated successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Node version: " -NoNewline
    & (Join-Path $nodePath "node.exe") -v
    Write-Host "NPM version: " -NoNewline
    npm -v
    Write-Host ""
    Write-Host "You can now run: npm run dev" -ForegroundColor Cyan
} else {
    Write-Host "Error: Node.js not found at $nodePath" -ForegroundColor Red
}

