## 2M Crafters · Agence digitale moderne

Projet Next.js 16 (App Router) prêt pour une agence digitale francophone : TypeScript, Tailwind CSS v4, SEO optimisé et smooth scroll Lenis aligné sur les sensations Darkroom.

### ✨ Caractéristiques principales

- **Stack** : Next.js App Router, TypeScript, Tailwind CSS 4, ESLint + Prettier.
- **Langue & SEO** : métadonnées FR, Open Graph/Twitter configurés dans `lib/seo.ts`, polices Inter & Space Grotesk.
- **Animations** : Provider Lenis avec hooks `useLenis` & `useLenisScroll`, helpers (parallax, fade, velocity cards) et section démonstration `SmoothShowcase`.
- **Structure** : `app/`, `components/` (layout, sections, motion, providers), `lib/` (données, SEO, utils), `public/` (logo, OG cover).
- **UI** : sections Hero, Alliances (marquee), Services (cards icônes), Creative Stack, Expertises, SmoothShowcase, Case Studies, **ScrollMotionLab (horizontal + zoom)**, Process, Contact — tout en français.
- **Assets & icônes** : `lucide-react` pour une iconographie premium, Unsplash whitelisté dans `next.config.ts`, et `gsap` prêt pour ScrollTrigger.

### 📁 Structure rapide

```

### 🛠️ Turbopack & Windows path-length hygiene

1. **Shorten the project path.** Move the repo to a shallow location like `C:\dev\projects\2mcrafters-react` so `.next/dev/static/chunks` stays below Windows MAX_PATH limits. Use PowerShell:
	````powershell
	mkdir C:\dev\projects\2mcrafters-react
	robocopy "<current-long-path>" "C:\dev\projects\2mcrafters-react" /MIR
	cd C:\dev\projects\2mcrafters-react
	````
2. **Clean the build cache:**
	````powershell
	npm run clean
	````
3. **Reinstall dependencies:**
	````powershell
	npm run reinstall
	````
4. **Launch using the Turbopack-safe script:**
	````powershell
	npm run dev
	````
5. If you still need Turbopack, only run it from a short path or after mapping the folder to a drive letter: `SUBST X: "<long path parent>"`, `cd X:\2mcrafters-react`, run `npm run dev:turbopack`, then `SUBST X: /D`.
6. The `dev:webpack` script also forces `--turbo=false` when debugging.

This workflow prevents long-path source-map errors and keeps Turbopack panics away.
app/
	layout.tsx          # Layout racine + provider Lenis + header/footer
	page.tsx            # Page d'accueil assemblant les sections
components/
	layout/             # Header / Footer
	motion/             # ParallaxWrapper, FadeInOnScroll, VelocityCard
	providers/          # SmoothScrollProvider + hooks
	sections/           # Hero, Allies, Services, CreativeStack, Expertises, SmoothShowcase, CaseStudies, ScrollMotionLab, Process, Contact
lib/
	data.ts             # Contenu statique (nav, services...)
	seo.ts              # Métadonnées FR
	utils.ts            # helpers divers
public/
	logo.svg, og.svg    # Assets branding & partage
```

### 🚀 Mise en route

```bash
npm install
npm run dev
```

