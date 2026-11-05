import { useState, useRef, type FormEvent } from "react";
import { isValidFrenchPhone, normalizePhoneE164, isValidEmail } from "@/lib/validation";
import { getAttribution, generateEventId } from "@/lib/attribution";
import { hasAdConsent, trackMetaLead } from "@/lib/meta-pixel";

const LEAD_SUBMISSION_STORAGE_KEY = "neoassura_lead_submission";
const DUPLICATE_LEAD_MESSAGE =
  "Vous avez déjà rempli ce formulaire et vous êtes déjà inscrit dans notre base. Si vous avez une autre demande, merci de nous contacter à contact@neo-assur.fr.";

const EMPTY_LEAD_FIELDS = {
  age: "",
  marital_status: "",
  city: "",
  postal_code: "",
  insurance_type: "",
  current_insurer: "",
  budget_max: "",
  preferred_contact: "",
  preferred_time: "",
  message: "",
};

const field =
  "w-full rounded-md border border-border bg-white px-4 py-3.5 text-base sm:text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30";

function getStoredLeadSubmission() {
  if (typeof window === "undefined") return null;

  try {
    const rawValue = window.localStorage.getItem(LEAD_SUBMISSION_STORAGE_KEY);
    if (!rawValue) return null;

    const parsed = JSON.parse(rawValue) as { email?: string; phone?: string } | null;
    if (!parsed || typeof parsed !== "object") return null;

    const email = typeof parsed.email === "string" ? parsed.email : "";
    const phone = typeof parsed.phone === "string" ? parsed.phone : "";

    if (!email && !phone) return null;
    return { email, phone };
  } catch {
    return null;
  }
}

function saveLeadSubmission(email: string, phone: string) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(
      LEAD_SUBMISSION_STORAGE_KEY,
      JSON.stringify({
        email: email.toLowerCase(),
        phone,
        submittedAt: new Date().toISOString(),
      }),
    );
  } catch {
    // Ignore storage failures silently.
  }
}

