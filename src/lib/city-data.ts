import { MapPin, ShieldCheck, Percent, HeartPulse, Users, Building2 } from "lucide-react";
import type { ProductPageData } from "@/components/ProductPage";

export type CityInfo = {
  slug:
    | "paris"
    | "lyon"
    | "marseille"
    | "toulouse"
    | "bordeaux";
  city: string; // Display name
  cityLower: string; // lowercase for slug references
  region: string;
  postal: string;
  specifics: string; // 1 sentence about local health specifics
};

export const CITY_ROUTES = {
  paris: "/mutuelle-sante-paris",
  lyon: "/mutuelle-sante-lyon",
  marseille: "/mutuelle-sante-marseille",
  toulouse: "/mutuelle-sante-toulouse",
  bordeaux: "/mutuelle-sante-bordeaux",
} as const;

export function buildCityMutuelleData(info: CityInfo, image: string): ProductPageData {
  return {
    eyebrow: `Mutuelle Santé ${info.city}`,
    title: `Mutuelle santé ${info.city} : comparez +25 assureurs près de chez vous`,
    subtitle: `Vous cherchez une mutuelle santé à ${info.city} (${info.postal}) ? Comparez +25 offres adaptées à la région ${info.region}, avec un conseiller local NEOASSUR joignable au 01 87 66 56 10.`,
    keywords: [
      `mutuelle santé ${info.cityLower}`,
      `mutuelle ${info.cityLower}`,
      `mutuelle santé ${info.postal.slice(0, 2)}`,
      `meilleure mutuelle santé ${info.cityLower}`,
      `mutuelle santé pas chère ${info.cityLower}`,
      `comparateur mutuelle ${info.cityLower}`,
      `agence mutuelle santé ${info.cityLower}`,
      `courtier mutuelle ${info.cityLower}`,
      `devis mutuelle ${info.cityLower}`,
      `mutuelle senior ${info.cityLower}`,
      `mutuelle famille ${info.cityLower}`,
    ],
    image,
    introTitle: `Une mutuelle santé adaptée à la vie à ${info.city}`,
    introText: `${info.specifics} À ${info.city}, la densité de médecins spécialistes et le taux de dépassements d'honoraires impactent directement vos remboursements. NEOASSUR compare +25 mutuelles nationales et sélectionne celles qui offrent la meilleure prise en charge pour les habitants de ${info.city} et de la région ${info.region}.`,
    advantages: [
      { icon: MapPin, title: `Conseiller ${info.city}`, text: `Un expert joignable, connaissant les réseaux de soins locaux.` },
      { icon: Percent, title: "Jusqu'à 40% d'économies", text: "312€/an d'écart moyen face à l'ancienne mutuelle de nos clients." },
      { icon: Building2, title: "Réseau CHU local", text: `Prise en charge dans les hôpitaux publics et cliniques privées de ${info.city}.` },
      { icon: HeartPulse, title: "Téléconsultation 24/7", text: "Un médecin joignable même le soir et le week-end." },
      { icon: Users, title: "Toutes situations", text: "Étudiant, jeune actif, famille, senior, TNS, retraité : formules dédiées." },
      { icon: ShieldCheck, title: "Sans questionnaire médical", text: "Adhésion facile, pas d'examen médical intrusif." },
    ],
    coverageTitle: `Ce que couvre une bonne mutuelle santé à ${info.city}`,
    coverage: [
      "Consultations médecin traitant et spécialistes (dépassements inclus)",
      `Hospitalisation dans les CHU et cliniques privées de ${info.city}`,
      "Chambre particulière et forfait journalier",
      "Dentaire : soins, prothèses, orthodontie, implants",
      "Optique : lunettes, lentilles, chirurgie réfractive",
      "Audioprothèses et appareils auditifs",
      "Médecines douces (ostéo, chiro, acupuncture)",
      "Téléconsultation médicale 24/7 et prévention",
    ],
    reasonsTitle: `Pourquoi choisir NEOASSUR à ${info.city} ?`,
    reasons: [
      { title: "Expertise locale", text: `Nos conseillers connaissent les particularités de l'offre de soins à ${info.city} : dépassements d'honoraires, réseaux de cliniques, tarifs des spécialistes.` },
      { title: "Comparateur indépendant", text: "+25 assureurs comparés simultanément, sans exclusivité — vous obtenez le meilleur rapport garanties/prix." },
      { title: "Réponse sous 24h", text: `Un conseiller vous rappelle sous 24h ouvrées pour finaliser votre devis à ${info.city}.` },
    ],
    faqs: [
      { q: `Quelle est la meilleure mutuelle santé à ${info.city} ?`, a: `Il n'y a pas UNE meilleure mutuelle à ${info.city}, mais la meilleure POUR VOTRE PROFIL. Notre comparateur croise votre âge, votre situation et les spécificités locales (dépassements d'honoraires, réseau de soins) pour identifier la formule la plus adaptée.` },
      { q: `Combien coûte une mutuelle santé à ${info.city} ?`, a: `À ${info.city}, comptez en moyenne 55 à 90€/mois pour un adulte, 90 à 160€/mois pour une famille et 100 à 180€/mois pour un senior — soit 5 à 15% plus cher que la moyenne nationale, du fait des dépassements d'honoraires plus fréquents en zone urbaine.` },
      { q: `Y a-t-il une agence NEOASSUR à ${info.city} ?`, a: `NEOASSUR est un courtier 100% digital : pas d'agence physique à ${info.city}, mais un conseiller local joignable au 01 87 66 56 10 ou par email. Devis, souscription et gestion 100% en ligne, avec un accompagnement humain.` },
      { q: `Puis-je garder mon médecin traitant à ${info.city} ?`, a: `Oui, absolument. Vous conservez une totale liberté de choix de vos praticiens à ${info.city} et ailleurs. Nous gérons uniquement la prise en charge financière via le tiers payant.` },
    ],
    related: [
      { kind: "page", to: "/mutuelle-sante", anchor: "Toutes nos mutuelles santé", description: "Voir nos formules nationales." },
      { kind: "page", to: "/comparateur-mutuelle-sante", anchor: "Comparateur mutuelle santé", description: "Comparez +25 offres en 2 minutes." },
      { kind: "page", to: "/devis-mutuelle-sante", anchor: `Devis mutuelle santé ${info.city}`, description: "Devis personnalisé en 2 min." },
    ],
  };
}

