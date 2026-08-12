# Dr. Priyanka Gynec — Clone

A pixel-inspired, fully animated clone of [shanthigynec.com](https://shanthigynec.com/), built with
Next.js (App Router) and plain JavaScript/JSX — no TypeScript, no separate backend.

## Stack

- **Next.js 16** (App Router, JS/JSX only)
- **Tailwind CSS v4** for styling
- **Framer Motion** for page-load animations, scroll reveals, and hover micro-interactions
- **lucide-react** for iconography
- Contact form is **fully client-side** — no API route, no database. It validates input and
  shows a success state in the UI. Wire it up to an email service (Resend, EmailJS, Formspree,
  etc.) or your own API route whenever you're ready to actually receive submissions.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

## Project structure (single folder, no separate frontend/backend)

```
app/
  layout.js              Root layout — fonts, Navbar, Footer, floating buttons
  page.js                Home page
  globals.css             Design tokens (colors, type, motifs)
  about-us/page.js        About Us — doctor profiles, philosophy
  services/page.js        Specialities overview
  services/[slug]/page.js Dynamic page for each speciality
  blogs/page.js           Blog listing
  blogs/[slug]/page.js    Dynamic blog post page
  contact/page.js         Contact page with form

components/
  Navbar.jsx, Footer.jsx, FloatingButtons.jsx
  Hero.jsx, PageHero.jsx, Reveal.jsx
  ServiceCard.jsx, WhyTrust.jsx, TechShowcase.jsx
  MomentsSection.jsx, Testimonials.jsx, CTASection.jsx
  ContactForm.jsx          Client-only form, no backend
  icons.jsx, social-icons.jsx

data/
  site.js                 All site copy/content in one place (nav, services,
                           testimonials, doctors, blog posts, contact info)
```

## Notes

- All copy (services, doctor bios, testimonials, contact numbers, address) is taken from the
  real shanthigynec.com content.
- Photography from the original site isn't reproduced — decorative gradient/CSS panels stand in
  for photos so you can drop in your own licensed images later (just swap the placeholder `div`s
  in `Hero.jsx`, `ServiceCard.jsx`, `about-us/page.js`, etc. for `<Image>` components).
- Update phone numbers / WhatsApp / email / address in `data/site.js` — every page pulls from
  that single file.
- Animations respect `prefers-reduced-motion`.
