import { createFileRoute } from "@tanstack/react-router";
import {
  Euro, Percent, ShieldCheck, CalendarClock, HandCoins, HeartPulse,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Senior Pas Cher",
  title: "Mutuelle senior pas chère : jusqu'à 40% d'économies",
  subtitle:
    "Comparez les offres de +25 assureurs partenaires et trouvez la mutuelle senior la moins chère adaptée à vos besoins réels — sans questionnaire médical.",
  keywords: [
    "mutuelle senior pas cher",
    "mutuelle senior pas chère",
    "mutuelle senior moins chère",
    "mutuelle pas cher retraité",
    "mutuelle senior économique",
    "mutuelle senior tarif bas",
    "mutuelle senior prix",
    "comparateur mutuelle senior pas cher",
    "meilleure mutuelle senior pas chère",
    "mutuelle santé senior à petit prix",
  ],
  image: productImage,
  introTitle: "Une mutuelle senior à petit prix, sans sacrifier les garanties",
  introText:
    "Avec la hausse continue des cotisations, trouver une mutuelle senior pas chère devient un vrai enjeu. Chez NEOASSUR, nous négocions pour vous les meilleurs tarifs auprès des grands assureurs français, en adaptant la formule à vos besoins réels — pour ne payer que ce qui vous sert.",
  advantages: [
    { icon: Euro, title: "Économies jusqu'à 40%", text: "Nos clients économisent en moyenne 312€/an sur leur mutuelle." },
    { icon: Percent, title: "Comparateur gratuit", text: "+25 assureurs comparés en 2 minutes selon votre profil." },
    { icon: ShieldCheck, title: "Sans questionnaire médical", text: "Aucune surprime liée à l'âge ou aux antécédents." },
    { icon: HandCoins, title: "Formules modulables", text: "Ajustez chaque poste (dentaire, optique, hospitalisation) pour baisser le tarif." },
    { icon: CalendarClock, title: "Résiliable à tout moment", text: "Résiliation infra-annuelle après 1 an, sans frais." },
    { icon: HeartPulse, title: "Assistance incluse", text: "Téléconsultation, aide-ménagère, garde-malade sans surcoût." },
  ],
  coverageTitle: "Ce qui est inclus dans nos formules économiques",
  coverage: [
    "Consultations généralistes et spécialistes remboursées 100% à 150% BR",
    "Hospitalisation : forfait journalier pris en charge intégralement",
    "Pharmacie prescrite remboursée",
    "Dentaire de base (soins, prothèses 100% Santé)",
    "Optique 100% Santé (lunettes sans reste à charge)",
    "Analyses biologiques et radiologie",
    "Téléconsultation médicale 24/7",
    "Possibilité d'ajouter des renforts dentaire / optique / audition à la carte",
  ],
  reasonsTitle: "Comment on obtient les meilleurs prix",
  reasons: [
    { title: "Volumes négociés", text: "Nos partenariats avec les assureurs nous donnent accès à des tarifs préférentiels non disponibles en direct." },
    { title: "Formules sur-mesure", text: "Nous éliminons les garanties inutiles selon votre profil pour ne payer que l'essentiel." },
    { title: "Comparaison temps réel", text: "Notre outil interroge simultanément +25 compagnies pour trouver le meilleur rapport garanties/prix." },
  ],
  faqs: [
    { q: "Quel est le prix moyen d'une mutuelle senior pas chère ?", a: "En 2026, une mutuelle senior d'entrée de gamme démarre autour de 35€/mois. Une formule équilibrée se situe entre 55€ et 85€/mois selon l'âge et la région." },
    { q: "Une mutuelle pas chère est-elle vraiment de bonne qualité ?", a: "Oui, si elle est bien ciblée. Une mutuelle pas chère efficace couvre les postes essentiels (hospitalisation, soins courants) sans payer des garanties surdimensionnées inutilement." },
    { q: "Puis-je changer pour une mutuelle moins chère à tout moment ?", a: "Oui, grâce à la loi de résiliation infra-annuelle : après 1 an d'ancienneté, vous pouvez résilier à tout moment sans frais ni justificatif." },
    { q: "Y a-t-il un âge limite pour souscrire ?", a: "Non, nos partenaires acceptent les adhésions sans limite d'âge, y compris après 75 ou 80 ans." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Voir toutes nos formules mutuelle santé senior", description: "Comparez l'ensemble de nos mutuelles seniors avec garanties renforcées." },
    { kind: "blog", slug: "mutuelle-senior-bien-choisir", anchor: "Bien choisir sa mutuelle senior après 60 ans", description: "Les critères qui comptent vraiment pour ne pas payer trop cher." },
    { kind: "blog", slug: "resilier-mutuelle-loi-resiliation-infra-annuelle", anchor: "Résilier sa mutuelle senior en 3 étapes", description: "Le mode d'emploi complet pour changer sans stress." },
  ],
};

export const Route = createFileRoute("/mutuelle-senior-pas-cher")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Senior Pas Chère — Jusqu'à 40% d'économies | NEOASSUR" },
      { name: "description", content: "Mutuelle senior pas chère : comparez +25 assureurs et économisez jusqu'à 40% (312€/an en moyenne). Sans questionnaire médical, devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Senior Pas Chère — 40% d'économies | NEOASSUR" },
      { property: "og:description", content: "Comparez +25 assureurs et trouvez la mutuelle senior la moins chère. Devis gratuit en 2 min." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-senior-pas-cher" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-senior-pas-cher" }],
    scripts: buildProductJsonLd(data, "/mutuelle-senior-pas-cher", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
