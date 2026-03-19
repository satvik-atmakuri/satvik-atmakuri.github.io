# Personal Portfolio — Static (GitHub Pages)

A clean, accessible, single‑page portfolio built from scratch with HTML/CSS/JS. No frameworks, no build steps — perfect for GitHub Pages.

## 1) Quick start

1. **Download** this folder or use the ZIP I provided.
2. Open `index.html` and replace all `YOUR ...` placeholders (name, links, city, etc.).
3. Put your résumé PDF at `assets/resume/resume.pdf` (or update the button link).
4. Replace/rename project links and thumbnails in the **Projects** section.
5. Commit and push to a GitHub repo.
6. **Deploy on GitHub Pages**:
   - Option A (user site): name your repo `your-username.github.io` and push. GitHub serves it automatically at `https://<username>.github.io/`.
   - Option B (any repo): go to **Settings → Pages → Build and deployment**, set **Source** to `Deploy from a branch`, **Branch** to `main` (or `master`) and **/ (root)`. Click **Save**.

It may take a minute for the page to appear at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` for user sites).

## 2) Customize

- **Colors / radius**: edit CSS variables at the top of `assets/css/styles.css`.
- **Dark mode**: automatic via `prefers-color-scheme`, with a manual toggle that persists to `localStorage`.
- **Meta & SEO**: update `<title>`, `<meta name="description">`, Open Graph/Twitter tags, and the JSON‑LD script. Set your canonical URL.
- **Favicon/OG image**: replace files in `assets/img/`. SVGs are included as placeholders.
- **Contact form**: GitHub Pages is static; use a service like Formspree or keep the `mailto:` approach.

## 3) Folder structure

```
portfolio/
├─ index.html
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  ├─ img/
│  │  ├─ avatar.svg
│  │  ├─ project-1.svg
│  │  ├─ project-2.svg
│  │  ├─ project-3.svg
│  │  └─ favicon.svg
│  └─ resume/ (put your resume.pdf here)
├─ .github/workflows/pages.yml (optional; CI deploy)
├─ robots.txt
└─ LICENSE
```

## 4) Optional: deploy with GitHub Actions

If you prefer CI instead of "Deploy from a branch", keep `.github/workflows/pages.yml` as‑is. It builds nothing (static) and deploys automatically on push to `main`.

## 5) Tips

- Pin the repo to your GitHub profile.
- Add a custom domain in **Settings → Pages**. If you do, add a `CNAME` file at the repo root with just your domain name.
- Keep your project bullets **quantified** (latency improvements, traffic volumes, uptime). Recruiters love measurable impact.

---

**Last updated:** 2025-10-14
