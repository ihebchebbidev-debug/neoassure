import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import logo from "@/assets/logo.png";

export function LegalLayout({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="NEOASSUR" className="h-8 w-auto" />
          </Link>
          <Link to="/" className="text-sm font-medium text-brand-dark hover:underline">← Retour à l'accueil</Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-bold text-brand-dark md:text-4xl">{title}</h1>
        {intro && <p className="mt-3 text-base text-gray-600">{intro}</p>}
        <div className="prose prose-slate mt-8 max-w-none prose-headings:text-brand-dark prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-6 prose-h3:text-lg prose-a:text-brand-blue prose-strong:text-brand-dark">
          {children}
        </div>

        <section className="mt-12 rounded-xl border border-black/10 bg-gray-50 p-6">
          <h2 className="!mt-0 text-xl font-semibold text-brand-dark">Nous contacter</h2>
          <ul className="mt-3 space-y-1 text-sm text-gray-700">
            <li><strong>Adresse :</strong> 49-51 rue de Ponthieu, 75008 Paris, France</li>
            <li><strong>Téléphone :</strong> <a href="tel:+33187665610" className="text-brand-blue hover:underline">01 87 66 56 10</a></li>
            <li><strong>Email :</strong> <a href="mailto:contact@neo-assur.fr" className="text-brand-blue hover:underline">contact@neo-assur.fr</a></li>
            <li><strong>ORIAS :</strong> n° 14001288 — <a href="https://www.orias.fr/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">consulter le registre</a></li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-brand-dark text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-xs text-white/70 md:flex-row md:justify-between">
          <span>© 2026 NEOASSUR</span>
          <nav className="flex flex-wrap items-center gap-4">
            <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
            <Link to="/cgu" className="hover:text-white">CGU</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
