import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Base URL of the PHP tracking backend (same host as the leads backend).
 * Upload the `backend/*.php` files to this directory and run
 * `install_visitors.php` once to create the tables.
 */
const TRACK_BASE = import.meta.env.VITE_API_BASE_URL || "https://luccibyey.com.tn/neoassure";

// Admin/utility routes we don't want to count as public traffic.
const IGNORED_PREFIXES = ["/visitors", "/leads"];

/**
 * Fires once per page view:
 *  - POST /track_visit.php on entry (upserts the visitor, logs the page view)
 *  - navigator.sendBeacon /track_duration.php on exit (records time on page)
 */
export function VisitorTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (IGNORED_PREFIXES.some((p) => pathname.startsWith(p))) return;

    let pageViewId: number | null = null;
    let pendingFlush = false;
    let finished = false;
    const start = Date.now();

    const payload = {
      page_url: window.location.pathname + window.location.search,
      page_title: document.title,
      referrer: document.referrer || null,
    };

    const sendDuration = (id: number) => {
      if (finished) return;
      finished = true;
      const duration = Math.round((Date.now() - start) / 1000);
      const body = JSON.stringify({ page_view_id: id, duration });
      const url = `${TRACK_BASE}/track_duration.php`;
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, new Blob([body], { type: "application/json" }));
      } else {
        fetch(url, { method: "POST", body, keepalive: true }).catch(() => {});
      }
    };

    const flushDuration = () => {
      if (finished) return;
      // If track_visit hasn't resolved yet, defer the flush until it does
      // so short visits still record their duration.
      if (pageViewId == null) {
        pendingFlush = true;
        return;
      }
      sendDuration(pageViewId);
    };

    fetch(`${TRACK_BASE}/track_visit.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    })
      .then((r) => r.json())
      .then((d) => {
        if (d && d.success) {
          pageViewId = d.page_view_id ?? null;
          if (pendingFlush && pageViewId != null) sendDuration(pageViewId);
        }
      })
      .catch(() => {
        /* tracking must never break the app */
      });

    const onHidden = () => {
      if (document.visibilityState === "hidden") flushDuration();
    };

    window.addEventListener("pagehide", flushDuration);
    document.addEventListener("visibilitychange", onHidden);

    return () => {
      flushDuration();
      window.removeEventListener("pagehide", flushDuration);
      document.removeEventListener("visibilitychange", onHidden);
    };
  }, [pathname]);

  return null;
}
