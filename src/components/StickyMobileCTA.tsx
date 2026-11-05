import { useEffect, useState } from "react";
import { Phone, ChevronRight } from "lucide-react";

/**
 * Sticky mobile lead bar — fixed at the bottom on mobile only.
 * Proven +30-60% lead conversion on landing/product pages.
 * Appears after user scrolls 300px so it doesn't fight the hero CTA.
 */
export function StickyMobileCTA({
  phone = "+33187665610",
  phoneDisplay = "01 87 66 56 10",
  quoteHref = "#contact",
}: {
  phone?: string;
  phoneDisplay?: string;
  quoteHref?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="region"
      aria-label="Actions rapides"
    >
      <div className="border-t border-black/5 bg-white/95 backdrop-blur shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.15)]">
        <div className="mx-auto flex max-w-lg items-stretch gap-2 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
          <a
            href={`tel:${phone}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-dark/15 bg-white px-3 py-3 text-sm font-semibold text-brand-dark active:scale-[0.98]"
            aria-label={`Appeler NEOASSUR au ${phoneDisplay}`}
          >
            <Phone className="size-4" />
            Appeler
          </a>
          <a
            href={quoteHref}
            className="inline-flex flex-[1.4] items-center justify-center gap-1.5 rounded-full bg-brand-red px-3 py-3 text-sm font-bold text-white shadow-md shadow-brand-red/25 active:scale-[0.98]"
          >
            Devis gratuit
            <ChevronRight className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
