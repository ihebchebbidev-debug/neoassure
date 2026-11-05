import { fetchAdminData } from "@/lib/admin.functions";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

export const Route = createFileRoute("/visitors")({
  head: () => ({
    meta: [
      { title: "Visiteurs – Admin" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: VisitorsPage,
});

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://luccibyey.com.tn/neoassure";
const AUTH_KEY = "neoassure_admin_auth";
function storedCreds() {
  try {
    const c = JSON.parse(sessionStorage.getItem(AUTH_KEY) || "{}");
    return { username: String(c.username || ""), password: String(c.password || "") };
  } catch {
    return { username: "", password: "" };
  }
}

type PageView = {
  id: number;
  page_url: string | null;
  page_title: string | null;
  referrer: string | null;
  device_type: string | null;
  duration_seconds: number;
  visited_at: string;
};

type Visitor = {
  id: number;
  ip_address: string;
  country: string | null;
  country_code: string | null;
  region_name: string | null;
  city: string | null;
  timezone: string | null;
  isp: string | null;
  device_type: string | null;
  browser: string | null;
  os: string | null;
  first_page: string | null;
  last_page: string | null;
  referrer: string | null;
  visit_count: number;
  page_view_count: number;
  total_duration: number;
  first_visit: string;
  last_visit: string;
  page_views: PageView[];
};

function fmtDuration(sec: number) {
  const s = Math.max(0, Math.round(sec || 0));
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const r = s % 60;
  if (m < 60) return `${m}m ${r}s`;
  const h = Math.floor(m / 60);
  return `${h}h ${m % 60}m`;
}

function fmtDate(d: string | null) {
  if (!d) return "—";
  const dt = new Date(d.replace(" ", "T"));
  if (isNaN(dt.getTime())) return d;
  return dt.toLocaleString("fr-FR");
}

function VisitorsPage() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(AUTH_KEY)) {
      setAuthed(true);
    }
  }, []);

  if (!authed) return <Login onOk={() => setAuthed(true)} />;
  return <Dashboard onLogout={() => { sessionStorage.removeItem(AUTH_KEY); setAuthed(false); }} />;
}

