# Deploy to Vercel - Step by Step Guide

Your portfolio is ready to deploy on Vercel! Follow these steps:

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Connect Your GitHub Repository

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account (`theabhishekdev1277`)
2. Click **"Add New Project"** or **"Import Project"**
3. Select your repository: `theabhishekdev1277/My-Portfolio`
4. Click **"Import"**

### Step 2: Configure Project Settings

Vercel should auto-detect Vite, but verify these settings:

- **Framework Preset**: Vite (should be auto-detected)
- **Root Directory**: Leave as `./` (root of repository)
- **Build Command**: (Already set in `vercel.json` - leave as default or use: `cd abhishek-singh-premium-web-presence-main/abhishek-singh-premium-web-presence-main && npm install && npm run build`)
- **Output Directory**: (Already set in `vercel.json` - leave as default or use: `abhishek-singh-premium-web-presence-main/abhishek-singh-premium-web-presence-main/dist`)
- **Install Command**: (Already set in `vercel.json` - leave as default)

**Note**: The `vercel.json` file already has the correct configuration. Vercel should automatically use these settings!

### Step 3: Environment Variables (Optional)

If you have any environment variables, add them here. Otherwise, skip this step.

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at: `https://my-portfolio-xxxxx.vercel.app`
4. You can add a custom domain later in project settings

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

From the root directory (`d:\new-portfolio`):

```bash
vercel
```

Follow the prompts:

- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No** (for first deployment)
- Project name? **my-portfolio** (or any name)
- Directory? **./** (current directory)
- Override settings? **No**

### Step 4: Production Deploy

After the preview deployment works:

```bash
vercel --prod
```

## Configuration Files

I've created `vercel.json` at the root with the correct configuration for your nested project structure.

## Custom Domain (Optional)

After deployment:

1. Go to your project on Vercel dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `abhisheksingh.dev` or `portfolio.abhisheksingh.dev`)
4. Follow DNS configuration instructions

## Automatic Deployments

Once connected to GitHub, Vercel will automatically:

- Deploy every push to `main` branch
- Create preview deployments for pull requests
- Run builds automatically

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure Node.js version is 20 (check `.nvmrc`)
3. Verify all dependencies are in `package.json`

### 404 Errors on Routes

The `vercel.json` includes rewrites to handle React Router. If you still get 404s:

- Check that `rewrites` are in `vercel.json`
- Ensure all routes are client-side (React Router handles them)

### Images Not Loading

- Ensure images are in the `public` folder
- Use paths starting with `/` (e.g., `/Mypic.jpg`)

## Your Live Site

After deployment, your portfolio will be available at:

- **Preview**: `https://my-portfolio-git-main-theabhishekdev1277.vercel.app`
- **Production**: `https://my-portfolio.vercel.app` (or your custom domain)

---

**Note**: The `vercel.json` file is already configured for your nested project structure. Just follow the steps above to deploy!
