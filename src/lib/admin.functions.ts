import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://luccibyey.com.tn/neoassure";

const input = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(200),
  resource: z.enum(["leads", "visitors"]),
});

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

/** Checks admin credentials on the server (never shipped to the browser) and proxies the data. */
export const fetchAdminData = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => input.parse(d))
  .handler(async ({ data }) => {
    const env = process.env;
    const user = (env.ADMIN_USERNAME || env.VITE_ADMIN_USERNAME || env.ADMIN_USER || "").trim();
    const pass = (env.ADMIN_PASSWORD || env.VITE_ADMIN_PASSWORD || env.ADMIN_PASS || "").trim();
    if (!user || !pass) {
      const missing = [!user && "ADMIN_USERNAME", !pass && "ADMIN_PASSWORD"].filter(Boolean).join(", ");
      return {
        success: false as const,
        error: `Accès admin non configuré (manquant sur le serveur : ${missing}). Ajoutez-les dans Vercel → Settings → Environment Variables (Production), puis redéployez.`,
        unauthorized: true,
      };
    }
    if (!safeEqual(data.username, user) || !safeEqual(data.password, pass)) {
      return { success: false as const, error: "Identifiants invalides", unauthorized: true };
    }
    const file = data.resource === "leads" ? "get_all_submissions.php" : "get_all_visitors.php";
    try {
      const res = await fetch(`${API_BASE}/${file}`, { headers: { Accept: "application/json" } });
      const text = await res.text();
      const json = JSON.parse(text) as { success?: boolean; error?: string; data?: unknown[] };
      if (!json.success) return { success: false as const, error: json.error || "Erreur API" };
      return { success: true as const, data: (json.data || []) as Record<string, string | number | null>[] };
    } catch {
      return { success: false as const, error: "Serveur de données injoignable." };
    }
  });
