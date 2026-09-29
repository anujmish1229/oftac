# OFTAC — Organization for Transforming African Communities

Website for OFTAC, a community-based organization that helps refugee families in Kyangwali, Uganda build sustainable incomes through beekeeping. The site presents the project, the team and products, and accepts donations via Mobile Money (MTN MoMo, Airtel Money) through Flutterwave.

Live site: https://oftac.org

## Tech stack

- **React 18 + TypeScript**, bundled with **Vite**
- **React Router** for client-side routing
- **Tailwind CSS** with a small set of [shadcn/ui](https://ui.shadcn.com) components (button, card, input, label, toast)
- **Flutterwave Inline Checkout** for Mobile Money donations
- Deployed as a static site on **Netlify**

## Getting started

Requires Node.js 18+ and npm.

```bash
npm install
cp .env.example .env   # then add your Flutterwave public key
npm run dev            # http://localhost:8080
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload  |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint                            |

## Environment variables

| Variable                      | Description                                                                 |
| ----------------------------- | --------------------------------------------------------------------------- |
| `VITE_FLUTTERWAVE_PUBLIC_KEY` | Flutterwave **public** key (`FLWPUBK_TEST-…` for testing, `FLWPUBK-…` live) |

Only the public key belongs in this frontend. Never put the Flutterwave secret key or encryption key in the repo or in any `VITE_` variable — anything prefixed with `VITE_` is embedded in the browser bundle. In production, set the variable in the Netlify dashboard (Site configuration → Environment variables).

## Project structure

```
public/
  _redirects          Netlify rule that serves index.html for every route (SPA routing)
  favicon.ico, robots.txt
src/
  main.tsx            Entry point — mounts <App /> into index.html
  App.tsx             Route table (/, /about, /team, /shop, /contact, /donate, 404)
  index.css           Tailwind layers + theme colors (honey, forest, cream) as CSS variables
  pages/              One component per route
  components/         Page sections (Header, Footer, HeroSection, DonationForm, …)
  components/ui/      shadcn/ui primitives
  hooks/use-toast.ts  Toast notification state used by the donation form
  assets/             Images bundled by Vite
index.html            HTML shell, SEO meta tags, Flutterwave checkout script
tailwind.config.ts    Theme tokens and fonts
```

## Donations

`src/components/DonationForm.tsx` collects an amount and donor details, then opens Flutterwave's hosted checkout (`window.FlutterwaveCheckout`, loaded from `index.html`) with Mobile Money as the payment option. Flutterwave handles the payment itself; the site only shows a success or failure toast. Payments can be reviewed in the Flutterwave dashboard.

To test, use a `FLWPUBK_TEST-` key and the test phone numbers from the Flutterwave dashboard. To go live, complete Flutterwave business verification and switch the Netlify variable to the live public key.
