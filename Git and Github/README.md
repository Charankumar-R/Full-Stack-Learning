# Git and GitHub

## What is Git?

Git is a **distributed version control system** that helps you:
- Track changes in your code
- Collaborate with others
- Manage multiple versions and branches

## What is GitHub?

[GitHub](https://github.com/) is a platform for hosting Git repositories online. It enables:
- Remote code storage
- Collaboration (issues, pull requests, code reviews)
- Project management

---

## Essential Git Workflow for Web Developers

### 1. Setup

- **Configure your identity:**
  ```
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
  ```

- **Initialize a repository:**
  ```
  git init
  ```

- **Clone an existing repository:**
  ```
  git clone <repo-url>
  ```

### 2. Daily Workflow

- **Check status:**
  ```
  git status
  ```

- **Stage changes:**
  ```
  git add <filename>         # Add a specific file
  git add .                  # Add all changes
  ```

- **Commit changes:**
  ```
  git commit -m "Describe your changes"
  ```

- **View commit history:**
  ```
  git log
  ```

### 3. Branching

- **Create a new branch:**
  ```
  git branch <branch-name>
  git checkout <branch-name>
  # or
  git checkout -b <branch-name>
  ```

- **Merge a branch:**
  ```
  git checkout main
  git merge <branch-name>
  ```

### 4. Working with Remote (GitHub)

- **Add remote:**
  ```
  git remote add origin <repo-url>
  ```

- **Push changes:**
  ```
  git push origin main
  ```

- **Pull latest changes:**
  ```
  git pull origin main
  ```

### 5. Collaboration

- **Fork a repository (on GitHub UI)**
- **Create a Pull Request (on GitHub UI)**
- **Resolve merge conflicts:**  
  Edit files, then:
  ```
  git add .
  git commit
  git push
  ```

---

## Common Commands for Web Projects

- **Ignore files:**  
  Add patterns to `.gitignore` (e.g., `node_modules/`, `.env`)
- **Undo changes:**
  ```
  git checkout -- <filename>      # Discard changes in file
  git reset HEAD <filename>       # Unstage file
  git revert <commit-hash>        # Undo a commit (safe)
  ```

---

## Useful Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Learn Git Branching](https://learngitbranching.js.org/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

---

*Update this README as you learn

