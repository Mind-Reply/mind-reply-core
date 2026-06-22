# MindReply Deployment Script (Windows PowerShell)
# Run from project root directory

Write-Host "🚀 MindReply Deployment Script" -ForegroundColor Cyan
Write-Host "==============================" -ForegroundColor Cyan
Write-Host ""

# Navigate to script directory
Set-Location (Split-Path -Parent $MyInvocation.MyCommand.Path)

# Check if git is initialized
if (-not (Test-Path .\.git)) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
}

# Configure remote
Write-Host "🔗 Configuring GitHub remote..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/Mind-Reply/MindReply.git

# Test authentication
Write-Host "🔐 Testing GitHub authentication..." -ForegroundColor Yellow
if (-not (git ls-remote origin 2>$null)) {
    Write-Host "❌ Cannot authenticate with GitHub" -ForegroundColor Red
    Write-Host "   • Make sure Git is configured with your GitHub credentials" -ForegroundColor Gray
    Write-Host "   • Windows: Check Credential Manager (search: 'Manage credentials')" -ForegroundColor Gray
    Write-Host "   • macOS/Linux: Check git-osxkeychain or ssh keys" -ForegroundColor Gray
    exit 1
}
Write-Host "✅ GitHub authentication successful" -ForegroundColor Green

# Stage all changes
Write-Host "📝 Staging files..." -ForegroundColor Yellow
git add -A

# Check if there are changes
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "✅ No changes to commit" -ForegroundColor Green
} else {
    $CommitMsg = "feat: secure admin dashboard with live integrations (Stripe, Gmail, YouTube, Claude)"
    
    Write-Host "💾 Committing: $CommitMsg" -ForegroundColor Yellow
    git commit -m $CommitMsg
    
    # Push to main
    Write-Host "🚀 Pushing to GitHub main branch..." -ForegroundColor Yellow
    git push -u origin main --force
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📊 Vercel auto-deployment starting:" -ForegroundColor Cyan
        Write-Host "   • Monitor: https://vercel.com/mind-reply/mindreply" -ForegroundColor Gray
        Write-Host "   • Home: https://mindreply.vercel.app" -ForegroundColor Gray
        Write-Host "   • Health: https://mindreply.vercel.app/api/health" -ForegroundColor Gray
        Write-Host "   • Integrations: https://mindreply.vercel.app/integrations" -ForegroundColor Gray
        Write-Host ""
        Write-Host "⏳ Deployment takes ~2-3 minutes" -ForegroundColor Yellow
        Write-Host "🔧 After deployment, add environment variables in Vercel:" -ForegroundColor Yellow
        Write-Host "   1. Visit: https://vercel.com/mind-reply/mindreply/settings/environment-variables" -ForegroundColor Gray
        Write-Host "   2. Add: STRIPE_SECRET_KEY, ANTHROPIC_API_KEY, GOOGLE_CLIENT_ID, etc." -ForegroundColor Gray
        Write-Host "   3. Redeploy to activate" -ForegroundColor Gray
    } else {
        Write-Host "❌ Push failed" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "Done!" -ForegroundColor Green