function Login({ onOk }: { onOk: () => void }) {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const r = await fetchAdminData({ data: { username: u, password: p, resource: "visitors" } });
    if ("unauthorized" in r && r.unauthorized) {
      setErr(r.error);
      return;
    }
    sessionStorage.setItem(AUTH_KEY, JSON.stringify({ username: u, password: p }));
    onOk();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <form onSubmit={submit} className="w-full max-w-sm rounded-xl border bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-slate-900">Espace Admin</h1>
        <p className="mt-1 text-sm text-slate-500">Connexion requise pour consulter les visiteurs.</p>
        <div className="mt-6 space-y-3">
          <input
            value={u} onChange={(e) => setU(e.target.value)}
            placeholder="Nom d'utilisateur" autoComplete="username"
            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:border-slate-500"
          />
          <input
            value={p} onChange={(e) => setP(e.target.value)}
            type="password" placeholder="Mot de passe" autoComplete="current-password"
            className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:border-slate-500"
          />
        </div>
        {err && <p className="mt-3 text-sm text-red-600">{err}</p>}
        <button type="submit" className="mt-5 w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          Se connecter
        </button>
      </form>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errorKind, setErrorKind] = useState<"network" | "api" | null>(null);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [selected, setSelected] = useState<Visitor | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    setErrorKind(null);
    try {
      const data = await fetchAdminData({ data: { ...storedCreds(), resource: "visitors" } });
      if (!data.success) throw new Error(data.error || "Erreur inconnue de l'API");
      setVisitors((data.data || []) as unknown as Visitor[]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erreur";
      // A TypeError from fetch = the endpoint is unreachable (not uploaded / CORS / offline).
      const isNetwork = e instanceof TypeError || /Failed to fetch|NetworkError|Load failed/i.test(msg);
      setErrorKind(isNetwork ? "network" : "api");
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);


  const filtered = useMemo(() => {
    if (!q.trim()) return visitors;
    const needle = q.toLowerCase();
    return visitors.filter((v) =>
      [v.ip_address, v.country, v.region_name, v.city, v.device_type, v.browser, v.os, v.isp, v.last_page]
        .some((val) => val != null && String(val).toLowerCase().includes(needle))
    );
  }, [visitors, q]);

  const stats = useMemo(() => {
    const totalViews = visitors.reduce((a, v) => a + (v.page_view_count || 0), 0);
    const countries = new Set(visitors.map((v) => v.country).filter(Boolean));
    const totalTime = visitors.reduce((a, v) => a + (v.total_duration || 0), 0);
    return { uniques: visitors.length, totalViews, countries: countries.size, totalTime };
  }, [visitors]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const slice = filtered.slice(start, start + pageSize);

  function exportExcel() {
    const rows = filtered.map((v) => ({
      IP: v.ip_address,
      Pays: v.country ?? "",
      "Code pays": v.country_code ?? "",
      Région: v.region_name ?? "",
      Ville: v.city ?? "",
      "Fuseau horaire": v.timezone ?? "",
      FAI: v.isp ?? "",
      Appareil: v.device_type ?? "",
      Navigateur: v.browser ?? "",
      OS: v.os ?? "",
      "Nb visites": v.visit_count,
      "Nb pages vues": v.page_view_count,
      "Durée totale": fmtDuration(v.total_duration),
      "Première page": v.first_page ?? "",
      "Dernière page": v.last_page ?? "",
      Referrer: v.referrer ?? "",
      "Première visite": fmtDate(v.first_visit),
      "Dernière visite": fmtDate(v.last_visit),
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Visiteurs");
    const date = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `visiteurs-neoassure-${date}.xlsx`);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-lg font-bold text-slate-900">Visiteurs NEOASSUR</h1>
            <p className="text-xs text-slate-500">{filtered.length} résultat(s) — {visitors.length} IP uniques</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={load} className="rounded-md border px-3 py-2 text-sm hover:bg-slate-50">Rafraîchir</button>
            <button onClick={exportExcel} className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              Exporter Excel
            </button>
            <button onClick={onLogout} className="rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Déconnexion
            </button>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 pb-4 sm:grid-cols-4">
          <Stat label="Visiteurs uniques" value={String(stats.uniques)} />
          <Stat label="Pages vues" value={String(stats.totalViews)} />
          <Stat label="Pays" value={String(stats.countries)} />
          <Stat label="Temps cumulé" value={fmtDuration(stats.totalTime)} />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1); }}
            placeholder="Rechercher (IP, pays, ville, appareil, navigateur…)"
            className="w-full max-w-md rounded-md border bg-white px-3 py-2 text-sm outline-none focus:border-slate-500"
          />
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span>Par page :</span>
            <select
              value={pageSize}
              onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
              className="rounded-md border bg-white px-2 py-1"
            >
              {[10, 25, 50, 100, 200].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {loading && <p className="text-sm text-slate-500">Chargement…</p>}
        {error && (
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 text-sm">
            <p className="font-semibold text-amber-900">
              {errorKind === "network"
                ? "Impossible de joindre le backend de suivi"
                : "Le backend a renvoyé une erreur"}
            </p>
            <p className="mt-1 text-amber-800">{error}</p>
            {errorKind === "network" ? (
              <div className="mt-3 text-amber-800">
                <p>Vérifiez que les fichiers PHP sont bien en ligne&nbsp;:</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5">
                  <li>Téléversez <code>install_visitors.php</code>, <code>track_visit.php</code>, <code>track_duration.php</code> et <code>get_all_visitors.php</code> dans <code>{API_BASE.replace("https://", "")}/</code></li>
                  <li>Ouvrez une fois <code>{API_BASE}/install_visitors.php</code> dans le navigateur pour créer les tables.</li>
                  <li>Revenez ici et cliquez sur «&nbsp;Rafraîchir&nbsp;».</li>
                </ol>
              </div>
            ) : (
              <p className="mt-3 text-amber-800">
                Si l'erreur mentionne une table manquante, ouvrez une fois{" "}
                <code>{API_BASE}/install_visitors.php</code> pour créer les tables.
              </p>
            )}
            <button
              onClick={load}
              className="mt-4 rounded-md bg-amber-600 px-3 py-2 text-xs font-semibold text-white hover:bg-amber-700"
            >
              Réessayer
            </button>
          </div>
        )}
        {!loading && !error && (

          <>
            <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">IP</th>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">Pays</th>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">Région</th>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">Ville</th>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">Appareil</th>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">Navigateur</th>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">Pages</th>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">Durée</th>
                    <th className="whitespace-nowrap px-3 py-2 font-semibold">Dernière visite</th>
                    <th className="px-3 py-2 font-semibold">Détails</th>
                  </tr>
                </thead>
                <tbody>
                  {slice.length === 0 && (
                    <tr><td colSpan={10} className="px-3 py-8 text-center text-slate-400">Aucun visiteur.</td></tr>
                  )}
                  {slice.map((v) => (
                    <tr key={v.id} className="border-t hover:bg-slate-50">
                      <td className="whitespace-nowrap px-3 py-2 font-mono text-slate-700">{v.ip_address}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">
                        {v.country ? `${v.country_code ? v.country_code + " · " : ""}${v.country}` : "—"}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{v.region_name || "—"}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{v.city || "—"}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{v.device_type || "—"}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{v.browser || "—"}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{v.page_view_count}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{fmtDuration(v.total_duration)}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{fmtDate(v.last_visit)}</td>
                      <td className="px-3 py-2">
                        <button onClick={() => setSelected(v)} className="rounded-md border px-2 py-1 text-xs hover:bg-slate-100">Voir</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-slate-500">Page {safePage} / {totalPages}</span>
              <div className="flex items-center gap-1">
                <button disabled={safePage <= 1} onClick={() => setPage(1)} className="rounded border px-2 py-1 disabled:opacity-40">«</button>
                <button disabled={safePage <= 1} onClick={() => setPage(safePage - 1)} className="rounded border px-2 py-1 disabled:opacity-40">‹ Préc.</button>
                <button disabled={safePage >= totalPages} onClick={() => setPage(safePage + 1)} className="rounded border px-2 py-1 disabled:opacity-40">Suiv. ›</button>
                <button disabled={safePage >= totalPages} onClick={() => setPage(totalPages)} className="rounded border px-2 py-1 disabled:opacity-40">»</button>
              </div>
            </div>
          </>
        )}
      </main>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setSelected(null)}>
          <div className="max-h-[85vh] w-full max-w-3xl overflow-auto rounded-xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 font-mono">{selected.ip_address}</h2>
                <p className="text-sm text-slate-500">
                  {[selected.city, selected.region_name, selected.country].filter(Boolean).join(", ") || "Localisation inconnue"}
                </p>
              </div>
              <button onClick={() => setSelected(null)} className="rounded-md border px-2 py-1 text-sm hover:bg-slate-100">Fermer</button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              <Detail label="Appareil" value={selected.device_type} />
              <Detail label="Navigateur" value={selected.browser} />
              <Detail label="OS" value={selected.os} />
              <Detail label="FAI" value={selected.isp} />
              <Detail label="Fuseau" value={selected.timezone} />
              <Detail label="Visites" value={String(selected.visit_count)} />
              <Detail label="Pages vues" value={String(selected.page_view_count)} />
              <Detail label="Durée totale" value={fmtDuration(selected.total_duration)} />
              <Detail label="Referrer" value={selected.referrer} />
              <Detail label="Première visite" value={fmtDate(selected.first_visit)} />
              <Detail label="Dernière visite" value={fmtDate(selected.last_visit)} />
            </div>

            <h3 className="mt-6 text-sm font-semibold text-slate-800">Pages visitées ({selected.page_views.length})</h3>
            <div className="mt-2 overflow-x-auto rounded-lg border">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Page</th>
                    <th className="px-3 py-2 font-semibold">Titre</th>
                    <th className="px-3 py-2 font-semibold">Durée</th>
                    <th className="px-3 py-2 font-semibold">Quand</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.page_views.length === 0 && (
                    <tr><td colSpan={4} className="px-3 py-6 text-center text-slate-400">Aucune page enregistrée.</td></tr>
                  )}
                  {selected.page_views.map((pv) => (
                    <tr key={pv.id} className="border-t">
                      <td className="px-3 py-2 font-mono text-slate-700">{pv.page_url || "—"}</td>
                      <td className="px-3 py-2 text-slate-700">{pv.page_title || "—"}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{fmtDuration(pv.duration_seconds)}</td>
                      <td className="whitespace-nowrap px-3 py-2 text-slate-700">{fmtDate(pv.visited_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-white px-4 py-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="rounded-md border bg-slate-50 px-3 py-2">
      <p className="text-[11px] uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-0.5 break-words text-slate-800">{value || "—"}</p>
    </div>
  );
}
