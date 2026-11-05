import { createFileRoute } from "@tanstack/react-router";
import {
  HandHeart, Wallet, ShieldCheck, Users, FileCheck, Percent,
} from "lucide-react";
import { ProductPage, buildProductJsonLd, type ProductPageData } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import productImage from "@/assets/product-obseques.jpg";

const data: ProductPageData = {
  eyebrow: "Assurance Décès",
  title: "Assurance décès : un capital garanti pour protéger vos proches",
  subtitle:
    "L'assurance décès garantit le versement d'un capital (de 10 000€ à 500 000€) à vos bénéficiaires en cas de décès. Solution simple, souple et fiscalement avantageuse.",
  keywords: [
    "assurance deces",
    "assurance décès",
    "capital deces",
    "capital décès",
    "meilleure assurance deces",
    "assurance deces temporaire",
    "assurance deces vie entière",
    "assurance deces comparatif",
    "assurance deces senior",
    "prévoyance décès",
    "assurance vie deces",
    "combien coute une assurance deces",
    "assurance deces sans questionnaire médical",
  ],
  image: productImage,
  introTitle: "L'assurance décès : la solution pour protéger financièrement vos proches",
  introText:
    "Contrairement à l'assurance vie, l'assurance décès a un unique objectif : verser un capital garanti à vos bénéficiaires en cas de décès. Idéale pour protéger un conjoint, financer les études des enfants, rembourser un crédit ou couvrir les frais de succession.",
  advantages: [
    { icon: Wallet, title: "Capital de 10 000€ à 500 000€", text: "Vous définissez librement le montant selon les besoins de vos proches." },
    { icon: HandHeart, title: "Versement rapide", text: "Capital versé en moins de 48h sur présentation de l'acte de décès." },
    { icon: Users, title: "Bénéficiaires libres", text: "Conjoint, enfants, parents, ami : vous choisissez la clé de répartition." },
    { icon: Percent, title: "Fiscalité avantageuse", text: "Exonération jusqu'à 152 500€ par bénéficiaire (art. 990 I CGI)." },
    { icon: ShieldCheck, title: "Formules temporaires ou vie entière", text: "Couverture jusqu'à un âge donné ou toute la vie, selon votre projet." },
    { icon: FileCheck, title: "Sans questionnaire lourd", text: "Selon capital, formalités médicales simplifiées ou supprimées." },
  ],
  coverageTitle: "Ce que couvre une assurance décès",
  coverage: [
    "Décès toutes causes (maladie, accident, mort naturelle)",
    "Décès accidentel avec capital doublé (option)",
    "Perte totale et irréversible d'autonomie (PTIA) — versement anticipé du capital",
    "Invalidité permanente (option selon formule)",
    "Rente éducation pour les enfants mineurs (option)",
    "Rente de conjoint viagère (option)",
    "Assistance à la famille (démarches administratives, soutien psychologique)",
  ],
  reasonsTitle: "Pourquoi souscrire chez NEOASSUR",
  reasons: [
    { title: "Comparatif indépendant", text: "Nous comparons AXA, Allianz, CNP, Generali, April pour trouver la meilleure combinaison capital/cotisation." },
    { title: "Formalités simplifiées", text: "Selon le capital, souscription possible sans examen médical ni questionnaire lourd." },
    { title: "Conseil sur mesure", text: "Un expert vous aide à définir le bon capital selon votre situation familiale et patrimoniale." },
  ],
  faqs: [
    { q: "Quelle est la différence entre assurance décès et assurance vie ?", a: "L'assurance vie est un produit d'épargne (avec des versements récupérables). L'assurance décès est une pure garantie : le capital n'est versé qu'en cas de décès, en contrepartie d'une cotisation." },
    { q: "Combien coûte une assurance décès ?", a: "Cela dépend de votre âge, du capital et du type de formule. Comptez environ 8€/mois pour 30 000€ à 40 ans (formule temporaire), 25€/mois à 60 ans, 60€/mois à 75 ans." },
    { q: "Quelle est la meilleure assurance décès ?", a: "Il n'y a pas de meilleure assurance en absolu — cela dépend du capital souhaité, de la durée de couverture et de votre âge. Notre comparateur analyse plus de 12 contrats." },
    { q: "Peut-on souscrire une assurance décès à 65, 70, 75 ans ?", a: "Oui. La plupart des assureurs acceptent jusqu'à 75 ou 80 ans. Certains contrats vie entière sont accessibles sans limite d'âge, avec formalités médicales adaptées." },
    { q: "Le capital est-il soumis aux droits de succession ?", a: "Non, dans la limite de 152 500€ par bénéficiaire (article 990 I du CGI pour les primes versées avant 70 ans). C'est un avantage fiscal majeur." },
    { q: "Que se passe-t-il si je ne décède pas pendant la période couverte (assurance temporaire) ?", a: "Le capital n'est pas versé et les cotisations restent acquises à l'assureur. C'est pourquoi la formule vie entière est souvent préférée après 55 ans." },
  ],
  related: [
    { kind: "page", to: "/contrat-obseques", anchor: "Voir aussi le contrat obsèques", description: "Une solution ciblée pour financer vos funérailles." },
    { kind: "page", to: "/assurance-obseques", anchor: "Assurance obsèques", description: "Comparez les meilleures assurances funéraires." },
  ],
};

export const Route = createFileRoute("/assurance-deces")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: "Assurance Décès — Capital garanti jusqu'à 500 000€ | NEOASSUR" },
      { name: "description", content: "Assurance décès : capital de 10 000€ à 500 000€ versé à vos proches en 48h. Formule temporaire ou vie entière, sans questionnaire lourd. Devis gratuit en 2 min." },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: "Assurance Décès — Protégez vos proches avec un capital garanti | NEOASSUR" },
      { property: "og:description", content: "Capital versé en 48h, formalités simplifiées, fiscalité avantageuse. Comparatif 2026." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://www.neo-assur.fr/assurance-deces" },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/assurance-deces" }],
    scripts: buildProductJsonLd(data, "/assurance-deces", loaderData?.origin ?? ""),
  }),
  component: () => <ProductPage data={data} />,
});
