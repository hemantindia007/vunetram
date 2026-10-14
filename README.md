# Vunetram Technologies — Website

Modern, responsive single-page marketing site for Vunetram Technologies
(cloud migration, hybrid cloud, DevOps delivery & support, and monitoring/observability).

Built with **React + Vite + Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev      # start local dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Editing content

Almost all site text lives in **`src/data.js`** — company details, services,
stats, industries, testimonials, and client names. Edit that file to update the
site without touching the layout.

- Company name / contact info: `company` object in `src/data.js`
- Navigation links: `nav` array
- Services cards: `services` array
- Stats band: `stats` array
- Industries grid: `industries` array
- Testimonials: `testimonials` array

## Structure

```
src/
  App.jsx              # page assembly
  data.js              # all editable content
  index.css            # Tailwind + component styles
  components/
    Navbar.jsx
    Footer.jsx
    Icon.jsx           # inline SVG icon set
  sections/
    Hero.jsx
    TrustedBy.jsx
    Services.jsx
    About.jsx
    Stats.jsx
    Industries.jsx
    Testimonials.jsx
    Contact.jsx
```

## Contact form

The contact form in `src/sections/Contact.jsx` currently shows a success state
on submit but is **not wired to a backend**. To make it send real messages,
replace the `handleSubmit` logic with a call to your form service (e.g.
Formspree, Resend, or your own API endpoint).

## Branding

Brand colors and fonts are defined in `tailwind.config.js` under
`theme.extend.colors` (`brand`, `accent`, `ink`). Swap the logo mark in
`Navbar.jsx` / `Footer.jsx` and `public/favicon.svg` when you have your own logo.
```