export function LeadContactForm({ variant = "default" }: { variant?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const isSubmittingRef = useRef(false);


  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmittingRef.current) return;

    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, unknown> = { ...EMPTY_LEAD_FIELDS };
    fd.forEach((v, k) => {
      payload[k] = v;
    });

    const fullName = String(payload.full_name ?? "").trim();
    const firstName = String(payload.first_name ?? "").trim();
    const rawPhone = String(payload.phone ?? "").trim();
    const rawEmail = String(payload.email ?? "").trim();
    const normalizedStoredPhone = normalizePhoneE164(rawPhone);
    const storedSubmission = getStoredLeadSubmission();

    if (storedSubmission) {
      const samePhone = storedSubmission.phone && storedSubmission.phone === normalizedStoredPhone;
      const sameEmail =
        storedSubmission.email && storedSubmission.email.toLowerCase() === rawEmail.toLowerCase();

      if (samePhone || sameEmail) {
        setAlreadySubmitted(true);
        setError(DUPLICATE_LEAD_MESSAGE);
        return;
      }
    }

    if (fullName.length < 2) {
      setError("Veuillez indiquer votre nom.");
      return;
    }
    if (firstName.length < 2) {
      setError("Veuillez indiquer votre prénom.");
      return;
    }
    if (!isValidFrenchPhone(rawPhone)) {
      setError("Veuillez saisir un numéro de téléphone français valide (ex: 06 12 34 56 78).");
      return;
    }
    if (!isValidEmail(rawEmail)) {
      setError("Veuillez saisir une adresse email valide (ex: contact@exemple.fr).");
      return;
    }

    // Normalized phone in international E.164 format for Meta and CRM
    const normalizedPhone = normalizePhoneE164(rawPhone);
    payload.phone = normalizedPhone;
    payload.email = rawEmail.toLowerCase();
    payload.first_name = firstName;
    payload.vorname = firstName; // Fix PHP backend field naming mismatch
    payload.full_name = fullName;

    // Attribution & Meta Tracking IDs
    const attribution = getAttribution();
    const eventId = generateEventId("lead");

    payload.event_id = eventId;
    payload.variant = variant;
    // Google Ads clicks (gclid) without UTMs are recorded as google / cpc
    payload.utm_source = attribution.utm_source ||
      (attribution.gclid ? "google" : attribution.fbclid ? "facebook" : null);
    payload.utm_medium = attribution.utm_medium ||
      (attribution.gclid ? "cpc" : attribution.fbclid ? "paid" : null);
    payload.utm_campaign = attribution.utm_campaign || null;
    payload.utm_content = attribution.utm_content || null;
    payload.utm_term = attribution.utm_term || null;
    payload.fbclid = attribution.fbclid || null;
    const adConsent = hasAdConsent();
    payload.ad_consent = adConsent;
    payload.fbp = adConsent ? attribution.fbp || null : null;
    payload.fbc = adConsent ? attribution.fbc || null : null;
    payload.source_page = typeof window !== "undefined" ? window.location.href : null;
    // Keep the ORIGINAL referrer of the visit (e.g. facebook.com), not the previous internal page
    payload.referrer =
      attribution.referrer || (typeof document !== "undefined" ? document.referrer : null);

    isSubmittingRef.current = true;
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({ success: false, error: "Réponse invalide" }));
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Erreur lors de l'envoi de votre demande");
      }

      // 1. Immediately fire Meta Lead event from the success callback
      trackMetaLead({
        eventId,
        insuranceType: String(payload.insurance_type || "Mutuelle Santé"),
      });

      saveLeadSubmission(String(payload.email), String(payload.phone));
      setAlreadySubmitted(true);
      setSuccess(true);
      form.reset();

      // 2. Redirect to thank you page passing the exact same eventId for deduplication
      if (typeof window !== "undefined") {
        window.location.href = `/thankyou/?eventId=${encodeURIComponent(eventId)}`;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'envoi");
      isSubmittingRef.current = false;
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-brand-soft p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <h3 className="text-lg font-bold tracking-wide text-brand-dark">
          DEMANDEZ VOTRE DEVIS GRATUIT
        </h3>
        <span className="text-xs font-semibold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full self-start sm:self-auto">
          Sans engagement • Réponse en 2 min
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead_nom" className="block text-xs font-medium text-slate-700 mb-1">
            Nom <span className="text-red-500">*</span>
          </label>
          <input
            id="lead_nom"
            name="full_name"
            required
            autoComplete="family-name"
            aria-label="Nom"
            placeholder="Ex: Dupont"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="lead_prenom" className="block text-xs font-medium text-slate-700 mb-1">
            Prénom <span className="text-red-500">*</span>
          </label>
          <input
            id="lead_prenom"
            name="first_name"
            required
            autoComplete="given-name"
            aria-label="Prénom"
            placeholder="Ex: Jean"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="lead_tel" className="block text-xs font-medium text-slate-700 mb-1">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            id="lead_tel"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            aria-label="Téléphone"
            placeholder="06 12 34 56 78"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="lead_email" className="block text-xs font-medium text-slate-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="lead_email"
            name="email"
            type="email"
            inputMode="email"
            required
            autoComplete="email"
            aria-label="Email"
            placeholder="jean.dupont@exemple.fr"
            className={field}
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
          ⚠️ {error.includes("déjà") ? (
            <>
              {error} <a href="mailto:contact@neo-assur.fr" className="font-semibold underline">contact@neo-assur.fr</a>
            </>
          ) : (
            error
          )}
        </div>
      )}

      {success && (
        <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3 text-sm text-green-700">
          ✓ Merci ! Votre demande a bien été envoyée. Redirection en cours…
        </div>
      )}

      <button
        type="submit"
        disabled={loading || alreadySubmitted}
        className="mt-6 w-full sm:w-auto min-h-[48px] rounded-md bg-brand-red px-8 py-3.5 text-base font-bold text-white shadow-md shadow-brand-red/25 transition hover:brightness-110 active:scale-[0.99] disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {loading ? "Envoi en cours…" : alreadySubmitted ? "Déjà inscrit" : "Recevoir mon devis gratuit"}
      </button>

      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        🔒 Vos données sont protégées (RGPD/CNIL). En validant ce formulaire, vous acceptez d'être
        recontacté gratuitement par un conseiller NEOASSUR. Aucune donnée n'est cédée à des tiers.
      </p>
    </form>
  );
}
