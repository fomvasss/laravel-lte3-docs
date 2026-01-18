# GitHub Pages Deployment Guide

This guide explains how to set up and deploy the Laravel LTE3 documentation to GitHub Pages.

## Repository Setup

1. **Create a new repository** on GitHub: `fomvasss/laravel-lte3-docs`

2. **Copy all documentation files** from this directory to the new repository:
   ```bash
   # Copy all files except .git directory
   cp -r /path/to/docs/* /path/to/laravel-lte3-docs/
   ```

3. **Initialize Git and push**:
   ```bash
   cd /path/to/laravel-lte3-docs/
   git init
   git add .
   git commit -m "Initial documentation commit"
   git branch -M main
   git remote add origin https://github.com/fomvasss/laravel-lte3-docs.git
   git push -u origin main
   ```

## GitHub Pages Configuration

1. **Go to repository Settings** → **Pages**

2. **Configure Source**:
   - Source: `Deploy from a branch` **OR** `GitHub Actions` (recommended)
   - If using branch: select `gh-pages` branch and `/ (root)` folder

3. **Enable GitHub Actions** (recommended):
   - The `.github/workflows/deploy.yml` file will automatically:
     - Install Node.js dependencies
     - Build the VitePress site
     - Deploy to GitHub Pages

## Automatic Deployment

The documentation will automatically rebuild and deploy when:
- You push changes to the `main` branch
- You trigger a manual workflow dispatch

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the root directory:
   ```bash
   echo "docs.yourdomaim.com" > CNAME
   ```

2. Configure DNS settings:
   - Add a CNAME record pointing to `fomvasss.github.io`

3. Update the base path in `.vitepress/config.js`:
   ```javascript
   base: '/', // Remove the repository name if using custom domain
   ```

## Verification

After deployment, the documentation will be available at:
- **GitHub Pages URL**: https://fomvasss.github.io/laravel-lte3-docs/
- **Custom domain** (if configured): https://your-custom-domain.com/

## Troubleshooting

### Build Errors
- Check the Actions tab in GitHub for build logs
- Ensure all dependencies are correctly specified in `package.json`
- Verify that the VitePress configuration is valid

### 404 Errors
- Check that the `base` path in `.vitepress/config.js` matches your repository name
- Ensure all internal links use relative paths

### Deployment Issues
- Verify that GitHub Pages is enabled in repository settings
- Check that the GitHub Action has proper permissions
- Ensure the workflow file is in `.github/workflows/deploy.yml`

## Local Development

For local development and testing:

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Maintenance

To keep the documentation updated:

1. **Regular Updates**: Update dependencies periodically
   ```bash
   npm update
   ```

2. **Content Updates**: Edit markdown files and push changes

3. **Theme Updates**: Update VitePress version when new versions are available

4. **Monitor**: Check the Actions tab regularly for any deployment issues
