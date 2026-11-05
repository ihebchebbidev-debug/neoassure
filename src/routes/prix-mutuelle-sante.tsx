import { createFileRoute } from "@tanstack/react-router";
import { Euro, Percent, Calculator, HandCoins, ShieldCheck, TrendingDown } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Prix Mutuelle Santé",
  title: "Prix mutuelle santé 2026 : combien coûte une bonne complémentaire ?",
  subtitle:
    "Le prix d'une mutuelle santé varie de 20€ à 180€/mois selon l'âge, la formule et la région. Voici les tarifs 2026 par profil et comment payer moins cher à couverture égale.",
  keywords: [
    "prix mutuelle santé",
    "tarif mutuelle santé",
    "combien coûte une mutuelle santé",
    "prix mutuelle santé 2026",
    "prix moyen mutuelle santé",
    "cotisation mutuelle santé",
    "mutuelle santé économique",
    "prix mutuelle santé par âge",
    "prix mutuelle santé senior",
    "prix mutuelle santé famille",
    "prix mutuelle étudiant",
  ],
  image: productImage,
  introTitle: "Le vrai prix d'une mutuelle santé en 2026",
  introText:
    "Le prix d'une mutuelle santé dépend de 4 facteurs : votre âge (le principal), la composition du foyer, le niveau de garanties choisi et votre région. Un jeune actif à Nantes paiera 25€/mois, un couple senior à Paris 180€/mois. Voici les fourchettes moyennes constatées cette année.",
  advantages: [
    { icon: Euro, title: "Jeune actif : 20-40€/mois", text: "Formule essentielle, hospitalisation + 100% Santé optique/dentaire." },
    { icon: Euro, title: "Famille : 80-160€/mois", text: "Couverture famille avec optique enfant et orthodontie." },
    { icon: Euro, title: "Senior : 60-180€/mois", text: "Renforts hospitalisation, audition, chambre particulière." },
    { icon: Percent, title: "Économies moyennes 312€/an", text: "En comparant, nos clients économisent 20 à 40% en moyenne." },
    { icon: Calculator, title: "Simulation gratuite", text: "Devis personnalisé selon votre âge, foyer et région en 2 minutes." },
    { icon: TrendingDown, title: "Formules modulables", text: "Baissez le prix en ajustant chaque poste à vos vrais besoins." },
  ],
  coverageTitle: "Prix moyens mutuelle santé 2026",
  coverage: [
    "18-25 ans : 20 à 40€/mois (formule essentielle)",
    "26-45 ans : 30 à 70€/mois (formule confort)",
    "46-60 ans : 50 à 110€/mois (garanties renforcées)",
    "60-75 ans : 60 à 160€/mois (renforts audition/hospitalisation)",
    "75 ans et + : 90 à 180€/mois (couverture maximale)",
    "Famille 4 personnes : 80 à 160€/mois",
    "Couple senior : 100 à 250€/mois",
    "Étudiant : dès 9€/mois",
  ],
  reasonsTitle: "Comment payer moins cher sa mutuelle santé",
  reasons: [
    { title: "Comparer +25 assureurs", text: "Le même niveau de garanties peut varier de 30 à 50% entre deux organismes — comparez systématiquement." },
    { title: "Adapter au profil réel", text: "Ne payez pas pour des renforts inutiles (orthodontie sans enfants, maternité si retraité...)." },
    { title: "Résiliation infra-annuelle", text: "Après 1 an, vous pouvez changer à tout moment sans frais si un tarif plus bas apparaît." },
  ],
  faqs: [
    { q: "Combien coûte une mutuelle santé en moyenne ?", a: "En 2026, le prix moyen d'une mutuelle santé en France est d'environ 55€/mois pour un adulte seul et 130€/mois pour une famille avec 2 enfants." },
    { q: "Pourquoi les mutuelles augmentent-elles chaque année ?", a: "Trois raisons principales : vieillissement de la population, hausse des coûts médicaux (audioprothèses, hospitalisation), et évolution des taxes sur les contrats (TSCA)." },
    { q: "Comment obtenir la mutuelle santé la moins chère ?", a: "En comparant +25 offres via un courtier indépendant, en ne prenant que les renforts utiles à votre profil et en profitant de la résiliation infra-annuelle pour changer chaque année si besoin." },
    { q: "Le prix mutuelle santé change-t-il selon la région ?", a: "Oui, légèrement. Les grandes métropoles (Paris, Lyon, Marseille) coûtent 5 à 15% plus cher car les dépassements d'honoraires y sont plus fréquents." },
  ],
  related: [
    { kind: "page", to: "/tarif-mutuelle-sante", anchor: "Tarif mutuelle santé détaillé", description: "Voir la grille de tarifs par profil." },
    { kind: "page", to: "/mutuelle-sante-pas-chere", anchor: "Mutuelle santé pas chère", description: "Nos formules les plus économiques." },
    { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Comparateur mutuelle santé", description: "Comparez +25 offres en 2 minutes." },
  ],
};

export const Route = createFileRoute("/prix-mutuelle-sante")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Prix Mutuelle Santé 2026 — Tarifs par âge et profil | NEOASSUR" },
      { name: "description", content: "Prix mutuelle santé 2026 : tarifs moyens par âge (jeune, famille, senior), par région et par niveau de garanties. Économisez jusqu'à 40% en comparant." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Prix Mutuelle Santé 2026 | NEOASSUR" },
      { property: "og:description", content: "Combien coûte une mutuelle santé ? Tarifs par profil." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/prix-mutuelle-sante" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/prix-mutuelle-sante" }],
    scripts: buildProductJsonLd(data, "/prix-mutuelle-sante", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
