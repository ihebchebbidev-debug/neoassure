import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Euro, HeartPulse, Percent, ShieldCheck, Plane } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé Étudiant",
  title: "Mutuelle santé étudiant : petit budget, vraie couverture",
  subtitle:
    "Depuis 2019, les étudiants dépendent du régime général. Une mutuelle santé étudiant complète les remboursements pour rester bien couvert, à partir de 9€/mois.",
  keywords: [
    "mutuelle santé étudiant",
    "mutuelle étudiante",
    "mutuelle étudiant pas chère",
    "meilleure mutuelle étudiant",
    "mutuelle étudiant en alternance",
    "mutuelle étudiant boursier",
    "complémentaire santé étudiant",
    "comparateur mutuelle étudiant",
    "mutuelle étudiant Erasmus",
    "mutuelle étudiant étranger",
    "devis mutuelle étudiant",
  ],
  image: productImage,
  introTitle: "Une mutuelle santé étudiant à partir de 9€/mois",
  introText:
    "Depuis la suppression du régime étudiant de Sécurité sociale, chaque étudiant est rattaché au régime général — mais une complémentaire santé reste indispensable pour couvrir les frais réels : lunettes, dentaire, contraception, psychologue, hospitalisation. Nos formules étudiantes démarrent à 9€/mois.",
  advantages: [
    { icon: Euro, title: "Dès 9€/mois", text: "Formule essentielle étudiante à petit prix, sans engagement." },
    { icon: GraduationCap, title: "Adapté aux 18-28 ans", text: "Garanties calibrées pour un jeune actif ou étudiant." },
    { icon: HeartPulse, title: "Consult' psy remboursées", text: "Séances chez psychologue clinicien prises en charge." },
    { icon: Percent, title: "Optique renforcée", text: "Lunettes et lentilles bien couvertes, renouvellement facile." },
    { icon: Plane, title: "Couverture Erasmus", text: "Extension Europe et monde pour les études à l'étranger." },
    { icon: ShieldCheck, title: "Résiliable à tout moment", text: "Après 1 an, résiliation infra-annuelle sans frais." },
  ],
  coverageTitle: "Ce que couvre une mutuelle santé étudiant",
  coverage: [
    "Consultations médecin traitant, gynéco, dermato",
    "Contraception (pilule, DIU, implant)",
    "Séances de psychologue clinicien",
    "Optique : lunettes, lentilles, chirurgie réfractive",
    "Dentaire : soins, détartrage, prothèses",
    "Hospitalisation : chambre particulière et forfait journalier",
    "Vaccinations non obligatoires (voyages, HPV)",
    "Médecine du sport et ostéopathie",
  ],
  reasonsTitle: "Pourquoi une mutuelle NEOASSUR pour étudiants ?",
  reasons: [
    { title: "Tarifs jeunes", text: "Formules pensées pour les 18-28 ans, à partir de 9€/mois." },
    { title: "Erasmus / stage à l'étranger", text: "Extensions internationales incluses ou en option." },
    { title: "Sans engagement", text: "Résiliation facile en fin d'études ou en cas d'embauche." },
  ],
  faqs: [
    { q: "Une mutuelle étudiante est-elle obligatoire ?", a: "Non, elle n'est pas obligatoire, mais fortement recommandée. Sans mutuelle, une paire de lunettes ou une séance chez le dentiste peut coûter très cher au-delà des 70% remboursés par la Sécu." },
    { q: "Quel prix pour une mutuelle santé étudiant ?", a: "À partir de 9€/mois pour une formule essentielle, jusqu'à 40€/mois pour une couverture renforcée (optique, dentaire, hospitalisation confort)." },
    { q: "Quelle mutuelle pour un étudiant en alternance ?", a: "Un alternant a le statut de salarié : son employeur doit lui proposer une mutuelle collective obligatoire. Si les garanties sont insuffisantes, une surcomplémentaire individuelle peut être souscrite en complément." },
    { q: "Une mutuelle étudiant couvre-t-elle Erasmus ou un stage à l'étranger ?", a: "Oui, nos formules incluent en option une extension Europe/monde qui couvre les frais médicaux et le rapatriement pendant un échange universitaire ou un stage à l'étranger." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir toutes nos formules mutuelle santé." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle étudiant gratuit", description: "Devis en 2 minutes." },
    { kind: "page", to: "/mutuelle-sante-expatrie", anchor: "Mutuelle expatrié / international", description: "Pour les études à l'étranger longue durée." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-etudiant")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé Étudiant dès 9€/mois — Erasmus inclus | NEOASSUR" },
      { name: "description", content: "Mutuelle santé étudiant à partir de 9€/mois : optique, dentaire, psy, contraception, Erasmus. Comparez +25 assureurs, devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé Étudiant dès 9€/mois | NEOASSUR" },
      { property: "og:description", content: "Une vraie mutuelle étudiante à petit prix. Devis gratuit en 2 min." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-etudiant" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-etudiant" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-etudiant", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
