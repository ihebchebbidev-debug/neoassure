import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, HeartPulse, Percent, CalendarClock, Building2, BadgeCheck } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé Fonctionnaire",
  title: "Mutuelle santé fonctionnaire : référencement, PSC, garanties adaptées",
  subtitle:
    "Enseignants, agents territoriaux, hospitaliers, État : depuis 2024, la Protection Sociale Complémentaire (PSC) évolue. Comparez les mutuelles référencées et les alternatives.",
  keywords: [
    "mutuelle santé fonctionnaire",
    "mutuelle fonction publique",
    "mutuelle fonctionnaire territoriale",
    "mutuelle fonctionnaire hospitalière",
    "mutuelle fonctionnaire État",
    "PSC fonctionnaire",
    "protection sociale complémentaire fonctionnaire",
    "mutuelle référencée fonctionnaire",
    "meilleure mutuelle fonctionnaire",
    "mutuelle fonctionnaire pas chère",
    "comparateur mutuelle fonctionnaire",
  ],
  image: productImage,
  introTitle: "Une mutuelle santé pensée pour les agents publics",
  introText:
    "Les fonctionnaires disposent d'un dispositif spécifique : la Protection Sociale Complémentaire (PSC). Depuis 2024, l'employeur public participe à au moins 15€/mois. Nous vous aidons à choisir entre mutuelle référencée par votre administration et alternative individuelle plus compétitive.",
  advantages: [
    { icon: Building2, title: "Toutes fonctions publiques", text: "État, territoriale, hospitalière : formules adaptées à votre statut." },
    { icon: BadgeCheck, title: "Comparaison PSC", text: "Nous comparons la mutuelle référencée de votre ministère et les alternatives." },
    { icon: Percent, title: "Économies possibles", text: "Souvent 15 à 25% moins cher qu'une mutuelle référencée équivalente." },
    { icon: HeartPulse, title: "Garanties agents", text: "Prise en charge des risques spécifiques (arrêts, invalidité, décès)." },
    { icon: ShieldCheck, title: "Sans questionnaire médical", text: "Adhésion facilitée, quel que soit votre âge ou historique." },
    { icon: CalendarClock, title: "Résiliation à tout moment", text: "Loi Hamon et résiliation infra-annuelle applicables." },
  ],
  coverageTitle: "Ce que couvre une mutuelle santé fonctionnaire",
  coverage: [
    "Consultations médecin traitant et spécialistes",
    "Hospitalisation avec chambre particulière",
    "Dentaire : soins, prothèses, orthodontie, implants",
    "Optique : lunettes, lentilles, chirurgie réfractive",
    "Audioprothèses",
    "Médecines douces (ostéo, acupuncture, sophrologie)",
    "Options prévoyance (perte de traitement, invalidité, décès)",
    "Assistance à domicile en cas d'hospitalisation",
  ],
  reasonsTitle: "Pourquoi comparer avant de rester en mutuelle référencée ?",
  reasons: [
    { title: "Le référencé n'est pas toujours le meilleur", text: "L'offre référencée par votre administration peut coûter plus cher qu'une alternative privée à garanties égales." },
    { title: "La PSC change tout", text: "Depuis 2024, la participation employeur (min 15€/mois) rebat les cartes : refaites vos calculs." },
    { title: "Conseiller neutre", text: "NEOASSUR n'est référencé par aucun ministère : notre analyse est 100% indépendante." },
  ],
  faqs: [
    { q: "Un fonctionnaire est-il obligé de prendre une mutuelle référencée ?", a: "Non. La mutuelle référencée par votre ministère est facultative. Vous pouvez choisir librement n'importe quelle mutuelle santé sur le marché." },
    { q: "Qu'est-ce que la PSC pour un fonctionnaire ?", a: "La Protection Sociale Complémentaire est le dispositif qui organise, depuis 2024, la participation obligatoire de l'employeur public (15€/mois minimum) à la mutuelle santé de ses agents." },
    { q: "Quelle est la meilleure mutuelle pour un fonctionnaire ?", a: "Cela dépend de votre statut, votre âge et votre famille. La MGEN, MFP Services, Intériale et Territoriale sont référencées ; mais des alternatives privées (APRIL, SPVIE...) sont souvent plus compétitives à garanties équivalentes." },
    { q: "Puis-je cumuler mutuelle référencée et surcomplémentaire ?", a: "Oui, c'est même fréquent quand la mutuelle référencée manque de garanties sur l'optique ou le dentaire. Nos conseillers vous aident à identifier le trou de couverture à combler." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir toutes nos formules individuelles." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle fonctionnaire", description: "Devis gratuit personnalisé en 2 minutes." },
    { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Comparateur mutuelle santé", description: "Comparez référencé vs alternatives." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-fonctionnaire")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé Fonctionnaire — PSC & référencement | NEOASSUR" },
      { name: "description", content: "Mutuelle santé fonctionnaire : État, territoriale, hospitalière. Comparez mutuelle référencée et alternatives PSC, économisez jusqu'à 25%. Devis en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé Fonctionnaire PSC | NEOASSUR" },
      { property: "og:description", content: "Mutuelle fonctionnaire, PSC, référencement : notre comparatif indépendant." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-fonctionnaire" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-fonctionnaire" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-fonctionnaire", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
