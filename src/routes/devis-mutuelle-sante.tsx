import { createFileRoute } from "@tanstack/react-router";
import { Clock, ShieldCheck, Percent, Users, FileText, Phone } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Devis Mutuelle Santé",
  title: "Devis mutuelle santé gratuit en 2 minutes",
  subtitle:
    "Recevez un devis mutuelle santé personnalisé et 100% gratuit en moins de 2 minutes. +25 assureurs comparés, un conseiller dédié vous rappelle sous 24h.",
  keywords: [
    "devis mutuelle santé",
    "devis mutuelle santé gratuit",
    "devis mutuelle en ligne",
    "devis complémentaire santé",
    "devis mutuelle santé senior",
    "devis mutuelle santé famille",
    "devis mutuelle santé étudiant",
    "demande devis mutuelle",
    "simulation mutuelle santé",
    "tarif mutuelle santé sur mesure",
  ],
  image: productImage,
  introTitle: "Un devis mutuelle santé personnalisé, sans engagement",
  introText:
    "Un devis mutuelle santé bien fait doit tenir compte de votre âge, votre situation familiale, vos besoins réels (optique, dentaire, hospitalisation) et votre région. Notre outil interroge +25 assureurs et un conseiller expert vous rappelle pour affiner votre formule.",
  advantages: [
    { icon: Clock, title: "2 minutes chrono", text: "Un questionnaire court et clair, réponse immédiate." },
    { icon: ShieldCheck, title: "100% gratuit", text: "Aucun paiement, aucun engagement, données confidentielles." },
    { icon: Users, title: "Conseiller dédié", text: "Un expert humain vous rappelle sous 24h pour affiner votre devis." },
    { icon: Percent, title: "Jusqu'à 40% d'économies", text: "En moyenne 312€/an vs votre ancienne mutuelle." },
    { icon: FileText, title: "Comparatif écrit", text: "Vous recevez un tableau comparatif clair par email." },
    { icon: Phone, title: "Aussi par téléphone", text: "Préférez discuter ? Appelez le 01 87 66 56 10." },
  ],
  coverageTitle: "Ce que contient votre devis mutuelle santé",
  coverage: [
    "Cotisation mensuelle et annuelle détaillée",
    "Niveau de remboursement par poste (hospitalisation, optique, dentaire...)",
    "Chambre particulière, forfait journalier, dépassements d'honoraires",
    "Optique 100% Santé + renfort optique",
    "Dentaire : soins, prothèses, implants, orthodontie",
    "Audioprothèses et appareils auditifs",
    "Médecines douces et téléconsultation",
    "Assistance à domicile et garanties annexes",
  ],
  reasonsTitle: "Pourquoi demander un devis chez NEOASSUR ?",
  reasons: [
    { title: "Courtier indépendant", text: "Nous travaillons avec +25 assureurs — pas de vente forcée d'une marque." },
    { title: "Sans questionnaire médical", text: "Nos formules seniors n'imposent pas de questionnaire médical intrusif." },
    { title: "Réponse sous 24h", text: "Un conseiller dédié vous rappelle sous 24h ouvrées après votre demande." },
  ],
  faqs: [
    { q: "Un devis mutuelle santé engage-t-il à souscrire ?", a: "Non. Le devis est 100% gratuit et sans engagement. Vous restez libre de souscrire, de comparer, ou d'attendre." },
    { q: "Combien de temps est valable un devis mutuelle santé ?", a: "Généralement 30 jours. Au-delà, les tarifs peuvent évoluer selon l'assureur et il est préférable de redemander un devis à jour." },
    { q: "Puis-je obtenir plusieurs devis mutuelle santé ?", a: "Oui, c'est même recommandé. NEOASSUR compare +25 mutuelles en un seul devis, ce qui remplace 25 démarches individuelles." },
    { q: "Quelles informations pour obtenir mon devis ?", a: "Age, code postal, composition du foyer, régime de sécurité sociale, niveau de garanties souhaité. Aucune info bancaire ni pièce d'identité." },
  ],
  related: [
    { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Comparateur mutuelle santé", description: "+25 assureurs comparés en 2 minutes." },
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Découvrez toutes nos formules." },
    { kind: "page", to: "/prix-mutuelle-sante", anchor: "Prix mutuelle santé 2026", description: "Combien coûte une mutuelle santé cette année." },
  ],
};

export const Route = createFileRoute("/devis-mutuelle-sante")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Devis Mutuelle Santé Gratuit en 2 min — +25 assureurs | NEOASSUR" },
      { name: "description", content: "Devis mutuelle santé gratuit en 2 minutes : +25 assureurs comparés, économies jusqu'à 40%. Conseiller dédié sous 24h, sans engagement." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Devis Mutuelle Santé Gratuit — NEOASSUR" },
      { property: "og:description", content: "Devis personnalisé en 2 minutes, 100% gratuit et sans engagement." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/devis-mutuelle-sante" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/devis-mutuelle-sante" }],
    scripts: buildProductJsonLd(data, "/devis-mutuelle-sante", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
