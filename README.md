# Aquality Plumbing — Website

Static marketing website for **Aquality Plumbing**, a plumber, bathroom fitter and tiler based in Bristol.

- **Live site:** https://aquality-plumbing.web.app/
- **Stack:** Plain HTML, CSS and vanilla JavaScript — no build step, no frameworks.
- **Hosting:** Firebase Hosting.

## Project structure

```
aquality-plumbing/
├── dist/                 # The deployed site (Firebase "public" folder)
│   ├── index.html        # Single-page site
│   ├── privacy.html      # Privacy policy page
│   ├── styles.css        # All styling
│   ├── scripts.js        # Mobile nav, scroll reveal, lightbox, contact form
│   ├── robots.txt        # Crawler directives
│   ├── sitemap.xml       # XML sitemap
│   └── images/           # Logo and real work photos
├── firebase.json         # Firebase Hosting config
├── content.md            # Source copy / content notes
├── DESIGN.md             # Design notes
└── handoff-brief.md      # Build brief
```

Everything that ships to production lives in `dist/`. Edit files there.

## Run locally

The site is fully static, so you can preview it with any local web server.

```bash
cd dist
npx serve .
# or
python -m http.server 5000
```

Then open http://localhost:5000.

## Deploy to Firebase Hosting

```bash
firebase deploy --only hosting --project projectforward-web
```

### Cache-busting

`firebase.json` sets long-lived immutable caching for `.css`/`.js` files and no-cache for HTML. Because CSS/JS are cached for a year, **always bump the `?v=` query string** in `index.html` and `privacy.html` when you change those files, otherwise returning visitors may see the old version.

## SEO checklist (already implemented)

- Descriptive, keyword-focused `<title>` and meta description
- Canonical URL and `robots` meta (`max-image-preview:large`)
- Open Graph + Twitter Card tags with image dimensions and alt text
- Local SEO geo meta tags (`geo.region`, `geo.position`, `ICBM`)
- Rich `Plumber` / `LocalBusiness` JSON-LD structured data including address, geo coordinates, 24/7 opening hours, service catalog, aggregate rating and reviews
- `robots.txt` and `sitemap.xml`
- Semantic HTML, single `<h1>`, descriptive `alt` text, lazy-loaded images
- System font stack (no external fonts)

### After each deploy

1. Validate structured data: https://search.google.com/test/rich-results
2. Submit the sitemap in Google Search Console: `https://aquality-plumbing.web.app/sitemap.xml`
3. Refresh the social preview in the Facebook Sharing Debugger.

---

Website by [Project Forward](https://projectforward.co.uk).
