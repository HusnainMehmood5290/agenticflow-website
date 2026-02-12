# 🚀 Deployment Guide - AgenticFlow

## Pre-Deployment Checklist

### ✅ Before Deploying:

1. **Environment Variables**
   - Copy `.env.example` to `.env.production`
   - Update all values with production data
   - Add Google Analytics ID
   - Update site URL

2. **Images**
   - Create `og-image.jpg` (1200x630) for social sharing
   - Create `twitter-image.jpg` (1200x675)
   - Generate favicons (use https://realfavicongenerator.net)
   - Optimize all images (compress with TinyPNG)

3. **Final Build Test**
   ```bash
   npm run build
   npm run preview
   ```

4. **Verify Files**
   - ✅ robots.txt exists
   - ✅ sitemap.xml exists
   - ✅ 404.html exists
   - ✅ All images load correctly

---

## Deployment Options

### 🟢 Option 1: Vercel (Recommended)

**Why Vercel:**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Serverless functions support
- Perfect for Vite/React

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

**Configure Environment Variables in Vercel:**
- Go to Project Settings → Environment Variables
- Add all variables from `.env.production`
- Redeploy after adding variables

**vercel.json Configuration:**
Create this file in root:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

### 🔵 Option 2: Netlify

**Steps:**

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

**netlify.toml Configuration:**
Create this file in root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

**Environment Variables:**
- Go to Site Settings → Environment Variables
- Add all from `.env.production`

---

### 🟠 Option 3: GitHub Pages

**For Static Sites Only:**

1. **Update `vite.config.ts`:**
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/', // Add this
     // ... rest of config
   });
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   # Install gh-pages
   npm install -D gh-pages
   
   # Add deploy script to package.json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   
   # Deploy
   npm run deploy
   ```

---

### ⚫ Option 4: Self-Hosted (VPS/Cloud)

**Requirements:**
- Ubuntu 20.04+ or similar
- Node.js 18+
- Nginx
- PM2

**Steps:**

1. **Build Locally:**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder to server:**
   ```bash
   scp -r dist/* user@server:/var/www/agenticflow
   ```

3. **Nginx Configuration:**
   Create `/etc/nginx/sites-available/agenticflow`:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;
       root /var/www/agenticflow;
       index index.html;

       # Security headers
       add_header X-Frame-Options "DENY" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header X-XSS-Protection "1; mode=block" always;
       add_header Referrer-Policy "strict-origin-when-cross-origin" always;

       # Gzip compression
       gzip on;
       gzip_vary on;
       gzip_min_length 1024;
       gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

       # Cache static assets
       location /assets/ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # SPA routing
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Enable Site:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/agenticflow /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. **SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

---

## Post-Deployment Tasks

### 1. Verify Deployment

**Check these URLs:**
- ✅ `https://yourdomain.com` - Homepage loads
- ✅ `https://yourdomain.com/robots.txt` - Robots file accessible
- ✅ `https://yourdomain.com/sitemap.xml` - Sitemap accessible
- ✅ `https://yourdomain.com/nonexistent` - 404 page shows
- ✅ Social sharing preview (use https://metatags.io)

### 2. Google Search Console

1. Go to https://search.google.com/search-console
2. Add property (add your domain)
3. Verify ownership (multiple methods available)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`
5. Request indexing for homepage

### 3. Google Analytics Setup

1. Go to https://analytics.google.com
2. Create property
3. Get Measurement ID (G-XXXXXXXXXX)
4. Add to `.env.production`:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   VITE_ENABLE_ANALYTICS=true
   ```
5. Redeploy

### 4. Performance Testing

Run these tests:
- **PageSpeed Insights**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **WebPageTest**: https://www.webpagetest.org

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### 5. SEO Testing

- **Rich Results Test**: https://search.google.com/test/rich-results
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Schema Markup Validator**: https://validator.schema.org

### 6. Security Headers Check

Test at: https://securityheaders.com

**Expected Grade: A**

---

## Monitoring & Maintenance

### Daily:
- ✅ Check Google Analytics traffic
- ✅ Monitor error logs (if any)

### Weekly:
- ✅ Check Search Console for indexing issues
- ✅ Review Web Vitals in Analytics
- ✅ Check 404 errors

### Monthly:
- ✅ Update dependencies: `npm update`
- ✅ Review keyword rankings
- ✅ Test AI assistant citations (ChatGPT, Claude)
- ✅ Backup project

---

## Common Issues & Solutions

### Issue: 404 on refresh
**Solution:** Configure routing (see deployment configs above)

### Issue: Images not loading
**Solution:** Check base URL in `vite.config.ts`

### Issue: Environment variables not working
**Solution:** 
1. Ensure variables start with `VITE_`
2. Redeploy after adding variables
3. Clear browser cache

### Issue: Slow initial load
**Solution:**
1. Optimize images (use WebP)
2. Enable compression on server
3. Use CDN for assets

### Issue: Analytics not tracking
**Solution:**
1. Check `VITE_ENABLE_ANALYTICS=true`
2. Verify Measurement ID is correct
3. Clear browser cache and test in incognito

---

## Quick Deploy Commands

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
npm run build && netlify deploy --prod --dir=dist
```

**GitHub Pages:**
```bash
npm run deploy
```

---

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify:
1. Go to Domain Management → Add custom domain
2. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## Success Metrics

Track these KPIs:

### Week 1-2:
- [ ] Site indexed by Google
- [ ] All pages crawlable
- [ ] Rich results showing

### Month 1:
- [ ] 100+ organic visitors
- [ ] 5+ contact form submissions
- [ ] Featured in AI assistant responses

### Month 3:
- [ ] 500+ organic visitors
- [ ] 20+ leads from SEO
- [ ] Page 1 rankings for main keywords

---

**Your site is production-ready! 🚀**

Choose your deployment method and go live!
