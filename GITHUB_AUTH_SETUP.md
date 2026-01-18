# GitHub Authentication Setup

## Issue Fixed

✅ Cleared cached credentials from wrong account (`abhishekdev2004`)
✅ Updated remote URL to use `theabhishekdev1277` account

## Next Steps - Use Personal Access Token

GitHub no longer accepts passwords for Git operations. You need to use a **Personal Access Token (PAT)**.

### Step 1: Create a Personal Access Token

1. Go to GitHub: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Portfolio Push Token`
4. Select expiration (or "No expiration" for convenience)
5. Check these scopes:
   - ✅ `repo` (Full control of private repositories)
6. Click **"Generate token"**
7. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

### Step 2: Push Your Code

When you run `git push`, it will prompt for:

- **Username**: `theabhishekdev1277`
- **Password**: Paste your Personal Access Token (NOT your GitHub password)

### Alternative: Use Token in URL (Less Secure)

You can also embed the token in the URL temporarily:

```bash
git remote set-url origin https://theabhishekdev1277:YOUR_TOKEN@github.com/theabhishekdev1277/My-Portfolio.git
```

**Note**: This is less secure as the token is visible in git config. Use with caution.

### Recommended: Use SSH Instead

For better security, consider using SSH:

```bash
git remote set-url origin git@github.com:theabhishekdev1277/My-Portfolio.git
```

Then add your SSH key to GitHub.
