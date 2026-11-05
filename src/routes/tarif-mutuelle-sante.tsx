import { createFileRoute } from "@tanstack/react-router";
import { Calculator, Euro, TrendingDown, Percent, ShieldCheck, HandCoins } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Tarif Mutuelle Santé",
  title: "Tarif mutuelle santé 2026 : grille détaillée et simulateur gratuit",
  subtitle:
    "Découvrez la grille tarifaire complète des mutuelles santé 2026, poste par poste et profil par profil. Simulez votre tarif personnalisé en 2 minutes.",
  keywords: [
    "tarif mutuelle santé",
    "grille tarifaire mutuelle santé",
    "tarif mutuelle 2026",
    "tarif mutuelle santé par âge",
    "tarif mutuelle sénior",
    "tarif mutuelle famille",
    "tarif complémentaire santé",
    "cotisation mutuelle 2026",
    "coût mensuel mutuelle",
    "simulateur tarif mutuelle",
    "comparaison tarifs mutuelles",
  ],
  image: productImage,
  introTitle: "Le tarif d'une mutuelle santé, décrypté",
  introText:
    "Comprendre le tarif d'une mutuelle santé n'est pas simple : chaque assureur pratique sa propre grille tarifaire selon l'âge, la région, la composition du foyer, le niveau de garanties. Nous vous donnons ici les fourchettes réelles constatées sur nos +25 partenaires en 2026.",
  advantages: [
    { icon: Calculator, title: "Simulateur en 2 min", text: "Recevez votre tarif personnalisé après un questionnaire court." },
    { icon: Euro, title: "Tarifs négociés", text: "Nos +25 partenaires accordent des tarifs groupe non disponibles en direct." },
    { icon: Percent, title: "-30% en moyenne", text: "Face à un contrat souscrit en agence sans comparaison." },
    { icon: TrendingDown, title: "Tarif garanti 12 mois", text: "Pas d'augmentation surprise en cours d'année contractuelle." },
    { icon: HandCoins, title: "3 niveaux tarifaires", text: "Essentiel, Confort, Premium : à vous de choisir." },
    { icon: ShieldCheck, title: "Sans frais cachés", text: "Le tarif affiché est le tarif final : pas de frais de dossier surprise." },
  ],
  coverageTitle: "Grille tarifaire indicative mutuelle santé 2026",
  coverage: [
    "Adulte 25 ans, formule Essentiel : 22 à 35€/mois",
    "Adulte 35 ans, formule Confort : 40 à 65€/mois",
    "Adulte 50 ans, formule Confort : 60 à 90€/mois",
    "Senior 65 ans, formule Renforcée : 90 à 140€/mois",
    "Senior 75 ans, formule Premium : 130 à 180€/mois",
    "Famille (2 ad. + 2 enf.), formule Confort : 100 à 160€/mois",
    "Étudiant, formule Essentiel : 9 à 25€/mois",
    "TNS Madelin, formule Confort : 60 à 110€/mois",
  ],
  reasonsTitle: "Comment se calcule votre tarif mutuelle santé ?",
  reasons: [
    { title: "L'âge : facteur n°1", text: "Le tarif progresse en moyenne de 2 à 4% par année d'âge, avec un saut marqué après 60 ans." },
    { title: "La zone géographique", text: "Les grandes métropoles (Paris, Lyon...) sont 5 à 15% plus chères car les dépassements y sont plus fréquents." },
    { title: "Les garanties choisies", text: "Un renfort dentaire ou audition ajoute 10 à 30€/mois selon le niveau." },
  ],
  faqs: [
    { q: "Comment obtenir le meilleur tarif mutuelle santé ?", a: "En comparant +25 assureurs simultanément avec un courtier indépendant, en ne payant que les garanties utiles, et en profitant de la résiliation infra-annuelle pour changer chaque année si besoin." },
    { q: "Les tarifs mutuelle santé sont-ils réglementés ?", a: "Non, les tarifs sont libres. Chaque assureur applique sa propre grille selon ses critères actuariels. C'est ce qui explique les écarts de 30% pour un même niveau de garanties." },
    { q: "Combien augmente une mutuelle santé chaque année ?", a: "En moyenne 3 à 6% par an, sous l'effet de la hausse des coûts médicaux et du vieillissement. Certains assureurs peuvent augmenter davantage : c'est le moment de comparer." },
    { q: "Puis-je négocier mon tarif mutuelle santé ?", a: "Difficilement en direct. En passant par un courtier comme NEOASSUR, vous accédez à des tarifs groupe négociés en amont — souvent 20 à 30% moins chers." },
  ],
  related: [
    { kind: "page", to: "/prix-mutuelle-sante", anchor: "Prix mutuelle santé par profil", description: "Voir les prix moyens 2026 détaillés." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle santé gratuit", description: "Recevez votre tarif personnalisé en 2 min." },
    { kind: "page", to: "/mutuelle-sante-pas-chere", anchor: "Mutuelle santé pas chère", description: "Formules économiques." },
  ],
};

export const Route = createFileRoute("/tarif-mutuelle-sante")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Tarif Mutuelle Santé 2026 — Grille et simulateur | NEOASSUR" },
      { name: "description", content: "Tarif mutuelle santé 2026 : grille détaillée par âge, profil et région. Simulateur gratuit en 2 minutes, économisez jusqu'à 30% avec un courtier indépendant." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Tarif Mutuelle Santé 2026 | NEOASSUR" },
      { property: "og:description", content: "Grille tarifaire complète et simulateur gratuit." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/tarif-mutuelle-sante" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/tarif-mutuelle-sante" }],
    scripts: buildProductJsonLd(data, "/tarif-mutuelle-sante", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
