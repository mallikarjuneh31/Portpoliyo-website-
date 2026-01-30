# Fix Resume PDF Issue

## Problem
The resume PDF file cannot be opened when clicking the Resume button.

## Solution

### Step 1: Verify Your Resume PDF File

1. Make sure you have a valid PDF file of your resume
2. The file should be named `resume.pdf`
3. Place it in the `public` folder: `public/resume.pdf`

### Step 2: Check File Location

The resume file should be at:
```
E:\portpoliyo\public\resume.pdf
```

### Step 3: Replace the Resume File

If your current `resume.pdf` is corrupted or invalid:

1. **Get your resume PDF file** (make sure it's a valid PDF)
2. **Copy it to the public folder:**
   - Copy your resume PDF
   - Paste it into: `E:\portpoliyo\public\`
   - Name it: `resume.pdf`
   - Replace the existing file if asked

### Step 4: Test

1. Restart your development server:
   ```bash
   npm start
   ```

2. Go to: http://localhost:3000

3. Click the "Resume" button

4. The PDF should open in a new tab

### Step 5: Verify File is Valid

To check if your PDF is valid:
- Try opening it directly: Double-click `public/resume.pdf`
- It should open in your PDF viewer
- If it doesn't open, the file is corrupted - replace it with a valid PDF

## Current Code

The Resume button is configured to:
- Open the PDF in a new tab
- Allow download
- Work in both development and production (Vercel)

## If Still Not Working

1. **Check browser console** (F12) for errors
2. **Verify file path** - should be `/resume.pdf` in browser
3. **Try different browser** - some browsers handle PDFs differently
4. **Check file size** - very large PDFs might have issues
5. **Ensure PDF is not password protected**

## Alternative: Use Google Drive or Dropbox

If the PDF still doesn't work, you can:
1. Upload your resume to Google Drive or Dropbox
2. Get a shareable link
3. Update the Resume button to link to that URL instead

Example:
```jsx
<a 
  href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
  target="_blank"
  rel="noopener noreferrer"
  className="btn primary"
>
  Resume
</a>
```

