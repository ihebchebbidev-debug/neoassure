import { createFileRoute } from "@tanstack/react-router";
import {
  HandHeart, Wallet, ShieldCheck, Clock, Users, FileCheck,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-obseques.jpg";

const data: ProductPageData = {
  eyebrow: "Contrat Obsèques",
  title: "Contrat obsèques : protégez vos proches, anticipez sereinement",
  subtitle:
    "Un contrat obsèques garantit le financement de vos funérailles (3 500€ à 6 000€ en moyenne) et libère vos proches des démarches. Cotisations fixes à vie, capital garanti.",
  keywords: [
    "contrat obseques",
    "contrat obsèques",
    "contrat obseque",
    "contrat obsèques tarif",
    "convention obseques",
    "convention obsèques",
    "assurance obseques",
    "assurance obsèques",
    "meilleur contrat obseques",
    "tarif contrat obseques",
    "garantie obseques",
    "assurances obseques comparatif",
    "prix moyen obsèques France",
  ],
  image: productImage,
  introTitle: "Le contrat obsèques : un geste d'amour pour vos proches",
  introText:
    "En France, des funérailles coûtent en moyenne entre 3 500€ (crémation) et 6 000€ (inhumation). Sans anticipation, cette charge revient à vos proches dans un moment déjà éprouvant. Un contrat obsèques constitue un capital garanti, transmis directement au bénéficiaire de votre choix pour financer la cérémonie selon vos volontés.",
  advantages: [
    { icon: Wallet, title: "Capital garanti à vie", text: "De 2 000€ à 10 000€ selon votre choix, transmis en 48h au bénéficiaire." },
    { icon: HandHeart, title: "Vos volontés respectées", text: "Vous précisez le type de cérémonie, le lieu, la musique — tout est consigné." },
    { icon: Clock, title: "Souscription rapide", text: "En 15 minutes, sans questionnaire médical (selon formule)." },
    { icon: ShieldCheck, title: "Cotisation fixe à vie", text: "Vos mensualités n'augmentent jamais, même avec l'âge." },
    { icon: Users, title: "Bénéficiaire libre", text: "Conjoint, enfant, ami, opérateur funéraire : vous choisissez." },
    { icon: FileCheck, title: "Fiscalité avantageuse", text: "Capital exonéré de droits de succession dans la limite légale." },
  ],
  coverageTitle: "Ce que couvre un contrat obsèques",
  coverage: [
    "Cercueil, urne funéraire, plaque et articles funéraires",
    "Frais de cérémonie civile ou religieuse",
    "Transport du défunt (rapatriement inclus dans certaines formules)",
    "Frais d'inhumation ou de crémation",
    "Concession funéraire (selon capital choisi)",
    "Faire-part et avis dans la presse",
    "Prestations complémentaires : fleurs, marbrerie, urne",
    "Accompagnement d'un conseiller funéraire pour les proches",
  ],
  reasonsTitle: "Pourquoi souscrire chez NEOASSUR",
  reasons: [
    { title: "Comparatif des meilleurs contrats", text: "Nous comparons AXA, Allianz, GMF, Malakoff Humanis, CNP pour trouver le meilleur rapport capital/cotisation." },
    { title: "Sans questionnaire médical", text: "Nos formules acceptent tous les profils, sans examen médical (selon capital choisi)." },
    { title: "Accompagnement humain", text: "Un conseiller dédié vous aide à définir vos volontés et à choisir le bon capital." },
  ],
  faqs: [
    { q: "Combien coûte un contrat obsèques ?", a: "La cotisation dépend de votre âge et du capital choisi. Comptez en moyenne entre 15€/mois (à 55 ans pour 4 000€) et 45€/mois (à 75 ans pour 6 000€). Nos comparatifs permettent de trouver le meilleur tarif du marché." },
    { q: "Faut-il vraiment prendre une assurance obsèques ?", a: "Oui, si vous voulez éviter à vos proches d'avancer entre 3 500€ et 6 000€ dans les 48h suivant le décès. C'est également un moyen de faire respecter vos volontés funéraires." },
    { q: "Quelle est la meilleure assurance obsèques ?", a: "Il n'y a pas de meilleure assurance en absolu — cela dépend de votre âge, de votre budget et du capital souhaité. Notre comparateur analyse plus de 15 contrats pour trouver celui qui vous correspond." },
    { q: "Comment souscrire une assurance obsèques ?", a: "1) Estimation gratuite du capital nécessaire, 2) Comparaison des contrats du marché, 3) Choix du bénéficiaire et des volontés, 4) Signature en ligne ou avec un conseiller. Compte 15 minutes au total." },
    { q: "Peut-on souscrire à tout âge ?", a: "Oui, la plupart des contrats acceptent jusqu'à 85 ans, certains sans limite d'âge. Sans questionnaire médical pour les capitaux courants (jusqu'à 6 000€ généralement)." },
    { q: "Comment fonctionne le versement du capital ?", a: "Au décès, le bénéficiaire désigné (proche ou opérateur funéraire) reçoit le capital sous 48h sur présentation de l'acte de décès. Aucun droit de succession dans la limite légale." },
  ],
  related: [
    { kind: "page", to: "/assurance-obseques", anchor: "Nos offres d'assurance obsèques", description: "Comparez les meilleurs contrats du marché." },
    { kind: "page", to: "/mutuelle-sante", anchor: "Compléter avec une mutuelle santé senior", description: "Une couverture santé adaptée à vos besoins." },
  ],
};

export const Route = createFileRoute("/contrat-obseques")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Contrat Obsèques — Comparatif & tarifs 2026 | NEOASSUR" },
      { name: "description", content: "Contrat obsèques : capital garanti de 2 000€ à 10 000€, cotisation fixe à vie, sans questionnaire médical. Comparatif des meilleurs contrats. Devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Contrat Obsèques — Protégez vos proches | NEOASSUR" },
      { property: "og:description", content: "Capital garanti, cotisation fixe à vie, sans questionnaire médical. Comparatif 2026." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/contrat-obseques" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/contrat-obseques" }],
    scripts: buildProductJsonLd(data, "/contrat-obseques", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
