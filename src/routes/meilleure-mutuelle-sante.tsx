import { createFileRoute } from "@tanstack/react-router";
import { Trophy, Star, ShieldCheck, Percent, Users, BadgeCheck } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Meilleure Mutuelle Santé",
  title: "Meilleure mutuelle santé 2026 : notre classement indépendant",
  subtitle:
    "Il n'existe pas UNE meilleure mutuelle santé, mais la meilleure POUR VOUS. Notre classement 2026 croise garanties, tarifs, qualité de service et rapidité de remboursement.",
  keywords: [
    "meilleure mutuelle santé",
    "meilleure mutuelle santé 2026",
    "classement mutuelles santé",
    "top mutuelles santé",
    "quelle est la meilleure mutuelle santé",
    "quelle mutuelle santé choisir",
    "meilleure mutuelle santé senior",
    "meilleure mutuelle santé famille",
    "meilleure mutuelle santé étudiant",
    "mutuelle santé avis",
    "meilleure complémentaire santé",
  ],
  image: productImage,
  introTitle: "Comment choisir la meilleure mutuelle santé en 2026",
  introText:
    "La meilleure mutuelle santé dépend de votre âge, votre situation familiale, votre budget et vos besoins réels. Un senior priorise hospitalisation et audition, une famille avec enfants privilégie optique et orthodontie, un jeune actif cherche l'essentiel au meilleur prix. Notre comparateur intègre ces logiques.",
  advantages: [
    { icon: Trophy, title: "Classement 2026 à jour", text: "Réévalué chaque trimestre selon les nouvelles offres du marché." },
    { icon: Star, title: "Notation multi-critères", text: "Prix, garanties, service client, rapidité de remboursement." },
    { icon: ShieldCheck, title: "100% indépendant", text: "Aucun assureur ne paye pour figurer en tête du classement." },
    { icon: Percent, title: "Économies prouvées", text: "312€/an en moyenne face à l'ancienne mutuelle de nos clients." },
    { icon: Users, title: "Analyse humaine", text: "Un conseiller vous aide à trancher entre 2 offres proches." },
    { icon: BadgeCheck, title: "+10 000 avis clients", text: "Notre méthode s'appuie sur des retours clients réels." },
  ],
  coverageTitle: "Nos critères pour évaluer la meilleure mutuelle santé",
  coverage: [
    "Rapport garanties/prix vs la moyenne du marché",
    "Niveau de remboursement sur les postes coûteux (dentaire, audition, optique)",
    "Prise en charge hospitalisation et chambre particulière",
    "Délais de remboursement observés (idéalement < 72h)",
    "Qualité du réseau de soins partenaires",
    "Existence d'un tiers payant généralisé",
    "Flexibilité du contrat (résiliation, modification)",
    "Solidité financière de l'organisme (ratio de solvabilité)",
  ],
  reasonsTitle: "Pourquoi notre classement mutuelle santé ?",
  reasons: [
    { title: "Neutre et indépendant", text: "NEOASSUR est courtier indépendant : aucune marque ne peut acheter sa place." },
    { title: "Méthode transparente", text: "Nous publions nos critères de notation et nos pondérations." },
    { title: "Personnalisable", text: "Le \"meilleur\" varie selon votre profil : notre conseiller adapte le classement." },
  ],
  faqs: [
    { q: "Quelle est la meilleure mutuelle santé en 2026 ?", a: "Il n'y a pas de réponse universelle : la meilleure dépend de votre âge, votre famille et votre budget. Pour un senior, APRIL et SPVIE dominent souvent ; pour une famille, Néoliane est très compétitif. Notre comparateur croise votre profil et sort le top 3." },
    { q: "Comment est établi le classement des meilleures mutuelles santé ?", a: "Nous croisons 8 critères : prix, niveau de garanties, rapidité de remboursement, qualité du service client, tiers payant, réseau de soins, flexibilité du contrat et solidité financière." },
    { q: "Le meilleur classement mutuelle santé est-il payant ?", a: "Non. Notre classement et notre comparateur sont 100% gratuits pour l'utilisateur. NEOASSUR se rémunère auprès de l'assureur uniquement si vous souscrivez." },
    { q: "Peut-on faire confiance aux comparateurs mutuelle santé ?", a: "Oui, à condition qu'ils soient indépendants et transparents. NEOASSUR affiche +25 partenaires et n'a pas de \"contrat exclusif\" avec un assureur unique." },
  ],
  related: [
    { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Utiliser notre comparateur mutuelle santé", description: "Comparez +25 assureurs en 2 minutes." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle santé gratuit", description: "Recevez votre devis personnalisé en 2 min." },
    { kind: "page", to: "/mutuelle-sante-famille", anchor: "Meilleure mutuelle santé famille", description: "Notre sélection pour les familles." },
  ],
};

export const Route = createFileRoute("/meilleure-mutuelle-sante")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Meilleure Mutuelle Santé 2026 — Classement indépendant | NEOASSUR" },
      { name: "description", content: "Meilleure mutuelle santé 2026 : notre classement indépendant croise prix, garanties, service client et remboursements. Comparez +25 assureurs en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Meilleure Mutuelle Santé 2026 — Classement | NEOASSUR" },
      { property: "og:description", content: "Notre classement indépendant des meilleures mutuelles santé 2026." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/meilleure-mutuelle-sante" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/meilleure-mutuelle-sante" }],
    scripts: buildProductJsonLd(data, "/meilleure-mutuelle-sante", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
