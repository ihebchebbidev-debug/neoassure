/**
 * Marketing Attribution & Tracking Helper.
 * Captures UTM parameters, fbclid, gclid, and Meta cookies (_fbp, _fbc).
 * Persists them in sessionStorage and cookies across multi-page navigation.
 */

export interface AttributionData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  fbp?: string;
  fbc?: string;
  landing_page?: string;
  referrer?: string;
}

const STORAGE_KEY = "neo_attribution_data";
const COOKIE_KEY = "neo_attribution";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^|;)\\s*${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days = 30) {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;expires=${expires};SameSite=Lax`;
}

/**
 * Initializes attribution tracking on page load.
 * Captures UTMs and fbclid from URL search parameters, writes _fbc cookie if fbclid is present.
 */
export function initAttribution(): AttributionData {
  if (typeof window === "undefined") return {};

  const searchParams = new URLSearchParams(window.location.search);
  const currentUrl = window.location.href.split("?")[0];
  const referrer = typeof document !== "undefined" ? document.referrer : "";

  let stored: AttributionData = {};
  try {
    const rawSession = sessionStorage.getItem(STORAGE_KEY);
    if (rawSession) stored = JSON.parse(rawSession);
  } catch {
    // fallback to cookie if sessionStorage is not accessible
    try {
      const rawCookie = getCookie(COOKIE_KEY);
      if (rawCookie) stored = JSON.parse(rawCookie);
    } catch {
      /* cookie inaccessible */
    }
  }

  const utm_source = searchParams.get("utm_source") || stored.utm_source;
  const utm_medium = searchParams.get("utm_medium") || stored.utm_medium;
  const utm_campaign = searchParams.get("utm_campaign") || stored.utm_campaign;
  const utm_content = searchParams.get("utm_content") || stored.utm_content;
  const utm_term = searchParams.get("utm_term") || stored.utm_term;
  const fbclid = searchParams.get("fbclid") || stored.fbclid;
  const gclid = searchParams.get("gclid") || stored.gclid;

  // Handle Meta _fbc cookie: if fbclid is in the URL, create or update _fbc
  const urlFbclid = searchParams.get("fbclid");
  if (urlFbclid) {
    const creationTime = Date.now();
    const fbcValue = `fb.1.${creationTime}.${urlFbclid}`;
    setCookie("_fbc", fbcValue, 90);
  }

  const fbp = getCookie("_fbp") || stored.fbp;
  const fbc = getCookie("_fbc") || stored.fbc;

  const attribution: AttributionData = {
    utm_source: utm_source || undefined,
    utm_medium: utm_medium || undefined,
    utm_campaign: utm_campaign || undefined,
    utm_content: utm_content || undefined,
    utm_term: utm_term || undefined,
    fbclid: fbclid || undefined,
    gclid: gclid || undefined,
    fbp: fbp || undefined,
    fbc: fbc || undefined,
    landing_page: stored.landing_page || currentUrl,
    referrer: stored.referrer || referrer || undefined,
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    /* storage quota exceeded or disabled */
  }
  try {
    setCookie(COOKIE_KEY, JSON.stringify(attribution), 30);
  } catch {
    /* cookie disabled */
  }

  return attribution;
}

/**
 * Returns the currently active attribution data (from sessionStorage or cookies).
 */
export function getAttribution(): AttributionData {
  if (typeof window === "undefined") return {};

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      // Refresh dynamic cookies _fbp / _fbc if they became available later
      if (!data.fbp) data.fbp = getCookie("_fbp") || undefined;
      if (!data.fbc) data.fbc = getCookie("_fbc") || undefined;
      return data;
    }
  } catch {
    /* storage inaccessible */
  }

  try {
    const rawCookie = getCookie(COOKIE_KEY);
    if (rawCookie) return JSON.parse(rawCookie);
  } catch {
    /* cookie inaccessible */
  }

  return initAttribution();
}

/**
 * Generates a unique event ID for deduplicating Meta browser Pixel and Conversions API events.
 */
export function generateEventId(prefix = "lead"): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  return `${prefix}_${timestamp}_${random}`;
}
