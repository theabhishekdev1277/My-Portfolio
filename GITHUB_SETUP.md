# GitHub Setup Guide

Your repository is ready to be pushed to GitHub! Follow these steps:

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name**: `portfolio` (or any name you prefer)
   - **Description**: "Modern portfolio website built with React, TypeScript, and Tailwind CSS"
   - Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

### Option A: If you haven't created the repository yet
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Option B: If you already created the repository
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Verify

1. Go to your GitHub repository page
2. You should see all your files there
3. The README.md will be displayed on the repository homepage

## Future Updates

After making changes to your code, use these commands:

```bash
# Stage all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push
```

## Troubleshooting

### If you get authentication errors:
- Use a Personal Access Token instead of password
- Or set up SSH keys for GitHub

### If the remote already exists:
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

## Next Steps

After pushing to GitHub, you can:
- Set up GitHub Pages for hosting
- Configure GitHub Actions for CI/CD
- Add collaborators
- Create issues and project boards

---

**Note**: Make sure to replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name!
