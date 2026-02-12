# 🚀 GitHub → Vercel Deployment Guide

Complete guide to deploy your app on Vercel with automatic updates from GitHub.

---

## 📋 What You'll Get

✅ Your code hosted on GitHub  
✅ Auto-deployed to Vercel  
✅ **Push to GitHub → Vercel updates automatically**  
✅ Custom domain support  
✅ Free hosting (both GitHub & Vercel)

---

## 🎯 Step 1: Prepare Your Code

### 1.1 Create `.gitignore` file

Make sure you have a `.gitignore` file in your project root:

```bash
# Create .gitignore if it doesn't exist
New-Item -Path ".gitignore" -ItemType File -Force
```

Add this content to `.gitignore`:

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.log

# Editor
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Vercel
.vercel
```

### 1.2 Test Build Locally

```bash
npm run build
```

Make sure it builds without errors! ✅

---

## 🎯 Step 2: Create GitHub Repository

### Option A: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop:**
   - Go to: https://desktop.github.com/
   - Install and sign in with your GitHub account

2. **Create Repository:**
   - Click: `File → New Repository`
   - Name: `agenticflow-website` (or your choice)
   - Local Path: Select your project folder
   - Click: `Create Repository`

3. **Make First Commit:**
   - GitHub Desktop will show all your files
   - Add commit message: `Initial commit - AgenticFlow website`
   - Click: `Commit to main`

4. **Publish to GitHub:**
   - Click: `Publish repository`
   - Uncheck "Keep this code private" (if you want public)
   - Click: `Publish Repository`

### Option B: Using Command Line

1. **Initialize Git:**
```bash
# Initialize git repository
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - AgenticFlow website"
```

2. **Create GitHub Repository:**
   - Go to: https://github.com/new
   - Repository name: `agenticflow-website`
   - Description: `AI Business Automation Website`
   - Public or Private: Your choice
   - **Don't** initialize with README (we already have code)
   - Click: `Create repository`

3. **Push to GitHub:**
```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/agenticflow-website.git

# Push code
git branch -M main
git push -u origin main
```

✅ **Your code is now on GitHub!**

---

## 🎯 Step 3: Deploy to Vercel

### 3.1 Sign Up / Log In to Vercel

1. Go to: https://vercel.com/signup
2. Click: **Continue with GitHub**
3. Authorize Vercel to access your GitHub account

### 3.2 Import Your Repository

1. **On Vercel Dashboard:**
   - Click: `Add New... → Project`
   
2. **Import GitHub Repository:**
   - You'll see list of your GitHub repos
   - Find: `agenticflow-website`
   - Click: `Import`

3. **Configure Project:**
   
   **Framework Preset:** `Vite`
   
   **Build & Output Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   
   **Root Directory:** `./` (leave as is)

4. **Environment Variables:**
   
   If you have any environment variables (currently you don't need any for n8n webhook), you can add them here.
   
   For now, you can skip this section.

5. **Deploy:**
   - Click: `Deploy`
   - Wait 1-2 minutes ⏳
   - ✅ **Your site is live!**

### 3.3 Your Live URLs

You'll get URLs like:
- **Production:** `https://agenticflow-website.vercel.app`
- **Custom Domain:** (can add later)

---

## 🎯 Step 4: Test Automatic Deployments

### 4.1 Make a Small Change

Let's test the auto-deployment:

1. **Edit a file** (e.g., change a text in src/App.tsx)

2. **Commit & Push:**

**Using GitHub Desktop:**
- Open GitHub Desktop
- You'll see your changes
- Add message: `Test automatic deployment`
- Click: `Commit to main`
- Click: `Push origin`

**Using Command Line:**
```bash
git add .
git commit -m "Test automatic deployment"
git push
```

3. **Check Vercel:**
   - Go to: https://vercel.com/dashboard
   - You'll see a new deployment starting automatically! 🚀
   - Wait 1-2 minutes
   - Your site updates automatically ✅

---

## 🎯 Step 5: Future Updates Workflow

### Daily Workflow (Super Simple):

1. **Make changes** to your code locally
2. **Test locally:** `npm run dev`
3. **Commit changes:**
   - GitHub Desktop: Write message → Commit → Push
   - Command line: `git add . && git commit -m "Your message" && git push`
4. **Done!** Vercel deploys automatically in 1-2 minutes

### No need to:
- ❌ Manually build
- ❌ Upload files
- ❌ Configure servers
- ❌ Do anything on Vercel

**Just push to GitHub → Vercel handles everything!** 🎉

---

