# 📌 Quick Command Reference

Common commands you'll use every day - keep this handy!

---

## 🚀 Daily Workflow

```bash
# 1. Make your changes in code editor

# 2. Test locally
npm run dev

# 3. Build to check for errors
npm run build

# 4. Push to GitHub (auto-deploys to Vercel)
git add .
git commit -m "Brief description of changes"
git push
```

**That's it!** Vercel deploys automatically in 1-2 minutes. ✅

---

## 📦 Setup Commands (One Time)

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/agenticflow-website.git
cd agenticflow-website

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 💻 Development Commands

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

---

## 📝 Git Commands

### Check Your Changes

```bash
# See what files changed
git status

# See actual changes in files
git diff
```

### Save Your Changes

```bash
# Add all changes
git add .

# Or add specific file
git add src/App.tsx

# Commit with message
git commit -m "Add new feature"

# Push to GitHub (triggers Vercel deployment)
git push
```

### Pull Latest Changes

```bash
# Get latest changes from GitHub
git pull

# Or force pull (overwrites your local changes)
git reset --hard origin/main
git pull
```

### Undo Changes

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Discard all uncommitted changes
git reset --hard HEAD

# Discard changes in one file
git checkout -- src/App.tsx
```

---

## 🌿 Working with Branches

```bash
# Create new branch
git checkout -b feature/new-page

# Switch to existing branch
git checkout main

# See all branches
git branch

# Push branch to GitHub
git push -u origin feature/new-page

# Delete local branch
git branch -d feature/new-page

# Delete remote branch  
git push origin --delete feature/new-page
```

---

## 🔍 Viewing History

```bash
# See commit history
git log

# See compact history
git log --oneline

# See last 5 commits
git log --oneline -5

# See who changed what
git blame src/App.tsx
```

---

## 🐛 Troubleshooting

### Fix "Permission Denied" Error

```bash
# Check if GitHub is configured
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Fix "Failed to Push" Error

```bash
# Pull first, then push
git pull --rebase origin main
git push
```

### Fix "Merge Conflicts"

```bash
# 1. Pull latest changes
git pull

# 2. Open conflicted files (marked with <<<<<<<)
# 3. Fix conflicts manually
# 4. Mark as resolved
git add .
git commit -m "Resolve merge conflicts"
git push
```

### Check Build Errors

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

---

## 📊 Vercel Commands

### Check Deployment Status

Visit: https://vercel.com/dashboard

Or install Vercel CLI:

```bash
# Install globally
npm i -g vercel

# Login
vercel login

# Deploy manually
vercel

# Deploy to production
vercel --prod
```

---

## 🎯 Most Used Commands (90% of Time)

```bash
# Daily workflow
npm run dev          # Test locally
npm run build        # Check build
git add .            # Stage changes
git commit -m "msg"  # Save changes
git push             # Deploy to Vercel

# Check git status
git status           # See what changed
git log --oneline    # See history

# Undo mistakes
git reset --hard HEAD  # Discard all changes
```

---

## 💡 Git Commit Message Examples

Good commit messages:

```bash
git commit -m "Add pricing section"
git commit -m "Fix mobile menu not closing"
git commit -m "Update hero image"
git commit -m "Remove unused dependencies"
git commit -m "Improve contact form validation"
```

Bad commit messages (avoid):

```bash
git commit -m "update"       ❌
git commit -m "fix"          ❌
git commit -m "changes"      ❌
git commit -m "asdf"         ❌
```

---

## 🔑 Pro Tips

### Save Time with Aliases

Add to `.bashrc` or `.zshrc`:

```bash
# Quick commit and push
alias gcp='git add . && git commit -m "$1" && git push'

# Usage: gcp "Your message"
```

### Quick Deploy Command

```bash
# One command to rule them all
npm run build && git add . && git commit -m "Deploy updates" && git push
```

Or create npm script in `package.json`:

```json
"scripts": {
  "deploy": "npm run build && git add . && git commit -m 'Deploy' && git push"
}
```

Then just run:

```bash
npm run deploy
```

---

## 📱 Using GitHub Desktop (Easiest)

If command line is confusing, use **GitHub Desktop**:

1. Download: https://desktop.github.com/
2. Open your project
3. See changes visually
4. Write commit message
5. Click "Commit to main"
6. Click "Push origin"

Done! No commands needed. ✅

---

## 🆘 When Things Go Wrong

### "I messed up, start over!"

```bash
# Download fresh copy from GitHub
git reset --hard origin/main
git pull
```

### "My local changes conflict with GitHub"

```bash
# Keep GitHub version (discard local)
git reset --hard origin/main

# Or keep local version (force push)
git push --force
```

### "Vercel not deploying"

1. Check: https://vercel.com/dashboard → Your Project → Deployments
2. Look for error in build logs
3. Common fixes:
   - Build command wrong: Should be `npm run build`
   - Missing files: Check `.gitignore`
   - Environment variables: Add in Vercel settings

---

## 📞 Need Help?

- **Git Issues:** https://stackoverflow.com/questions/tagged/git
- **Vercel Issues:** https://vercel.com/docs
- **React/Vite:** https://vitejs.dev/guide/

Or ask ChatGPT/Claude: 
> "How do I [your question] with git?"

---

**Print this page and keep it next to your desk!** 🖨️
