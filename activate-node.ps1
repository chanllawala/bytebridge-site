# Temporary script to activate Node.js from nvm
# This works around the space-in-path issue

# Common nvm installation paths
$nvmPaths = @(
    "$env:APPDATA\nvm",
    "$env:USERPROFILE\AppData\Roaming\nvm",
    "C:\Program Files\nvm",
    "C:\nvm"
)

$nodePath = $null
$npmPath = $null

# Find where nvm installed Node.js
foreach ($nvmPath in $nvmPaths) {
    if (Test-Path $nvmPath) {
        $v22Path = Join-Path $nvmPath "v22.21.1"
        if (Test-Path $v22Path) {
            $nodePath = $v22Path
            $npmPath = Join-Path $nodePath "node_modules\npm"
            break
        }
    }
}

# If not found, try to find any v22.x.x version
if (-not $nodePath) {
    foreach ($nvmPath in $nvmPaths) {
        if (Test-Path $nvmPath) {
            $versions = Get-ChildItem $nvmPath -Directory -Filter "v22*" -ErrorAction SilentlyContinue
            if ($versions) {
                $nodePath = $versions[0].FullName
                $npmPath = Join-Path $nodePath "node_modules\npm"
                break
            }
        }
    }
}

if ($nodePath -and (Test-Path (Join-Path $nodePath "node.exe"))) {
    Write-Host "Found Node.js at: $nodePath" -ForegroundColor Green
    $env:PATH = "$nodePath;$npmPath;$env:PATH"
    Write-Host "Node.js activated for this session!" -ForegroundColor Green
    Write-Host "Node version: $(& (Join-Path $nodePath 'node.exe') -v)" -ForegroundColor Cyan
    Write-Host "NPM version: $(& (Join-Path $npmPath 'npm.cmd') -v)" -ForegroundColor Cyan
} else {
    Write-Host "Could not find Node.js installation. Please check nvm installation." -ForegroundColor Red
    Write-Host "Tried paths:" -ForegroundColor Yellow
    $nvmPaths | ForEach-Object { Write-Host "  $_" }
}

