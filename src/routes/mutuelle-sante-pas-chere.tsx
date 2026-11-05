import { createFileRoute } from "@tanstack/react-router";
import { Euro, Percent, TrendingDown, ShieldCheck, HandCoins, Calculator } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé Pas Chère",
  title: "Mutuelle santé pas chère : jusqu'à 40% d'économies dès 9€/mois",
  subtitle:
    "Une mutuelle santé pas chère ne veut pas dire mal couvert. Nos formules économiques démarrent à 9€/mois avec 100% Santé garanti et un vrai remboursement hospitalier.",
  keywords: [
    "mutuelle santé pas chère",
    "mutuelle pas cher",
    "mutuelle santé économique",
    "mutuelle santé moins chère",
    "mutuelle santé petit budget",
    "meilleure mutuelle santé pas chère",
    "mutuelle pas chère étudiant",
    "mutuelle pas chère senior",
    "mutuelle pas chère famille",
    "comparateur mutuelle pas chère",
    "mutuelle low cost santé",
  ],
  image: productImage,
  introTitle: "Une mutuelle santé pas chère, mais qui couvre vraiment",
  introText:
    "Payer moins n'oblige pas à mal se couvrir. Une mutuelle santé pas chère bien ciblée : 100% Santé garanti (optique, dentaire, audition), hospitalisation avec chambre particulière, télésconsultation, et vous ajoutez uniquement les renforts qui vous concernent. Nos clients économisent 312€/an en moyenne.",
  advantages: [
    { icon: Euro, title: "Dès 9€/mois", text: "Formule essentielle étudiant ; dès 22€/mois pour un adulte." },
    { icon: Percent, title: "Jusqu'à 40% d'économies", text: "312€/an d'écart moyen avec l'ancienne mutuelle de nos clients." },
    { icon: TrendingDown, title: "Formule modulable", text: "Baissez le prix en enlevant les garanties inutiles à votre profil." },
    { icon: HandCoins, title: "100% Santé inclus", text: "Zéro reste à charge optique/dentaire/audio 100% Santé, même en formule éco." },
    { icon: Calculator, title: "Comparateur gratuit", text: "+25 assureurs comparés simultanément, sans frais." },
    { icon: ShieldCheck, title: "Sans frais cachés", text: "Tarif affiché = tarif final, sans frais de dossier surprise." },
  ],
  coverageTitle: "Ce que couvre une mutuelle santé pas chère bien pensée",
  coverage: [
    "100% Santé garanti (optique, dentaire, audioprothèses)",
    "Consultations médecin traitant remboursées",
    "Hospitalisation : forfait journalier + chambre particulière",
    "Pharmacie prescrite",
    "Tiers payant chez +90% des professionnels",
    "Téléconsultation médicale 24/7",
    "Prise en charge urgences",
    "Analyses biologiques et radiologie",
  ],
  reasonsTitle: "Comment payer moins cher sans mal se couvrir",
  reasons: [
    { title: "Comparer systématiquement", text: "Pour une même couverture, l'écart entre 2 mutuelles peut atteindre 40%. Ne restez pas sur votre mutuelle historique par habitude." },
    { title: "Adapter au profil réel", text: "Ne payez pas pour l'orthodontie si vous n'avez pas d'enfants, ou pour la maternité si vous êtes retraité." },
    { title: "Résiliation infra-annuelle", text: "Après 1 an, vous pouvez changer à tout moment sans frais si un tarif plus bas apparaît." },
  ],
  faqs: [
    { q: "Une mutuelle santé pas chère offre-t-elle une vraie couverture ?", a: "Oui, si elle est bien ciblée. Le 100% Santé (optique/dentaire/audition sans reste à charge) est légalement garanti même en formule d'entrée de gamme. La différence tient surtout aux dépassements d'honoraires et à la chambre particulière." },
    { q: "Quelle est la mutuelle santé la moins chère ?", a: "Cela dépend de votre profil. Pour un étudiant, certaines formules démarrent à 9€/mois. Pour un adulte 40 ans, on trouve à partir de 22€/mois. Notre comparateur identifie le moins cher pour VOTRE profil." },
    { q: "Puis-je changer pour une mutuelle moins chère quand je veux ?", a: "Oui, après 1 an d'ancienneté grâce à la résiliation infra-annuelle. Vous pouvez changer à tout moment, sans frais ni justificatif." },
    { q: "Les mutuelles pas chères ont-elles des délais de carence ?", a: "Souvent oui, sur les prothèses dentaires et l'orthodontie (3 à 6 mois). Les soins courants et l'hospitalisation sont généralement couverts sans délai." },
  ],
  related: [
    { kind: "page", to: "/prix-mutuelle-sante", anchor: "Prix mutuelle santé par profil", description: "Voir les prix moyens 2026 par âge." },
    { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Comparateur mutuelle santé", description: "+25 assureurs en 2 minutes." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle pas chère", description: "Devis économique en 2 min." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-pas-chere")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé Pas Chère dès 9€/mois — 40% d'économies | NEOASSUR" },
      { name: "description", content: "Mutuelle santé pas chère dès 9€/mois : 100% Santé garanti, hospitalisation, téléconsultation. Économisez jusqu'à 40% (312€/an). Devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé Pas Chère | NEOASSUR" },
      { property: "og:description", content: "Une vraie mutuelle à petit prix. Devis en 2 minutes." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-pas-chere" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-pas-chere" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-pas-chere", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
