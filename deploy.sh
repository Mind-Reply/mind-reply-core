#!/bin/bash

# MindReply deployment script for Git + Vercel

echo "🚀 MindReply Deployment Script"
echo "=============================="

# Navigate to project
cd "$(dirname "$0")"

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
fi

# Configure remote
echo "🔗 Configuring GitHub remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/Mind-Reply/MindReply.git

# Verify we can authenticate
if ! git ls-remote origin &> /dev/null; then
    echo "❌ Cannot authenticate with GitHub"
    echo "   Make sure you're signed in locally: git credential-osxkeychain"
    exit 1
fi

# Stage all changes
echo "📝 Staging files..."
git add -A

# Check if there are changes to commit
if git diff-index --quiet HEAD --; then
    echo "✅ No changes to commit"
else
    # Create commit message
    COMMIT_MSG="feat: secure admin dashboard with live integrations (Stripe, Gmail, YouTube, Claude)"
    
    echo "💾 Committing: $COMMIT_MSG"
    git commit -m "$COMMIT_MSG"
    
    # Push to main
    echo "🚀 Pushing to GitHub main branch..."
    if git push -u origin main --force; then
        echo "✅ Successfully pushed to GitHub!"
        echo ""
        echo "📊 Vercel should auto-deploy now:"
        echo "   • Monitor: https://vercel.com/mind-reply/mindreply"
        echo "   • Home: https://mindreply.vercel.app"
        echo "   • Health: https://mindreply.vercel.app/api/health"
        echo "   • Integrations: https://mindreply.vercel.app/integrations"
    else
        echo "❌ Push failed"
        exit 1
    fi
fi
