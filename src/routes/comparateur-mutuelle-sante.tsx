import { createFileRoute } from "@tanstack/react-router";
import { Scale, Percent, Clock, ShieldCheck, Users, BadgeCheck } from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-sante.jpg";

const data: ProductPageData = {
  eyebrow: "Comparateur Mutuelle Santé",
  title: "Comparateur mutuelle santé : +25 assureurs comparés en 2 minutes",
  subtitle:
    "Notre comparateur indépendant analyse en temps réel les offres de plus de 25 mutuelles santé partenaires pour trouver la meilleure couverture au meilleur prix, selon votre profil.",
  keywords: [
    "comparateur mutuelle santé",
    "comparer les mutuelles santé",
    "comparateur mutuelle",
    "comparatif mutuelle santé",
    "meilleur comparateur mutuelle santé",
    "comparateur mutuelle santé gratuit",
    "comparateur mutuelle en ligne",
    "classement mutuelles santé",
    "meilleure mutuelle santé 2026",
    "comparer les complémentaires santé",
    "comparateur complémentaire santé",
  ],
  image: productImage,
  introTitle: "Comparez les mutuelles santé sans effort",
  introText:
    "Comparer les mutuelles santé soi-même prend des heures et les grilles de garanties sont volontairement complexes. Notre comparateur mutuelle santé interroge simultanément +25 organismes, applique vos besoins réels et fait ressortir en 2 minutes la formule qui offre le meilleur rapport garanties/prix.",
  advantages: [
    { icon: Scale, title: "+25 assureurs comparés", text: "APRIL, Néoliane, SPVIE, FMA, C2G, Assuréa et bien d'autres partenaires." },
    { icon: Clock, title: "Résultats en 2 minutes", text: "Un questionnaire court, une réponse claire, sans jargon." },
    { icon: Percent, title: "Jusqu'à 40% d'économies", text: "312€/an en moyenne pour nos clients face à leur ancienne mutuelle." },
    { icon: ShieldCheck, title: "100% indépendant", text: "Aucun assureur ne peut acheter sa position, le classement est neutre." },
    { icon: Users, title: "Conseiller dédié", text: "Un expert humain reprend les résultats avec vous — pas d'algo froid." },
    { icon: BadgeCheck, title: "Garanties comparables", text: "Nous ramenons tous les contrats à la même grille pour comparer sans biais." },
  ],
  coverageTitle: "Ce que compare notre outil",
  coverage: [
    "Cotisation mensuelle et annuelle",
    "Niveau de remboursement hospitalisation",
    "Chambre particulière et forfait journalier",
    "Optique 100% Santé et hors 100% Santé",
    "Dentaire : soins, prothèses, orthodontie, implants",
    "Audioprothèses et appareils auditifs",
    "Médecines douces (ostéo, acupuncture, sophrologie)",
    "Délais de carence, plafonds annuels, exclusions",
  ],
  reasonsTitle: "Pourquoi notre comparateur mutuelle santé ?",
  reasons: [
    { title: "Indépendance totale", text: "NEOASSUR est courtier indépendant : aucun assureur n'a de traitement de faveur dans notre outil." },
    { title: "Économies prouvées", text: "En moyenne 312€/an d'économies sur la cotisation, tous profils confondus." },
    { title: "Un conseiller humain", text: "Après le comparatif, un expert vous rappelle pour affiner et souscrire — sans engagement." },
  ],
  faqs: [
    { q: "Le comparateur mutuelle santé est-il vraiment gratuit ?", a: "Oui, 100% gratuit et sans engagement. NEOASSUR est rémunéré par les assureurs uniquement si vous souscrivez, ce qui n'impacte jamais votre tarif." },
    { q: "Comment fonctionne un comparateur mutuelle santé ?", a: "Vous renseignez votre profil (âge, situation, besoins). L'outil interroge simultanément +25 mutuelles et vous propose les meilleures offres classées par rapport garanties/prix." },
    { q: "Le meilleur comparateur mutuelle santé propose-t-il le moins cher ?", a: "Pas forcément : le \"meilleur\" n'est pas toujours le moins cher, c'est celui qui couvre vos besoins réels au meilleur prix. Notre comparateur intègre cette logique." },
    { q: "Faut-il faire plusieurs comparateurs mutuelle santé ?", a: "Non. NEOASSUR couvre +25 assureurs, ce qui représente l'essentiel du marché français. Refaire un autre comparateur retombera sur les mêmes offres." },
  ],
  related: [
    { kind: "page", to: "/devis-mutuelle-sante", anchor: "Devis mutuelle santé gratuit", description: "Recevez votre devis personnalisé en 2 minutes." },
    { kind: "page", to: "/meilleure-mutuelle-sante", anchor: "Meilleure mutuelle santé 2026", description: "Notre classement des meilleures mutuelles santé de l'année." },
    { kind: "page", to: "/mutuelle-sante", anchor: "Voir toutes nos mutuelles santé", description: "Toutes les formules mutuelle santé grand public." },
  ],
};

export const Route = createFileRoute("/comparateur-mutuelle-sante")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Comparateur Mutuelle Santé 2026 — +25 assureurs en 2 min | NEOASSUR" },
      { name: "description", content: "Comparateur mutuelle santé indépendant : +25 assureurs comparés en 2 minutes. Jusqu'à 40% d'économies, devis gratuit, sans engagement." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Comparateur Mutuelle Santé — +25 assureurs | NEOASSUR" },
      { property: "og:description", content: "Comparez les mutuelles santé en 2 minutes. Économisez jusqu'à 40%." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/comparateur-mutuelle-sante" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/comparateur-mutuelle-sante" }],
    scripts: buildProductJsonLd(data, "/comparateur-mutuelle-sante", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
