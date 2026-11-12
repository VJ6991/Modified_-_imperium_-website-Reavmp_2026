# imperiumapp.com (Next.js rebuild)

The new Imperium website. It replaces the PHP `imperium-lite` build in the parent folder once approved.
It is self-contained: nothing in this folder depends on files outside it.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out (runs scripts/flatten-rsc.mjs afterwards)
npm run lint
npm run typecheck
```

Next.js 16.4 (App Router), React 19, Tailwind CSS 4, TypeScript. Read `node_modules/next/dist/docs/`
before changing framework code: this version differs from older Next.js.

## Deploy

`npm run build` produces plain HTML/CSS/JS in `out/`. Upload the **contents** of `out/` to the web root.

- **Apache (current host):** `out/.htaccess` handles HTTPS/www, all legacy 301 redirects, caching
  and security headers. `out/contact.php` receives the enquiry form and emails `sales@imperiumapp.com`
  (needs PHP `mail()` or swap in SMTP). Check the redirect map against a Search Console export first.
- **Other static hosts (Vercel, Netlify, S3/CloudFront):** port the `.htaccess` redirects to that host's
  config and replace `contact.php` with a form service or serverless function.
- `scripts/flatten-rsc.mjs` must run after every build (it is part of `npm run build`). Without it,
  client-side link prefetching requests files the static export did not write, and logs 404s.

## Where things live

| What | Where |
| --- | --- |
| All page copy and data | `src/content/*.ts` (site facts, solutions, products, industries, services, case studies, insights, client logos) |
| Pages | `src/app/**/page.tsx` |
| Shared components | `src/components/` (`blocks.tsx` = page sections, `ui.tsx` = buttons and line markers) |
| Design tokens | `src/app/globals.css` (`@theme`) |
| SEO helpers and JSON-LD | `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `public/llms.txt` |
| Brand assets | `public/brand/`, `public/clients/` (WebP), `public/og.png` |

To add a solution, product, industry, case study or article: add an entry to the matching file in
`src/content/`. The page, navigation, footer and sitemap pick it up automatically. Update `public/llms.txt` by hand.

## Before launch: items marked CONFIRM

Search the code for `CONFIRM` and `DRAFT`. In short:

1. Inaipi and Listen IQ relationship wording (`src/content/products.ts`).
2. Legal entity name, DMCC or FZCO (`src/content/site.ts`), and the LinkedIn URL.
3. Permission for every client logo (`src/content/clients.ts`) and each case study customer (`src/content/caseStudies.ts`).
4. Positioning line and pillar names.
5. Contact form mailbox and CRM routing (`public/contact.php`).
6. Privacy notice legal review (`src/app/privacy/page.tsx`).
7. Named author and reviewer for each Insights article (`src/content/insights.ts`).
8. Logo as SVG (currently derived from a 244×42 PNG), real photography and high-resolution iConnect screenshots.
9. Items taken from the 2026 Batelco partner deck: the company figures (200+ customers, 75+ specialists,
   1.8M+ conversations; the deck's "17+ years" conflicts with the 2005 founding date), the leadership list,
   the client-by-sector list (`clientIndex` in `src/content/clients.ts`), the Orange case study, the iConnect
   roadmap, and the "Part of the Imperium group" wording for Inaipi and Listen IQ.
10. From the Listen IQ operator decks (Batelco, Ethio telecom): the six operators and their customer
    references on `/partners/` (`src/content/operators.ts`), the Ethio telecom case study, and Listen IQ use cases.
11. Leadership headshots (shown in the deck) as image files, if the About page should carry photos.
