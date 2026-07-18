# DESIGN.md — Aquality Plumbing

> **Industry:** Plumbing / Bathroom Design & Fitting / Tiling
> **Location:** Bristol
> **Design pattern:** Light, clean, modern with teal accent — based on `plumbing-light-clean.md` reference, adapted with logo teal colour. Different from all previous builds (Blays = dark navy+blue, JD = light+teal+orange, X7 = dark slate+gold, BME = light+teal+orange).
> **Created:** July 18, 2026
> **Logo:** Provided — teal/cyan accent (#00a0c0) on dark/black background

---

## Design Tokens

### Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#f8fafc` | Page background (light) |
| `--foreground` | `#0f172a` | Primary text |
| `--card` | `#ffffff` | Card/section backgrounds |
| `--card-foreground` | `#0f172a` | Text on cards |
| `--primary` | `#00a0c0` | Primary brand colour (teal — from logo) |
| `--primary-foreground` | `#ffffff` | Text on teal buttons |
| `--primary-dark` | `#0080a0` | Darker teal for hovers |
| `--secondary` | `#f1f5f9` | Secondary backgrounds |
| `--muted` | `#f1f5f9` | Muted backgrounds |
| `--muted-foreground` | `#64748b` | Secondary/muted text |
| `--accent` | `#f59e0b` | Orange accent — for emergency/urgent elements |
| `--border` | `#e2e8f0` | Borders |
| `--danger` | `#ef4444` | Emergency 24hr highlight |

**Design note:** Light theme with teal primary (matching logo) and orange accent for emergency callouts. Completely different from previous builds. The teal gives a water/freshness feel appropriate for plumbing. The orange accent makes the 24hr emergency CTA pop.

### Typography

- **Font stack:** `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`
- **Headings:**
  - H1: `2.5rem` (40px) mobile, `3.5rem` (56px) desktop, weight 700
  - H2: `2rem` (32px) mobile, `2.5rem` (40px) desktop, weight 700
  - H3: `1.5rem` (24px), weight 600
- **Body:** `1rem` (16px), line-height 1.625
- **Letter-spacing:** -0.02em on headings

### Spacing & Radius
- `--max-width`: 1200px
- `--radius`: 0.5rem
- `--radius-lg`: 0.75rem

---

## Page Structure (Section by Section)

### 1. Top Announcement Bar
- Text: "24-Hour Emergency Callouts • Bristol & Surrounding Areas"
- Phone: "Call 07481 931931" (click-to-call)
- Background: `--primary` (teal), white text

### 2. Navigation Bar
- Logo (Aquality Plumbing logo with teal accent)
- Desktop nav: Home | Services | About | Gallery | Reviews | Contact
- "Get a Free Quote" button (teal, top-right)
- Sticky with white background + shadow on scroll

### 3. Hero Section
- Light background with subtle teal gradient
- **H1:** "Bristol's Trusted Plumber & Bathroom Specialist"
- **Subtext:** "15+ years experience. 24-hour emergency callouts, full bathroom design and fitting, expert tiling. Reliable, professional, and detail-obsessed."
- **CTAs:** "Call 07481 931931" (teal button, click-to-call) + "Get a Free Quote" (outline)
- **Hero image:** Use `hero.jpg` from Weebly (real bathroom work)
- **Trust strip:**
  - 15+ Years Experience
  - 24-Hour Emergency
  - 5-Star MyBuilder Reviews
  - Bathroom Design & Fitting

### 4. Services Section
- Heading: "Our Services"
- Grid of service cards (6 cards):
  1. **24-Hour Emergency Plumbing** — leaks, burst pipes, same-day callout
  2. **Bathroom Design & Fitting** — full bathroom renovations, from design to completion
  3. **Tiling** — all tile sizes and styles, walls and floors
  4. **Leak Identification** — specialist equipment, any pipework
  5. **Showers, Toilets & Basins** — installation, replacement, repair
  6. **Pipe & Stop Cock** — pipe freezing, valve replacement, heating system problem solving
- Each card: icon + title + description + "Call to book" link

### 5. About Section
- Heading: "About Aquality Plumbing"
- Text from content.md About section
- Key points highlighted: 15+ years, attention to detail, before/after photos on every job
- About image (`about.jpg`) alongside text

### 6. Gallery Section
- Heading: "Our Work"
- Grid of real work photos from Weebly (12 images):
  - shower-1.jpg, shower-2.jpg, shower-3.jpg
  - bathroom-1.jpg, bathroom-2.jpg
  - toilet-basin-1.jpg, toilet-basin-2.jpg, toilet-basin-3.jpg, toilet-basin-4.jpg
- Caption: "Real bathrooms, showers, and tiling work by Paolo"
- Lightbox or modal gallery if possible (simple CSS/JS)

### 7. Why Choose Us Section
- 6 cards with icons:
  1. **15+ Years Experience** — established plumbing expertise
  2. **24-Hour Emergency** — same-day callout for urgent issues
  3. **Before & After Photos** — step-by-step documentation of every job
  4. **Bathroom Specialist** — full design and fitting service
  5. **Expert Tiling** — all tile sizes and styles
  6. **5-Star Reviews** — rated highly on MyBuilder and Facebook

### 8. Reviews Section
- Heading: "What Our Customers Say"
- 3-4 testimonials from content.md (Weebly + Facebook + MyBuilder)
- Mention: "See more reviews on MyBuilder and Facebook"

### 9. Emergency CTA Banner
- Full-width banner with orange/danger accent
- "24-Hour Emergency Plumbing — Call Now"
- "Leaks, burst pipes, no water? We offer same-day emergency callouts across Bristol."
- Big "Call 07481 931931" button

### 10. Contact / CTA Section
- Heading: "Get a Free Quote"
- Two columns: contact info on left, form on right
- Contact info: phone (click-to-call), email, address, social links
- **Contact form:**
  - Name (required)
  - Phone (required)
  - Email
  - Service needed (dropdown: Emergency, Bathroom, Tiling, Leak, Other)
  - Message
  - Honeypot field
  - Hidden: `client_id = "FK2lxLrp2BUT9IO3WcKQ"`
  - Hidden: `redirect_to` = preview URL + "?sent=success"
  - POST to: `https://projectforward-web.web.app/api/contact`
  - Submit: "Get My Free Quote" (teal)

### 11. Footer
- Logo + business name
- Quick links: Services, About, Gallery, Reviews, Contact
- Phone, address
- Facebook + Instagram links
- "Website by Project Forward"
- Privacy policy link

### 12. Sticky Mobile Call Bar
- Fixed bottom bar on mobile
- "Call 07481 931931" — click-to-call
- Teal background

---

## SEO Requirements

### Meta Tags
- Title: "Aquality Plumbing | Plumber & Bathroom Fitter Bristol | 07481 931931"
- Description: "Bristol plumber with 15+ years experience. 24-hour emergency callouts, bathroom design and fitting, expert tiling. 5-star reviews on MyBuilder. Call 07481 931931."
- Keywords: plumber Bristol, emergency plumber Bristol, bathroom fitter Bristol, bathroom design Bristol, tiling Bristol, leak detection Bristol, bathroom renovation Bristol

### Schema.org
```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Aquality Plumbing",
  "description": "Bristol plumber with 15+ years experience. 24-hour emergency callouts, bathroom design and fitting, and expert tiling services.",
  "url": "https://aquality-plumbing.web.app",
  "telephone": "07481931931",
  "email": "paolo.aquality@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 Elton Lane",
    "addressLocality": "Bristol",
    "postalCode": "BS7 8AB",
    "addressCountry": "GB"
  },
  "areaServed": ["Bristol", "South Gloucestershire", "North Somerset", "Bath"],
  "openingHours": "Mo-Su 00:00-23:59",
  "sameAs": ["https://www.facebook.com/aqualitybristol", "https://www.instagram.com/aquality_plumbing"]
}
```

### Additional
- robots.txt, sitemap.xml, Open Graph, canonical, privacy.html

---

## Firebase Hosting
- Site ID: `aquality-plumbing`
- Preview URL: `https://aquality-plumbing.web.app`

---

## Do's and Don'ts

### Do
- Use light theme with teal accent from the logo
- Make phone number and CTAs very prominent — tradesman site, conversions = phone calls
- Include the 24-hour emergency banner (orange accent) — key differentiator
- Use the 12 real work photos from Weebly in a gallery
- Include before/after photo service as a trust signal
- Include all reviews (Weebly + Facebook + MyBuilder)
- Include schema.org with opening hours 24/7 (emergency service)
- Include privacy policy linked in footer
- Link to Facebook and Instagram in footer and reviews section

### Don't
- Don't mention Gas Safe — Paolo is NOT Gas Safe registered
- Don't mention boiler installations or gas work
- Don't include the Weebly "Powered by" footer
- Don't use the Weebly banner
- Don't forget the honeypot and client_id on the contact form
- Don't forget prefers-reduced-motion support