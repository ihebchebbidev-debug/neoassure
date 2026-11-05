import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { sendMetaCapiLead } from "@/lib/meta-capi";
import { isValidFrenchPhone, normalizePhoneE164 } from "@/lib/validation";

const leadSchema = z.object({
  full_name: z.string().trim().min(2).max(100),
  first_name: z.string().trim().max(100).optional().or(z.literal("")),
  vorname: z.string().trim().max(100).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(30)
    .refine(isValidFrenchPhone, {
      message: "Numéro de téléphone invalide (format français ou international requis)",
    }),
  email: z.string().trim().email().max(200).optional().or(z.literal("")),
  age: z.coerce.number().int().min(18).max(120).optional().or(z.literal("")),
  marital_status: z.string().max(50).optional().or(z.literal("")),
  city: z.string().max(100).optional().or(z.literal("")),
  postal_code: z.string().max(20).optional().or(z.literal("")),
  insurance_type: z.string().max(100).optional().or(z.literal("")),
  current_insurer: z.string().max(100).optional().or(z.literal("")),
  budget_max: z.coerce.number().nonnegative().max(100000).optional().or(z.literal("")),
  preferred_contact: z.string().max(20).optional().or(z.literal("")),
  preferred_time: z.string().max(50).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  source_page: z.string().max(1024).optional().nullable(),
  referrer: z.string().max(500).optional().nullable(),
  utm_source: z.string().max(150).optional().nullable(),
  utm_medium: z.string().max(150).optional().nullable(),
  utm_campaign: z.string().max(150).optional().nullable(),
  utm_content: z.string().max(150).optional().nullable(),
  utm_term: z.string().max(150).optional().nullable(),
  fbclid: z.string().max(255).optional().nullable(),
  fbp: z.string().max(100).optional().nullable(),
  fbc: z.string().max(150).optional().nullable(),
  event_id: z.string().max(100).optional().nullable(),
  variant: z.string().max(50).optional().nullable(),
  ad_consent: z.boolean().optional(),
});

const ENDPOINT = `${import.meta.env.VITE_API_BASE_URL || "https://luccibyey.com.tn/neoassure"}/submit_form.php`;

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ success: false, error: "Requête invalide" }, { status: 400 });
        }

        const parsed = leadSchema.safeParse(raw);
        if (!parsed.success) {
          return Response.json(
            {
              success: false,
              error: "Validation: " + parsed.error.issues.map((i) => i.message).join(", "),
            },
            { status: 400 },
          );
        }

        const clientIp =
          request.headers.get("x-forwarded-for") ||
          request.headers.get("x-real-ip") ||
          request.headers.get("cf-connecting-ip") ||
          "";
        const clientUa = request.headers.get("user-agent") || "";

        const payload: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(parsed.data)) {
          if (k === "ad_consent") continue;
          if (v === "" || v === undefined || v === null) continue;
          payload[k] = v;
        }

        // Ensure vorname is always populated for backend compatibility
        if (!payload.vorname && payload.first_name) {
          payload.vorname = payload.first_name;
        }
        if (!payload.first_name && payload.vorname) {
          payload.first_name = payload.vorname;
        }

        if (typeof payload.phone === "string") {
          payload.phone = normalizePhoneE164(payload.phone);
        }

        // Pass real client IP and User-Agent to the PHP backend
        if (clientIp) payload.client_ip = clientIp;
        if (clientUa) payload.client_user_agent = clientUa;

        try {
          const upstream = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(clientIp ? { "X-Forwarded-For": clientIp } : {}),
              ...(clientUa ? { "User-Agent": clientUa } : {}),
            },
            body: JSON.stringify(payload),
          });

          const text = await upstream.text();
          let data: { success?: boolean; error?: string; id?: number } = {};
          try {
            data = JSON.parse(text);
          } catch {
            /* upstream may return non-JSON */
          }

          if (!upstream.ok || data.success === false) {
            console.error("Lead upstream error", upstream.status, text);
            return Response.json(
              { success: false, error: data.error || "Service temporairement indisponible." },
              { status: 502 },
            );
          }

          // Trigger server-side Meta Conversions API (CAPI)
          const eventId = String(
            payload.event_id || `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          );
          // Only report to Meta if the visitor accepted advertising cookies.
          if (parsed.data.ad_consent === true) sendMetaCapiLead({
            eventId,
            sourceUrl: typeof payload.source_page === "string" ? payload.source_page : undefined,
            clientIp,
            clientUserAgent: clientUa,
            fbp: typeof payload.fbp === "string" ? payload.fbp : undefined,
            fbc: typeof payload.fbc === "string" ? payload.fbc : undefined,
            insuranceType:
              typeof payload.insurance_type === "string" ? payload.insurance_type : undefined,
          }).catch((capiErr) => {
            console.error("[CAPI Background Error]", capiErr);
          });

          return Response.json({ success: true, id: data.id, event_id: eventId });
        } catch (err) {
          console.error("Lead network error", err);
          return Response.json(
            { success: false, error: "Service temporairement indisponible." },
            { status: 502 },
          );
        }
      },
    },
  },
});
