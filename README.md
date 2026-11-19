# Kyrolos Nissem – Portfolio

React + Vite. All content comes from your CV.

## Edit content
- Links, email, phone, **site URL**: `src/config.js`
- Experience, projects, skills, certifications: `src/data.js`
- Update CV: replace `public/cv/Kyrolos_Nissem_CV.pdf` (keep the filename) or change `cvPath`.
- SEO URL: also update the `canonical`, `og:url` and JSON-LD URL in `index.html`.

## Run locally
    npm install
    npm run dev

## QR code (print-ready)
After setting `siteUrl` in `src/config.js`:

    npm run qr

Outputs `public/qr/portfolio-qr.png` (2400 px, error correction H, 4-module quiet zone) and `.svg` (vector, best for print). Print at 2.5 cm or larger, black on white, and test-scan before sending your CV.

## Deploy: GitHub Pages (recommended for this URL)
1. Create a repo named `kyrolosnissem.github.io` and push this project to `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**. The included workflow deploys on every push.
3. Your URL: `https://kyrolosnissem.github.io/`

## Deploy: Vercel
1. Push to GitHub, then import the repo at vercel.com (Vite is auto-detected).
2. Use the assigned URL (e.g. `https://<project>.vercel.app`), set it as `siteUrl`, run `npm run qr`, commit, push.
