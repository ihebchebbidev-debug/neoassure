import { useEffect, useState } from "react";
import { Check, Facebook, Linkedin, Link2, Mail, MessageCircle, Share2, Twitter } from "lucide-react";

type ShareButtonsProps = {
  /**
   * Absolute URL of the page being shared, e.g.
   * "https://example.com/blog/mon-article". Resolved on the server from the
   * request origin so links are correct in SSR/HTML and for no-JS clients.
   */
  url: string;
  /** Title used by the native share sheet and pre-filled messages. */
  title: string;
  /** Short text used by the native share sheet / email / WhatsApp. */
  text?: string;
};

export function ShareButtons({ url: initialUrl, title, text }: ShareButtonsProps) {
  // Prefer the server-resolved absolute URL, but re-resolve on the client as a
  // safety net (e.g. if the request origin could not be determined during SSR).
  const [url, setUrl] = useState(initialUrl);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    try {
      setUrl(new URL(initialUrl, window.location.origin).toString());
    } catch {
      setUrl(initialUrl);
    }
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, [initialUrl]);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(text ? `${title} — ${text}` : title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (e.g. insecure context): fall back to prompt.
      window.prompt("Copiez le lien de l'article :", url);
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title, text: text ?? title, url });
    } catch {
      /* user cancelled or share failed — no-op */
    }
  };

  const networks = [
    {
      label: "Partager sur Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
    },
    {
      label: "Partager sur X (Twitter)",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
    },
    {
      label: "Partager sur LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: "Partager sur WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      icon: MessageCircle,
    },
    {
      label: "Partager par e-mail",
      href: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
      icon: Mail,
    },
  ] as const;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700">
        <Share2 className="size-4 text-[#2481B1]" /> Partager
      </span>

      <div className="flex flex-wrap items-center gap-2">
        {networks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="inline-flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-[#2481B1] hover:bg-[#62CAFF]/10 hover:text-[#2481B1]"
          >
            <Icon className="size-[18px]" />
          </a>
        ))}

        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? "Lien copié" : "Copier le lien"}
          title={copied ? "Lien copié" : "Copier le lien"}
          className="inline-flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition hover:border-[#2481B1] hover:bg-[#62CAFF]/10 hover:text-[#2481B1]"
        >
          {copied ? <Check className="size-[18px] text-green-600" /> : <Link2 className="size-[18px]" />}
        </button>

        {canNativeShare && (
          <button
            type="button"
            onClick={nativeShare}
            aria-label="Plus d'options de partage"
            title="Plus d'options de partage"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#2481B1] px-4 text-sm font-medium text-white transition hover:bg-[#1e6d96]"
          >
            <Share2 className="size-4" /> Partager
          </button>
        )}
      </div>

      {copied && (
        <span role="status" className="text-sm font-medium text-green-600">
          Lien copié !
        </span>
      )}
    </div>
  );
}
