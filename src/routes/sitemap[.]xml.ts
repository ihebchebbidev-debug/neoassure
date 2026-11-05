import { createFileRoute } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/data/blog-posts";

const BASE_URL = "https://www.neo-assur.fr";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },

          // Pilier mutuelle santé grand public
          { path: "/mutuelle-sante", changefreq: "weekly", priority: "1.0" },
          { path: "/complementaire-sante", changefreq: "monthly", priority: "0.9" },
          { path: "/comparateur-mutuelle-sante", changefreq: "weekly", priority: "0.95" },
          { path: "/devis-mutuelle-sante", changefreq: "weekly", priority: "0.95" },
          { path: "/meilleure-mutuelle-sante", changefreq: "monthly", priority: "0.9" },

          // Pages audience
          { path: "/mutuelle-sante-famille", changefreq: "monthly", priority: "0.9" },
          { path: "/mutuelle-sante-etudiant", changefreq: "monthly", priority: "0.9" },
          { path: "/mutuelle-sante-independant", changefreq: "monthly", priority: "0.9" },
          { path: "/mutuelle-sante-entreprise", changefreq: "monthly", priority: "0.9" },
          { path: "/mutuelle-sante-fonctionnaire", changefreq: "monthly", priority: "0.9" },
          { path: "/mutuelle-sante-expatrie", changefreq: "monthly", priority: "0.85" },

          // Pages garanties / prix
          { path: "/mutuelle-optique", changefreq: "monthly", priority: "0.85" },
          { path: "/mutuelle-dentaire", changefreq: "monthly", priority: "0.85" },
          { path: "/assurance-hospitalisation", changefreq: "monthly", priority: "0.85" },
          { path: "/prix-mutuelle-sante", changefreq: "monthly", priority: "0.85" },
          { path: "/tarif-mutuelle-sante", changefreq: "monthly", priority: "0.85" },
          { path: "/mutuelle-sante-pas-chere", changefreq: "monthly", priority: "0.85" },
          { path: "/mutuelle-sante-sans-delai-carence", changefreq: "monthly", priority: "0.8" },
          { path: "/mutuelle-sante-en-ligne", changefreq: "monthly", priority: "0.8" },

          // Pages seniors historiques
          { path: "/mutuelle-senior-pas-cher", changefreq: "monthly", priority: "0.85" },
          { path: "/comparateur-mutuelle-senior", changefreq: "monthly", priority: "0.85" },
          { path: "/mutuelle-senior-70-ans", changefreq: "monthly", priority: "0.85" },

          // Local SEO
          { path: "/mutuelle-sante-paris", changefreq: "monthly", priority: "0.8" },
          { path: "/mutuelle-sante-lyon", changefreq: "monthly", priority: "0.8" },
          { path: "/mutuelle-sante-marseille", changefreq: "monthly", priority: "0.8" },
          { path: "/mutuelle-sante-toulouse", changefreq: "monthly", priority: "0.8" },
          { path: "/mutuelle-sante-bordeaux", changefreq: "monthly", priority: "0.8" },

          // Autres produits
          { path: "/assurance-emprunteur", changefreq: "monthly", priority: "0.85" },
          { path: "/assurance-obseques", changefreq: "monthly", priority: "0.85" },
          { path: "/loi-lemoine", changefreq: "monthly", priority: "0.8" },
          { path: "/changer-assurance-emprunteur", changefreq: "monthly", priority: "0.8" },
          { path: "/contrat-obseques", changefreq: "monthly", priority: "0.8" },
          { path: "/assurance-deces", changefreq: "monthly", priority: "0.8" },

          // Blog
          { path: "/blog", changefreq: "weekly", priority: "0.9" },
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            lastmod: p.date,
            changefreq: "monthly",
            priority: "0.7",
          })),

          // Légal
          { path: "/mentions-legales", changefreq: "yearly", priority: "0.3" },
          { path: "/cgu", changefreq: "yearly", priority: "0.3" },
          { path: "/politique-de-confidentialite", changefreq: "yearly", priority: "0.3" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            "lastmod" in e && e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            `  </url>`,
          ].filter(Boolean).join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
