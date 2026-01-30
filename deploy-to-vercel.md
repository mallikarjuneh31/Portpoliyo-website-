# 🚀 Deploy to Vercel - Simple Steps

## Option 1: Deploy via Vercel Website (EASIEST - Recommended)

### Step 1: Push to GitHub First
1. Create repository at: https://github.com/new
   - Name: `portpoliyo`
   - Make it **Public**
   - Don't check any boxes
   - Click "Create repository"

2. Push your code:
   ```bash
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to: **https://vercel.com**
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Click **"Add New Project"**
4. Find **"portpoliyo"** and click **"Import"**
5. Settings (auto-detected):
   - Framework: Create React App ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `build` ✅
6. Click **"Deploy"**
7. Wait 1-2 minutes
8. **Copy your live URL!** 🎉

---

## Option 2: Deploy via CLI (If you prefer command line)

1. **Login to Vercel:**
   ```bash
   vercel login
   ```
   - Visit the URL shown in terminal
   - Authorize Vercel

2. **Deploy:**
   ```bash
   vercel --prod
   ```
   - Answer: `Y` to "Set up and deploy?"
   - Answer: `N` to "Link to existing project?"
   - Project name: Press Enter (or type custom name)
   - Directory: Press Enter (uses current folder)
   - Override settings: Press `N`

3. **Get your URL:**
   - Vercel will show your deployment URL
   - Format: `https://your-project-name.vercel.app`

---

## Your Live Website URL

After deployment, you'll get a URL like:
**https://portpoliyo.vercel.app**

This is your permanent live website!

---

## Need Help?

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Docs**: https://vercel.com/docs

