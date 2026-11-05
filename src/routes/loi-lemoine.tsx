import { createFileRoute } from "@tanstack/react-router";
import {
  Scale, Calendar, Euro, FileCheck, ShieldCheck, Zap,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-emprunteur.jpg";

const data: ProductPageData = {
  eyebrow: "Loi Lemoine",
  title: "Loi Lemoine : changez d'assurance emprunteur à tout moment",
  subtitle:
    "Depuis le 1er juin 2022, la loi Lemoine vous permet de résilier votre assurance de prêt immobilier quand vous voulez, sans frais, et d'économiser jusqu'à 15 000€ sur la durée de votre crédit.",
  keywords: [
    "loi lemoine",
    "loi lemoine assurance emprunteur",
    "loi lemoine assurance prêt immobilier",
    "loi lemoine 2022",
    "loi lemoine résiliation",
    "loi lemoine questionnaire médical",
    "loi lemoine délégation d'assurance",
    "changer assurance emprunteur loi lemoine",
    "loi lemoine explication",
    "loi lemoine simulation",
    "loi lemoine économies",
  ],
  image: productImage,
  introTitle: "La loi Lemoine, votre meilleur allié pour économiser",
  introText:
    "Adoptée en 2022, la loi Lemoine a révolutionné le marché de l'assurance emprunteur. Vous pouvez désormais changer d'assurance à tout moment de votre prêt, sans attendre la date anniversaire. Résultat : des économies moyennes de 5 000€ à 15 000€ sur la durée d'un crédit immobilier.",
  advantages: [
    { icon: Calendar, title: "Résiliation à tout moment", text: "Plus besoin d'attendre : changez d'assurance dès demain, sans date anniversaire." },
    { icon: Euro, title: "Jusqu'à 15 000€ d'économies", text: "Sur la durée totale du prêt, en moyenne 60% moins cher que l'assurance banque." },
    { icon: FileCheck, title: "Pas de questionnaire médical", text: "Sous conditions : prêt < 200 000€ et fin de remboursement avant 60 ans." },
    { icon: ShieldCheck, title: "Garanties équivalentes exigées", text: "La banque ne peut pas refuser si les garanties sont au moins équivalentes." },
    { icon: Zap, title: "Démarche gratuite", text: "Aucun frais de dossier, aucune pénalité de résiliation." },
    { icon: Scale, title: "Encadrée par la loi", text: "La banque a 10 jours ouvrés pour accepter votre nouvelle assurance." },
  ],
  coverageTitle: "Ce que la loi Lemoine vous garantit",
  coverage: [
    "Résiliation infra-annuelle : changez d'assurance à tout moment, à toute date",
    "Suppression du questionnaire médical pour les prêts < 200 000€ (remboursés avant 60 ans)",
    "Droit à l'oubli réduit à 5 ans pour les anciens malades du cancer et de l'hépatite C",
    "Information annuelle obligatoire sur le coût de l'assurance et le droit à résiliation",
    "Refus de la banque encadré et motivé (équivalence de garanties uniquement)",
    "Aucun frais ni pénalité en cas de changement",
    "Économies moyennes constatées : 5 000€ à 15 000€ sur la durée du prêt",
  ],
  reasonsTitle: "Comment on active la loi Lemoine pour vous",
  reasons: [
    { title: "Étude gratuite", text: "Nous analysons votre contrat actuel et calculons vos économies possibles." },
    { title: "Recherche d'équivalence", text: "Nous trouvons une assurance avec garanties au moins équivalentes exigées par votre banque." },
    { title: "Démarches gérées de A à Z", text: "Nous rédigeons la demande de résiliation et gérons les échanges avec votre banque." },
  ],
  faqs: [
    { q: "À quoi sert la loi Lemoine ?", a: "La loi Lemoine (juin 2022) vous permet de résilier votre assurance de prêt immobilier à tout moment, sans frais, et de la remplacer par une assurance moins chère à garanties équivalentes." },
    { q: "Qui peut bénéficier de la loi Lemoine ?", a: "Tous les emprunteurs ayant un crédit immobilier en cours, quelle que soit la date de souscription. La suppression du questionnaire médical concerne les prêts < 200 000€ dont le remboursement se termine avant 60 ans." },
    { q: "Combien puis-je économiser grâce à la loi Lemoine ?", a: "En moyenne, nos clients économisent entre 5 000€ et 15 000€ sur la durée de leur prêt, soit 40 à 60% du coût de leur assurance actuelle." },
    { q: "La banque peut-elle refuser mon nouvelle assurance ?", a: "Uniquement si les garanties ne sont pas au moins équivalentes à celles du contrat actuel. Elle doit motiver son refus par écrit dans un délai de 10 jours ouvrés." },
    { q: "Y a-t-il un délai à respecter avec la loi Lemoine ?", a: "Non. Contrairement à la loi Hamon (12 mois) ou à l'amendement Bourquin (date anniversaire), la loi Lemoine s'applique à tout moment du prêt." },
  ],
  related: [
    { kind: "page", to: "/assurance-emprunteur", anchor: "Voir nos offres d'assurance emprunteur", description: "Comparez et changez votre assurance de prêt immobilier." },
  ],
};

export const Route = createFileRoute("/loi-lemoine")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Loi Lemoine 2026 — Changez d'assurance emprunteur à tout moment | NEOASSUR" },
      { name: "description", content: "Loi Lemoine : résiliez votre assurance de prêt immobilier à tout moment et économisez jusqu'à 15 000€. Guide complet, simulation gratuite en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Loi Lemoine — Économisez jusqu'à 15 000€ sur votre assurance de prêt | NEOASSUR" },
      { property: "og:description", content: "Résiliez votre assurance emprunteur à tout moment grâce à la loi Lemoine. Simulation gratuite." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.neo-assur.fr/loi-lemoine" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/loi-lemoine" }],
    scripts: buildProductJsonLd(data, "/loi-lemoine", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
