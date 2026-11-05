export type LeadSource = "Facebook" | "Instagram" | "Google" | "Autre" | "Direct";

export const LEAD_SOURCES: LeadSource[] = ["Facebook", "Instagram", "Google", "Autre", "Direct"];

type Row = Record<string, string | number | null | undefined>;

const s = (v: unknown) => (v == null ? "" : String(v).toLowerCase());

/** Classifies a lead by where the visitor came from (UTM first, then click IDs, then referrer). */
export function getLeadSource(lead: Row): LeadSource {
  const utm = s(lead.utm_source);
  const ref = s(lead.referrer);
  const page = s(lead.source_page);
  const own = (r: string) => r.includes("neoassur");

  if (utm) {
    if (/(^|[^a-z])(ig|instagram)/.test(utm)) return "Instagram";
    if (/(fb|facebook|meta)/.test(utm)) return "Facebook";
    if (/google/.test(utm)) return "Google";
    return "Autre";
  }
  if (ref.includes("instagram.")) return "Instagram";
  if (lead.fbclid || ref.includes("facebook.") || ref.includes("fb.com") || ref.includes("fb.me"))
    return "Facebook";
  if (page.includes("gclid=") || ref.includes("google.")) return "Google";
  if (ref && !own(ref)) return "Autre";
  return "Direct";
}

export function getLeadCampaign(lead: Row): string {
  return lead.utm_campaign ? String(lead.utm_campaign) : "—";
}

/** "2026-09-14 10:22:00" → "2026-09-14" */
export function leadDay(lead: Row): string {
  return String(lead.created_at ?? "").slice(0, 10);
}