## 🎯 Step 6: Custom Domain (Optional)

### Add Your Own Domain

1. **On Vercel Dashboard:**
   - Go to your project
   - Click: `Settings → Domains`
   
2. **Add Domain:**
   - Enter: `agenticflow.com` (your domain)
   - Click: `Add`
   
3. **Configure DNS:**
   
   Vercel will show you DNS records to add:
   
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
   
4. **Add to Domain Provider:**
   - Go to your domain provider (Namecheap, GoDaddy, etc.)
   - Add these DNS records
   - Wait 24-48 hours for DNS propagation
   
5. **SSL Certificate:**
   - Vercel automatically adds FREE SSL (HTTPS)
   - No configuration needed ✅

---

## 🎯 Step 7: View Deployments & Logs

### Check Deployment Status

1. **Vercel Dashboard:**
   - Go to: https://vercel.com/dashboard
   - Click on your project
   
2. **View Deployments:**
   - See all deployments (every git push)
   - Click any deployment to see:
     - Build logs
     - Deployment time
     - Preview URL

3. **Build Failed?**
   - Click on failed deployment
   - Check build logs
   - Usually shows exactly what's wrong
   - Fix the issue locally → push again

### Environment Branches

- **Production:** `main` branch → yoursite.vercel.app
- **Preview:** Other branches → preview-xyz.vercel.app
- Every pull request gets its own preview URL!

---

## 🎯 Quick Reference Commands

### Everyday Git Commands

```bash
# Check status
git status

# See what changed
git diff

# Add all changes
git add .

# Commit with message
git commit -m "Your descriptive message"

# Push to GitHub (triggers Vercel deployment)
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

### If You Get Stuck

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD

# Update from GitHub
git pull origin main
```

---

## 🎯 Rollback if Something Breaks

### Instant Rollback on Vercel

1. Go to: Vercel Dashboard → Your Project → Deployments
2. Find the working version
3. Click: `︙ (three dots) → Promote to Production`
4. Done! Instant rollback (no git needed)

### Fix in Code

1. **Identify the bad commit:**
```bash
git log --oneline
```

2. **Revert it:**
```bash
# Revert specific commit
git revert COMMIT_HASH

# Push
git push
```

---

## 🎯 Best Practices

### Commit Messages

Good commit messages:
```
✅ "Add contact form validation"
✅ "Fix mobile menu not closing"
✅ "Update hero section copy"
✅ "Remove unused dependencies"
```

Bad commit messages:
```
❌ "Update"
❌ "Fix"
❌ "Changes"
❌ "asdf"
```

### Branching Strategy

```bash
# For new features
git checkout -b feature/new-service-page
# Work on it...
git push -u origin feature/new-service-page
# Create Pull Request on GitHub
# Merge when ready
```

### Regular Commits

- Commit small, logical changes
- Commit often (not one huge commit)
- Test before pushing to main

---

## 🛠️ Troubleshooting

### Build Fails on Vercel

**Error:** `npm ERR! missing script: build`
- **Fix:** Check `package.json` has `"build": "tsc -b && vite build"`

**Error:** `Module not found`
- **Fix:** Run `npm install` locally, commit `package-lock.json`

**Error:** `Vercel deployment timeout`
- **Fix:** Check build logs, reduce dependencies, optimize images

### GitHub Push Fails

**Error:** `Permission denied`
- **Fix:** Check GitHub credentials, use GitHub Desktop, or set up SSH keys

**Error:** `Failed to push some refs`
```bash
# Pull first
git pull origin main --rebase
git push
```

### Vercel Not Auto-Deploying

1. Check: Settings → Git → GitHub repository connected?
2. Check: Production Branch is set to `main`
3. Try: Manually trigger: Dashboard → Deployments → Redeploy

---

## 📞 Support

### Vercel Support
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions

### GitHub Support
- Docs: https://docs.github.com
- Community: https://github.community

---

## 🎉 You're All Set!

### Your Workflow Now:

1. `npm run dev` - Test locally
2. `git add . && git commit -m "Description" && git push`
3. ☕ Wait 1-2 minutes
4. ✅ Live on Vercel!

**That's it! Your website auto-deploys on every push!** 🚀

---

## 📊 Summary Checklist

- [ ] Code on GitHub
- [ ] Connected to Vercel
- [ ] First deployment successful
- [ ] Tested auto-deployment
- [ ] Bookmarked Vercel dashboard
- [ ] Custom domain added (optional)
- [ ] n8n webhook working from live site

**Now you can focus on building, not deploying!** 💪
