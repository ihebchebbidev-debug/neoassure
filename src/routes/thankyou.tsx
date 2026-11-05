import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thankyou")({
  head: () => ({
    meta: [
      { title: "Merci — NEOASSUR" },
      { name: "description", content: "Votre demande de devis a bien été envoyée." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  // The Lead event is sent once by the form itself (after consent) — not here.
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-brand-dark">Merci !</h1>
      <p className="mt-4 text-lg text-foreground/80">
        Votre demande de devis a bien été envoyée. Un conseiller expert NEOASSUR vous rappelle
        rapidement et gratuitement.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="rounded-md bg-brand-red px-6 py-3 font-semibold text-white shadow transition hover:brightness-110"
        >
          Retour à l'accueil
        </Link>
        <a
          href="tel:+33187665610"
          className="inline-flex items-center gap-2 rounded-md border border-brand-dark/20 bg-white px-6 py-3 font-semibold text-brand-dark hover:bg-slate-50"
        >
          Besoin urgent ? Appelez le 01 87 66 56 10
        </a>
      </div>
    </main>
  );
}
