import { createFileRoute } from "@tanstack/react-router";
import { Eye, Percent, ShieldCheck, HeartPulse, Users, Glasses } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Optique",
  title: "Mutuelle optique : lunettes, lentilles, verres progressifs remboursés",
  subtitle:
    "Une bonne mutuelle optique couvre vos lunettes, lentilles, verres progressifs et même la chirurgie réfractive. 100% Santé garanti + renfort optique haut de gamme.",
  keywords: [
    "mutuelle optique",
    "meilleure mutuelle optique",
    "mutuelle lunettes",
    "mutuelle verres progressifs",
    "remboursement optique",
    "mutuelle lentilles",
    "mutuelle chirurgie réfractive",
    "mutuelle optique enfant",
    "mutuelle 100% santé optique",
    "mutuelle optique forte myopie",
    "comparateur mutuelle optique",
  ],
  image: productImage,
  introTitle: "Une mutuelle qui prend vraiment en charge votre optique",
  introText:
    "Depuis le 100% Santé, une paire de lunettes essentielle est remboursée intégralement. Mais dès que vous voulez des verres progressifs, une monture hors panier ou de la chirurgie réfractive, le reste à charge grimpe vite. Notre mutuelle optique prend le relais.",
  advantages: [
    { icon: Glasses, title: "100% Santé garanti", text: "Zéro reste à charge sur les paniers 100% Santé optique." },
    { icon: Eye, title: "Renfort verres progressifs", text: "Jusqu'à 500€ par équipement pour les verres progressifs haut de gamme." },
    { icon: Percent, title: "Lentilles remboursées", text: "Forfait annuel lentilles (jetables ou souples), même hors ordonnance." },
    { icon: HeartPulse, title: "Chirurgie réfractive", text: "Forfait jusqu'à 800€ par œil pour Lasik, PKR ou implants." },
    { icon: Users, title: "Optique enfant renforcée", text: "Renouvellement facile des verres pour enfants (croissance)." },
    { icon: ShieldCheck, title: "Réseau de soins", text: "Tarifs négociés chez +5 000 opticiens partenaires." },
  ],
  coverageTitle: "Ce que couvre une bonne mutuelle optique",
  coverage: [
    "Monture + verres simples panier 100% Santé (0€ reste à charge)",
    "Monture + verres complexes / progressifs hors 100% Santé",
    "Lentilles souples ou jetables (forfait annuel)",
    "Lentilles rigides (kératocône, forte myopie)",
    "Chirurgie réfractive (Lasik, PKR, implants)",
    "Optique enfant : renouvellement annuel pris en charge",
    "Basse vision et matériel spécifique",
    "Consultations ophtalmologue et orthoptiste",
  ],
  reasonsTitle: "Pourquoi renforcer sa mutuelle optique ?",
  reasons: [
    { title: "L'optique coûte cher hors 100% Santé", text: "Une paire progressive haut de gamme coûte facilement 700-1 200€ ; la Sécu rembourse < 20€." },
    { title: "Renfort à la carte", text: "Vous ne payez le renfort optique que si vous en avez besoin — sans surcharger le reste du contrat." },
    { title: "Réseau opticiens partenaires", text: "Nos partenaires appliquent des tarifs négociés (jusqu'à -20% sur montures & verres)." },
  ],
  faqs: [
    { q: "Quel remboursement pour des lunettes en 2026 ?", a: "Sur le panier 100% Santé, 0€ reste à charge. Hors panier, cela dépend de votre mutuelle : les formules d'entrée remboursent 100€-200€ / équipement, les haut de gamme jusqu'à 500€-800€." },
    { q: "Puis-je renouveler mes lunettes chaque année ?", a: "Non, sauf pour les enfants ou en cas d'évolution de la vue. La Sécu et les mutuelles prennent en charge un équipement tous les 2 ans pour les adultes." },
    { q: "La chirurgie réfractive est-elle remboursée par la mutuelle ?", a: "La Sécu ne rembourse pas la chirurgie réfractive. Seule la mutuelle peut la couvrir, généralement via un forfait de 300 à 800€ par œil selon la formule." },
    { q: "Comment fonctionne le tiers payant optique ?", a: "Chez un opticien partenaire du réseau, vous ne payez rien : la mutuelle règle directement l'opticien. Vous signez une prise en charge et repartez avec vos lunettes." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir toutes nos formules mutuelle santé." },
    { kind: "page", to: "/mutuelle-dentaire", anchor: "Mutuelle dentaire", description: "Renfort dentaire complémentaire." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle avec renfort optique", description: "Devis personnalisé en 2 minutes." },
  ],
};

export const Route = createFileRoute("/mutuelle-optique")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Optique — Lunettes, lentilles, progressifs | NEOASSUR" },
      { name: "description", content: "Mutuelle optique : lunettes, lentilles, verres progressifs et chirurgie réfractive remboursés. 100% Santé + renforts haut de gamme. Devis en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Optique — NEOASSUR" },
      { property: "og:description", content: "Renfort optique complet : lunettes, progressifs, lentilles, Lasik." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-optique" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-optique" }],
    scripts: buildProductJsonLd(data, "/mutuelle-optique", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
