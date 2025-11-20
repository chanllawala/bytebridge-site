# Complete startup script for ByteBridge
# This activates Node.js AND starts the dev server

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ByteBridge Development Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Activate Node.js
Write-Host "Step 1: Activating Node.js..." -ForegroundColor Yellow
$nodePath = "$env:LOCALAPPDATA\nvm\v22.21.1"
$npmPath = Join-Path $nodePath "node_modules\npm\bin"

if (Test-Path (Join-Path $nodePath "node.exe")) {
    $env:PATH = "$nodePath;$npmPath;$env:PATH"
    Write-Host "✓ Node.js activated!" -ForegroundColor Green
    Write-Host "  Node: $(node -v)" -ForegroundColor Gray
    Write-Host "  NPM: $(npm -v)" -ForegroundColor Gray
} else {
    Write-Host "✗ Error: Node.js not found!" -ForegroundColor Red
    Write-Host "  Please make sure Node.js is installed." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 2: Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "✗ Error: package.json not found!" -ForegroundColor Red
    Write-Host "  Please run this script from the bytebridge-site directory." -ForegroundColor Red
    exit 1
}

# Step 3: Start the dev server
Write-Host "Step 2: Starting development server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "The server will start shortly..." -ForegroundColor Cyan
Write-Host "Once you see 'Local: http://localhost:5173', open that URL in your browser." -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

npm run dev

