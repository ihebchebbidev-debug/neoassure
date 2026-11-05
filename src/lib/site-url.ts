import { createIsomorphicFn } from "@tanstack/react-start";

/**
 * Canonical site origin. The app is served from multiple domains
 * (neo-assur.fr, neoassur.com, neo-assur.com, neoassur.fr with/without www)
 * — we force a single canonical host so Google consolidates ranking signals
 * and does not treat the variants as duplicate content.
 */
export const CANONICAL_ORIGIN = "https://www.neo-assur.fr";

/**
 * Returns the canonical origin for the site. We always return the same host
 * regardless of which mirror domain served the request, so canonical/og:url
 * tags and structured-data URLs stay consistent across all domains.
 */
export const getRequestOrigin = createIsomorphicFn()
  .client(() => CANONICAL_ORIGIN)
  .server(() => CANONICAL_ORIGIN);

/** Prefix a root-relative path with an origin to produce an absolute URL. */
export function toAbsoluteUrl(origin: string, path: string): string {
  if (!path) return path;
  if (/^https?:\/\//i.test(path)) return path;
  if (!origin) return `${CANONICAL_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Build BreadcrumbList structured data (schema.org) for a route.
 */
export function buildBreadcrumbLd(
  origin: string,
  items: { name: string; path: string }[],
) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: toAbsoluteUrl(origin, it.path),
      })),
    }),
  };
}