Visitez [http://localhost:3000](http://localhost:3000) pour voir la page.

### ✅ Scripts

- `npm run dev` – serveur de développement
- `npm run build` – build de production Next.js
- `npm run start` – serveur sur le build
- `npm run lint` – ESLint (config Next + Prettier)
- `npm run typecheck` – vérification TypeScript
- `npm run format` – Prettier `--write`

### 🌀 Smooth scroll & animations

`components/providers/SmoothScrollProvider.tsx`

- Lenis 1.1 avec boucle `requestAnimationFrame`, fallback `prefers-reduced-motion`, ancrages natifs.
- Hooks :
	- `useLenis(callback)` → accède à l'instance Lenis
	- `useLenisScroll(handler)` → reçoit `scrollY`, `velocity`, `progress`, `direction`
- Helpers prêts à l'emploi : `ParallaxWrapper`, `FadeInOnScroll`, `VelocityCard`
- Section démo : `components/sections/SmoothShowcase.tsx`

**Paramètres ajustables** (prop `config` du provider) :

| Paramètre | Effet | Valeur par défaut |
| --- | --- | --- |
| `duration` | Durée globale de l'animation | `1.1` |
| `lerp` | Inertie (0 = direct, 0.08-0.15 = premium) | `0.12` |
| `touchMultiplier` | Sensibilité mobile | `1.1` |
| `anchorOffset` | Décalage des ancres (header sticky) | `-96` px |
| `autoRaf` | Active la boucle intégrée | `true` |

Modifier dans `app/layout.tsx` :

```tsx
<SmoothScrollProvider config={{ lerp: 0.1, duration: 1.2, anchorOffset: -80 }}>
	{/* layout */}
</SmoothScrollProvider>
```

### 🎢 ScrollMotionLab & GSAP bridge

- `components/sections/ScrollMotionLabSection.tsx` combine :
	- sticky horizontal scroll piloté par Lenis
	- cartes zoom/rotation synchronisées au progress
	- passerelle facultative vers `gsap/ScrollTrigger` (timelines scrubbées)
- `components/visuals/{AuroraBackground,ScrollTrail,ScrollProgressBar}` apportent un halo dynamique, une trace flottante et une barre de progression.
- GSAP est chargé dynamiquement : si vous ajoutez vos propres timelines, utilisez `useLenis` pour accéder à `lenis` et réutiliser le proxy configuré dans la section.

### 🧠 SEO & contenu

- `lib/seo.ts` centralise titres, descriptions, Open Graph/Twitter.
- `public/og.svg` : visuel partagé.
- `app/layout.tsx` applique `lang="fr"` + polices.

### 📌 À suivre

- Remplacer les textes/visuels placeholder par ceux de 2M Crafters.
- Ajouter des pages dynamiques (`/services`, `/blog`) ou CMS (Sanity, Contentful) selon besoins.
- Brancher un formulaire (Resend, Formspree, etc.).

Bon build !

### 🛠 Troubleshooting: Windows path length & Turbopack

If you see Turbopack errors during `next dev` like "path length exceeds max length of filesystem" or internal panics, it's commonly caused by very long absolute paths on Windows. Here are two safe workarounds:

- Disable Turbopack for development (webpack):

```bash
npm run dev # defaults to Turbopack OFF in this repo via package.json (cross-env NEXT_TURBOPACK=0)
```

- If you need to reproduce with Turbopack enabled for testing, use the provided script:

```bash
npm run dev:turbopack
```

- Shorten the path using a temporary drive letter (SUBST) to avoid OS MAX_PATH issues:

```powershell
# Run in an elevated PowerShell or CMD prompt
SUBST X: "C:\Users\HP\Documents\works of crft\Notre-Crafters\new Gen 2026 upper\new generation 2k26\2mcrafters.com\public_html\workspace\new version\2mcrafters-react"
cd X:;
npm run dev
# remove when done
SUBST X: /D
```

- Alternatively, move the repo closer to a shorter path (e.g., `C:\projects\...`) or enable Windows long path support if available.

If the server still returns a 500 on Hostinger after a successful local build, check:

- Apache error logs for `.htaccess`/rewrite errors (Hostinger panel or cPanel logs)
- That you uploaded the `out/` folder from `npm run build:static` and used `public_html` as the root
- No server-only API routes are called on a static export (we replaced newsletter server route with a mailto fallback).

### ✉️ Email delivery (contact + newsletter forms)

- The `/api/contact` endpoint uses Nodemailer to deliver contact requests and newsletter signups directly to your inbox. Supply SMTP credentials through your environment before running the dev server or deploying:

```
EMAIL_HOST=smtp.exemple.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=info@example.com
EMAIL_PASS=supersecret
EMAIL_FROM="2M Crafters <info@example.com>"  # optional
EMAIL_TO=owner@example.com                            # optional, falls back to EMAIL_USER
```

- Restart `npm run dev` after setting the vars. The UI shows success/error feedback and the server returns JSON, so you can also hit `/api/contact` from Postman to verify the mailer works before opening the forms.

### 🌍 SEO & Performance guardrails (2025 best practices)

- **Meta + Semantic structure**: `lib/seo.ts` now includes intent-rich keywords spanning digital solutions, web development, IT services, SaaS, cloud, AI, cybersecurity, digital marketing, UX/UI, e-commerce, automation, integrations, hosting, performance, branding, and content creation. `app/layout.tsx` emits Organization, WebSite, and Breadcrumb JSON-LD to help Google, Bing, DuckDuckGo, and Yandex understand the brand hierarchy.
- **Robots & sitemap**: `public/robots.txt` already allows all agents, declares the canonical host, and points to `sitemap.xml`. Re-run `npm run build:static` when routes change, and submit the sitemap to Google Search Console/Bing Webmaster Tools for faster index updates.
- **Core Web Vitals across browsers**: Fonts use `next/font` with `display: swap`, and hero imagery has explicit sizes. Keep the main layout lean so LCP stays under ~2.5s on Chrome, Edge, Firefox, Safari, and Opera. Use Lighthouse, WebPageTest, or SpeedCurve to monitor LCP, CLS, and TBT/FID (goal: CLS < 0.1, TBT < 150ms).
- **Image & video optimization**: Deliver AVIF/WebP assets at the correct resolution. Compress via Squoosh or `imagemin`, enable `loading="lazy"` for offscreen elements, and avoid auto-playing videos. Next.js `Image` component can be used for responsive srcsets later when `images.unoptimized` is removed.
- **Caching + Secure headers**: `next.config.ts` injects HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COEP, COOP, and CORP headers plus a `Cache-Control: public, max-age=31536000, immutable` policy for `/`. Combine with CDN caching to serve users globally and keep HTTPS/TLS certificates renewed via Let’s Encrypt or your host.
- **Accessibility & ARIA**: The header already has `aria-label` for the menu button and uses semantic tags. Continue auditing with Axe Developer Tools to ensure contrast, focus outlines, and screen reader announcements meet WCAG 2.1 AA.

### 🧹 Clearing stale dev locks

- When `next dev` complains about `Unable to acquire lock ... .next/dev/lock`, stop any stray Node/Next processes and drop the lock:

````powershell
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Remove-Item -LiteralPath ".next\\dev\\lock" -Force -ErrorAction Ignore
````

- Restart the server with `npm run dev` (Webpack) or `npm run dev:turbopack` after mapping to a shorter path.

### 🧮 Baseline browser mapping warning

- Keep `baseline-browser-mapping` fresh so the warning disappears:

````powershell
npm i baseline-browser-mapping@latest -D
````

- If you need Turbopack, temporarily map the repo to a drive letter (`SUBST X: ...`), run the build, then remove the mapping.
