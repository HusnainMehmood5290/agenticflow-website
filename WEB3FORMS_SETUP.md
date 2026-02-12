# ⚠️ DEPRECATED - Now Using n8n Webhook

## 📢 Important Notice

This project **no longer uses Web3Forms**. We've switched to **n8n webhook integration** for better control and flexibility.

---

## ✅ Current Setup

**Contact Form Integration:** n8n Webhook  
**Endpoint:** `https://n8n.agenticflow.me:5678/webhook/form_filled`  
**Method:** POST (JSON)  
**No API keys required** ✅

---

## 🔄 What Changed?

### Before (Web3Forms):
- ❌ Required API key
- ❌ Limited to email delivery
- ❌ No custom workflows
- ❌ External service dependency

### Now (n8n):
- ✅ No API keys needed
- ✅ Send to email, Slack, Discord, database, etc.
- ✅ Custom workflows and automation
- ✅ Self-hosted control
- ✅ Unlimited submissions

---

## 📝 Form Data Structure

When a user submits the contact form, this JSON is sent:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "company": "Company Name",
  "message": "User's message"
}
```

---

## 🛠️ n8n Webhook Setup

If you need to update the webhook URL:

1. **Update in code:**
   - File: `src/App.tsx`
   - Line: ~75
   - Change the webhook URL

2. **No environment variables needed!**
   - URL is hardcoded in the app
   - Easy to update, no configuration needed

---

## 🚀 Want to Switch Back to Web3Forms?

If you need to revert to Web3Forms:

1. **Get API Key:**
   - Go to: https://web3forms.com
   - Create access key with your email

2. **Update Code:**

In `src/App.tsx`, replace the fetch call (around line 70-87):

```typescript
// Old n8n code (remove this)
const formObject = Object.fromEntries(formData.entries());
const response = await fetch('https://n8n.agenticflow.me:5678/webhook/form_filled', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formObject)
});

// Replace with Web3Forms code:
formData.append('access_key', 'YOUR_WEB3FORMS_KEY');
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  body: formData
});
```

---

## 📚 Documentation

For current setup, see:
- **Deployment:** [GITHUB_VERCEL_DEPLOYMENT.md](./GITHUB_VERCEL_DEPLOYMENT.md)
- **Quick Reference:** [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- **Checklist:** [PRE_DEPLOYMENT_CHECKLIST.md](./PRE_DEPLOYMENT_CHECKLIST.md)

---

**This file is kept for reference only. Current setup uses n8n webhook.** ✅

**That's it!** ✅ Your form will now send emails to **husnainmehmood5290@gmail.com**

---

## ✅ How to Test:

1. Go to http://localhost:5173
2. Scroll to the contact form
3. Fill it out with test data
4. Click "Request a call"
5. Check your inbox: **husnainmehmood5290@gmail.com**

---

## Still Having Issues?

### "Email not received"
- Check spam folder
- Verify the access key is correct (no extra spaces)
- Check Web3Forms dashboard at web3forms.com

### "Form not configured" error
- Make sure you saved .env.local
- Restart dev server after changing .env.local
- Check the key has no quotes around it

### "Invalid UUID" error
- Key must be in format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
- Copy it directly from Web3Forms (no extra characters)

---

## Need Help?

**Web3Forms is FREE and gives you:**
- ✅ Unlimited form submissions
- ✅ No credit card needed
- ✅ Instant email delivery
- ✅ Spam protection included
- ✅ Dashboard to see all submissions

**Questions?** Check your Web3Forms dashboard or email support.

---

**Expected result after fix:**
- Form submits successfully ✅
- You receive email within seconds ✅
- User sees success message ✅
- Form clears automatically ✅
