import { createFileRoute } from "@tanstack/react-router";
import { Zap, Clock, ShieldCheck, HeartPulse, HandCoins, CalendarClock } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Sans Délai de Carence",
  title: "Mutuelle santé sans délai de carence : couvert dès le 1er jour",
  subtitle:
    "Besoin d'une mutuelle rapidement (déménagement, sortie de mutuelle d'entreprise, soins urgents) ? Nos formules sans délai de carence vous couvrent dès le lendemain de la souscription.",
  keywords: [
    "mutuelle santé sans délai de carence",
    "mutuelle sans carence",
    "mutuelle immédiate",
    "mutuelle santé effet immédiat",
    "mutuelle santé rapide",
    "mutuelle sans période d'attente",
    "mutuelle santé souscription immédiate",
    "mutuelle santé urgente",
    "mutuelle sans délai dentaire",
    "meilleure mutuelle sans carence",
  ],
  image: productImage,
  introTitle: "Une mutuelle santé qui prend effet immédiatement",
  introText:
    "Le délai de carence est la période pendant laquelle vous cotisez sans être remboursé. Il est courant sur le dentaire (3-6 mois) et la maternité (10 mois). Nos formules \"sans délai de carence\" suppriment cette attente sur les soins courants, l'hospitalisation, l'optique et le dentaire de base.",
  advantages: [
    { icon: Zap, title: "Couvert dès J+1", text: "Effet immédiat le lendemain de la validation du dossier." },
    { icon: Clock, title: "Zéro attente soins courants", text: "Consultations, pharmacie, analyses remboursées immédiatement." },
    { icon: ShieldCheck, title: "Hospitalisation immédiate", text: "Prise en charge dès le 1er jour, y compris chambre particulière." },
    { icon: HandCoins, title: "Optique dès J+1", text: "Vos lunettes et lentilles remboursées sans attendre." },
    { icon: HeartPulse, title: "Téléconsultation immédiate", text: "Un médecin joignable 24/7 dès la souscription." },
    { icon: CalendarClock, title: "Sans questionnaire médical", text: "Adhésion rapide, sans examen médical intrusif." },
  ],
  coverageTitle: "Ce qui est couvert immédiatement",
  coverage: [
    "Consultations médecin traitant et spécialistes",
    "Pharmacie prescrite remboursée",
    "Hospitalisation médicale et chirurgicale",
    "Chambre particulière et forfait journalier",
    "Optique : lunettes, lentilles",
    "Dentaire courant (soins, détartrage, caries)",
    "Analyses biologiques et radiologie",
    "Téléconsultation médicale 24/7",
  ],
  reasonsTitle: "Quand a-t-on besoin d'une mutuelle sans délai de carence ?",
  reasons: [
    { title: "Sortie de mutuelle d'entreprise", text: "Fin de contrat, licenciement, départ à la retraite : vous devez être couvert sans rupture." },
    { title: "Soins programmés proches", text: "Vous avez une opération, une prothèse ou un traitement d'orthodontie prévu dans les 3 mois." },
    { title: "Changement de situation", text: "Déménagement, séparation, retour d'expatriation : besoin d'une couverture rapide." },
  ],
  faqs: [
    { q: "Qu'est-ce qu'un délai de carence en mutuelle santé ?", a: "C'est la période pendant laquelle vous cotisez mais n'êtes pas encore remboursé. Elle vise à éviter les souscriptions opportunistes juste avant un gros soin (implant, orthodontie, maternité)." },
    { q: "Toutes les mutuelles imposent-elles un délai de carence ?", a: "Non. Nos partenaires proposent des formules \"sans délai de carence\" sur les soins courants, l'hospitalisation et l'optique. Le dentaire prothèses et la maternité conservent parfois 3 à 6 mois d'attente." },
    { q: "Combien coûte une mutuelle sans délai de carence ?", a: "Le tarif est équivalent à une mutuelle classique, avec parfois 5 à 10% de supplément. C'est très rentable si vous avez un soin proche prévu." },
    { q: "Comment souscrire une mutuelle santé sans carence rapidement ?", a: "Demandez un devis en 2 minutes, validez en ligne, vous êtes couvert dès le lendemain. NEOASSUR gère la mise en place complète en 24h." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir toutes nos formules." },
    { kind: "page", to: "/mutuelle-sante-en-ligne", anchor: "Mutuelle santé en ligne", description: "Souscription 100% en ligne." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis gratuit en 2 min", description: "Devis immédiat sans engagement." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-sans-delai-carence")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé Sans Délai de Carence — Couvert dès J+1 | NEOASSUR" },
      { name: "description", content: "Mutuelle santé sans délai de carence : effet immédiat dès le lendemain. Soins courants, hospitalisation, optique remboursés dès J+1. Devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé Sans Délai de Carence | NEOASSUR" },
      { property: "og:description", content: "Couvert dès le lendemain de la souscription." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-sans-delai-carence" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-sans-delai-carence" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-sans-delai-carence", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
