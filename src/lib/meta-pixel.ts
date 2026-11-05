/**
 * Meta Pixel — loads ONLY after the visitor accepts advertising cookies.
 * No personal data (name, email, phone) is ever sent to Meta.
 */

export const META_PIXEL_ID = "1696211194785514";
export const CONSENT_KEY = "neo_cookie_consent";

export type FbqFunction = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  push?: FbqFunction;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

export function hasAdConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

let initialized = false;

/** Loads the pixel and fires PageView. Does nothing unless consent was given. */
export function initMetaPixel() {
  if (typeof window === "undefined" || !hasAdConsent()) return;
  const w = window;

  if (!w.fbq) {
    const n = function (...args: unknown[]) {
      if (typeof n.callMethod === "function") n.callMethod.apply(n, args);
      else n.queue?.push(args);
    } as FbqFunction;
    w.fbq = n;
    if (!w._fbq) w._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    const t = document.createElement("script");
    t.async = true;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(t);
  }

  w.fbq?.("consent", "grant");
  if (!initialized) {
    w.fbq?.("init", META_PIXEL_ID, {}, { agent: "lovable" });
    w.fbq?.("track", "PageView");
    initialized = true;
  }
}

/** Applies a consent change immediately (no reload). */
export function setMetaConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  if (granted) initMetaPixel();
  else window.fbq?.("consent", "revoke");
}

export interface TrackLeadParams {
  eventId: string;
  insuranceType?: string;
}

/** Fires 'Lead' once per real form submission, only with consent. */
export function trackMetaLead(params: TrackLeadParams) {
  if (!hasAdConsent()) return;
  initMetaPixel();
  window.fbq?.(
    "track",
    "Lead",
    { content_name: params.insuranceType || "Devis", currency: "EUR" },
    { eventID: params.eventId },
  );
}

/** Fires 'Contact' on phone/email clicks, only with consent. */
export function trackMetaContact(method: "phone" | "email") {
  if (!hasAdConsent()) return;
  initMetaPixel();
  window.fbq?.("track", "Contact", { content_category: method });
}

/** Global click-to-call listener for tel: links. */
export function setupClickToCallTracking() {
  if (typeof document === "undefined") return;
  document.addEventListener("click", (e) => {
    const anchor = (e.target as HTMLElement | null)?.closest("a");
    const href = anchor?.getAttribute("href") || "";
    if (href.startsWith("tel:")) trackMetaContact("phone");
    else if (href.startsWith("mailto:")) trackMetaContact("email");
  });
}
