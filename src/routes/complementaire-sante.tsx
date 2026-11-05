import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, HeartPulse, Percent, CreditCard, Leaf, CalendarClock } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Complémentaire Santé",
  title: "Complémentaire santé : couvrez ce que la Sécu ne rembourse pas",
  subtitle:
    "Une complémentaire santé (aussi appelée mutuelle) prend en charge le ticket modérateur, les dépassements d'honoraires, l'optique, le dentaire et l'hospitalisation.",
  keywords: [
    "complémentaire santé",
    "meilleure complémentaire santé",
    "complémentaire santé pas chère",
    "assurance maladie complémentaire",
    "couverture santé",
    "protection santé",
    "différence mutuelle et complémentaire santé",
    "complémentaire santé senior",
    "complémentaire santé famille",
    "complémentaire santé individuelle",
    "souscrire complémentaire santé",
    "devis complémentaire santé",
  ],
  image: productImage,
  introTitle: "Qu'est-ce qu'une complémentaire santé ?",
  introText:
    "La complémentaire santé complète les remboursements de l'Assurance Maladie obligatoire. Sans elle, vous supportez seul le reste à charge : dépassements d'honoraires, forfait hospitalier, lunettes hors 100% Santé, prothèses dentaires. Avec NEOASSUR, comparez +25 organismes en 2 minutes.",
  advantages: [
    { icon: Percent, title: "Remboursements jusqu'à 400%", text: "Sur l'optique, le dentaire et l'audition selon la formule." },
    { icon: CreditCard, title: "Tiers payant généralisé", text: "Pas d'avance de frais chez +90% des professionnels de santé." },
    { icon: HeartPulse, title: "Téléconsultation 24/7", text: "Un médecin joignable à toute heure, incluse dans toutes nos formules." },
    { icon: Leaf, title: "Médecines douces", text: "Ostéopathie, acupuncture, sophrologie remboursées." },
    { icon: ShieldCheck, title: "Assistance à domicile", text: "Aide-ménagère, garde d'enfants, transport en cas d'hospitalisation." },
    { icon: CalendarClock, title: "Résiliable à tout moment", text: "Loi Hamon et résiliation infra-annuelle, sans frais après 1 an." },
  ],
  coverageTitle: "Ce que couvre une complémentaire santé",
  coverage: [
    "Consultations médecin traitant et spécialistes (dépassements d'honoraires)",
    "Hospitalisation : forfait journalier, chambre particulière",
    "Optique : lunettes, verres progressifs, lentilles",
    "Dentaire : soins, prothèses, orthodontie, implants",
    "Audition : appareils auditifs (au-delà du 100% Santé)",
    "Pharmacie prescrite non remboursée par la Sécu",
    "Médecines douces (ostéo, chiro, acupuncture)",
    "Cures thermales et prévention",
  ],
  reasonsTitle: "Pourquoi choisir NEOASSUR ?",
  reasons: [
    { title: "Comparateur indépendant", text: "+25 assureurs partenaires comparés selon votre profil et vos besoins réels." },
    { title: "Conseiller dédié", text: "Un expert vous accompagne pour décoder les garanties et négocier votre tarif." },
    { title: "Économies moyennes 312€/an", text: "Nos clients économisent jusqu'à 40% sur leur cotisation annuelle." },
  ],
  faqs: [
    { q: "Quelle différence entre mutuelle et complémentaire santé ?", a: "Aucune différence juridique : les deux termes désignent une assurance qui complète les remboursements de la Sécurité sociale. \"Mutuelle\" est l'usage courant, \"complémentaire santé\" est le terme technique." },
    { q: "La complémentaire santé est-elle obligatoire ?", a: "Elle est obligatoire pour les salariés du privé (mutuelle d'entreprise depuis 2016). Pour les autres (indépendants, retraités, étudiants, fonctionnaires), elle reste facultative mais très fortement recommandée." },
    { q: "Combien coûte une complémentaire santé en 2026 ?", a: "Entre 25€/mois (jeune actif, entrée de gamme) et 150€/mois (senior, formule renforcée). Un couple senior paie en moyenne 90 à 130€/mois." },
    { q: "Puis-je changer de complémentaire santé quand je veux ?", a: "Oui. Après 1 an de contrat, la résiliation infra-annuelle vous permet de résilier à tout moment sans frais ni justificatif." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Voir toutes nos mutuelles santé", description: "Comparez nos formules mutuelle santé grand public." },
    { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Comparateur mutuelle santé", description: "Comparez +25 offres en 2 minutes." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle santé gratuit", description: "Recevez votre devis personnalisé en 2 minutes." },
  ],
};

export const Route = createFileRoute("/complementaire-sante")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Complémentaire Santé — Devis gratuit, +25 assureurs | NEOASSUR" },
      { name: "description", content: "Complémentaire santé (mutuelle) : couvrez ce que la Sécu ne rembourse pas. Comparez +25 assureurs, économisez jusqu'à 40%. Devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Complémentaire Santé — Comparez +25 assureurs | NEOASSUR" },
      { property: "og:description", content: "Complémentaire santé au meilleur prix. Devis gratuit en 2 minutes." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/complementaire-sante" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/complementaire-sante" }],
    scripts: buildProductJsonLd(data, "/complementaire-sante", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
