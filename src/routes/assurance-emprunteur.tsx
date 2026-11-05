import { createFileRoute } from "@tanstack/react-router";
import {
  Scale, FileCheck, Percent, ShieldCheck, CheckCircle2, Workflow,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-emprunteur.jpg";

const data: ProductPageData = {
  eyebrow: "Assurance Emprunteur",
  title: "Économisez sur votre assurance de prêt",
  subtitle:
    "Loi Lemoine : changez quand vous voulez et économisez jusqu'à 15 000 € sur la durée totale de votre crédit.",
  keywords: [
    "assurance emprunteur",
    "assurance de prêt immobilier",
    "assurance prêt immobilier",
    "assurance crédit immobilier",
    "assurance crédit",
    "loi Lemoine",
    "loi Lemoine assurance emprunteur",
    "délégation d'assurance emprunteur",
    "changer assurance de prêt",
    "changer d'assurance emprunteur",
    "résiliation assurance emprunteur",
    "renégocier assurance emprunteur",
    "comparateur assurance emprunteur",
    "comparatif assurance emprunteur",
    "meilleure assurance emprunteur",
    "assurance prêt senior",
    "assurance emprunteur sans questionnaire médical",
    "assurance emprunteur pas cher",
    "économiser assurance crédit immobilier",
    "quelle assurance emprunteur choisir",
    "que couvre l'assurance emprunteur",
    "calcul taux assurance emprunteur",
    "devis assurance de prêt gratuit",
    "assurance emprunteur PTIA IPT ITT",
    "assurance emprunteur ALD",
  ],
  image: productImage,

  introTitle: "L'assurance emprunteur qui s'adapte aux seniors",
  introText:
    "Depuis la loi Lemoine de 2022, vous pouvez résilier votre assurance de prêt à tout moment. Pour les seniors, c'est l'opportunité de diviser par 2 ou 3 le coût de votre couverture, sans toucher à votre crédit.",
  advantages: [
    { icon: Scale, title: "Loi Lemoine", text: "Changez d'assurance à tout moment, sans frais, sans pénalité." },
    { icon: FileCheck, title: "Sans questionnaire jusqu'à 200k€", text: "Pour les crédits ≤200k€ remboursés avant 60 ans." },
    { icon: Percent, title: "Économies jusqu'à 65%", text: "Sur la cotisation par rapport à l'assurance bancaire." },
    { icon: ShieldCheck, title: "Couverture renforcée", text: "Décès, PTIA, IPT, ITT, perte d'emploi optionnelle." },
    { icon: CheckCircle2, title: "Acceptation 80 ans", text: "Garanties maintenues jusqu'à 80, voire 85 ans selon assureur." },
    { icon: Workflow, title: "Process simplifié", text: "Nous gérons tous les courriers à votre banque, à votre place." },
  ],
  coverageTitle: "Ce qui est couvert",
  coverage: [
    "Décès toutes causes",
    "Perte Totale et Irréversible d'Autonomie (PTIA)",
    "Invalidité Permanente Totale (IPT) et Partielle (IPP)",
    "Incapacité Temporaire de Travail (ITT)",
    "Garantie maladies redoutées (cancer, AVC, infarctus)",
    "Prise en charge des affections de longue durée (ALD)",
  ],
  reasonsTitle: "Pourquoi choisir NEOASSUR ?",
  reasons: [
    { title: "Analyse comparative", text: "Nous chiffrons votre économie potentielle dès l'appel." },
    { title: "Gestion clé en main", text: "Lettres de résiliation, équivalence de garanties, négociation banque." },
    { title: "Conseil indépendant", text: "+15 assureurs spécialisés, nous choisissons selon votre profil santé." },
  ],
  faqs: [
    { q: "Puis-je changer même si mon prêt date d'avant 2022 ?", a: "Oui, la loi Lemoine s'applique à tous les contrats en cours, quelle que soit la date de souscription." },
    { q: "Quelle économie peut-on espérer ?", a: "En moyenne entre 5 000 € et 15 000 € sur la durée résiduelle du prêt pour un emprunteur de +55 ans." },
    { q: "La banque peut-elle refuser ?", a: "Non, dès lors que le nouveau contrat présente une équivalence de garanties. La banque a 10 jours pour répondre." },
  ],
  related: [
    { kind: "blog", slug: "assurance-emprunteur-economisez", anchor: "Assurance emprunteur : économisez jusqu'à 15 000 €", description: "Comment la loi Lemoine réduit le coût de votre crédit immobilier." },
    { kind: "blog", slug: "assurance-emprunteur-refus-banque", anchor: "Refus de la banque : que faire ?", description: "Recours et solutions en cas de refus d'assurance emprunteur." },
    { kind: "blog", slug: "prevoyance-arret-travail-tns", anchor: "Prévoyance arrêt de travail : IPT, ITT, PTIA", description: "Comprendre les garanties invalidité et incapacité." },
    { kind: "blog", slug: "devis-mutuelle-2-minutes", anchor: "Devis assurance de prêt en 2 minutes", description: "Comparez les offres et obtenez un devis gratuit rapidement." },
    { kind: "page", to: "/mutuelle-sante", anchor: "Mutuelle senior renforcée", description: "Optique, dentaire, audition : couverture complète +60 ans." },
    { kind: "page", to: "/assurance-obseques", anchor: "Assurance obsèques & prévoyance décès", description: "Capital garanti à vie pour protéger vos proches." },
  ],
};

export const Route = createFileRoute("/assurance-emprunteur")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Assurance Emprunteur — Loi Lemoine, économisez jusqu'à 15 000 € | NEOASSUR" },
      { name: "description", content: "Changez d'assurance de prêt à tout moment grâce à la loi Lemoine et économisez jusqu'à 15 000 €. Acceptation jusqu'à 80 ans. Devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Assurance Emprunteur — Loi Lemoine | NEOASSUR" },
      { property: "og:description", content: "Économisez jusqu'à 65% sur votre assurance de prêt. Gestion clé en main. Devis gratuit." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/assurance-emprunteur" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/assurance-emprunteur" }],
    scripts: buildProductJsonLd(data, "/assurance-emprunteur", loaderData?.origin ?? ""),

  }),
  component: () => <ProductPage data={data} />,
});
