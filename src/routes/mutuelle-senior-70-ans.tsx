import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck, HeartPulse, Ear, Eye, Stethoscope, HandHeart,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Senior +70 ans",
  title: "Mutuelle senior après 70 ans : garanties adaptées à vos besoins",
  subtitle:
    "Une couverture pensée pour les +70 ans : audioprothèses, hospitalisation renforcée, dépendance et médecines douces — sans questionnaire médical, sans limite d'âge.",
  keywords: [
    "mutuelle senior 70 ans",
    "mutuelle senior +70 ans",
    "mutuelle 70 ans",
    "mutuelle santé 70 ans",
    "mutuelle senior 75 ans",
    "mutuelle senior 80 ans",
    "meilleure mutuelle après 70 ans",
    "mutuelle senior sans limite d'âge",
    "mutuelle senior sans questionnaire médical",
    "prix mutuelle senior 70 ans",
  ],
  image: productImage,
  introTitle: "Après 70 ans, les besoins de santé changent — votre mutuelle aussi",
  introText:
    "Passé 70 ans, l'audition, la vue, les soins dentaires lourds et l'hospitalisation deviennent les postes de dépense principaux. Notre mutuelle senior +70 ans est calibrée exactement pour ces besoins, avec des remboursements renforcés là où ça compte vraiment.",
  advantages: [
    { icon: ShieldCheck, title: "Aucune limite d'âge", text: "Souscription possible à 70, 75, 80 ans et au-delà, sans surprime injustifiée." },
    { icon: Ear, title: "Audioprothèses 100% couvertes", text: "Prise en charge intégrale de l'appareillage auditif classe 1 et forfait renforcé classe 2." },
    { icon: Eye, title: "Optique haut de gamme", text: "Verres progressifs, lunettes de qualité, chirurgie de la cataracte." },
    { icon: Stethoscope, title: "Hospitalisation renforcée", text: "Chambre particulière illimitée, dépassements d'honoraires pris en charge." },
    { icon: HeartPulse, title: "Assistance quotidienne", text: "Aide-ménagère, garde-malade, portage de repas après hospitalisation." },
    { icon: HandHeart, title: "Sans questionnaire médical", text: "Vos antécédents ne sont pas un obstacle : acceptation garantie." },
  ],
  coverageTitle: "Garanties adaptées aux +70 ans",
  coverage: [
    "Audioprothèses : classe 1 intégralement remboursées, classe 2 jusqu'à 1 700€/oreille",
    "Optique : verres progressifs, lunettes complexes, lentilles",
    "Chirurgie de la cataracte et opérations ophtalmologiques",
    "Dentaire lourd : prothèses, implants, couronnes céramiques",
    "Hospitalisation : chambre particulière illimitée, forfait journalier",
    "Dépassements d'honoraires chirurgiens et anesthésistes",
    "Cures thermales conventionnées",
    "Ostéopathie, sophrologie, pédicurie-podologie",
    "Téléconsultation médicale 24/7 avec vos proches en soutien",
    "Assistance à domicile après hospitalisation (aide-ménagère, courses, repas)",
  ],
  reasonsTitle: "Pourquoi NEOASSUR pour les +70 ans",
  reasons: [
    { title: "Expertise senior", text: "Nos conseillers sont spécialisés dans les besoins des seniors — pas de discours générique." },
    { title: "Tarifs négociés", text: "Nos accords avec les assureurs plafonnent les hausses liées à l'âge." },
    { title: "Accompagnement humain", text: "Un conseiller dédié, joignable directement, sans centre d'appel anonyme." },
  ],
  faqs: [
    { q: "Peut-on souscrire une mutuelle à 75 ou 80 ans ?", a: "Oui, sans aucun problème. Nos partenaires acceptent les adhésions sans limite d'âge maximum. Aucun questionnaire médical n'est demandé." },
    { q: "Combien coûte une mutuelle senior après 70 ans ?", a: "Le prix moyen se situe entre 85€ et 145€/mois selon le niveau de garanties. Nos comparateurs permettent régulièrement de descendre à 65€/mois pour une formule équilibrée." },
    { q: "Les audioprothèses sont-elles vraiment bien remboursées ?", a: "Oui : les appareils classe 1 (100% Santé) sont pris en charge intégralement (0€ à votre charge). Pour la classe 2, nos formules renforcées remboursent jusqu'à 1 700€ par oreille." },
    { q: "Que couvre la garantie dépendance incluse ?", a: "Une rente mensuelle en cas de perte d'autonomie (GIR 1-2 principalement), pour financer l'aide à domicile ou l'EHPAD." },
    { q: "Puis-je résilier facilement si je change d'avis ?", a: "Oui : après 1 an, vous pouvez résilier à tout moment sans frais (loi de résiliation infra-annuelle). Nous nous occupons de la démarche pour vous." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos formules mutuelle santé senior", description: "Explorez l'ensemble de nos offres pour seniors." },
    { kind: "page", to: "/assurance-obseques", anchor: "Compléter avec une assurance obsèques", description: "Protégez vos proches avec un capital garanti à vie." },
    { kind: "blog", slug: "audioprotheses-remboursement-bien-choisir", anchor: "Audioprothèses : bien comprendre les remboursements", description: "Le guide complet du remboursement auditif en 2026." },
    { kind: "blog", slug: "mutuelle-hospitalisation-bien-couvrir", anchor: "Hospitalisation : bien être couvert après 70 ans", description: "Chambre particulière, dépassements : ce qu'il faut savoir." },
  ],
};

export const Route = createFileRoute("/mutuelle-senior-70-ans")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Senior 70 ans — Garanties adaptées | NEOASSUR" },
      { name: "description", content: "Mutuelle senior +70 ans sans questionnaire médical, sans limite d'âge. Audioprothèses, hospitalisation, dépendance couvertes. Devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Senior 70 ans et + — Sans questionnaire médical | NEOASSUR" },
      { property: "og:description", content: "Couverture santé adaptée aux +70 ans. Sans limite d'âge, sans questionnaire. Devis gratuit." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-senior-70-ans" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-senior-70-ans" }],
    scripts: buildProductJsonLd(data, "/mutuelle-senior-70-ans", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
