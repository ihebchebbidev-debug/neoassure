import { createFileRoute } from "@tanstack/react-router";
import { Building2, Users, Percent, ShieldCheck, Calculator, FileCheck } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Mutuelle Santé Entreprise",
  title: "Mutuelle santé entreprise : conformité ANI et tarifs négociés",
  subtitle:
    "Depuis 2016, l'employeur privé doit proposer une mutuelle santé collective à ses salariés. NEOASSUR négocie pour vous une offre conforme ANI, prise en charge 50% minimum employeur.",
  keywords: [
    "mutuelle santé entreprise",
    "mutuelle entreprise obligatoire",
    "mutuelle collective entreprise",
    "ANI mutuelle 2016",
    "mutuelle santé employeur",
    "mutuelle santé salariés",
    "meilleure mutuelle entreprise",
    "mutuelle entreprise pas chère",
    "comparateur mutuelle entreprise",
    "devis mutuelle entreprise",
    "mutuelle collective TPE PME",
  ],
  image: productImage,
  introTitle: "Une mutuelle santé entreprise conforme et compétitive",
  introText:
    "Toute entreprise du secteur privé a l'obligation depuis le 1er janvier 2016 (loi ANI) de proposer une complémentaire santé collective à ses salariés, avec une prise en charge d'au moins 50% de la cotisation. NEOASSUR vous accompagne pour choisir une offre conforme, attractive pour vos salariés et fiscalement optimisée.",
  advantages: [
    { icon: FileCheck, title: "100% conforme ANI", text: "Panier de soins minimum garanti, décret 2014-1025 respecté." },
    { icon: Building2, title: "TPE, PME, ETI", text: "Formules adaptées à toutes tailles d'entreprise, tous secteurs." },
    { icon: Calculator, title: "Optimisation fiscale", text: "Cotisations employeur déductibles, exonération de charges sociales." },
    { icon: Percent, title: "Tarifs collectifs négociés", text: "Jusqu'à 30% moins cher qu'un contrat individuel équivalent." },
    { icon: Users, title: "Options familles", text: "Extension conjoint et enfants au tarif préférentiel groupe." },
    { icon: ShieldCheck, title: "Assistance juridique RH", text: "Nous fournissons DUE, notice d'information et acte fondateur." },
  ],
  coverageTitle: "Ce qu'inclut une mutuelle entreprise NEOASSUR",
  coverage: [
    "Panier de soins ANI minimum garanti",
    "Hospitalisation avec chambre particulière",
    "Optique : forfait tous les 2 ans conforme 100% Santé",
    "Dentaire : soins, prothèses (dont 100% Santé)",
    "Audioprothèses (dont 100% Santé)",
    "Téléconsultation médicale 24/7 pour tous les salariés",
    "Assistance à domicile en cas d'hospitalisation",
    "Options surcomplémentaire salarié (renfort à la carte)",
  ],
  reasonsTitle: "Pourquoi choisir NEOASSUR entreprise ?",
  reasons: [
    { title: "Courtier expert TPE/PME", text: "Nous accompagnons +500 entreprises en France, tous secteurs confondus." },
    { title: "Package clé en main", text: "Négociation, mise en place, DUE, communication aux salariés : nous gérons tout." },
    { title: "Renégociation annuelle", text: "Nous auditons votre contrat chaque année pour maintenir votre compétitivité tarifaire." },
  ],
  faqs: [
    { q: "La mutuelle santé entreprise est-elle vraiment obligatoire ?", a: "Oui, depuis le 1er janvier 2016 (loi ANI) pour tout employeur du secteur privé, quel que soit l'effectif. L'employeur prend en charge au minimum 50% de la cotisation." },
    { q: "Combien coûte une mutuelle santé entreprise ?", a: "Entre 25€ et 60€/mois par salarié pour la part salariale, selon le niveau de garanties. La part employeur (50% mini) est déductible du résultat imposable et exonérée de charges sociales dans certaines limites." },
    { q: "Un salarié peut-il refuser la mutuelle d'entreprise ?", a: "Oui, dans des cas limités : CDD < 12 mois, temps très partiel, salarié déjà couvert par la mutuelle de son conjoint à titre obligatoire, apprenti. La demande de dispense doit être écrite." },
    { q: "Peut-on changer de mutuelle d'entreprise en cours d'année ?", a: "Oui, à la date d'échéance annuelle ou en cas de modification substantielle des garanties. NEOASSUR audite votre contrat et négocie une meilleure offre auprès de nos +25 partenaires." },
  ],
  related: [
    { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir aussi les formules individuelles." },
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle entreprise", description: "Devis collectif gratuit en 2 minutes." },
    { kind: "page", to: "/mutuelle-sante-independant", anchor: "Mutuelle TNS (dirigeants)", description: "Pour le dirigeant TNS non salarié." },
  ],
};

export const Route = createFileRoute("/mutuelle-sante-entreprise")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Mutuelle Santé Entreprise — Conforme ANI 2016 | NEOASSUR" },
      { name: "description", content: "Mutuelle santé entreprise conforme loi ANI 2016 : panier de soins garanti, prise en charge 50% employeur. TPE, PME, ETI. Devis collectif gratuit." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Mutuelle Santé Entreprise ANI | NEOASSUR" },
      { property: "og:description", content: "Mutuelle collective conforme et compétitive. Devis en 2 min." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/mutuelle-sante-entreprise" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mutuelle-sante-entreprise" }],
    scripts: buildProductJsonLd(data, "/mutuelle-sante-entreprise", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
