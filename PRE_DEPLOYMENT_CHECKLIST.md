# ✅ Pre-Deployment Checklist

Use this checklist before pushing to GitHub and deploying to Vercel.

---

## 🔍 Before Your First Push

### 1. Files Check

- [ ] `.gitignore` exists and has proper content
- [ ] `README.md` updated with project info
- [ ] `.env.local` or sensitive files NOT committed
- [ ] `dist/` and `node_modules/` NOT in git

### 2. Build Test

```bash
npm run build
```

- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No missing imports

### 3. Local Test

```bash
npm run dev
```

- [ ] Site loads on http://localhost:5173
- [ ] All pages/sections visible
- [ ] Images loading correctly
- [ ] Contact form works (check browser console)
- [ ] Mobile responsive (test in DevTools)

### 4. Code Quality

- [ ] No `console.log()` statements left behind
- [ ] No commented-out code chunks
- [ ] All files saved

### 5. Content Review

- [ ] Company name correct (AgenticFlow)
- [ ] Email addresses correct
- [ ] Phone numbers correct (if any)
- [ ] Social media links correct
- [ ] All text spelling checked

---

## 🚀 Before Each Deployment

### Quick Checklist

- [ ] Changes tested locally (`npm run dev`)
- [ ] Build successful (`npm run build`)
- [ ] Git status clean (`git status`)
- [ ] Good commit message ready

### Commit & Push

```bash
# Check what will be committed
git status
git diff

# Add files
git add .

# Commit with descriptive message
git commit -m "Your meaningful message here"

# Push to GitHub (triggers Vercel)
git push
```

---

## 🎯 First GitHub Push

### Initial Setup

1. **Initialize Git (if not done):**
```bash
git init
git add .
git commit -m "Initial commit - AgenticFlow website"
```

2. **Create GitHub Repository:**
   - Go to: https://github.com/new
   - Name: `agenticflow-website`
   - Description: `AI Business Automation Landing Page`
   - Public/Private: Your choice
   - Don't initialize with README (we have code)
   - Create repository

3. **Connect & Push:**
```bash
# Add remote (replace USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/agenticflow-website.git

# Push code
git branch -M main
git push -u origin main
```

---

## 🌐 Vercel Setup Checklist

### First Deployment

1. **Login to Vercel:**
   - [ ] Go to: https://vercel.com/signup
   - [ ] Sign in with GitHub

2. **Import Project:**
   - [ ] Click: "Add New... → Project"
   - [ ] Select your GitHub repo
   - [ ] Click: "Import"

3. **Configure Settings:**
   - [ ] Framework Preset: **Vite**
   - [ ] Build Command: `npm run build`
   - [ ] Output Directory: `dist`
   - [ ] Install Command: `npm install`

4. **Deploy:**
   - [ ] Click "Deploy"
   - [ ] Wait for deployment (1-2 minutes)
   - [ ] Check if site is live

5. **Test Live Site:**
   - [ ] Visit your-project.vercel.app
   - [ ] All pages load
   - [ ] Images show correctly
   - [ ] Contact form works
   - [ ] Mobile responsive

---

## 🧪 Testing Contact Form

### Local Testing

```bash
# Open browser DevTools (F12)
# Go to Console tab
# Fill out form and submit
# Check for:
```

- [ ] No errors in console
- [ ] Network tab shows POST to n8n webhook
- [ ] Success message displays
- [ ] Form clears after submit

### Production Testing

After Vercel deployment:

- [ ] Submit test form on live site
- [ ] Check n8n workflow received data
- [ ] Verify email/notification received (if configured)

---

## 📱 Cross-Browser Testing

### Desktop

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (if Mac available)

### Mobile

```bash
# In browser DevTools (F12)
# Click device icon (Ctrl+Shift+M)
# Test these viewports:
```

- [ ] iPhone 14 Pro (393x852)
- [ ] Samsung Galaxy S20 (360x800)
- [ ] iPad Pro (1024x1366)

### What to Check

- [ ] Navigation menu works
- [ ] All sections visible
- [ ] Images not cut off
- [ ] Text readable (not too small)
- [ ] Buttons clickable (not too close)
- [ ] Form fields usable

---

## 🔒 Security Check

### Before Going Live

