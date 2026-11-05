import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Menu, X,
  CheckCircle2, ChevronRight, ChevronDown, ShieldCheck, BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { LeadContactForm } from "@/components/LeadContactForm";
import { buildBreadcrumbLd, toAbsoluteUrl } from "@/lib/site-url";
import logo from "@/assets/logo.png";

export type ProductAdvantage = { icon: LucideIcon; title: string; text: string };
export type ProductFaq = { q: string; a: string };
export type ProductReason = { title: string; text: string };

export type RelatedLink =
  | { kind: "blog"; slug: string; anchor: string; description: string }
  | {
      kind: "page";
      to:
        | "/mutuelle-sante"
        | "/assurance-emprunteur"
        | "/assurance-obseques"
        | "/mutuelle-senior-pas-cher"
        | "/comparateur-mutuelle-senior"
        | "/mutuelle-senior-70-ans"
        | "/loi-lemoine"
        | "/changer-assurance-emprunteur"
        | "/contrat-obseques"
        | "/assurance-deces"
        | "/complementaire-sante"
        | "/comparateur-mutuelle-sante"
        | "/devis-mutuelle-sante"
        | "/meilleure-mutuelle-sante"
        | "/mutuelle-sante-famille"
        | "/mutuelle-sante-etudiant"
        | "/mutuelle-sante-independant"
        | "/mutuelle-sante-entreprise"
        | "/mutuelle-sante-fonctionnaire"
        | "/mutuelle-sante-expatrie"
        | "/mutuelle-optique"
        | "/mutuelle-dentaire"
        | "/assurance-hospitalisation"
        | "/prix-mutuelle-sante"
        | "/tarif-mutuelle-sante"
        | "/mutuelle-sante-pas-chere"
        | "/mutuelle-sante-sans-delai-carence"
        | "/mutuelle-sante-en-ligne"
        | "/mutuelle-sante-paris"
        | "/mutuelle-sante-lyon"
        | "/mutuelle-sante-marseille"
        | "/mutuelle-sante-toulouse"
        | "/mutuelle-sante-bordeaux";
      anchor: string;
      description: string;
    };


export type ProductPageData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  keywords?: string[];
  image: string;
  introTitle: string;
  introText: string;
  advantages: ProductAdvantage[];
  coverageTitle: string;
  coverage: string[];
  reasonsTitle: string;
  reasons: ProductReason[];
  faqs: ProductFaq[];
  related?: RelatedLink[];
};