export function buildLocalBusinessJsonLd(info: CityInfo, origin: string) {
  const base = origin || "https://www.neo-assur.fr";
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "InsuranceAgency",
      name: `NEOASSUR — Mutuelle santé ${info.city}`,
      description: `Courtier en mutuelle santé à ${info.city} : +25 assureurs comparés, devis gratuit en 2 minutes.`,
      url: `${base}${CITY_ROUTES[info.slug]}`,
      telephone: "+33187665610",
      priceRange: "€€",
      areaServed: { "@type": "City", name: info.city },
      address: {
        "@type": "PostalAddress",
        addressLocality: info.city,
        postalCode: info.postal,
        addressCountry: "FR",
        addressRegion: info.region,
      },
    }),
  };
}

export const CITY_DATA: Record<CityInfo["slug"], CityInfo> = {
  paris: {
    slug: "paris",
    city: "Paris",
    cityLower: "paris",
    region: "Île-de-France",
    postal: "75008",
    specifics: "Paris concentre le plus fort taux de médecins spécialistes en secteur 2 de France, ce qui rend les dépassements d'honoraires fréquents.",
  },
  lyon: {
    slug: "lyon",
    city: "Lyon",
    cityLower: "lyon",
    region: "Auvergne-Rhône-Alpes",
    postal: "69002",
    specifics: "Lyon dispose d'une des meilleures offres hospitalières de France (Hospices Civils, cliniques privées de qualité), mais les dépassements d'honoraires en centre-ville restent élevés.",
  },
  marseille: {
    slug: "marseille",
    city: "Marseille",
    cityLower: "marseille",
    region: "Provence-Alpes-Côte d'Azur",
    postal: "13008",
    specifics: "Marseille combine grands CHU (AP-HM) et cliniques privées ; le taux de dépassements d'honoraires y est important, notamment sur les spécialités.",
  },
  toulouse: {
    slug: "toulouse",
    city: "Toulouse",
    cityLower: "toulouse",
    region: "Occitanie",
    postal: "31000",
    specifics: "Toulouse offre un excellent maillage de professionnels de santé et un CHU réputé, avec des tarifs médicaux légèrement inférieurs à la moyenne des grandes métropoles.",
  },
  bordeaux: {
    slug: "bordeaux",
    city: "Bordeaux",
    cityLower: "bordeaux",
    region: "Nouvelle-Aquitaine",
    postal: "33000",
    specifics: "Bordeaux dispose d'un CHU parmi les plus performants de France et d'une offre de spécialistes dense, avec des dépassements d'honoraires modérés.",
  },
};