- [ ] No API keys in code
- [ ] No passwords in code
- [ ] `.env.local` in `.gitignore`
- [ ] n8n webhook URL is HTTPS
- [ ] No sensitive data exposed

### Check These Files

```bash
# Search for potential secrets
git grep -i "password"
git grep -i "api_key"
git grep -i "secret"
git grep -i "token"
```

Should find nothing! ✅

---

## 📊 Performance Check

### After Deployment

1. **Lighthouse Test:**
   - [ ] Open DevTools (F12)
   - [ ] Go to "Lighthouse" tab
   - [ ] Run audit
   - [ ] Should score 90+ on all metrics

2. **Bundle Size:**
```bash
npm run build
# Check dist/ folder size
# Should be under 500 KB total
```

3. **Load Time:**
   - [ ] Site loads in under 3 seconds
   - [ ] Images load progressively
   - [ ] No blank page during load

---

## 🎨 Visual Check

### Desktop View

- [ ] Hero section looks good
- [ ] Images high quality (not blurry)
- [ ] Text readable (good contrast)
- [ ] Colors match design (#39FF14)
- [ ] No layout shifts on load
- [ ] Smooth scrolling
- [ ] Animations work

### Mobile View

- [ ] No horizontal scroll
- [ ] Text not cut off
- [ ] Images scale properly
- [ ] Buttons big enough (min 44px)
- [ ] Forms easy to fill

---

## 📝 SEO Check

### Meta Tags

Check in `index.html`:

- [ ] `<title>` tag present
- [ ] `<meta name="description">` present
- [ ] `<meta property="og:title">` (Facebook)
- [ ] `<meta property="og:description">` (Facebook)  
- [ ] `<meta property="og:image">` (Facebook)
- [ ] `<meta name="twitter:card">` (Twitter)

### Files

- [ ] `/public/robots.txt` exists
- [ ] `/public/sitemap.xml` exists
- [ ] `/public/site.webmanifest` exists

### Test

Visit: `https://your-site.vercel.app/robots.txt`
Should show content, not 404 ✅

---

## 🔧 Post-Deployment Checks

### Immediate (First 5 Minutes)

- [ ] Site is live and accessible
- [ ] All pages load without errors
- [ ] Images display correctly
- [ ] Forms submit successfully
- [ ] No console errors (F12)

### Within 24 Hours

- [ ] Google Analytics tracking works (if configured)
- [ ] Contact form submissions received
- [ ] n8n workflow executing properly
- [ ] No 404 errors reported
- [ ] SSL certificate active (HTTPS)

### Within 1 Week

- [ ] Check Vercel analytics
- [ ] Monitor performance
- [ ] Check error logs
- [ ] Review user feedback
- [ ] Test auto-deployment (make small change)

---

## 🆘 Rollback Plan

If something breaks after deployment:

### Option 1: Vercel Dashboard (Instant)

1. Go to: https://vercel.com/dashboard
2. Click: Your Project → Deployments
3. Find: Last working deployment
4. Click: `︙ → Promote to Production`

**Done in 30 seconds!** ✅

### Option 2: Git Revert

```bash
# Find bad commit
git log --oneline

# Revert it
git revert COMMIT_HASH

# Push
git push
```

### Option 3: Start Over

```bash
# Reset to GitHub version
git fetch origin
git reset --hard origin/main
git push --force
```

---

## 📋 Quick Pre-Push Command

Run this before every push:

```bash
# One command to check everything
npm run build && echo "✅ Build successful - Ready to deploy!"
```

If you see "✅ Build successful" → Safe to push! 🚀

---

## 🎉 You're Ready!

If all checkboxes are ✅, you're good to go:

```bash
git add .
git commit -m "Initial deployment"
git push
```

Then set up Vercel and watch your site go live! 🚀

---

## 📞 Problems?

### Build Fails

1. Check error message carefully
2. Google the exact error
3. Check [GITHUB_VERCEL_DEPLOYMENT.md](./GITHUB_VERCEL_DEPLOYMENT.md)

### Site Not Loading

1. Check Vercel deployment logs
2. Verify build command: `npm run build`
3. Verify output directory: `dist`
4. Check for console errors (F12)

### Form Not Working

1. Check browser console for errors
2. Verify n8n webhook URL
3. Test n8n workflow directly
4. Check CORS settings

---

**Remember: You can always rollback! Don't be afraid to deploy.** 💪
