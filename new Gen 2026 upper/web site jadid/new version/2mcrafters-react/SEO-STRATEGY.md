# SEO & Keyword Strategy

## Objectives
- Surface the Crafters brand across French, English, and Arabic search intent while keeping the experience coherent for visitors on the single-site layout.
- Reinforce authority with metadata, structured data, and canonical/alternate links so search engines understand the agency, the blog, and the languages served.
- Provide a repeatable checklist for verifying the metadata updates and future additions.

## Key Changes
- Expanded `baseMetadata` to include deduplicated, multilingual keywords, a tri-language description, rich Open Graph data, multiple language alternates, and explicit robots directives, which now flow through every page thanks to `RootLayout`.
- Enriched the `/blog` page metadata with a multi-language description, targeted keywords, Open Graph article settings, language alternates, and `robots` instructions to keep that hub indexed.
- Added the `logo caree_003.png` favicon so the browser tab consistently displays the agency mark across languages.
- Set explicit `sizes` attributes on the partner logo carousel’s `next/image` usage so those fill-mode assets no longer trigger console warnings about missing sizes.

## Keyword Focus
- **French**: agence digitale, expérience utilisateur, stratégie digitale, transformation numérique, innovation web.
- **English**: digital agency, product strategy, Next.js development, brand strategy, SEO services.
- **Arabic**: وكالة رقمية، تجربة المستخدم، تسويق رقمي، تحسين محركات البحث، التحول الرقمي.

## Verification Steps
1. `npm run lint` (already run after the metadata changes to confirm ESLint/TypeScript compatibility).
2. Visit the homepage and `/blog` in the browser, then inspect the `<head>` (View Source) to ensure the multilingual titles, descriptions, keywords, and `<link rel="alternate" ...>` tags appear as expected.
3. Run Lighthouse (or your preferred SEO audit) to validate the friendly titles/descriptions and Open Graph metadata and flag opportunities such as structured data enhancements.

## Next Steps
- Localize landing copy and navigation so the alternate links lead to language-specific content (currently the same layout, but future localization can point to `/fr`, `/en`, `/ar`).
- Add a dynamically generated sitemap or RSS feed that references the language-specific URLs and blog entries.
- Monitor Search Console/analytics for keyword performance and add additional blog entries targeting any gaps in untranslated markets.
- Added a floating "Retour en haut" button (`components/ui/ScrollToTopButton.tsx`) on the right side with a white circle and blue arrow so it stays visible and branded after scrolling 320px.
- Wire the newsletter form to a backend so collected emails actually reach `2m.crafters@gmail.com` via SMTP (see `app/api/newsletter/route.ts`). The endpoint requires the following env vars: `NEWSLETTER_SMTP_HOST/PORT/USER/PASS`, optional `NEWSLETTER_SMTP_SECURE` (`true` for TLS) and `NEWSLETTER_TARGET_EMAIL` if you want a different recipient.
