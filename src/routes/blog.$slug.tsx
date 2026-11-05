import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ChevronLeft, User } from "lucide-react";
import { BLOG_POSTS, getPostBySlug } from "@/data/blog-posts";
import { getRequestOrigin, toAbsoluteUrl, buildBreadcrumbLd } from "@/lib/site-url";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShareButtons } from "@/components/ShareButtons";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    const origin = await getRequestOrigin();
    return { post, origin };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article introuvable — NEOASSUR" }] };
    const origin = loaderData?.origin ?? "";
    const path = `/blog/${params.slug}`;
    const url = toAbsoluteUrl(origin, path);
    const imageUrl = toAbsoluteUrl(origin, post.image);
    return {
      meta: [
        { title: `${post.title} — NEOASSUR` },
        { name: "description", content: post.description },
        { name: "keywords", content: post.keywords.join(", ") },
        { name: "author", content: post.author },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: imageUrl },
        { property: "article:published_time", content: post.date },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "preload", as: "image", href: post.image, fetchpriority: "high" } as unknown as { rel: string; href: string },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: imageUrl,
            datePublished: post.date,
            dateModified: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "NEOASSUR",
              logo: { "@type": "ImageObject", url: toAbsoluteUrl(origin, "/logo.png") },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            articleSection: post.category,
            keywords: post.keywords.join(", "),
          }),
        },
        buildBreadcrumbLd(origin, [
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]),
        ...(post.faq && post.faq.length
          ? [{
              type: "application/ld+json" as const,
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: post.faq.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
              }),
            }]
          : []),
      ],

    };
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p>Article introuvable. <Link to="/blog" className="text-[#2481B1] underline">Retour au blog</Link></p>
    </div>
  ),
});

function BlogPostPage() {
  const { post, origin } = Route.useLoaderData();
  const shareUrl = toAbsoluteUrl(origin, `/blog/${post.slug}`);
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="NEOASSUR" className="h-9 w-auto" />
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-[#2481B1]">Accueil</Link>
            <Link to="/blog" className="hover:text-[#2481B1]">Blog</Link>
          </nav>
        </div>
      </header>

      <main>
        <article className="mx-auto max-w-3xl px-4 py-12">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Accueil", to: "/" },
              { name: "Blog", to: "/blog" },
              { name: post.title },
            ]}
          />

          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#2481B1] hover:underline"
          >
            <ChevronLeft className="size-4" /> Retour au blog
          </Link>


          <div className="mt-6">
            <span className="rounded-full bg-[#62CAFF]/20 px-3 py-1 text-xs font-semibold text-[#2481B1]">
              {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">{post.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1.5"><User className="size-4" />{post.author}</span>
              <span className="inline-flex items-center gap-1.5"><Calendar className="size-4" />{formattedDate}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="size-4" />{post.readingTime} de lecture</span>
            </div>

            <div className="mt-6 border-t border-gray-100 pt-6">
              <ShareButtons
                url={shareUrl}
                title={post.title}
                text={post.description}
              />
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <img
              src={post.image}
              alt={post.title}
              width={1024}
              height={640}
              fetchPriority="high"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          <div className="prose prose-lg mt-10 max-w-none">
            {post.content.map((block: { heading?: string; paragraph: string }, i: number) => (
              <div key={i} className="mb-6">
                {block.heading && (
                  <h2 className="mt-8 text-2xl font-semibold text-gray-900">{block.heading}</h2>
                )}
                <p className="mt-3 leading-relaxed text-gray-700">{block.paragraph}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-gray-700">Cet article vous a été utile ? Partagez-le.</p>
            <ShareButtons
              url={shareUrl}
              title={post.title}
              text={post.description}
            />
          </div>

          {post.relatedLanding && (
            <div className="mt-8 rounded-2xl border-2 border-[#2481B1]/20 bg-gradient-to-br from-[#F0F9FF] to-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2481B1]">Aller plus loin</p>
              <h2 className="mt-2 text-xl font-semibold text-gray-900">{post.relatedLanding.label}</h2>
              <p className="mt-2 text-gray-600">{post.relatedLanding.description}</p>
              <Link
                to={post.relatedLanding.to}
                className="mt-4 inline-block rounded-full bg-[#2481B1] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#1e6d97]"
              >
                {post.relatedLanding.label} →
              </Link>
            </div>
          )}

          {post.faq && post.faq.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-900">Questions fréquentes</h2>
              <div className="mt-4 space-y-4">
                {post.faq.map((f: { question: string; answer: string }, i: number) => (
                  <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-sm">
                    <summary className="cursor-pointer list-none font-semibold text-gray-900 marker:hidden">
                      {f.question}
                    </summary>
                    <p className="mt-3 text-gray-700">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#62CAFF] via-[#2481B1] to-[#45C0FF] p-8 text-center text-white">
            <h2 className="text-2xl font-semibold">Besoin d'un conseil personnalisé ?</h2>
            <p className="mt-2 text-white/90">
              Obtenez un devis gratuit en moins de 2 minutes avec un expert NEOASSUR.
            </p>
            <Link
              to="/"
              hash="contact"
              className="mt-5 inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#2481B1] shadow hover:bg-gray-100"
            >
              Demander mon devis
            </Link>
          </div>

        </article>

        <section className="border-t border-gray-200 bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-semibold text-gray-900">À lire également</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1024}
                      height={640}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium text-[#2481B1]">{p.category}</p>
                    <h3 className="mt-2 font-semibold leading-snug text-gray-900 group-hover:text-[#2481B1]">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#121212] py-10 text-center text-sm text-white/70">
        © {new Date().getFullYear()} NEOASSUR. Tous droits réservés.
      </footer>
    </div>
  );
}
