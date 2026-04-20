# Portfolio — Vaibhav Gulati

Personal portfolio site for **Vaibhav Gulati** — Data Engineer at Redica Systems — summarising career, projects, writing, and contact. Built as a lightweight single-page experience with a companion Writing page.

🔗 **Live:** https://gulvaibhav20.github.io/

## Features

- **Full-viewport scroll-snap** — each section (Banner, About, Experience, Projects, Contact) fills one viewport on desktop; one scroll = one section.
- **Dark mode** — pill toggle with `localStorage` persistence and OS `prefers-color-scheme` detection; inline critical script prevents theme flash.
- **Expandable experience accordion** — single-open pattern, data-driven from a JS array so new roles are a one-object edit.
- **Articles / Writing page** — grid of Scaler Topics articles plus an external blog banner linking to Hashnode.
- **Accessible** — semantic HTML5, ARIA labels on SVG social links, keyboard-navigable accordion, `prefers-reduced-motion` respected, focus-visible outlines.
- **SEO-ready** — Open Graph + Twitter card meta, JSON-LD `Person` schema, `sitemap.xml`, `robots.txt`.
- **PWA basics** — `site.webmanifest`, SVG favicon, theme-color meta.
- **Responsive** — breakpoints at 480px, 768px, 1024px, 1220px with fluid `clamp()` typography.

## Tech stack

Pure **HTML · CSS · JavaScript** — no framework, no build step, no dependencies.

- CSS custom properties (theming), CSS Grid + Flexbox (layout), inline SVG sprites (icons).
- Vanilla JS with event delegation (accordion, theme toggle, image fallback).
- Hosted on GitHub Pages.

## Project structure

```
.
├── index.html              # Home — banner, about, experience, projects, contact
├── articles.html           # Writing — article grid + external blog banner
├── main.css                # Single stylesheet (theme variables, components, responsive, snap)
├── theme.js                # Theme toggle, accordion click delegation, image fallback
├── experience.js           # Experience data array + renderExperience() function
├── favicon.svg             # VG monogram favicon
├── site.webmanifest        # PWA manifest
├── robots.txt              # Search engine directives
├── sitemap.xml             # URL index for search engines
├── images/                 # Profile + project background JPGs
└── media/Resume.pdf        # Downloadable resume
```

## Adding a new experience entry

Edit `experience.js` — add a new object at the top of the `experienceData` array:

```js
{
    id: "exp-5",
    dateStart: "2026-01",
    dateEnd: null,           // null = Present
    dateLabel: "Jan 2026 — Present",
    company: "Company Name",
    location: "City, Country",
    role: "Role Title",
    duration: null,          // or "6 months", "2 years 4 months"
    summaryHtml: "One impactful line, <strong>HTML allowed</strong>.",
    skills: ["Skill1", "Skill2", "Skill3"],
}
```

The HTML is rendered automatically on page load.

## Local development

No build step. Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Browser support

Modern evergreen browsers (Chrome 105+, Firefox 104+, Safari 16.4+) for full feature parity.
Older browsers: core content and navigation still work; some CSS niceties (range-syntax media queries, `overflow-x: clip`, `@supports` for aspect-ratio) may degrade gracefully.

## License

[MIT](LICENSE) © Vaibhav Gulati
