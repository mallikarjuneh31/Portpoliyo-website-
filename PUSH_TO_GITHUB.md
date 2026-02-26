# Push Your Portfolio to GitHub - Quick Guide

## Step 1: Create GitHub Repository

1. **Go to**: https://github.com/new
2. **Repository name**: `portpoliyo`
3. **Description** (optional): "My Portfolio Website"
4. **Visibility**: 
   - Choose **Public** (if you want it visible to everyone)
   - Or **Private** (if you want it private)
5. **IMPORTANT**: 
   - ❌ Do NOT check "Add a README file"
   - ❌ Do NOT check "Add .gitignore"
   - ❌ Do NOT check "Choose a license"
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands:

```bash
git push -u origin main
```

**If asked for credentials:**
- **Username**: Your GitHub username (Mallikarjun-9610)
- **Password**: Use a **Personal Access Token** (NOT your GitHub password)

### How to Create Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note**: "Portfolio Push" (or any name)
4. **Expiration**: Choose duration (90 days, 1 year, etc.)
5. **Select scopes**: Check **`repo`** (full control of private repositories)
6. Click **"Generate token"**
7. **COPY THE TOKEN** (you won't see it again!)
8. Use this token as your password when pushing

## Step 3: Verify

After pushing, go to:
**https://github.com/Mallikarjun-9610/portpoliyo**

You should see all your files there!

---

## Alternative: If Repository Already Exists

If you already created the repository, just run:

```bash
git push -u origin main
```

---

## What Gets Pushed

- ✅ All your source code
- ✅ Profile photo
- ✅ Resume PDF
- ✅ All configuration files
- ✅ Deployment guides
- ✅ README.md

---

## Next Step: Deploy to Vercel

After pushing to GitHub, you can deploy to Vercel:
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Import your `portpoliyo` repository
4. Deploy!

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

