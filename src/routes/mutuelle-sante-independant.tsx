import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Percent, HandCoins, ShieldCheck, HeartPulse, Calculator } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé Indépendant",
  title: "Mutuelle santé indépendant (TNS) : loi Madelin, cotisations déductibles",
  subtitle:
    "Auto-entrepreneur, profession libérale, artisan, commerçant : notre mutuelle santé indépendant est éligible loi Madelin et vos cotisations sont déductibles du revenu imposable.",
  keywords: [
    "mutuelle santé indépendant",
    "mutuelle TNS",
    "mutuelle santé auto-entrepreneur",
    "mutuelle Madelin",
    "loi Madelin santé",
    "mutuelle profession libérale",
    "mutuelle santé artisan commerçant",
    "meilleure mutuelle TNS",
    "mutuelle indépendant pas chère",
    "comparateur mutuelle indépendant",
    "devis mutuelle indépendant",
  ],
  image: productImage,
  introTitle: "Une mutuelle santé conçue pour les travailleurs indépendants",
  introText:
    "Contrairement aux salariés du privé, les TNS (Travailleurs Non Salariés) ne bénéficient d'aucune mutuelle collective obligatoire. Une bonne mutuelle santé indépendant couvre non seulement vos soins mais offre aussi un avantage fiscal via la loi Madelin.",
  advantages: [
    { icon: Calculator, title: "Loi Madelin", text: "Cotisations déductibles du revenu imposable (dans les plafonds légaux)." },
    { icon: Briefcase, title: "Adapté aux TNS", text: "Auto-entrepreneur, EI, EURL, SASU, professions libérales." },
    { icon: HandCoins, title: "Indemnités journalières", text: "Option prévoyance pour compenser une perte de revenu en cas d'arrêt." },
    { icon: Percent, title: "Remboursements renforcés", text: "Dentaire, optique, hospitalisation jusqu'à 400% BR." },
    { icon: HeartPulse, title: "Téléconsultation 24/7", text: "Un médecin joignable même en déplacement professionnel." },
    { icon: ShieldCheck, title: "Sans questionnaire lourd", text: "Adhésion rapide, sans questionnaire médical intrusif." },
  ],
  coverageTitle: "Ce que couvre une mutuelle TNS",
  coverage: [
    "Consultations et dépassements d'honoraires médecins",
    "Hospitalisation avec chambre particulière",
    "Dentaire : prothèses, implants, orthodontie",
    "Optique : lunettes, lentilles, chirurgie réfractive",
    "Audioprothèses et appareils auditifs",
    "Médecines douces (ostéo, chiro, acupuncture)",
    "Cures thermales et prévention",
    "Options prévoyance TNS (arrêt de travail, invalidité, décès)",
  ],
  reasonsTitle: "Pourquoi NEOASSUR pour les indépendants ?",
  reasons: [
    { title: "Expertise fiscale Madelin", text: "Nos conseillers connaissent les plafonds et vous optimisent votre déduction." },
    { title: "Package santé + prévoyance", text: "Nous couplons mutuelle et prévoyance pour ne rien laisser au hasard." },
    { title: "Économies moyennes 25%", text: "Face à un contrat souscrit en direct sans négociation." },
  ],
  faqs: [
    { q: "Qu'est-ce qu'un contrat mutuelle Madelin ?", a: "Un contrat Madelin (loi 94-126) est réservé aux TNS. Les cotisations sont déductibles du revenu imposable dans la limite de 3,75% du bénéfice + 7% du PASS, plafonné à 3% de 8 PASS." },
    { q: "Un auto-entrepreneur est-il éligible à la loi Madelin ?", a: "Non. Les micro-entrepreneurs relèvent du régime micro-fiscal et ne peuvent pas déduire leurs cotisations. Ils souscrivent une mutuelle santé individuelle classique." },
    { q: "Combien coûte une mutuelle santé indépendant ?", a: "Entre 40€ et 130€/mois selon l'âge et les garanties. L'avantage Madelin peut réduire le coût net de 20 à 30% après déduction fiscale." },
    { q: "Faut-il coupler mutuelle et prévoyance TNS ?", a: "Oui, c'est la meilleure protection. La mutuelle couvre les frais de santé ; la prévoyance verse une indemnité journalière en cas d'arrêt maladie — vital quand on est son propre patron." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir nos autres formules mutuelle santé." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle TNS gratuit", description: "Devis Madelin en 2 minutes." },
    { kind: "page", to: "/mutuelle-sante-entreprise", anchor: "Mutuelle entreprise", description: "Pour vos salariés (dirigeant TNS + collab)." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-independant")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé Indépendant TNS — Loi Madelin | NEOASSUR" },
      { name: "description", content: "Mutuelle santé indépendant (TNS) éligible loi Madelin : cotisations déductibles du revenu imposable. Auto-entrepreneur, libéral, artisan. Devis en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé TNS Loi Madelin — NEOASSUR" },
      { property: "og:description", content: "Mutuelle santé indépendant Madelin, cotisations déductibles." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-independant" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-independant" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-independant", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
