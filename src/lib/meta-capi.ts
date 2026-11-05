/**
 * Meta Conversions API (Server-Side CAPI) Utility
 * Dispatches server-side Lead events to Meta Graph API with SHA-256 hashed user data
 * and event_id deduplication.
 */

import { META_PIXEL_ID } from "./meta-pixel";

export interface MetaCapiLeadPayload {
  eventId: string;
  sourceUrl?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  clientIp?: string;
  clientUserAgent?: string;
  fbp?: string;
  fbc?: string;
  insuranceType?: string;
}

/**
 * Standard SHA-256 hashing using Web Crypto (compatible with Vercel, Node 18+, Cloudflare, Bun).
 */
async function sha256(input: string): Promise<string> {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return "";
  const msgUint8 = new TextEncoder().encode(normalized);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function sendMetaCapiLead(
  params: MetaCapiLeadPayload,
): Promise<{ success: boolean; message?: string }> {
  const token =
    process.env.META_CAPI_TOKEN || process.env.META_ACCESS_TOKEN || process.env.FB_ACCESS_TOKEN;

  // Prepare normalized and hashed user data
  const userData: Record<string, unknown> = {};

  if (params.email) {
    userData.em = [await sha256(params.email)];
  }
  if (params.phone) {
    // Digits only with international prefix (e.g. 33612345678)
    const cleanPhone = params.phone.replace(/[^0-9]/g, "");
    userData.ph = [await sha256(cleanPhone)];
  }
  if (params.firstName) {
    userData.fn = [await sha256(params.firstName)];
  }
  if (params.lastName) {
    userData.ln = [await sha256(params.lastName)];
  }
  if (params.clientIp) {
    userData.client_ip_address = params.clientIp.split(",")[0].trim();
  }
  if (params.clientUserAgent) {
    userData.client_user_agent = params.clientUserAgent;
  }
  if (params.fbp) {
    userData.fbp = params.fbp;
  }
  if (params.fbc) {
    userData.fbc = params.fbc;
  }

  const eventPayload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id: params.eventId,
        event_source_url: params.sourceUrl || "https://www.neo-assur.fr/",
        action_source: "website",
        user_data: userData,
        custom_data: {
          currency: "EUR",
          value: 0,
          content_name: params.insuranceType || "Devis",
        },
      },
    ],
    partner_agent: "lovable",
    ...(process.env.META_TEST_EVENT_CODE
      ? { test_event_code: process.env.META_TEST_EVENT_CODE }
      : {}),
  };

  if (!token) {
    console.info(
      `[Meta CAPI] Server Lead event prepared with event_id: ${params.eventId}. Set META_CAPI_TOKEN in environment to forward directly to Meta Graph API.`,
    );
    return { success: true, message: "Token not configured, event prepared and logged" };
  }

  try {
    const url = `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventPayload),
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error("[Meta CAPI Error]", response.status, JSON.stringify(result));
      return { success: false, message: result.error?.message || "CAPI error" };
    }

    console.info(`[Meta CAPI Success] Event ${params.eventId} recorded by Meta CAPI.`);
    return { success: true };
  } catch (err) {
    console.error("[Meta CAPI Network Error]", err);
    return { success: false, message: err instanceof Error ? err.message : "Network error" };
  }
}
