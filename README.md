# DevConf 2026 — Landing Page

A responsive landing page for a fictional developer conference, built by converting a Figma/Penpot UI design into a production-ready Bootstrap 5 frontend.

**Live demo:** https://eeeshika.github.io/DevConf2026/

**Design source:** `DevConf2026.fig` / `DevConf2026.penpot` (included in repo)

---

## Features

- **Fully responsive layout** — built with Bootstrap 5's grid system and utility classes; adapts across mobile, tablet, and desktop breakpoints
- **Collapsible navigation** — mobile hamburger menu via Bootstrap's navbar component
- **Live countdown timer** — vanilla JavaScript countdown to the early-bird pricing deadline
- **Registration modal** — Bootstrap modal with client-side form validation (required fields, email format, plan selection)
- **REST API integration demo** — the registration form submits via `fetch()` (async/await) to a mock API endpoint, with loading state and success/error handling
- **Sections:** Navbar, Hero, Speakers, Pricing, Careers, Footer

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, [Bootstrap 5.3](https://getbootstrap.com/) |
| Icons | Font Awesome 7 |
| Fonts | Google Fonts (Inter) |
| Interactivity | Vanilla JavaScript (ES6+, `fetch`, `async/await`) |

No build step, bundler, or package manager required — everything runs from static files.

## Project Structure

```
├── index.html          # Page markup (navbar, hero, speakers, pricing, career, footer, modal)
├── style.css           # Brand overrides (colors, fonts, hero background, countdown widget)
├── script.js           # Countdown timer + form validation + REST API call
├── assets/             # Images (logo, speaker photos, banner, footer logo)
├── ui/                 # Reference design screenshot
├── DevConf2026.fig      # Original Figma design file
└── DevConf2026.penpot   # Original Penpot design file
```


## Author

Eshika Rani Pall
[GitHub](https://github.com/EEEshika) ·
[LinkedIn](https://linkedin.com/in/eshika-rani-pall-b3486b280) ·
[Portfolio](https://eshikarpall.netlify.app)