/* ---------------- SEO structured data ---------------- */
export function buildProductJsonLd(data: ProductPageData, path: string, origin = "") {
  const absPath = toAbsoluteUrl(origin, path);
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    serviceType: data.eyebrow,
    description: data.subtitle,
    url: absPath,
    provider: {
      "@type": "Organization",
      name: "NEOASSUR",
      telephone: "+33187665610",
      email: "contact@neo-assur.fr",
    },
    areaServed: { "@type": "Country", name: "France" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = buildBreadcrumbLd(origin, [
    { name: "Accueil", path: "/" },
    { name: data.eyebrow, path },
  ]);
  return [
    { type: "application/ld+json", children: JSON.stringify(serviceLd) },
    { type: "application/ld+json", children: JSON.stringify(faqLd) },
    breadcrumbLd,
  ];
}

/* ---------------- Top bar ---------------- */
function TopBar() {
  return (
    <div className="bg-brand-dark text-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <a href="tel:+33187665610" className="flex items-center gap-2 hover:text-brand-blue">
            <Phone className="size-3.5 shrink-0 text-brand-red" aria-hidden="true" />
            <span className="truncate">01 87 66 56 10</span>
          </a>
          <a href="mailto:contact@neo-assur.fr" className="hidden items-center gap-2 hover:text-brand-blue sm:flex">
            <Mail className="size-3.5 shrink-0 text-brand-red" aria-hidden="true" />
            contact@neo-assur.fr
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-4 text-white/80">
          <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="size-3.5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="size-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="size-3.5" /></a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Mutuelle Santé", to: "/mutuelle-sante" },
    { label: "Comparateur", to: "/comparateur-mutuelle-sante" },
    { label: "Assurance Emprunteur", to: "/assurance-emprunteur" },
    { label: "Assurance Obsèques", to: "/assurance-obseques" },
    { label: "Blog", to: "/blog" },
    { label: "Devis Gratuit", to: "/devis-mutuelle-sante" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:py-4">
        <Link to="/" aria-label="NEOASSUR — Accueil" className="flex shrink-0 items-center">
          <img src={logo} alt="NEOASSUR" className="h-8 w-auto sm:h-9" />
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-red">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="tel:+33187665610"
            className="hidden items-center gap-2 rounded-md bg-brand-red px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Nous Appeler
          </a>
          <a
            href="tel:+33187665610"
            aria-label="Appeler NEOASSUR"
            className="inline-flex size-11 items-center justify-center rounded-md bg-brand-red text-white shadow-sm sm:hidden"
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-brand-dark lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Navigation mobile" className="border-t border-border bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm font-medium text-foreground/85 hover:bg-brand-soft hover:text-brand-red"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-between">
        <Link to="/"><img src={logo} alt="NEOASSUR" className="h-8 w-auto brightness-0 invert" /></Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/80">
          <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
          <span className="text-white/20" aria-hidden="true">|</span>
          <Link to="/politique-de-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
          <span className="text-white/20" aria-hidden="true">|</span>
          <Link to="/cgu" className="hover:text-white">CGU</Link>
        </nav>
        <div className="flex items-center gap-3 text-white/80">
          <a href="#" aria-label="Facebook" className="flex size-7 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><Facebook className="size-3.5" /></a>
          <a href="#" aria-label="Instagram" className="flex size-7 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><Instagram className="size-3.5" /></a>
          <a href="#" aria-label="Twitter" className="flex size-7 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><Twitter className="size-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="flex size-7 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><Linkedin className="size-3.5" /></a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] text-white/60">
        Copyright © 2026 NEOASSUR
      </div>
    </footer>
  );
}

/* ---------------- FAQ item ---------------- */
function FaqItem({ q, a }: ProductFaq) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-dark"
      >
        {q}
        <ChevronDown className={`size-4 shrink-0 text-brand-blue transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/70">{a}</p>}
    </div>
  );
}

/* ---------------- Product page ---------------- */
export function ProductPage({ data }: { data: ProductPageData }) {
  return (
    <div className="min-h-dvh bg-white">
      <TopBar />
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <Breadcrumbs
              items={[
                { name: "Accueil", to: "/" },
                { name: data.eyebrow },
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <section className="bg-brand-soft">

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-red">
                {data.eyebrow}
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px] lg:leading-[1.08]">
                {data.title}
              </h1>
              <p className="mt-4 max-w-lg text-base text-foreground/70">{data.subtitle}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition hover:brightness-110"
                >
                  Devis gratuit en 2 min
                  <ChevronRight className="size-4" />
                </a>
                <a
                  href="tel:+33187665610"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/15 bg-white px-6 py-3.5 text-sm font-semibold text-brand-dark transition hover:border-brand-blue hover:text-brand-blue"
                >
                  <Phone className="size-4" />
                  01 87 66 56 10
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={data.image}
                alt={data.introTitle}
                width={1024}
                height={768}
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_20px_50px_-20px_rgba(3,38,68,0.35)]"
              />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">{data.introTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/70">{data.introText}</p>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-brand-soft py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-bold text-brand-dark sm:text-3xl">Les avantages clés</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.advantages.map((a) => (
                <div key={a.title} className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(3,38,68,0.25)]">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-blue/10">
                    <a.icon className="size-6 text-brand-blue" strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-brand-dark">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">{data.coverageTitle}</h2>
              <ul className="mt-6 space-y-3">
                {data.coverage.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-red" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-brand-navy p-8 text-white">
              <ShieldCheck className="size-9 text-brand-blue" />
              <h3 className="mt-4 text-xl font-bold">{data.reasonsTitle}</h3>
              <div className="mt-5 space-y-5">
                {data.reasons.map((r) => (
                  <div key={r.title}>
                    <p className="flex items-center gap-2 text-sm font-semibold">
                      <BadgeCheck className="size-4 text-brand-blue" />
                      {r.title}
                    </p>
                    <p className="mt-1 pl-6 text-sm text-white/70">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related resources — internal linking */}
        {data.related && data.related.length > 0 && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-center text-2xl font-bold text-brand-dark sm:text-3xl">
                Guides & ressources associés
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-foreground/70">
                Approfondissez le sujet avec nos guides d'experts et nos autres solutions d'assurance.
              </p>
              <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {data.related.map((r) => (
                  <li key={r.anchor} className="rounded-2xl border border-border bg-white p-6 transition hover:border-brand-blue hover:shadow-[0_10px_40px_-20px_rgba(3,38,68,0.25)]">
                    {r.kind === "blog" ? (
                      <Link
                        to="/blog/$slug"
                        params={{ slug: r.slug }}
                        className="block"
                      >
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-blue">
                          Guide
                        </span>
                        <h3 className="mt-3 text-base font-bold leading-snug text-brand-dark hover:text-brand-red">
                          {r.anchor}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/70">{r.description}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
                          Lire l'article <ChevronRight className="size-3.5" />
                        </span>
                      </Link>
                    ) : (
                      <Link to={r.to} className="block">
                        <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-red">
                          Solution
                        </span>
                        <h3 className="mt-3 text-base font-bold leading-snug text-brand-dark hover:text-brand-red">
                          {r.anchor}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-foreground/70">{r.description}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
                          Découvrir <ChevronRight className="size-3.5" />
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="bg-brand-soft py-16">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center text-2xl font-bold text-brand-dark sm:text-3xl">Questions fréquentes</h2>
            <div className="mt-8 space-y-3">
              {data.faqs.map((f) => (
                <FaqItem key={f.q} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA + form */}
        <section className="cta-gradient">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-14 text-center text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">Recevez votre devis personnalisé gratuitement</h2>
            <p className="max-w-xl text-sm text-white/75">
              Un conseiller vous rappelle sous 24h, sans engagement. Données 100% confidentielles.
            </p>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-brand-navy shadow"
              >
                Recevoir mon devis gratuit
                <ChevronRight className="size-4 text-brand-blue" />
              </a>
              <a href="tel:+33187665610" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                <Phone className="size-4" />
                01 87 66 56 10
              </a>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-white py-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Demandez votre devis gratuit</h2>
              <p className="mt-3 text-sm text-foreground/70">
                Remplissez le formulaire, un expert vous rappelle rapidement et gratuitement.
              </p>
            </div>
            <LeadContactForm />
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA quoteHref="#contact" />
      <ExitIntentPopup quoteHref="#contact" />
    </div>
  );
}
