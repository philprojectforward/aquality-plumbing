# Build Brief — Aquality Plumbing

## Client Info

| Field | Value |
|-------|-------|
| Business name | Aquality Plumbing |
| Owner | Paolo |
| Trade | Plumber / Bathroom Fitter / Tiler |
| Location | Bristol (1 Elton Lane, BS7 8AB) |
| Phone | 07481931931 |
| Email | paolo.aquality@gmail.com |
| Website (current) | https://aqualityservices.weebly.com |
| Facebook | facebook.com/aqualitybristol (87 followers, 3 reviews) |
| Instagram | @aquality_plumbing (54 followers) |
| MyBuilder | mybuilder.com/profile/aquality_59 (5-star reviews) |

## What to Build

- Static HTML/CSS/JS website (no frameworks)
- Single page with smooth scroll sections
- Mobile-first, fully responsive
- SEO optimised (schema.org, meta tags, sitemap, robots.txt)
- Privacy policy page (privacy.html) linked in footer
- Firebase Hosting ready

### Sections (in order)
1. Top announcement bar (24hr emergency + phone)
2. Sticky nav (logo + menu + teal CTA)
3. Hero (headline, subtext, 2 CTAs, trust strip, hero image)
4. Services (6 cards: Emergency, Bathroom Design, Tiling, Leak ID, Showers/Toilets/Basins, Pipe & Stop Cock)
5. About (company text + key points + about image)
6. Gallery (12 real work photos in a grid — these are REAL photos, use them)
7. Why Choose Us (6 cards: experience, 24hr emergency, before/after photos, bathroom specialist, expert tiling, 5-star reviews)
8. Reviews (4 testimonials from Weebly + Facebook + MyBuilder)
9. Emergency CTA banner (orange accent, full-width, 24hr call)
10. Contact (info + form)
11. Footer
12. Sticky mobile call bar (teal)

## Content

- **All copy is in `content.md`** — USE THIS for all text
- **Images in `images/`:**
  - `logo.png` — Aquality Plumbing logo (teal/cyan accent, 70KB)
  - `hero.jpg` — real bathroom work photo (75KB)
  - `about.jpg` — about page image (165KB)
  - `shower-1.jpg` to `shower-3.jpg` — real shower installations
  - `bathroom-1.jpg` to `bathroom-2.jpg` — real bathroom work
  - `toilet-basin-1.jpg` to `toilet-basin-4.jpg` — real toilet/basin installations
- **[ADDED] sections** in content.md — use these too
- **Do NOT invent** business details not in content.md

## Design

- **Follow `DESIGN.md` exactly** — light theme + teal accent
- Key design elements:
  - Light/white background (`#f8fafc`) with teal accent (`#00a0c0`)
  - Orange accent (`#f59e0b`) for emergency 24hr banner
  - Completely different from Blays (dark navy), JD Plumbing (light+teal+orange), X7 (dark slate+gold), BME (light corporate)
  - Gallery section with 12 real work photos — this is a KEY feature
  - Sticky teal mobile call bar
  - Clear, prominent CTAs

## Contact Form

```
Form POSTs to: https://projectforward-web.web.app/api/contact
Hidden fields:
  client_id = "FK2lxLrp2BUT9IO3WcKQ"
  redirect_to = "https://aquality-plumbing.web.app/?sent=success"
Honeypot field: "website" (hidden, must be empty)
```

Fields: Name, Phone, Email, Service needed (dropdown), Message

## Output

- Build static files in `C:/Users/fil_b/projects/aquality-plumbing/dist/`
- Firebase hosting site: `aquality-plumbing`
- Deploy: `firebase deploy --only hosting --project projectforward-web`
- Preview URL: `https://aquality-plumbing.web.app`

## Notes

- 15+ years experience, sole trader, Bristol-based
- NOT Gas Safe — do not mention gas, boilers, or gas appliances
- 24-hour emergency is a KEY differentiator — give it a dedicated CTA banner
- Bathroom design AND fitting is a high-value service — highlight it
- Tiling is a secondary service but still important
- Before/after photos on every job = unique trust signal
- 12 real work photos available — use them ALL in the gallery
- Include privacy policy page (privacy.html)
- Link to Facebook and Instagram in footer

## Image Usage Guide

| Image | Suggested Use |
|-------|---------------|
| `logo.png` | Nav bar + footer |
| `hero.jpg` | Hero section (real bathroom work) |
| `about.jpg` | About section |
| `shower-1/2/3.jpg` | Gallery + services cards |
| `bathroom-1/2.jpg` | Gallery + bathroom services |
| `toilet-basin-1/2/3/4.jpg` | Gallery + services cards |

All images are REAL work photos from Paolo's Weebly site — use them proudly.