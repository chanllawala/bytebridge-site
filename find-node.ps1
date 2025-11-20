# Script to find Node.js installation from nvm
Write-Host "Searching for Node.js installation..." -ForegroundColor Yellow
Write-Host ""

# Check common nvm locations
$searchPaths = @(
    "$env:APPDATA\nvm",
    "$env:LOCALAPPDATA\nvm",
    "$env:USERPROFILE\nvm",
    "C:\Program Files\nvm",
    "C:\nvm",
    "$env:ProgramFiles(x86)\nvm"
)

$found = $false

foreach ($basePath in $searchPaths) {
    if (Test-Path $basePath) {
        Write-Host "Found nvm directory: $basePath" -ForegroundColor Cyan
        
        # Check for v22.21.1
        $v22Path = Join-Path $basePath "v22.21.1"
        if (Test-Path $v22Path) {
            $nodeExe = Join-Path $v22Path "node.exe"
            if (Test-Path $nodeExe) {
                Write-Host ""
                Write-Host "Found Node.js v22.21.1 at:" -ForegroundColor Green
                Write-Host "  $v22Path" -ForegroundColor White
                
                # Show all versions
                Write-Host ""
                Write-Host "Available Node.js versions:" -ForegroundColor Yellow
                Get-ChildItem $basePath -Directory -Filter "v*" | ForEach-Object {
                    Write-Host "  - $($_.Name)" -ForegroundColor Gray
                }
                
                $found = $true
                break
            }
        }
        
        # List all versions found
        $versions = Get-ChildItem $basePath -Directory -Filter "v*" -ErrorAction SilentlyContinue
        if ($versions) {
            Write-Host "Found versions in $basePath :" -ForegroundColor Yellow
            $versions | ForEach-Object {
                $nodeExe = Join-Path $_.FullName "node.exe"
                if (Test-Path $nodeExe) {
                    Write-Host "  - $($_.Name)" -ForegroundColor Gray
                }
            }
        }
    }
}

if (-not $found) {
    Write-Host ""
    Write-Host "Could not find Node.js installation." -ForegroundColor Red
    Write-Host ""
    Write-Host "Please run this command to see where nvm is installed:" -ForegroundColor Yellow
    Write-Host "  Get-Command nvm" -ForegroundColor Cyan
}
