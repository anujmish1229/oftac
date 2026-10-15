# OFTAC — Organization for Transforming African Communities

Website for OFTAC, a community-based organization that helps refugee families in Kyangwali, Uganda build sustainable incomes through beekeeping. The site presents the project, the team and products, and explains how to donate.

Live site: https://oftac.netlify.app

## Tech stack

- **React 18 + TypeScript**, bundled with **Vite**
- **React Router** for client-side routing
- **Tailwind CSS** with two [shadcn/ui](https://ui.shadcn.com) components (button, card)
- Deployed as a static site on **Netlify**

## Getting started

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev            # http://localhost:8080
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload  |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint                            |

## Project structure

```
public/
  _redirects          Netlify rule that serves index.html for every route (SPA routing)
  og-image.jpg        Social-media link preview image (1200×630)
  favicon.ico, robots.txt
src/
  main.tsx            Entry point — mounts <App /> into index.html
  App.tsx             Route table (/, /about, /team, /shop, /contact, /donate, 404)
  index.css           Tailwind layers + theme colors (honey, forest, cream) as CSS variables
  pages/              One component per route
  components/         Page sections (Header, Footer, HeroSection, WaysToDonate, …)
  components/ui/      shadcn/ui primitives
  lib/contact.ts      Contact email and WhatsApp number, shared across pages
  lib/utils.ts        cn() helper for merging Tailwind classes
  assets/             Images bundled by Vite
index.html            HTML shell and SEO / social meta tags
tailwind.config.ts    Theme tokens and fonts
```

## Donations and orders

The site has no backend and takes no payments directly. The Donate page and the Shop's "Contact to Order" buttons link to WhatsApp and email, and donations are arranged by Mobile Money or bank transfer. To change the contact details, edit `src/lib/contact.ts`.
