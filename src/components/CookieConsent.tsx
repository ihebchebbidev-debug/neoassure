import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { CONSENT_KEY, initMetaPixel, setMetaConsent } from "@/lib/meta-pixel";

/** Call from any "Gérer mes cookies" link to reopen the banner. */
export function openCookieSettings() {
  window.dispatchEvent(new Event("neo-open-cookie-settings"));
}

type ConsentValue = "accepted" | "refused" | null;

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "accepted" || v === "refused") return v;
  return null;
}

export function setConsent(value: "accepted" | "refused") {
  localStorage.setItem(CONSENT_KEY, value);
  localStorage.setItem(
    CONSENT_KEY + "_record",
    JSON.stringify({ value, at: new Date().toISOString(), notice: "bandeau-v2" }),
  );
  // Also set a cookie so the static thankyou page can read it
  document.cookie = `${CONSENT_KEY}=${value};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
  setMetaConsent(value === "accepted");
}

/** Load the Meta Pixel and fire PageView (called with consent) */
export function loadMetaPixel() {
  initMetaPixel();
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    // Facebook tracking loads only after an explicit "accept".
    if (consent === "accepted") initMetaPixel();
    else if (consent === null) setVisible(true);
    const open = () => setVisible(true);
    const sync = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY) setMetaConsent(e.newValue === "accepted");
    };
    window.addEventListener("neo-open-cookie-settings", open);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("neo-open-cookie-settings", open);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const handleAccept = useCallback(() => {
    setConsent("accepted");
    setVisible(false);
  }, []);

  const handleRefuse = useCallback(() => {
    setConsent("refused");
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="true"
      className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Banner */}
      <div className="relative z-10 mx-4 mb-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:mb-0 sm:p-8">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-[#032644]">🍪 Gérer mes cookies</h2>
          <p className="mt-1 text-sm font-semibold text-[#2481B1]">C'est ici que ça se passe !</p>
        </div>

        {/* Body */}
        <div className="space-y-3 text-sm leading-relaxed text-[#032644]/80">
          <p>
            Nous utilisons des cookies et traceurs sur ce site à des fins de réalisation d'analyses
            statistiques et de publicité personnalisée.
          </p>
          <p>
            Vous pouvez accepter ou refuser ces cookies de manière globale en cliquant sur
            «&nbsp;Accepter et fermer&nbsp;» ou sur «&nbsp;Continuer sans accepter&nbsp;», mais
            aussi gérer vos préférences en cliquant sur «&nbsp;Paramétrer&nbsp;».
          </p>
        </div>

        {/* Privacy link */}
        <div className="mt-4">
          <Link
            to="/politique-de-confidentialite"
            className="text-xs text-[#2481B1] underline underline-offset-2 hover:no-underline"
          >
            Lire la politique de confidentialité
          </Link>
        </div>

        {/* Details panel (Paramétrer) */}
        {showDetails && (
          <div className="mt-4 rounded-lg border border-[#2481B1]/20 bg-[#f0f7fb] p-4 text-xs text-[#032644]/80">
            <p className="mb-2 font-semibold text-[#032644]">Détail des cookies utilisés :</p>
            <ul className="list-inside list-disc space-y-1.5">
              <li>
                <strong>Cookies essentiels</strong> — nécessaires au fonctionnement du site
                (toujours actifs).
              </li>
              <li>
                <strong>Cookies de mesure d'audience</strong> — nous aident à comprendre comment
                vous utilisez le site.
              </li>
              <li>
                <strong>Cookies publicitaires (Meta / Facebook Pixel)</strong> — permettent de
                mesurer l'efficacité de nos campagnes et d'afficher des publicités pertinentes.
              </li>
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={handleRefuse}
            className="flex-1 rounded-lg border border-[#032644]/15 bg-white px-4 py-3 text-sm font-semibold text-[#032644] transition hover:bg-gray-50"
          >
            Continuer sans accepter
          </button>
          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            className="flex-1 rounded-lg border border-[#2481B1]/30 bg-white px-4 py-3 text-sm font-semibold text-[#2481B1] transition hover:bg-[#f0f7fb]"
          >
            {showDetails ? "Masquer" : "Paramétrer"}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 rounded-lg bg-[#2481B1] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
          >
            Accepter et fermer
          </button>
        </div>
      </div>
    </div>
  );
}
