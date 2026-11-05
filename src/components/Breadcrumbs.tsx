import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = {
  /** Visible label */
  name: string;
  /** Root-relative path (e.g. "/blog"). Omitted on the current (last) item. */
  to?: string;
};

/**
 * Accessible, visible breadcrumb navigation.
 *
 * Pair with `buildBreadcrumbLd` (see src/lib/site-url.ts) to emit matching
 * BreadcrumbList structured data in the route `head()` so Google renders the
 * breadcrumb trail in search results.
 */
export function Breadcrumbs({
  items,
  className = "",
  tone = "light",
}: {
  items: Crumb[];
  className?: string;
  tone?: "light" | "dark";
}) {
  const base = tone === "dark" ? "text-white/70" : "text-gray-500";
  const linkHover = tone === "dark" ? "hover:text-white" : "hover:text-[#2481B1]";
  const current = tone === "dark" ? "text-white" : "text-gray-900";

  return (
    <nav aria-label="Fil d'Ariane" className={className}>
      <ol className={`flex flex-wrap items-center gap-1.5 text-sm ${base}`}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="size-3.5 shrink-0 opacity-60" aria-hidden="true" />}
              {isLast || !item.to ? (
                <span className={`font-medium ${current}`} aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.to} className={`inline-flex items-center gap-1 font-medium transition-colors ${linkHover}`}>
                  {i === 0 && <Home className="size-3.5" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
