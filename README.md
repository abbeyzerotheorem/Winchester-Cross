# Winchester Cross — Law Firm Website

A static, multi-page marketing site for **Winchester Cross**, a fictional law firm. The design is editorial and minimal: strong typography, restrained color, and responsive layouts built with plain HTML, CSS, and a small amount of vanilla JavaScript.

## Pages

| File | Description |
|------|-------------|
| [index.html](index.html) | Home — hero, about preview, services accordion, advantage grid |
| [about.html](about.html) | Our Vision — firm story, principles, CTA |
| [news.html](news.html) | Case Studies — representative matter summaries |
| [lawyers.html](lawyers.html) | Team — directors, senior associates, associates |
| [practices.html](practices.html) | Practice areas — grid of specialty cards with jump links |
| [contact.html](contact.html) | Consultation request form and office details |

## Tech stack

- **HTML5** — semantic sections, accessible labels, `details`/`summary` for services
- **CSS** — [css/landing.css](css/landing.css) (primary stylesheet)
- **JavaScript** — no frameworks or build step
- **Fonts** — [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body), [Syne](https://fonts.google.com/specimen/Syne) (headings), loaded from Google Fonts

## Project structure

```
lawfirm/
├── index.html
├── about.html
├── news.html
├── lawyers.html
├── practices.html
├── contact.html
├── css/
│   ├── landing.css      # Main styles (layout, components, animations)
│   └── style.css        # Legacy template styles (unused by current pages)
├── js/
│   ├── reveal.js        # Scroll-triggered section animations
│   └── scroll-top.js    # Back-to-top button
└── images/              # Photography and assets
```

## Getting started

No install or build is required. Open any page in a browser, or serve the folder locally:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080` (or the port shown in your terminal).

> **Note:** Some browsers restrict local file access when opening `file://` URLs directly. A local server is recommended.

## Features

### Navigation

- Sticky header with blur on the home page; solid bar on inner pages
- Mobile menu (≤900px) with fade overlay, toggled via **Menu** button
- Smooth scrolling for in-page anchor links (`scroll-behavior: smooth` on `html`)

### Scroll animations

Sections use the `reveal` pattern: content fades in and moves up slightly when it enters the viewport. Card grids use `reveal-stagger` / `reveal-child` for a short staggered sequence.

- Respects `prefers-reduced-motion` (animations disabled)
- Progressive enhancement: content stays visible if JavaScript is off

### Scroll to top

A fixed button appears after scrolling ~360px. Clicking it returns to the top of the page (smooth scroll unless reduced motion is preferred).

### Services accordion (home)

The three service rows on the home page use native `<details>` elements. Opening one row closes the others (handled in an inline script on `index.html`).

### Contact form

The consultation form on [contact.html](contact.html) is front-end only (`action="#"`). Wire it to your backend, form service (e.g. Formspree, Netlify Forms), or email handler before production use.

## Customization

| Goal | Where to look |
|------|----------------|
| Colors, spacing, typography | CSS variables in `:root` at the top of [css/landing.css](css/landing.css) |
| Copy and structure | Individual `.html` files |
| Animation timing / threshold | [js/reveal.js](js/reveal.js), `.reveal` rules in [css/landing.css](css/landing.css) |
| Scroll-to-top offset | `threshold` in [js/scroll-top.js](js/scroll-top.js) |
| Images | Replace files in [images/](images/) and update `src` attributes in HTML |

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS Grid, Flexbox, `backdrop-filter`, and `IntersectionObserver` for scroll animations.

## License

Static site assets and layout. Third-party fonts are subject to [Google Fonts](https://fonts.google.com/) terms. Replace placeholder copy, images, and form handling before deploying for a real firm.
