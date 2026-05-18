/**
 * Canonical site origin for SEO artifacts (sitemap, robots, JSON-LD,
 * OG image URLs, etc.). Read from NEXT_PUBLIC_SITE_URL when present,
 * falls back to the production placeholder.
 */
export const SITE_URL: string = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://4kproduction.co"
).replace(/\/+$/, "");

export const SITE_NAME = "4K Production";
export const SITE_TAGLINE = "Cinematic Wedding Films & Portraits";
export const SITE_DESCRIPTION =
  "An editorial wedding house crafting heirloom films, portraits and bound albums for discerning couples across Lahore, Dubai and London.";
