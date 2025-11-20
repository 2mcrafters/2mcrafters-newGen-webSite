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
