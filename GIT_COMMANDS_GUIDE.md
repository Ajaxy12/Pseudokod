# Git Commands Guide - TODO List

This guide covers three main scenarios for working with Git repositories.

## 📋 Table of Contents
1. [Building a New Repository](#1-building-a-new-repository)
2. [Updating an Existing Repository](#2-updating-an-existing-repository)
3. [Removing All Diffs and Creating Clean Initial Commit](#3-removing-all-diffs-and-creating-clean-initial-commit)
4. [Checking Status Commands](#4-checking-status-commands)

---

## 1. Building a New Repository

### Scenario: You don't have a repository yet and want to create one

#### Step 1: Initialize local repository
```bash
git init
```

#### Step 2: Add files to staging area
```bash
git add .
```
or add specific files:
```bash
git add filename1.js filename2.html
```

#### Step 3: Create initial commit
```bash
git commit -m "Initial commit: Your project description"
```

#### Step 4: Create repository on GitHub
- Go to GitHub.com and create a new repository
- Copy the repository URL (e.g., `https://github.com/username/repo-name.git`)

#### Step 5: Connect local repository to GitHub
```bash
git remote add origin https://github.com/username/repo-name.git
```

#### Step 6: Push to GitHub
```bash
git push -u origin main
```
(Use `master` instead of `main` if that's your default branch name)

---

## 2. Updating an Existing Repository

### Scenario: You have a repository and want to update it

#### Step 1: Check current status
```bash
git status
```

#### Step 2: Add changes to staging area
```bash
git add .
```
or add specific files:
```bash
git add filename.js
```

#### Step 3: Commit changes
```bash
git commit -m "Description of what you changed"
```

#### Step 4: Push to GitHub
```bash
git push origin main
```

### If remote has changes you don't have locally:

#### Step 5a: Pull changes from GitHub first
```bash
git pull origin main --no-rebase
```

#### Step 5b: Resolve any merge conflicts if they occur
- Edit conflicted files
- Stage resolved files: `git add filename.js`
- Complete merge: `git commit -m "Merge remote changes"`

#### Step 5c: Push your changes
```bash
git push origin main
```

---

## 3. Removing All Diffs and Creating Clean Initial Commit

### Scenario: You want to remove all history and start fresh with one initial commit

#### Step 1: Create new orphan branch (no history)
```bash
git checkout --orphan new-main
```

#### Step 2: Add all current files
```bash
git add .
```

#### Step 3: Create initial commit
```bash
git commit -m "Initial commit: Complete study guide with all JavaScript concepts and examples"
```

#### Step 4: Delete old main branch
```bash
git branch -D main
```

#### Step 5: Rename new-main to main
```bash
git branch -m new-main main
```

#### Step 6: Force push to GitHub (replaces all history)
```bash
git push -f origin main
```

⚠️ **Warning**: Force push will permanently delete all previous commits and history on GitHub!

---

## 4. Checking Status Commands

### Local Repository Status

#### Check working directory status
```bash
git status
```
Shows:
- Modified files
- Untracked files
- Files ready to commit
- Branch information

#### Check commit history
```bash
git log
```
Shows full commit history with details

#### Check commit history (compact)
```bash
git log --oneline
```
Shows one line per commit

#### Check last N commits
```bash
git log --oneline -5
```
Shows last 5 commits (change number as needed)

#### Check differences since last commit
```bash
git diff
```
Shows unstaged changes

#### Check staged differences
```bash
git diff --staged
```
Shows changes ready to commit

#### Check what files are tracked
```bash
git ls-files
```
Lists all files tracked by Git

### Remote Repository Status

#### Check remote repository URL
```bash
git remote -v
```
Shows:
- Remote name (usually `origin`)
- Fetch URL
- Push URL

#### Check remote branches
```bash
git branch -r
```
Shows all remote branches

#### Check local vs remote status
```bash
git fetch origin
git status
```
Fetches latest info from GitHub and shows status

#### Compare local and remote branches
```bash
git log HEAD..origin/main
```
Shows commits on remote that you don't have locally

```bash
git log origin/main..HEAD
```
Shows commits you have locally that aren't on remote

#### Check if local is ahead/behind remote
```bash
git status
```
Shows: "Your branch is ahead/behind 'origin/main' by X commits"

---

## 📝 Quick Reference

### Most Common Commands
```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull from GitHub
git pull origin main
```

### Useful Aliases (Optional)
You can add these to your Git config for shortcuts:
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

Then use: `git st` instead of `git status`, etc.

---

## 🔍 Troubleshooting

### If you get "refusing to merge unrelated histories"
```bash
git pull origin main --allow-unrelated-histories
```

### If you need to undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

### If you need to undo last commit (discard changes)
```bash
git reset --hard HEAD~1
```

### If you need to restore a deleted file
```bash
git checkout HEAD -- filename.js
```

---

**Last Updated:** 2025  
**Repository:** https://github.com/Ajaxy12/Pseudokod

