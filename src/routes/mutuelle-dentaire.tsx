import { createFileRoute } from "@tanstack/react-router";
import { Smile, Percent, ShieldCheck, HeartPulse, Users, Sparkles } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Dentaire",
  title: "Mutuelle dentaire : prothèses, implants, orthodontie bien remboursés",
  subtitle:
    "Le dentaire est le premier poste de reste à charge en France. Notre mutuelle dentaire couvre soins, prothèses, implants et orthodontie jusqu'à 400% BR, avec le 100% Santé garanti.",
  keywords: [
    "mutuelle dentaire",
    "mutuelle soins dentaires",
    "meilleure mutuelle dentaire",
    "mutuelle implants dentaires",
    "mutuelle prothèses dentaires",
    "mutuelle orthodontie",
    "mutuelle orthodontie adulte",
    "mutuelle 100% santé dentaire",
    "remboursement dentaire",
    "mutuelle dentaire pas chère",
    "comparateur mutuelle dentaire",
  ],
  image: productImage,
  introTitle: "Une mutuelle qui couvre vraiment votre dentaire",
  introText:
    "Un implant coûte 1 200 à 2 500€, une couronne 600 à 900€, un traitement d'orthodontie adulte 3 000 à 6 000€. La Sécu rembourse peu. Sans mutuelle dentaire renforcée, ces frais restent à votre charge. Nos formules dentaires prennent le relais jusqu'à 400% du tarif de la Sécurité sociale.",
  advantages: [
    { icon: Smile, title: "100% Santé garanti", text: "Zéro reste à charge sur les prothèses du panier 100% Santé." },
    { icon: Sparkles, title: "Implants remboursés", text: "Forfait implant jusqu'à 800€ par dent (pilier + couronne)." },
    { icon: Percent, title: "Orthodontie adulte", text: "Jusqu'à 400% BR sur un traitement complet (souvent 3 000-6 000€)." },
    { icon: Users, title: "Orthodontie enfant", text: "Prise en charge des 6 semestres et contention post-traitement." },
    { icon: HeartPulse, title: "Parodontologie", text: "Détartrage sous-gingival, greffe gencive, curetage remboursés." },
    { icon: ShieldCheck, title: "Réseau dentaire", text: "Tarifs négociés chez nos dentistes partenaires (jusqu'à -20%)." },
  ],
  coverageTitle: "Ce que couvre une bonne mutuelle dentaire",
  coverage: [
    "Soins conservateurs (caries, dévitalisation, détartrage)",
    "Prothèses fixes 100% Santé (0€ reste à charge)",
    "Prothèses hors 100% Santé (couronnes céramiques...)",
    "Implants dentaires (pilier + couronne)",
    "Bridges, inlays-onlays, prothèses amovibles",
    "Orthodontie enfant (6 semestres remboursés)",
    "Orthodontie adulte (généralement hors Sécu)",
    "Parodontologie, chirurgie et blanchiment",
  ],
  reasonsTitle: "Pourquoi renforcer sa mutuelle dentaire ?",
  reasons: [
    { title: "Le dentaire est le 1er poste RAC", text: "En France, le dentaire représente le plus gros reste à charge après hospitalisation." },
    { title: "Renfort à la carte", text: "Prenez uniquement le renfort dentaire si vous en avez besoin, sans surcharger le contrat." },
    { title: "Réseau dentistes partenaires", text: "Devis prénégociés avec les praticiens du réseau pour éviter les mauvaises surprises." },
  ],
  faqs: [
    { q: "Quelle mutuelle pour un implant dentaire en 2026 ?", a: "Un implant coûte en moyenne 1 800€. Les mutuelles d'entrée remboursent peu (0-200€), les formules renforcées remboursent 500 à 800€ par implant. Notre comparateur identifie la meilleure formule pour votre projet." },
    { q: "L'orthodontie adulte est-elle remboursée ?", a: "Non par la Sécu (sauf cas rares de chirurgie maxillo-faciale). Une mutuelle dentaire haut de gamme peut rembourser 300 à 500€ par semestre de traitement." },
    { q: "Combien coûte une mutuelle dentaire renforcée ?", a: "Comptez 15 à 35€/mois supplémentaires par rapport à une formule sans renfort dentaire, selon le niveau (300% BR à 500% BR)." },
    { q: "Y a-t-il un délai de carence sur le dentaire ?", a: "Souvent oui : 3 à 6 mois sur les prothèses et l'orthodontie, pour éviter les souscriptions opportunistes. Les soins courants sont couverts immédiatement." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir toutes nos formules." },
    { kind: "page", to: "/mutuelle-optique", anchor: "Mutuelle optique renforcée", description: "Compléter avec un renfort optique." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis avec renfort dentaire", description: "Devis personnalisé en 2 minutes." },
  ],
};

export const Route = createFileRoute("/mutuelle-dentaire")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Dentaire — Implants, prothèses, orthodontie | NEOASSUR" },
      { name: "description", content: "Mutuelle dentaire renforcée : soins, prothèses, implants, orthodontie jusqu'à 400% BR. 100% Santé garanti. Devis gratuit en 2 minutes." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Dentaire renforcée — NEOASSUR" },
      { property: "og:description", content: "Implants, prothèses, orthodontie : remboursements jusqu'à 400%." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-dentaire" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-dentaire" }],
    scripts: buildProductJsonLd(data, "/mutuelle-dentaire", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
