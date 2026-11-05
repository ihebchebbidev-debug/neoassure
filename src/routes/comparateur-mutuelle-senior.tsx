import { createFileRoute } from "@tanstack/react-router";
import {
  Scale, Zap, ShieldCheck, Users, HandCoins, Award,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Comparateur Mutuelle Senior",
  title: "Comparateur mutuelle senior : trouvez la meilleure offre en 2 min",
  subtitle:
    "Un seul formulaire, +25 assureurs interrogés en temps réel. Notre comparateur mutuelle senior 100% indépendant vous montre les meilleures offres du marché.",
  keywords: [
    "comparateur mutuelle senior",
    "comparatif mutuelle senior",
    "meilleure mutuelle senior",
    "comparateur mutuelle santé senior",
    "comparatif mutuelle santé senior 2026",
    "comparateur mutuelle retraité",
    "comparateur mutuelle 60 ans",
    "comparateur mutuelle 70 ans",
    "quelles sont les 10 meilleures mutuelles santé senior",
    "meilleur comparateur mutuelle senior",
  ],
  image: productImage,
  introTitle: "Le comparateur qui compare vraiment tout",
  introText:
    "Contrairement aux comparateurs qui n'affichent que 3 ou 4 partenaires payants, notre comparateur mutuelle senior interroge l'ensemble de nos +25 assureurs partenaires pour vous présenter les offres réellement les mieux placées selon votre profil, votre âge et vos besoins de soins.",
  advantages: [
    { icon: Scale, title: "100% indépendant", text: "Aucun classement biaisé par des commissions — on affiche les vrais meilleurs prix." },
    { icon: Zap, title: "Résultats en 2 minutes", text: "Un formulaire ultra-court, des devis affichés instantanément." },
    { icon: Users, title: "+25 assureurs partenaires", text: "Neoliane, April, FMA, C2G, Assurea, SPVIE et bien d'autres." },
    { icon: ShieldCheck, title: "Sans engagement", text: "Recevez les devis, comparez à tête reposée, souscrivez si vous voulez." },
    { icon: HandCoins, title: "Économies moyennes 312€/an", text: "Nos utilisateurs économisent en moyenne 40% sur leur cotisation." },
    { icon: Award, title: "Conseiller humain inclus", text: "Un expert vous rappelle pour décoder les garanties si besoin." },
  ],
  coverageTitle: "Ce que notre comparateur analyse pour vous",
  coverage: [
    "Prix mensuel et annuel de chaque offre",
    "Niveaux de remboursement (100%, 200%, 300%, 400% BR)",
    "Plafonds annuels dentaire, optique, audition",
    "Prise en charge hospitalisation (chambre particulière, dépassements)",
    "Délais de carence par poste de soin",
    "Assistance et services inclus (téléconsultation, garde-malade)",
    "Médecines douces et prévention",
    "Conditions de résiliation et modularité de la formule",
  ],
  reasonsTitle: "Pourquoi notre comparateur est différent",
  reasons: [
    { title: "Zéro biais commercial", text: "Nous sommes rémunérés uniformément par nos partenaires — aucun intérêt à vous pousser une offre plutôt qu'une autre." },
    { title: "Base de données actualisée", text: "Les tarifs et garanties sont mis à jour quotidiennement par nos équipes." },
    { title: "Conseil humain gratuit", text: "Après la comparaison, un conseiller expert vous aide à décider — sans frais." },
  ],
  faqs: [
    { q: "Le comparateur est-il vraiment gratuit ?", a: "Oui, 100% gratuit et sans engagement. Nous sommes rémunérés par les assureurs quand vous souscrivez, jamais par vous." },
    { q: "Combien d'assureurs sont comparés ?", a: "Notre comparateur interroge en temps réel plus de 25 compagnies partenaires, dont Neoliane, April, FMA, C2G, Assurea et SPVIE." },
    { q: "Puis-je faire confiance au classement affiché ?", a: "Oui : le classement est basé uniquement sur le rapport garanties/prix pour votre profil, jamais sur des commissions." },
    { q: "Mes données sont-elles protégées ?", a: "Absolument. Toutes vos informations sont chiffrées, hébergées en France et jamais revendues à des tiers non partenaires." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Nos formules mutuelle santé senior", description: "Explorez le détail de nos offres avec garanties renforcées." },
    { kind: "blog", slug: "comment-choisir-mutuelle-sante", anchor: "Comment bien choisir sa mutuelle santé", description: "Le guide complet pour ne pas se tromper." },
    { kind: "blog", slug: "mutuelle-senior-bien-choisir", anchor: "Mutuelle senior : les critères qui comptent", description: "Ce qu'il faut regarder avant de signer." },
  ],
};

export const Route = createFileRoute("/comparateur-mutuelle-senior")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Comparateur Mutuelle Senior — 25 assureurs en 2 min | NEOASSUR" },
      { name: "description", content: "Comparateur mutuelle senior 100% indépendant : +25 assureurs comparés en 2 minutes. Trouvez la meilleure mutuelle santé senior. Gratuit, sans engagement." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Comparateur Mutuelle Senior — 25 assureurs comparés | NEOASSUR" },
      { property: "og:description", content: "Comparez +25 mutuelles seniors en 2 minutes. Indépendant, gratuit, sans engagement." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.neo-assur.fr/comparateur-mutuelle-senior" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/comparateur-mutuelle-senior" }],
    scripts: buildProductJsonLd(data, "/comparateur-mutuelle-senior", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
