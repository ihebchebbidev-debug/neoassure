import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, HeartPulse, ShieldCheck, Percent, HandCoins, Ambulance } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Assurance Hospitalisation",
  title: "Assurance hospitalisation : chambre particulière et zéro avance de frais",
  subtitle:
    "Une hospitalisation peut coûter des milliers d'euros en dépassements d'honoraires et chambre particulière. Notre assurance hospitalisation prend tout en charge, sans avance de frais.",
  keywords: [
    "assurance hospitalisation",
    "assurance hospitalisation seule",
    "mutuelle hospitalisation",
    "meilleure assurance hospitalisation",
    "assurance hospitalisation pas chère",
    "chambre particulière remboursement",
    "forfait journalier hospitalier",
    "assurance hospitalisation senior",
    "comparateur assurance hospitalisation",
    "devis assurance hospitalisation",
    "couverture hospitalisation",
  ],
  image: productImage,
  introTitle: "Une hospitalisation coûte plus cher qu'on ne le pense",
  introText:
    "Le forfait journalier hospitalier (20€/jour), la chambre particulière (60 à 130€/jour), les dépassements d'honoraires du chirurgien : sans assurance hospitalisation, la facture d'un séjour de 5 jours dépasse facilement 1 500€. Nos formules prennent tout en charge, sans plafond de séjour.",
  advantages: [
    { icon: BedDouble, title: "Chambre particulière", text: "Prise en charge intégrale (60 à 130€/jour selon l'établissement)." },
    { icon: HandCoins, title: "Forfait journalier", text: "Les 20€/jour d'hôpital pris en charge sans limite de durée." },
    { icon: Percent, title: "Dépassements d'honoraires", text: "Chirurgien, anesthésiste : jusqu'à 400% BR." },
    { icon: Ambulance, title: "Transport & ambulance", text: "Frais de transport sanitaire remboursés." },
    { icon: HeartPulse, title: "Lit accompagnant", text: "Un parent d'enfant hospitalisé couvert pour le lit accompagnant." },
    { icon: ShieldCheck, title: "Tiers payant hôpital", text: "Aucune avance de frais à l'admission." },
  ],
  coverageTitle: "Ce que couvre une assurance hospitalisation",
  coverage: [
    "Frais de séjour (bloc opératoire, salle de réveil)",
    "Honoraires chirurgien, anesthésiste, médecin",
    "Dépassements d'honoraires (secteur 2)",
    "Forfait journalier hospitalier (20€/jour)",
    "Chambre particulière (60 à 130€/jour)",
    "Lit accompagnant enfant / conjoint",
    "Transport sanitaire (ambulance, VSL, taxi conventionné)",
    "Hospitalisation à domicile (HAD)",
    "Rééducation et soins de suite",
  ],
  reasonsTitle: "Pourquoi une assurance hospitalisation dédiée ?",
  reasons: [
    { title: "Le poste le plus coûteux", text: "Un séjour d'une semaine avec chambre particulière peut atteindre 2 500€ non remboursés par la Sécu." },
    { title: "Formule seule ou en complément", text: "Assurance hospitalisation seule (30€/mois) ou intégrée à votre mutuelle santé complète." },
    { title: "Sans questionnaire médical", text: "Adhésion facile, sans questionnaire lourd ni examen médical." },
  ],
  faqs: [
    { q: "Quelle différence entre mutuelle et assurance hospitalisation ?", a: "Une mutuelle santé couvre tout (soins courants, optique, dentaire, hospitalisation). Une assurance hospitalisation seule ne couvre QUE l'hospitalisation, à petit prix — utile en complément d'une CMU-C ou d'une mutuelle très basique." },
    { q: "Combien coûte une assurance hospitalisation ?", a: "De 12€/mois pour une formule d'entrée (moins de 40 ans) à 60€/mois pour un senior avec dépassements d'honoraires renforcés." },
    { q: "La chambre particulière est-elle remboursée par la Sécu ?", a: "Non, jamais. Elle est facturée en supplément (60 à 130€/jour). Seule votre mutuelle ou assurance hospitalisation la prend en charge." },
    { q: "Y a-t-il un délai de carence sur l'hospitalisation ?", a: "Généralement aucun pour l'hospitalisation médicale et chirurgicale d'urgence. Certains contrats appliquent 3 mois de carence pour la maternité et les hospitalisations programmées." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Mutuelle santé complète", description: "Pour couvrir aussi optique, dentaire, courants." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis gratuit", description: "Devis assurance hospitalisation en 2 min." },
    { kind: "page", to: "/mutuelle-senior-pas-cher", anchor: "Mutuelle santé senior", description: "Hospitalisation renforcée pour les +60 ans." },
  ],

};

export const Route = createFileRoute("/assurance-hospitalisation")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Assurance Hospitalisation — Chambre particulière | NEOASSUR" },
      { name: "description", content: "Assurance hospitalisation : chambre particulière, dépassements d'honoraires, forfait journalier, zéro avance de frais. À partir de 12€/mois. Devis en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Assurance Hospitalisation — NEOASSUR" },
      { property: "og:description", content: "Chambre particulière et dépassements d'honoraires couverts. Devis en 2 min." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/assurance-hospitalisation" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/assurance-hospitalisation" }],
    scripts: buildProductJsonLd(data, "/assurance-hospitalisation", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
