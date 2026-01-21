Param(
    [string]$Branch = "main"
)

Write-Host "=== Updating project from Git (branch: $Branch) ===" -ForegroundColor Cyan

# Ensure we run from the script's directory (your project root)
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -Path $scriptDir

Write-Host "Current directory: $(Get-Location)" -ForegroundColor DarkCyan

Write-Host "`n1) Fetching latest changes from origin..." -ForegroundColor Yellow
git fetch origin

if ($LASTEXITCODE -ne 0) {
    Write-Host "Git fetch failed. Please check your network connection or Git configuration." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "`n2) Pulling latest changes from origin/$Branch..." -ForegroundColor Yellow
git pull origin $Branch

if ($LASTEXITCODE -ne 0) {
    Write-Host "Git pull failed. You may have local changes or conflicts." -ForegroundColor Red
    Write-Host "Run 'git status' and resolve any issues, then try again." -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "`n✅ Project successfully updated from origin/$Branch." -ForegroundColor Green


