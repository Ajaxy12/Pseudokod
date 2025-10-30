# GitHub Repository Setup Guide

This guide shows you how to create a GitHub repository and push your local code to GitHub.

## Prerequisites
- Git installed on your computer
- GitHub account
- Local project files ready to upload

## Method 1: Create Repository on GitHub Website

### Step 1: Create Repository on GitHub
1. Go to [https://github.com](https://github.com) and sign in
2. Click the **"New"** button (green button) or **"+"** icon in the top right
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name:** `YourProjectName`
   - **Description:** `Brief description of your project`
   - **Visibility:** 
     - ✅ **Public** (anyone can see)
     - ❌ **Private** (only you can see)
   - **Important:** Leave "Add a README file" **UNCHECKED** (since you already have files)
5. Click **"Create repository"**

### Step 2: Copy Repository URL
After creating, GitHub will show you the repository URL. Copy it:
```
https://github.com/YourUsername/YourProjectName.git
```

## Method 2: Using GitHub CLI (Alternative)

If you have GitHub CLI installed, you can create repositories from command line:

```bash
# Install GitHub CLI first (if not installed)
# Windows: winget install GitHub.cli
# Mac: brew install gh
# Linux: sudo apt install gh

# Login to GitHub
gh auth login

# Create repository
gh repo create YourProjectName --public --description "Your project description"
```

## Git Commands to Push Code

### Complete Workflow Commands

```bash
# 1. Initialize Git repository (if not already done)
git init

# 2. Add all files to staging area
git add .

# 3. Commit changes with a message
git commit -m "Initial commit: Add project files"

# 4. Connect to GitHub remote repository
git remote add origin https://github.com/YourUsername/YourProjectName.git

# 5. Push code to GitHub
git push -u origin main
```

### Alternative: If Repository Already Exists

If you're updating an existing repository:

```bash
# Check current remote
git remote -v

# Update remote URL if needed
git remote set-url origin https://github.com/YourUsername/YourProjectName.git

# Add changes
git add .

# Commit changes
git commit -m "Update: Description of changes"

# Push to GitHub
git push origin main
```

## Troubleshooting Common Issues

### Issue 1: Repository Not Found
**Error:** `remote: Repository not found.`

**Solution:** 
- Make sure the repository exists on GitHub
- Check the URL is correct
- Verify you have access to the repository

### Issue 2: Remote Already Exists
**Error:** `error: remote origin already exists.`

**Solution:**
```bash
# Check existing remotes
git remote -v

# Update the remote URL
git remote set-url origin https://github.com/YourUsername/YourProjectName.git
```

### Issue 3: Authentication Required
**Error:** Authentication failed

**Solution:**
- Use Personal Access Token instead of password
- Or use SSH keys for authentication
- Or use GitHub CLI: `gh auth login`

### Issue 4: Branch Name Issues
**Error:** Branch not found

**Solution:**
```bash
# Check current branch
git branch

# Create and switch to main branch
git checkout -b main

# Or rename current branch
git branch -M main
```

## Complete Example Workflow

Here's a complete example for pushing a project called "MyProject":

```bash
# Navigate to your project folder
cd C:\Users\YourName\MyProject
# OR on Mac/Linux: cd /Users/YourName/MyProject
# OR anywhere: cd /path/to/your/project

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Add MyProject files"

# Add remote (replace with your actual GitHub URL)
git remote add origin https://github.com/YourUsername/MyProject.git

# Push to GitHub
git push -u origin main
```

## Verification

After successful push, you should see:
- Files appear on your GitHub repository page
- Success message in terminal
- Repository URL accessible at: `https://github.com/YourUsername/YourProjectName`

## Next Steps

1. **Add README.md** - Describe your project
2. **Add .gitignore** - Exclude unnecessary files
3. **Create branches** - For different features
4. **Collaborate** - Invite others to contribute

## Useful Git Commands Reference

```bash
# Check status
git status

# View commit history
git log --oneline

# View remote repositories
git remote -v

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-branch

# Switch branches
git checkout main

# Merge branches
git merge feature-branch
```

---

**Note:** Replace `YourUsername` and `YourProjectName` with your actual GitHub username and project name throughout this guide.
