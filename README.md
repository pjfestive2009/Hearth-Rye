# Hearth & Rye Bakery (demo site)

A simple static website for a local bakery. Plain HTML, CSS and JavaScript, with no build step.

## Files

- `index.html`: page structure and content
- `styles.css`: all styling (colors and fonts are CSS variables at the top)
- `script.js`: menu filter and demo pre-order form

## Edit the content

- Shop name, address, phone, email and hours: `index.html`
- Menu items and prices: the `<ul class="items">` list in `index.html`
- Colors and fonts: the `:root` block at the top of `styles.css`

The pre-order form is a demo and does not send data anywhere. To make it work, connect it to a form service such as Formspree or Netlify Forms.

## Preview locally

Open `index.html` in your browser.

## Host on GitHub Pages

1. Create a new **public** repository on GitHub.
2. Upload `index.html`, `styles.css`, `script.js` and `README.md` (**Add file > Upload files**), then commit.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. After a minute or two, the site is live at `https://<your-username>.github.io/<repo-name>/`.

Name the repo `<your-username>.github.io` to serve the site at `https://<your-username>.github.io/` instead.

## Using git from the command line

```bash
git init
git add .
git commit -m "Add bakery website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
