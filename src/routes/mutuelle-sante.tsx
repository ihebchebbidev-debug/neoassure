import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck, Percent, CreditCard, Leaf, HeartPulse, CalendarClock,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé",
  title: "Mutuelle santé : la meilleure couverture au meilleur prix",
  subtitle:
    "Comparez +25 mutuelles santé partenaires et trouvez la complémentaire adaptée à votre profil — famille, senior, étudiant, indépendant, salarié ou fonctionnaire. Devis gratuit en 2 minutes.",
  keywords: [
    "mutuelle santé",
    "meilleure mutuelle santé",
    "mutuelle santé pas chère",
    "comparateur mutuelle santé",
    "devis mutuelle santé",
    "mutuelle santé en ligne",
    "souscrire une mutuelle santé",
    "complémentaire santé",
    "assurance santé",
    "assurance maladie complémentaire",
    "couverture santé",
    "protection santé",
    "mutuelle santé famille",
    "mutuelle santé senior",
    "mutuelle santé étudiant",
    "mutuelle santé indépendant",
    "mutuelle santé entreprise",
    "mutuelle santé fonctionnaire",
    "mutuelle santé sans questionnaire médical",
    "mutuelle santé sans délai de carence",
    "remboursement mutuelle santé",
    "tarif mutuelle santé",
    "prix mutuelle santé",
    "quelle mutuelle santé choisir",
    "meilleure complémentaire santé",
  ],
  image: productImage,

  introTitle: "Une mutuelle santé pour chaque profil",
  introText:
    "La mutuelle santé — aussi appelée complémentaire santé — prend le relais de la Sécurité sociale sur ce qu'elle ne rembourse pas : dépassements d'honoraires, chambre particulière, optique, dentaire, audioprothèses, médecines douces. NEOASSUR compare +25 assureurs et sélectionne pour vous la meilleure formule selon votre âge, votre famille et votre budget.",
  advantages: [
    { icon: ShieldCheck, title: "Sans questionnaire médical", text: "Aucune sélection ni surprime liée à l'âge ou aux antécédents." },
    { icon: Percent, title: "Remboursements jusqu'à 400%", text: "Sur le dentaire, l'optique, l'audition et l'hospitalisation." },
    { icon: CreditCard, title: "Tiers payant généralisé", text: "Pas d'avance de frais chez +90% des professionnels de santé." },
    { icon: Leaf, title: "Médecines douces incluses", text: "Ostéopathie, acupuncture, sophrologie remboursées." },
    { icon: HeartPulse, title: "Téléconsultation 24/7", text: "Un médecin joignable à toute heure, incluse dans toutes les formules." },
    { icon: CalendarClock, title: "Résiliable à tout moment", text: "Résiliation infra-annuelle après 1 an, sans frais." },
  ],
  coverageTitle: "Ce que couvre une mutuelle santé complète",
  coverage: [
    "Hospitalisation : chambre particulière, forfait journalier, dépassements",
    "Dentaire : soins, prothèses, implants, orthodontie adulte et enfant",
    "Optique : lunettes, verres progressifs, lentilles, chirurgie réfractive",
    "Audition : appareils auditifs et 100% Santé audio",
    "Médecine courante : consultations, analyses, radiologie",
    "Pharmacie : médicaments prescrits remboursés ou non par la Sécu",
    "Médecines douces : ostéo, chiro, acupuncture, sophrologie",
    "Prévention : bilan santé, vaccins, dépistages, téléconsultation 24/7",
  ],
  reasonsTitle: "Pourquoi choisir NEOASSUR ?",
  reasons: [
    { title: "Comparateur indépendant", text: "+25 assureurs partenaires comparés en temps réel selon votre profil." },
    { title: "Conseiller dédié", text: "Un expert humain vous accompagne pour décoder les garanties et négocier votre tarif." },
    { title: "Économies moyennes 312€/an", text: "Nos clients économisent jusqu'à 40% face à leur ancienne mutuelle." },
  ],
  faqs: [
    { q: "Quelle différence entre mutuelle santé et complémentaire santé ?", a: "Aucune différence juridique : les deux termes désignent la même chose. \"Mutuelle santé\" est le terme courant, \"complémentaire santé\" est le terme technique." },
    { q: "Comment choisir la meilleure mutuelle santé ?", a: "Analysez d'abord vos besoins réels (optique, dentaire, hospitalisation), puis comparez plusieurs offres à niveau de garanties équivalent. Notre comparateur croise votre profil et sort les 3 meilleures formules du marché." },
    { q: "Combien coûte une mutuelle santé en 2026 ?", a: "De 22€/mois (jeune actif, entrée de gamme) à 180€/mois (senior, formule renforcée). Comptez en moyenne 55€/mois pour un adulte seul et 130€/mois pour une famille de 4." },
    { q: "Puis-je changer de mutuelle santé quand je veux ?", a: "Oui, grâce à la résiliation infra-annuelle : après 1 an d'ancienneté, vous pouvez changer à tout moment, sans frais ni justificatif." },
  ],
  related: [
    { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Comparateur mutuelle santé", description: "+25 assureurs comparés en 2 minutes." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle santé gratuit", description: "Devis personnalisé en 2 min, sans engagement." },
    { kind: "page", to: "/meilleure-mutuelle-sante", anchor: "Meilleure mutuelle santé 2026", description: "Notre classement indépendant." },
    { kind: "page", to: "/mutuelle-sante-famille", anchor: "Mutuelle santé famille", description: "Enfants gratuits dès le 3e." },
    { kind: "page", to: "/mutuelle-senior-pas-cher", anchor: "Mutuelle santé senior", description: "Renforts audition et hospitalisation." },
    { kind: "page", to: "/mutuelle-sante-etudiant", anchor: "Mutuelle santé étudiant", description: "Dès 9€/mois, Erasmus inclus." },
    { kind: "page", to: "/mutuelle-sante-independant", anchor: "Mutuelle santé indépendant TNS", description: "Loi Madelin, cotisations déductibles." },
    { kind: "page", to: "/mutuelle-sante-entreprise", anchor: "Mutuelle santé entreprise", description: "Conforme ANI 2016." },
    { kind: "page", to: "/mutuelle-sante-fonctionnaire", anchor: "Mutuelle santé fonctionnaire", description: "PSC et référencement." },
    { kind: "page", to: "/mutuelle-optique", anchor: "Renfort mutuelle optique", description: "Lunettes, progressifs, Lasik." },
    { kind: "page", to: "/mutuelle-dentaire", anchor: "Renfort mutuelle dentaire", description: "Implants, prothèses, orthodontie." },
    { kind: "page", to: "/assurance-hospitalisation", anchor: "Assurance hospitalisation", description: "Chambre particulière et dépassements." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé 2026 — Comparez +25 assureurs, devis gratuit | NEOASSUR" },
      { name: "description", content: "Mutuelle santé : comparez +25 assureurs partenaires en 2 minutes. Économisez jusqu'à 40% (312€/an), sans questionnaire médical. Famille, senior, étudiant, TNS, entreprise." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé — Comparez +25 assureurs | NEOASSUR" },
      { property: "og:description", content: "La meilleure mutuelle santé au meilleur prix. Devis gratuit en 2 minutes." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
