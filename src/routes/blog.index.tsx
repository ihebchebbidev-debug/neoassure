import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { z } from "zod";
import { BLOG_POSTS } from "@/data/blog-posts";
import { getRequestOrigin, toAbsoluteUrl, buildBreadcrumbLd } from "@/lib/site-url";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import logo from "@/assets/logo.png";
import ogDefault from "@/assets/og-default.jpg";

const PAGE_SIZE = 6;
const TOTAL_PAGES = Math.max(1, Math.ceil(BLOG_POSTS.length / PAGE_SIZE));

const searchSchema = z.object({
  page: z.coerce.number().int().min(1).max(TOTAL_PAGES).catch(1),
});

const pageUrl = (p: number) => (p === 1 ? "/blog" : `/blog?page=${p}`);

export const Route = createFileRoute("/blog/")({
  validateSearch: searchSchema,
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ match, loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const page = (match.search as { page?: number })?.page ?? 1;
    const canonical = toAbsoluteUrl(origin, pageUrl(page));
    const ogImage = toAbsoluteUrl(origin, ogDefault);
    const titleSuffix = page > 1 ? ` — Page ${page}` : "";
    const links: { rel: string; href: string }[] = [{ rel: "canonical", href: canonical }];
    if (page > 1) links.push({ rel: "prev", href: toAbsoluteUrl(origin, pageUrl(page - 1)) });
    if (page < TOTAL_PAGES) links.push({ rel: "next", href: toAbsoluteUrl(origin, pageUrl(page + 1)) });

    return {
      meta: [
        { title: `Blog NEOASSUR — Conseils mutuelle santé, emprunteur & prévoyance${titleSuffix}` },
        {
          name: "description",
          content:
            "Articles, guides et conseils d'experts NEOASSUR pour bien choisir votre mutuelle santé, assurance emprunteur et prévoyance. Économisez et protégez vos proches.",
        },
        { property: "og:title", content: `Blog NEOASSUR — Conseils et guides assurance${titleSuffix}` },
        {
          property: "og:description",
          content: "Tous nos articles pour bien choisir votre mutuelle et faire des économies.",
        },
        { property: "og:url", content: canonical },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { property: "og:image:width", content: "1216" },
        { property: "og:image:height", content: "640" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `Blog NEOASSUR — Conseils et guides assurance${titleSuffix}` },
        { name: "twitter:description", content: "Tous nos articles pour bien choisir votre mutuelle et faire des économies." },
        { name: "twitter:image", content: ogImage },
        ...(page > 1 ? [{ name: "robots", content: "noindex,follow" } as const] : []),
      ],
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog NEOASSUR",
            url: toAbsoluteUrl(origin, "/blog"),
            blogPost: BLOG_POSTS.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.description,
              datePublished: p.date,
              author: { "@type": "Organization", name: p.author },
              url: toAbsoluteUrl(origin, `/blog/${p.slug}`),
            })),
          }),
        },
        buildBreadcrumbLd(origin, [
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
      ],
    };
  },
  component: BlogIndex,
});

function BlogIndex() {
  const { page } = Route.useSearch();
  const start = (page - 1) * PAGE_SIZE;
  const posts = BLOG_POSTS.slice(start, start + PAGE_SIZE);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SimpleHeader />
      <main>
        <section className="bg-gradient-to-br from-[#62CAFF] via-[#2481B1] to-[#45C0FF] py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-sm uppercase tracking-widest opacity-90">Notre blog</p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">Conseils & guides assurance</h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Retrouvez nos articles d'experts pour bien choisir votre mutuelle santé, votre assurance
              emprunteur et préparer sereinement l'avenir.
            </p>
          </div>
        </section>

        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <Breadcrumbs items={[{ name: "Accueil", to: "/" }, { name: "Blog" }]} />
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-16">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="block"
                  aria-label={post.title}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={1024}
                      height={640}
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : "auto"}
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#2481B1]">
                      <span className="rounded-full bg-[#62CAFF]/20 px-2.5 py-1 font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500">· {post.readingTime}</span>
                    </div>
                    <h2 className="mt-3 text-lg font-semibold leading-snug text-gray-900 group-hover:text-[#2481B1]">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm text-gray-600">{post.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#2481B1]">
                      Lire l'article <ChevronRight className="size-4" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {TOTAL_PAGES > 1 && (
            <nav
              aria-label="Pagination du blog"
              className="mt-12 flex items-center justify-center gap-2"
            >
              {page > 1 ? (
                <Link
                  to="/blog"
                  search={{ page: page - 1 }}
                  rel="prev"
                  aria-label="Page précédente"
                  className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#2481B1] hover:text-[#2481B1]"
                >
                  <ChevronLeft className="size-4" /> Précédent
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400">
                  <ChevronLeft className="size-4" /> Précédent
                </span>
              )}

              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => {
                const active = p === page;
                return (
                  <Link
                    key={p}
                    to="/blog"
                    search={{ page: p }}
                    aria-label={`Page ${p}`}
                    aria-current={active ? "page" : undefined}
                    className={
                      "inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition " +
                      (active
                        ? "bg-[#2481B1] text-white shadow"
                        : "border border-gray-300 bg-white text-gray-700 hover:border-[#2481B1] hover:text-[#2481B1]")
                    }
                  >
                    {p}
                  </Link>
                );
              })}

              {page < TOTAL_PAGES ? (
                <Link
                  to="/blog"
                  search={{ page: page + 1 }}
                  rel="next"
                  aria-label="Page suivante"
                  className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#2481B1] hover:text-[#2481B1]"
                >
                  Suivant <ChevronRight className="size-4" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-400">
                  Suivant <ChevronRight className="size-4" />
                </span>
              )}
            </nav>
          )}
        </section>
      </main>
      <SimpleFooter />
    </div>
  );
}

function SimpleHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="NEOASSUR" className="h-9 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-[#2481B1]">Accueil</Link>
          <Link to="/blog" className="text-[#2481B1]">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

function SimpleFooter() {
  return (
    <footer className="bg-[#121212] py-10 text-center text-sm text-white/70">
      © {new Date().getFullYear()} NEOASSUR. Tous droits réservés.
    </footer>
  );
}
