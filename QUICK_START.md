# 🚀 Quick Start: Deploy to Vercel in 5 Minutes

## Step 1: Create GitHub Repository (2 minutes)

1. **Go to**: https://github.com/new
2. **Repository name**: `portpoliyo`
3. **Visibility**: Select **Public** (required for free Vercel)
4. **IMPORTANT**: Do NOT check any boxes (no README, .gitignore, license)
5. Click **"Create repository"**

## Step 2: Push Your Code (1 minute)

After creating the repository, run these commands:

```bash
git push -u origin main
```

If asked for credentials:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (not your password)
  - Create one at: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Select scope: `repo`
  - Copy the token and use it as password

## Step 3: Deploy to Vercel (2 minutes)

1. **Go to**: https://vercel.com
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Click **"Add New Project"**
4. Find and click **"portpoliyo"** repository
5. Click **"Import"**
6. **Settings** (should be auto-detected):
   - Framework: Create React App ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `build` ✅
7. Click **"Deploy"**
8. Wait 1-2 minutes
9. **Get your live URL!** 🎉

## Your Live Website URL

After deployment, you'll get:
**https://portpoliyo.vercel.app**

(Or similar - Vercel will show you the exact URL)

## Update Your Site Later

Just push to GitHub and Vercel auto-deploys:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

That's it! Vercel automatically redeploys in 1-2 minutes.

---

**Need detailed instructions?** See `DEPLOYMENT_GUIDE.md`

