import { createFileRoute } from "@tanstack/react-router";
import { Users, Baby, HeartPulse, Percent, ShieldCheck, Smile } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé Famille",
  title: "Mutuelle santé famille : couvrez tous vos proches avec une seule cotisation",
  subtitle:
    "Optique enfants, orthodontie, maternité, hospitalisation : une mutuelle santé famille bien choisie protège toute la maison sans faire exploser le budget.",
  keywords: [
    "mutuelle santé famille",
    "mutuelle famille",
    "meilleure mutuelle famille",
    "mutuelle famille pas chère",
    "mutuelle santé famille nombreuse",
    "mutuelle famille avec enfants",
    "mutuelle famille orthodontie",
    "mutuelle famille maternité",
    "comparateur mutuelle famille",
    "devis mutuelle famille",
    "mutuelle santé pour famille nombreuse",
  ],
  image: productImage,
  introTitle: "Une mutuelle santé pensée pour toute la famille",
  introText:
    "Les besoins d'une famille sont spécifiques : consultations pédiatre, orthodontie enfant, lunettes qui se cassent, arrêts maladie, maternité. Notre mutuelle santé famille couvre ces postes avec des remboursements renforcés — et vos enfants sont gratuits à partir du 3e.",
  advantages: [
    { icon: Users, title: "Enfants gratuits dès le 3e", text: "Selon les formules partenaires : le 3e enfant et suivants ne coûtent rien." },
    { icon: Baby, title: "Maternité et pédiatrie", text: "Chambre particulière maternité, forfait naissance, vaccins remboursés." },
    { icon: Smile, title: "Orthodontie enfant", text: "Remboursements jusqu'à 400% BR pour un traitement complet." },
    { icon: Percent, title: "Optique enfant renforcée", text: "Verres et montures régulièrement changés : couverture adaptée." },
    { icon: HeartPulse, title: "Téléconsultation illimitée", text: "Un pédiatre joignable 24/7, précieux avec des enfants." },
    { icon: ShieldCheck, title: "Assistance parentale", text: "Garde d'enfants à domicile en cas d'hospitalisation d'un parent." },
  ],
  coverageTitle: "Ce qui est couvert pour toute la famille",
  coverage: [
    "Consultations pédiatre, médecin traitant, spécialistes",
    "Maternité : forfait naissance, chambre particulière",
    "Orthodontie enfant et adulte",
    "Optique enfant : renouvellement fréquent des verres pris en charge",
    "Vaccins non obligatoires et prévention",
    "Hospitalisation de l'enfant et lit accompagnant parent",
    "Ostéopathie, orthophonie, psychologue enfant",
    "Cures thermales pédiatriques (asthme, ORL...)",
  ],
  reasonsTitle: "Pourquoi choisir NEOASSUR pour votre famille ?",
  reasons: [
    { title: "Tarifs négociés familles", text: "Nos partenariats incluent des remises spécifiques familles nombreuses." },
    { title: "Formules modulables", text: "Renforcez uniquement les postes qui vous concernent (ortho, optique...)." },
    { title: "Conseiller dédié", text: "Un expert famille vous aide à trouver le meilleur équilibre couverture/prix." },
  ],
  faqs: [
    { q: "Qu'est-ce qu'une mutuelle santé famille ?", a: "C'est une mutuelle qui couvre plusieurs bénéficiaires sous un même contrat : conjoint et enfants à charge. Une seule cotisation, une seule carte tiers payant." },
    { q: "Combien coûte une mutuelle santé famille ?", a: "Comptez entre 80€ et 180€/mois pour une famille de 4 personnes selon le niveau de garanties. Les familles nombreuses (3+ enfants) bénéficient souvent de la gratuité du 3e enfant." },
    { q: "Jusqu'à quel âge couvrir mes enfants ?", a: "Généralement jusqu'à 18 ans, ou 26 ans s'ils poursuivent des études, sont apprentis ou en recherche d'emploi (sous conditions selon l'assureur)." },
    { q: "L'orthodontie de mon adolescent est-elle bien remboursée ?", a: "Sur nos formules famille, l'orthodontie est remboursée jusqu'à 400% du tarif de la Sécurité sociale, ce qui couvre l'essentiel d'un traitement de 2-3 ans." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Comparez nos formules mutuelle santé." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle famille gratuit", description: "Devis personnalisé pour votre famille en 2 minutes." },
    { kind: "page", to: "/mutuelle-optique", anchor: "Mutuelle optique renforcée", description: "Pour les lunettes des enfants et adultes." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-famille")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé Famille — Enfants gratuits dès le 3e | NEOASSUR" },
      { name: "description", content: "Mutuelle santé famille : optique enfants, orthodontie, maternité, hospitalisation. Enfants gratuits dès le 3e. Devis gratuit en 2 min, +25 assureurs." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé Famille — NEOASSUR" },
      { property: "og:description", content: "Une mutuelle santé pensée pour toute la famille. Devis gratuit en 2 min." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-famille" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-famille" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-famille", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
