import { createFileRoute } from "@tanstack/react-router";
import { Plane, Globe, HeartPulse, ShieldCheck, HandCoins, Users } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé Expatrié",
  title: "Mutuelle santé expatrié : couverture mondiale et rapatriement",
  subtitle:
    "Expatriation, VIE, mission longue à l'étranger : notre mutuelle santé expatrié couvre les frais médicaux, l'hospitalisation et le rapatriement sanitaire dans le monde entier.",
  keywords: [
    "mutuelle santé expatrié",
    "assurance santé expatrié",
    "mutuelle internationale",
    "mutuelle expatriation",
    "meilleure mutuelle expatrié",
    "mutuelle expatrié pas chère",
    "assurance expatrié CFE",
    "mutuelle CFE complémentaire",
    "mutuelle française à l'étranger",
    "assurance rapatriement expatrié",
    "comparateur mutuelle expatrié",
  ],
  image: productImage,
  introTitle: "Une couverture santé internationale au 1er euro",
  introText:
    "En expatriation, la Sécurité sociale française ne vous couvre plus. Deux options : adhérer à la CFE (Caisse des Français à l'Étranger) + une mutuelle en complément, ou souscrire une assurance santé au 1er euro qui prend tout en charge. Nous vous accompagnons dans le choix le plus adapté à votre pays.",
  advantages: [
    { icon: Globe, title: "Monde entier", text: "Couverture dans tous les pays, y compris USA, Canada, Chine, Suisse." },
    { icon: Plane, title: "Rapatriement sanitaire", text: "Rapatriement médicalisé inclus 24/7 vers la France si besoin." },
    { icon: HeartPulse, title: "Hospitalisation illimitée", text: "Prise en charge sans plafond dans les grands hôpitaux internationaux." },
    { icon: ShieldCheck, title: "Compatible CFE", text: "Formules complémentaires CFE ou 1er euro selon votre situation." },
    { icon: HandCoins, title: "Tiers payant international", text: "Réseau de cliniques partenaires : pas d'avance de frais." },
    { icon: Users, title: "Famille couverte", text: "Conjoint et enfants inclus au tarif expatrié." },
  ],
  coverageTitle: "Ce que couvre une mutuelle santé expatrié",
  coverage: [
    "Frais médicaux courants (généraliste, spécialiste, pharmacie)",
    "Hospitalisation médicale et chirurgicale sans plafond",
    "Maternité (grossesse, accouchement, séjour)",
    "Dentaire et optique",
    "Rapatriement sanitaire vers la France 24/7",
    "Assistance médicale téléphonique multilingue",
    "Assurance responsabilité civile vie privée à l'étranger",
    "Options : capital décès, invalidité, prévoyance",
  ],
  reasonsTitle: "Pourquoi NEOASSUR pour votre expatriation ?",
  reasons: [
    { title: "Réseau international", text: "Nos partenaires disposent de plateaux de gestion sinistres dans le monde entier." },
    { title: "Français au bout du fil", text: "Un conseiller francophone joignable même si vous êtes à Singapour ou New York." },
    { title: "CFE vs 1er euro", text: "Nous chiffrons les deux options pour votre pays et votre budget." },
  ],
  faqs: [
    { q: "Qu'est-ce que la CFE et pourquoi une mutuelle en complément ?", a: "La Caisse des Français à l'Étranger applique les mêmes taux de remboursement que la Sécu française — largement insuffisants dans les pays chers (USA, Suisse, Émirats). Une mutuelle expatrié en complément couvre le reste à charge." },
    { q: "Faut-il choisir CFE + mutuelle ou 1er euro ?", a: "1er euro est plus simple et souvent moins cher pour un expatrié pur (sans retour prévu). CFE + mutuelle convient mieux à ceux qui gardent un lien France (retours réguliers, retraite en France)." },
    { q: "Combien coûte une mutuelle santé expatrié ?", a: "De 80€/mois (jeune célibataire, pays européen) à 400€/mois (famille avec enfants, USA). La zone géographique est le facteur le plus impactant." },
    { q: "Ma mutuelle française classique me couvre-t-elle à l'étranger ?", a: "Uniquement en court séjour touristique (vacances). Pour une expatriation ou un séjour long, il faut une assurance santé internationale dédiée." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir aussi nos formules France." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis expatriation gratuit", description: "Devis mondial en 2 minutes." },
    { kind: "page", to: "/mutuelle-sante-etudiant", anchor: "Mutuelle étudiant Erasmus", description: "Pour un séjour d'études à l'étranger." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-expatrie")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé Expatrié — Couverture mondiale | NEOASSUR" },
      { name: "description", content: "Mutuelle santé expatrié : couverture mondiale, rapatriement inclus, compatible CFE ou 1er euro. Devis gratuit expatriation en 2 minutes." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé Expatrié Monde | NEOASSUR" },
      { property: "og:description", content: "Couverture santé mondiale et rapatriement. Devis en 2 min." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-expatrie" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-expatrie" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-expatrie", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
