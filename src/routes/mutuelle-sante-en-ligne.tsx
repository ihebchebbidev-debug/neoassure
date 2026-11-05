import { createFileRoute } from "@tanstack/react-router";
import { Globe, Clock, Zap, ShieldCheck, HeartPulse, FileText } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé En Ligne",
  title: "Mutuelle santé en ligne : devis, souscription et gestion 100% digitale",
  subtitle:
    "Souscrire une mutuelle santé en ligne, c'est comparer +25 assureurs en 2 min, signer électroniquement et gérer tout depuis votre espace client — sans se déplacer.",
  keywords: [
    "mutuelle santé en ligne",
    "mutuelle en ligne",
    "souscrire mutuelle en ligne",
    "meilleure mutuelle en ligne",
    "mutuelle 100% en ligne",
    "mutuelle santé digitale",
    "mutuelle en ligne pas chère",
    "devis mutuelle en ligne",
    "signer mutuelle en ligne",
    "espace client mutuelle",
    "comparateur mutuelle en ligne",
  ],
  image: productImage,
  introTitle: "Souscrire une mutuelle santé en ligne, sans se déplacer",
  introText:
    "Fini les rendez-vous en agence : notre plateforme en ligne vous permet de comparer +25 assureurs, obtenir un devis personnalisé, signer votre contrat électroniquement et gérer vos remboursements — le tout en 100% digital. Un conseiller reste joignable si vous préférez parler.",
  advantages: [
    { icon: Zap, title: "Devis en 2 minutes", text: "Un questionnaire rapide, une réponse immédiate à l'écran." },
    { icon: FileText, title: "Signature électronique", text: "Souscription en ligne sécurisée, sans envoi papier." },
    { icon: Clock, title: "Espace client 24/7", text: "Consultez remboursements, décomptes, carte tiers payant à tout moment." },
    { icon: Globe, title: "App mobile incluse", text: "Envoyez vos décomptes en photo depuis votre smartphone." },
    { icon: HeartPulse, title: "Téléconsultation", text: "Un médecin joignable 24/7 depuis l'application." },
    { icon: ShieldCheck, title: "Conseiller humain disponible", text: "Un expert au téléphone quand vous en avez besoin." },
  ],
  coverageTitle: "Toutes les démarches 100% en ligne",
  coverage: [
    "Comparer +25 mutuelles en 2 minutes",
    "Recevoir un devis personnalisé par email",
    "Signer électroniquement le contrat",
    "Recevoir sa carte tiers payant en PDF",
    "Envoyer ses décomptes de soins en photo",
    "Suivre ses remboursements en temps réel",
    "Modifier ses garanties depuis l'espace client",
    "Résilier en un clic après 1 an d'ancienneté",
  ],
  reasonsTitle: "Pourquoi choisir une mutuelle santé en ligne ?",
  reasons: [
    { title: "Rapidité", text: "Ce qui prenait 3 rendez-vous en agence se fait en 2 minutes sur mobile." },
    { title: "Économies", text: "Les mutuelles en ligne ont moins de frais fixes : tarifs souvent 10-20% inférieurs." },
    { title: "Transparence", text: "Tous les tableaux de garanties comparés côte-à-côte, sans jargon commercial." },
  ],
  faqs: [
    { q: "Une mutuelle santé en ligne est-elle fiable ?", a: "Oui. Nos partenaires sont des assureurs français agréés par l'ACPR (Autorité de contrôle prudentiel et de résolution). Ils opèrent en ligne mais restent soumis aux mêmes règles que les mutuelles traditionnelles." },
    { q: "Puis-je vraiment tout gérer en ligne ?", a: "Oui : devis, souscription, décomptes, résiliation. Un conseiller humain reste joignable par téléphone ou chat si vous avez besoin d'aide sur un point précis." },
    { q: "Une mutuelle en ligne est-elle moins chère qu'une mutuelle en agence ?", a: "Souvent oui, de 10 à 20% : les frais fixes (réseau d'agences, conseillers en face-à-face) sont plus faibles. À garanties égales, la mutuelle en ligne est généralement plus compétitive." },
    { q: "Combien de temps pour être couvert après souscription en ligne ?", a: "Le contrat prend effet à la date de votre choix : dès le lendemain pour nos formules \"sans délai de carence\", ou au 1er du mois suivant selon vos préférences." },
  ],
  related: [
    { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Comparateur mutuelle santé", description: "+25 assureurs comparés en 2 minutes." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle en ligne", description: "Devis personnalisé en 2 min." },
    { kind: "page", to: "/mutuelle-sante-sans-delai-carence", anchor: "Mutuelle sans délai de carence", description: "Couvert dès le lendemain." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-en-ligne")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé En Ligne — Devis & souscription 100% digital | NEOASSUR" },
      { name: "description", content: "Mutuelle santé en ligne : comparez +25 assureurs, devis en 2 min, signature électronique, espace client 24/7. Souvent 10-20% moins cher qu'en agence." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé En Ligne | NEOASSUR" },
      { property: "og:description", content: "Devis, souscription et gestion 100% digitale. Devis en 2 min." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-en-ligne" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-en-ligne" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-en-ligne", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
