/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Site identity and font names used by layouts, components, and SEO metadata.
 *
 * Fonts flow into   → astro.config.mjs  (Astro 7 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Colors & radius live in ONE place: src/styles/theme.css (@theme block).
 * Edit theme.css directly — do not duplicate values here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'My Pastoral Supervision',
  tagline: 'Integrity of heart and skilful hands',
  description:
    'Online and in-person pastoral supervision for Christian ministers, chaplains, church workers, and pastoral carers across Australia, provided by a member of the Australasian Association of Supervision.',
  url: 'https://www.mypastoralsupervision.com.au',
  locale: 'en_AU',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: 'Inter',
    display: 'Oswald',
  },
} as const;

export type Brand = typeof brand;
