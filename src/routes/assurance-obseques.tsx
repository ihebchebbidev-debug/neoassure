import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck, FileCheck, Lock, HeartHandshake, Users, Landmark,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-obseques.jpg";

const data: ProductPageData = {
  eyebrow: "Assurance Obsèques",
  title: "Protégez ceux qui comptent pour vous",
  subtitle:
    "Capital décès, assurance obsèques, rente conjoint : anticipez pour préserver votre famille des charges financières.",
  keywords: [
    "assurance obsèques",
    "assurance obsèque",
    "contrat obsèques",
    "contrat obsèques tarif",
    "convention obsèques",
    "assurance décès",
    "assurance deces",
    "prévoyance décès",
    "capital décès",
    "assurance obsèques sans questionnaire médical",
    "assurance obsèques senior",
    "assurance obsèques 70 ans",
    "assurance obsèques 80 ans",
    "meilleure assurance obsèques",
    "comparateur assurance obsèques",
    "comparatif assurance obsèques",
    "rente conjoint survivant",
    "financer ses obsèques",
    "coût moyen obsèques France",
    "combien coûte une assurance obsèques",
    "quelle est la meilleure assurance obsèques",
    "comment souscrire une assurance obsèques",
    "prévoyance senior",
    "devis assurance obsèques gratuit",
  ],
  image: productImage,

  introTitle: "Une prévoyance senior simple et sereine",
  introText:
    "En France, des obsèques coûtent en moyenne 4 500 €. Une assurance prévoyance permet de protéger vos proches : capital versé rapidement, organisation prise en charge, formalités allégées dans un moment difficile.",
  advantages: [
    { icon: Lock, title: "Capital garanti à vie", text: "Versement immédiat aux bénéficiaires désignés, sans succession." },
    { icon: FileCheck, title: "Sans questionnaire médical", text: "Acceptation garantie jusqu'à 85 ans selon les formules." },
    { icon: ShieldCheck, title: "Cotisations fixées à vie", text: "Aucune augmentation liée à l'âge ou à votre état de santé." },
    { icon: HeartHandshake, title: "Organisation des obsèques", text: "Service d'assistance dédié, 24h/24, pour soulager la famille." },
    { icon: Users, title: "Rente conjoint", text: "Capital ou rente mensuelle pour maintenir le niveau de vie du conjoint." },
    { icon: Landmark, title: "Fiscalité avantageuse", text: "Capital exonéré jusqu'à 152 500 € par bénéficiaire (art. 990 I CGI)." },
  ],
  coverageTitle: "Ce qui est couvert",
  coverage: [
    "Capital décès toutes causes (de 3 000 € à 50 000 €)",
    "Prise en charge intégrale des frais d'obsèques",
    "Rapatriement du corps en France ou à l'étranger",
    "Accompagnement administratif des proches",
    "Garantie doublée en cas d'accident",
    "Rente éducation pour les petits-enfants (option)",
  ],
  reasonsTitle: "Pourquoi choisir NEOASSUR ?",
  reasons: [
    { title: "Conseil personnalisé", text: "Nous calculons le capital nécessaire selon votre situation familiale." },
    { title: "Comparaison transparente", text: "Tableau clair des garanties, exclusions et délais de carence." },
    { title: "Suivi à vie", text: "Modifications de bénéficiaires, ajustements de capital : sans frais." },
  ],
  faqs: [
    { q: "À quel âge souscrire ?", a: "Plus tôt = moins cher. Dès 50-55 ans, vous bénéficiez de cotisations très avantageuses, fixées à vie." },
    { q: "Y a-t-il un délai de carence ?", a: "En général 1 an pour le décès par maladie. Aucun délai pour le décès accidentel." },
    { q: "Que devient le capital si je n'ai pas désigné de bénéficiaire ?", a: "Il rejoint la succession et perd l'avantage fiscal. Nous vous aidons à rédiger une clause optimale." },
  ],
  related: [
    { kind: "blog", slug: "assurance-obseques-proteger-proches", anchor: "Assurance obsèques : pourquoi protéger vos proches", description: "Anticipez les frais funéraires et soulagez votre famille." },
    { kind: "blog", slug: "prevoyance-deces-proteger-famille", anchor: "Prévoyance décès : protéger sa famille", description: "Capital décès, rente conjoint : les bonnes garanties à choisir." },
    { kind: "blog", slug: "assurance-vie-epargne-transmission", anchor: "Assurance vie : épargne et transmission", description: "Optimisez la fiscalité de la transmission (art. 990 I CGI)." },
    { kind: "page", to: "/mutuelle-sante", anchor: "Mutuelle santé senior +60 ans", description: "Complétez votre prévoyance avec une couverture santé renforcée." },
    { kind: "page", to: "/assurance-emprunteur", anchor: "Assurance emprunteur senior", description: "Économisez jusqu'à 15 000 € grâce à la loi Lemoine." },
  ],
};

export const Route = createFileRoute("/assurance-obseques")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Assurance Obsèques & Prévoyance — Protégez vos proches | NEOASSUR" },
      { name: "description", content: "Capital décès, assurance obsèques et rente conjoint sans questionnaire médical, cotisations fixées à vie. Anticipez pour protéger votre famille. Devis gratuit." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Assurance Obsèques & Prévoyance | NEOASSUR" },
      { property: "og:description", content: "Capital garanti à vie, organisation des obsèques 24h/24, fiscalité avantageuse. Devis gratuit en 2 min." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/assurance-obseques" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/assurance-obseques" }],
    scripts: buildProductJsonLd(data, "/assurance-obseques", loaderData?.origin ?? ""),
  }),

  component: () => <ProductPage data={data} />,
});
