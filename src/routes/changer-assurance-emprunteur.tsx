import { createFileRoute } from "@tanstack/react-router";
import {
  FileCheck, Repeat, Euro, ShieldCheck, Clock, HandCoins,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-emprunteur.jpg";

const data: ProductPageData = {
  eyebrow: "Changer d'assurance emprunteur",
  title: "Changer d'assurance emprunteur : mode d'emploi complet",
  subtitle:
    "Depuis la loi Lemoine, changer d'assurance de prêt immobilier prend 15 minutes et vous fait économiser en moyenne 8 000€. On s'occupe de tout, de la résiliation à la mise en place.",
  keywords: [
    "changer assurance emprunteur",
    "changer assurance de pret",
    "changer assurance pret immobilier",
    "comment changer d'assurance emprunteur",
    "quand changer assurance emprunteur",
    "délégation d'assurance emprunteur",
    "résilier assurance emprunteur",
    "renégocier assurance emprunteur",
    "comparateur assurance emprunteur",
    "changer d'assurance de prêt banque",
    "substitution assurance emprunteur",
  ],
  image: productImage,
  introTitle: "Changer d'assurance emprunteur : la démarche simplifiée",
  introText:
    "Grâce à la loi Lemoine, vous pouvez changer d'assurance emprunteur à tout moment sans attendre la date anniversaire. La démarche est simple, gratuite et vous permet de faire des économies substantielles. NEOASSUR gère toutes les formalités à votre place.",
  advantages: [
    { icon: Clock, title: "Démarche en 15 minutes", text: "Un simple formulaire, on s'occupe du reste : recherche, résiliation, mise en place." },
    { icon: Euro, title: "8 000€ d'économies en moyenne", text: "Nos clients divisent en moyenne par 2 le coût de leur assurance de prêt." },
    { icon: FileCheck, title: "Équivalence de garanties garantie", text: "Nous vérifions que le nouveau contrat respecte les exigences de votre banque." },
    { icon: Repeat, title: "Gestion complète de la résiliation", text: "Nous rédigeons la demande et suivons les échanges avec votre banque." },
    { icon: ShieldCheck, title: "Sans frais ni pénalité", text: "La loi interdit toute pénalité de résiliation. Zéro frais caché." },
    { icon: HandCoins, title: "Effet immédiat", text: "Votre nouvelle assurance prend le relais dès l'accord de la banque (10 jours ouvrés max)." },
  ],
  coverageTitle: "Les 4 étapes pour changer d'assurance emprunteur",
  coverage: [
    "1. Analyse gratuite de votre contrat actuel et de vos garanties",
    "2. Comparaison avec +15 assureurs partenaires (Cardif, Generali, April, Metlife…)",
    "3. Sélection d'un contrat à garanties équivalentes, moins cher",
    "4. Rédaction de la demande de résiliation et envoi à la banque",
    "5. Suivi de l'acceptation (10 jours ouvrés maximum)",
    "6. Mise en place immédiate de la nouvelle assurance",
  ],
  reasonsTitle: "Pourquoi passer par NEOASSUR",
  reasons: [
    { title: "Expertise loi Lemoine", text: "Nos conseillers maîtrisent parfaitement les critères d'équivalence exigés par les banques." },
    { title: "Réseau d'assureurs indépendants", text: "+15 partenaires spécialisés en délégation d'assurance emprunteur." },
    { title: "Zéro paperasse pour vous", text: "Nous rédigeons tout et gérons l'intégralité des échanges avec la banque." },
  ],
  faqs: [
    { q: "Quand peut-on changer d'assurance emprunteur ?", a: "Depuis la loi Lemoine (juin 2022), vous pouvez changer à tout moment, quelle que soit l'ancienneté de votre prêt et sans attendre de date anniversaire." },
    { q: "Comment changer concrètement d'assurance emprunteur ?", a: "1) Trouver un contrat alternatif à garanties équivalentes, 2) Envoyer la demande de substitution à la banque, 3) Attendre l'accord (10 jours ouvrés), 4) Résilier l'ancien contrat. NEOASSUR gère toutes ces étapes pour vous." },
    { q: "Combien coûte le changement d'assurance emprunteur ?", a: "Rien. La loi interdit à la banque de facturer des frais de dossier ou une pénalité de résiliation. Notre accompagnement est également 100% gratuit." },
    { q: "La banque peut-elle refuser mon changement d'assurance ?", a: "Uniquement si les garanties ne sont pas au moins équivalentes à celles du contrat actuel. Le refus doit être motivé par écrit sous 10 jours ouvrés. Nous garantissons l'équivalence en amont pour éviter tout refus." },
    { q: "Combien de temps prend la démarche ?", a: "En moyenne, 3 à 4 semaines entre le premier contact et la mise en place effective de la nouvelle assurance." },
  ],
  related: [
    { kind: "page", to: "/loi-lemoine", anchor: "Tout comprendre sur la loi Lemoine", description: "Le guide complet de la loi qui vous permet de changer à tout moment." },
    { kind: "page", to: "/assurance-emprunteur", anchor: "Voir nos offres d'assurance emprunteur", description: "Comparez les meilleures assurances de prêt du marché." },
  ],
};

export const Route = createFileRoute("/changer-assurance-emprunteur")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Changer d'assurance emprunteur en 15 min — 8 000€ d'économies | NEOASSUR" },
      { name: "description", content: "Changer d'assurance emprunteur grâce à la loi Lemoine : gratuit, sans pénalité, jusqu'à 8 000€ d'économies. Démarche gérée de A à Z. Devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Changer d'assurance emprunteur — 8 000€ d'économies | NEOASSUR" },
      { property: "og:description", content: "Démarche gérée de A à Z. Gratuit, sans frais. Devis gratuit en 2 min." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://www.neo-assur.fr/changer-assurance-emprunteur" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/changer-assurance-emprunteur" }],
    scripts: buildProductJsonLd(data, "/changer-assurance-emprunteur", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
