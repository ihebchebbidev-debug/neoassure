import { useEffect, useRef, useState } from "react";
import { X, Gift, Phone, ChevronRight } from "lucide-react";

const STORAGE_KEY = "neoassur_exit_intent_shown";
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24h

/**
 * Exit-intent lead capture popup.
 * Desktop: fires on mouse leaving the viewport toward top.
 * Mobile: fires after 30s dwell time + scroll depth > 40%.
 * Shown at most once every 24h per visitor.
 */
export function ExitIntentPopup({
  quoteHref = "/#contact",
  phone = "+33187665610",
  phoneDisplay = "01 87 66 56 10",
}: {
  quoteHref?: string;
  phone?: string;
  phoneDisplay?: string;
}) {
  const [open, setOpen] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Cooldown check
    try {
      const last = Number(localStorage.getItem(STORAGE_KEY) || "0");
      if (last && Date.now() - last < COOLDOWN_MS) return;
    } catch {
      // localStorage disabled — proceed
    }

    const fire = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      setOpen(true);
      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch {}
    };

    // Desktop: mouseleave toward top
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && window.innerWidth >= 1024) fire();
    };

    // Mobile fallback: 30s dwell + 40% scroll
    const start = Date.now();
    const onScroll = () => {
      if (window.innerWidth >= 1024) return;
      const dwell = Date.now() - start;
      const scrolled =
        (window.scrollY + window.innerHeight) /
        Math.max(document.documentElement.scrollHeight, 1);
      if (dwell > 30_000 && scrolled > 0.4) fire();
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fermer"
          className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-brand-dark/60 shadow-sm hover:bg-white hover:text-brand-dark"
        >
          <X className="size-5" />
        </button>

        <div className="bg-gradient-to-br from-brand-red to-brand-navy p-6 text-white sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full bg-white/20">
              <Gift className="size-5" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/85">
              Offre exclusive
            </div>
          </div>
          <h2 id="exit-intent-title" className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
            Attendez ! Économisez jusqu'à 40% sur votre mutuelle
          </h2>
          <p className="mt-2 text-sm text-white/85 sm:text-base">
            Recevez votre devis 100% gratuit en 2 minutes. Un conseiller expert vous
            rappelle sous 24h — sans engagement.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <ul className="space-y-2 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-brand-red">✓</span>
              <span><strong>312€/an</strong> d'économies moyennes constatées</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-brand-red">✓</span>
              <span>+25 assureurs comparés en temps réel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-brand-red">✓</span>
              <span>Sans questionnaire médical, sans engagement</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={quoteHref}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/25 transition hover:brightness-110"
            >
              Obtenir mon devis gratuit
              <ChevronRight className="size-4" />
            </a>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/15 bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:border-brand-blue hover:text-brand-blue"
            >
              <Phone className="size-4" />
              Ou appelez-nous : {phoneDisplay}
            </a>
          </div>
          <p className="mt-4 text-center text-[11px] text-foreground/50">
            Devis en 2 min · Sans engagement · Données confidentielles
          </p>
        </div>
      </div>
    </div>
  );
}
