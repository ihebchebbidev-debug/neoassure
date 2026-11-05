import blogMutuelle from "@/assets/blog-mutuelle-sante.jpg";
import blogEmprunteur from "@/assets/blog-emprunteur.jpg";
import blogObseques from "@/assets/blog-obseques.jpg";
import blogEconomies from "@/assets/blog-economies.jpg";
import blogSenior from "@/assets/blog-senior.jpg";
import blogFamille from "@/assets/blog-famille.jpg";
import blogDentaire from "@/assets/blog-dentaire.jpg";
import blogTns from "@/assets/blog-tns.jpg";
import blogJeuneActif from "@/assets/blog-jeune-actif.jpg";
import blogMaternite from "@/assets/blog-maternite.jpg";
import blogHospitalisation from "@/assets/blog-hospitalisation.jpg";
import blogAudio from "@/assets/blog-audio.jpg";
import blogEtudiant from "@/assets/blog-etudiant.jpg";
import blogExpat from "@/assets/blog-expat.jpg";
import blogTeleconsultation from "@/assets/blog-teleconsultation.jpg";
import blogMedecinesDouces from "@/assets/blog-medecines-douces.jpg";
import blogResiliation from "@/assets/blog-resiliation.jpg";
import blogComparateur from "@/assets/blog-comparateur.jpg";
import blogFonctionnaire from "@/assets/blog-fonctionnaire.jpg";
import blogEmprunteurRefus from "@/assets/blog-emprunteur-refus.jpg";
import blogPrevoyanceArret from "@/assets/blog-prevoyance-arret.jpg";
import blogDevis2min from "@/assets/blog-devis-2min.jpg";
import blogAnimaux from "@/assets/blog-animaux.jpg";
import blogCss from "@/assets/blog-css.jpg";
import blogChomage from "@/assets/blog-chomage.jpg";
import blogAssuranceVie from "@/assets/blog-assurance-vie.jpg";
import blogOptique from "@/assets/blog-optique.jpg";
import blogPrevoyanceDeces from "@/assets/blog-prevoyance-deces.jpg";
import blogCoutMutuelle70 from "@/assets/blog-cout-mutuelle-70-ans.jpg";
import blogSeniorPasChere from "@/assets/blog-mutuelle-senior-pas-chere.jpg";
import blogMeilleurComparateur from "@/assets/blog-meilleur-comparateur-senior.jpg";
import blogQuelleMutuelle2026 from "@/assets/blog-quelle-mutuelle-2026.jpg";
import blogBebeEnfant from "@/assets/blog-bebe-enfant.jpg";
import blogJeuneCouple from "@/assets/blog-jeune-couple.jpg";
import blogAutoEntrepreneur from "@/assets/blog-auto-entrepreneur.jpg";
import blogFamilleNombreuse from "@/assets/blog-famille-nombreuse.jpg";
import blogFrontalier from "@/assets/blog-frontalier.jpg";
import blog80Ans from "@/assets/blog-80-ans.jpg";


export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string; // ISO
  readingTime: string;
  content: { heading?: string; paragraph: string }[];
  keywords: string[];
  relatedLanding?: { to: string; label: string; description: string };
  faq?: { question: string; answer: string }[];
};


export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "comment-choisir-mutuelle-sante",
    title: "Comment choisir la meilleure mutuelle santé en 2026",
    description:
      "Guide complet pour comparer les mutuelles santé : garanties, remboursements, tarifs et conseils d'experts NEOASSUR pour faire le bon choix.",
    image: blogMutuelle,
    category: "Mutuelle santé",
    author: "Équipe NEOASSUR",
    date: "2026-05-12",
    readingTime: "6 min",
    keywords: ["mutuelle santé", "comparateur mutuelle", "complémentaire santé", "remboursement"],
    content: [
      {
        paragraph:
          "Choisir une mutuelle santé adaptée à vos besoins est essentiel pour limiter vos restes à charge et accéder aux meilleurs soins. Voici les critères clés à examiner avant de souscrire.",
      },
      {
        heading: "Évaluez vos besoins réels",
        paragraph:
          "Avant tout, analysez votre profil : âge, situation familiale, fréquence des consultations, besoins en optique, dentaire ou hospitalisation. Une jeune personne en bonne santé n'aura pas les mêmes besoins qu'une famille avec enfants ou un senior.",
      },
      {
        heading: "Comparez les niveaux de garanties",
        paragraph:
          "Les contrats sont généralement présentés sous forme de pourcentages du tarif de la Sécurité sociale ou en forfaits. Vérifiez les plafonds annuels pour l'optique, les dépassements d'honoraires et les médecines douces.",
      },
      {
        heading: "Attention aux délais de carence",
        paragraph:
          "Certaines garanties (orthodontie, prothèses) ne s'appliquent qu'après plusieurs mois. Lisez bien les conditions générales pour éviter les mauvaises surprises.",
      },
      {
        heading: "Faites jouer la concurrence",
        paragraph:
          "Un comparateur indépendant comme NEOASSUR vous permet de visualiser plusieurs devis en quelques minutes et d'économiser jusqu'à 40 % sur votre cotisation annuelle.",
      },
    ],
  },
  {
    slug: "assurance-emprunteur-economisez",
    title: "Assurance emprunteur : économisez jusqu'à 15 000 € sur votre prêt",
    description:
      "Avec la loi Lemoine, changer d'assurance emprunteur est désormais possible à tout moment. Découvrez comment réduire le coût de votre crédit immobilier.",
    image: blogEmprunteur,
    category: "Assurance emprunteur",
    author: "Équipe NEOASSUR",
    date: "2026-04-28",
    readingTime: "5 min",
    keywords: ["assurance emprunteur", "loi Lemoine", "crédit immobilier", "délégation assurance"],
    content: [
      {
        paragraph:
          "L'assurance emprunteur représente en moyenne un tiers du coût total d'un crédit immobilier. La bonne nouvelle : il est désormais possible d'en changer à tout moment.",
      },
      {
        heading: "La loi Lemoine en pratique",
        paragraph:
          "Depuis 2022, vous pouvez résilier votre assurance emprunteur sans frais et sans attendre la date anniversaire. Une simple demande à votre banque suffit, avec un nouveau contrat offrant des garanties équivalentes.",
      },
      {
        heading: "Des économies considérables",
        paragraph:
          "Pour un prêt de 200 000 € sur 20 ans, le gain moyen constaté par nos clients dépasse 12 000 €. Les emprunteurs jeunes et non-fumeurs peuvent même réaliser plus de 15 000 € d'économies.",
      },
      {
        heading: "Comment changer simplement",
        paragraph:
          "Nos conseillers s'occupent de tout : étude de votre contrat actuel, recherche du meilleur taux, envoi à la banque et suivi du transfert. Le tout en moins de 30 jours.",
      },
    ],
  },
  {
    slug: "assurance-obseques-proteger-proches",
    title: "Assurance obsèques : pourquoi protéger vos proches dès aujourd'hui",
    description:
      "L'assurance obsèques permet d'anticiper les frais funéraires et de soulager vos proches. Découvrez les avantages d'un contrat prévoyance.",
    image: blogObseques,
    category: "Prévoyance",
    author: "Équipe NEOASSUR",
    date: "2026-04-10",
    readingTime: "4 min",
    keywords: ["assurance obsèques", "prévoyance", "frais funéraires", "contrat obsèques"],
    content: [
      {
        paragraph:
          "Le coût moyen d'obsèques en France dépasse 4 000 €. Une assurance obsèques permet d'anticiper ces frais et d'éviter un fardeau financier à vos proches dans un moment difficile.",
      },
      {
        heading: "Deux formules au choix",
        paragraph:
          "Le contrat en capital verse une somme à vos bénéficiaires. Le contrat en prestations organise directement vos funérailles selon vos volontés.",
      },
      {
        heading: "Souscrire jeune pour payer moins",
        paragraph:
          "Plus vous souscrivez tôt, plus votre cotisation mensuelle reste basse. À 50 ans, comptez environ 15 € par mois pour un capital de 5 000 €.",
      },
    ],
  },
  {
    slug: "5-astuces-economiser-mutuelle",
    title: "5 astuces pour réduire le coût de votre mutuelle santé",
    description:
      "Découvrez nos conseils concrets pour payer moins cher votre complémentaire santé sans sacrifier vos garanties essentielles.",
    image: blogEconomies,
    category: "Conseils",
    author: "Équipe NEOASSUR",
    date: "2026-03-22",
    readingTime: "5 min",
    keywords: ["économies mutuelle", "tarif mutuelle", "réduire cotisation"],
    content: [
      {
        paragraph:
          "Votre cotisation mutuelle pèse de plus en plus lourd ? Voici cinq leviers concrets pour la réduire sans perdre en couverture.",
      },
      { heading: "1. Adaptez vos garanties à votre profil", paragraph: "Inutile de payer pour des soins que vous n'utilisez jamais. Auditez votre contrat chaque année." },
      { heading: "2. Comparez tous les ans", paragraph: "Le marché évolue vite. Un comparatif annuel permet souvent de gagner 20 à 30 %." },
      { heading: "3. Profitez des offres entreprise", paragraph: "Si vous êtes salarié, la mutuelle obligatoire est cofinancée par votre employeur." },
      { heading: "4. Misez sur la téléconsultation", paragraph: "De plus en plus de contrats l'incluent gratuitement et vous évitent des avances de frais." },
      { heading: "5. Demandez un avis expert", paragraph: "Un conseiller NEOASSUR identifie en 10 minutes les économies possibles sur votre contrat." },
    ],
  },
  {
    slug: "mutuelle-senior-bien-choisir",
    title: "Mutuelle senior : bien choisir après 60 ans",
    description:
      "Les besoins de santé évoluent avec l'âge. Découvrez les garanties indispensables d'une bonne mutuelle senior et nos conseils d'expert.",
    image: blogSenior,
    category: "Senior",
    author: "Équipe NEOASSUR",
    date: "2026-03-05",
    readingTime: "6 min",
    keywords: ["mutuelle senior", "mutuelle retraité", "santé 60 ans"],
    content: [
      {
        paragraph:
          "Après 60 ans, les dépenses de santé augmentent fortement. Choisir une mutuelle senior adaptée évite des restes à charge importants.",
      },
      { heading: "Les garanties prioritaires", paragraph: "Hospitalisation, dépassements d'honoraires, prothèses dentaires, audioprothèses et soins optiques sont les postes à surveiller." },
      { heading: "Méfiez-vous des questionnaires médicaux", paragraph: "Privilégiez les contrats sans sélection médicale pour éviter les exclusions." },
      { heading: "L'accompagnement compte", paragraph: "Aide à domicile, garde après hospitalisation, prévention : autant de services qui font la différence au quotidien." },
    ],
  },
  {
    slug: "mutuelle-famille-couverture-enfants",
    title: "Mutuelle famille : la bonne couverture pour vos enfants",
    description:
      "Orthodontie, lunettes, vaccinations : nos conseils pour choisir une mutuelle famille qui couvre vraiment les besoins de vos enfants.",
    image: blogFamille,
    category: "Famille",
    author: "Équipe NEOASSUR",
    date: "2026-02-18",
    readingTime: "5 min",
    keywords: ["mutuelle famille", "mutuelle enfants", "orthodontie", "lunettes enfants"],
    content: [
      { paragraph: "Une bonne mutuelle famille doit couvrir les besoins spécifiques des enfants tout en restant abordable pour le foyer." },
      { heading: "Orthodontie et soins dentaires", paragraph: "Souvent peu remboursés par la Sécurité sociale, ils peuvent coûter plusieurs milliers d'euros." },
      { heading: "Optique enfant", paragraph: "Les enfants changent fréquemment de lunettes. Vérifiez les forfaits annuels." },
      { heading: "Gratuit pour le 3e enfant", paragraph: "De nombreux contrats offrent la gratuité à partir du 3e enfant : un vrai bon plan pour les grandes familles." },
    ],
  },
  {
    slug: "remboursement-dentaire-optique-tout-comprendre",
    title: "Remboursements dentaire et optique : tout comprendre",
    description:
      "100% santé, plafonds, dépassements d'honoraires : décryptage des remboursements dentaire et optique pour bien lire votre contrat.",
    image: blogDentaire,
    category: "Dentaire & Optique",
    author: "Équipe NEOASSUR",
    date: "2026-01-30",
    readingTime: "7 min",
    keywords: ["remboursement dentaire", "remboursement optique", "100% santé", "reste à charge"],
    content: [
      { paragraph: "Le dispositif 100% Santé permet d'accéder à un panier de soins sans reste à charge. Mais toutes les prestations ne sont pas incluses." },
      { heading: "Le panier 100% Santé", paragraph: "Lunettes, prothèses dentaires et aides auditives d'entrée de gamme sont intégralement remboursés." },
      { heading: "Hors panier : attention aux plafonds", paragraph: "Pour des verres progressifs ou des couronnes céramique, comparez les plafonds annuels." },
      { heading: "Notre conseil", paragraph: "Choisissez un contrat avec un forfait optique d'au moins 400 € et dentaire à 300 % de la base de remboursement." },
    ],
  },
  {
    slug: "mutuelle-tns-independants",
    title: "Mutuelle TNS : la bonne couverture pour les indépendants",
    description:
      "Travailleurs non-salariés : découvrez comment choisir votre mutuelle santé et profiter de la loi Madelin pour réduire vos impôts.",
    image: blogTns,
    category: "Indépendants",
    author: "Équipe NEOASSUR",
    date: "2026-01-12",
    readingTime: "6 min",
    keywords: ["mutuelle TNS", "loi Madelin", "indépendants", "auto-entrepreneur"],
    content: [
      { paragraph: "En tant que travailleur indépendant, vous ne bénéficiez pas de la mutuelle obligatoire d'entreprise. Bien choisir votre contrat est essentiel." },
      { heading: "Loi Madelin : un avantage fiscal", paragraph: "Vos cotisations sont déductibles de votre revenu imposable dans la limite des plafonds légaux." },
      { heading: "Prévoyance obligatoire", paragraph: "Pensez aussi à couvrir vos arrêts de travail et l'invalidité, peu couverts par les régimes obligatoires des TNS." },
      { heading: "Sur-mesure pour votre activité", paragraph: "Un artisan, un consultant ou un médecin n'ont pas les mêmes besoins. Faites étudier votre situation." },
    ],
  },
  {
    slug: "mutuelle-jeune-actif",
    title: "Mutuelle jeune actif : quelle couverture pour démarrer dans la vie professionnelle",
    description:
      "Premier emploi, premier salaire : découvrez comment choisir une mutuelle santé adaptée aux jeunes actifs avec un budget maîtrisé et les bonnes garanties essentielles.",
    image: blogJeuneActif,
    category: "Jeune actif",
    author: "Équipe NEOASSUR",
    date: "2026-06-05",
    readingTime: "5 min",
    keywords: ["mutuelle jeune actif", "mutuelle premier emploi", "complémentaire jeune", "mutuelle pas cher"],
    content: [
      { paragraph: "Vous venez de signer votre premier CDI ? Bonne nouvelle : votre employeur prend en charge au moins 50 % de votre mutuelle d'entreprise. Mais celle-ci n'est pas toujours adaptée à votre profil." },
      { heading: "La mutuelle d'entreprise : obligatoire mais pas toujours optimale", paragraph: "Si elle reste avantageuse financièrement, sa couverture peut s'avérer insuffisante sur certains postes (optique, dentaire, médecines douces). Une surcomplémentaire peut combler les manques." },
      { heading: "Les garanties essentielles à 25-35 ans", paragraph: "Privilégiez une bonne prise en charge hospitalière, l'optique et les soins courants. La maternité devient un critère clé si vous envisagez de fonder une famille." },
      { heading: "Pensez à la portabilité", paragraph: "En cas de rupture de contrat, vous conservez votre mutuelle gratuitement pendant 12 mois. Un filet de sécurité précieux." },
      { heading: "Faites le point chaque année", paragraph: "Votre situation évolue rapidement : couple, enfants, achat immobilier. Un audit annuel avec un conseiller NEOASSUR permet d'ajuster votre contrat." },
    ],
  },
  {
    slug: "mutuelle-maternite-bien-preparer",
    title: "Mutuelle et maternité : bien préparer l'arrivée de bébé",
    description:
      "Suivi de grossesse, accouchement, chambre particulière, soins de bébé : comment choisir une mutuelle qui couvre vraiment la maternité et ses imprévus.",
    image: blogMaternite,
    category: "Maternité",
    author: "Équipe NEOASSUR",
    date: "2026-05-28",
    readingTime: "6 min",
    keywords: ["mutuelle maternité", "remboursement accouchement", "chambre particulière", "mutuelle grossesse"],
    content: [
      { paragraph: "Devenir parent change profondément vos besoins en santé. Anticiper sa mutuelle pendant la grossesse évite bien des mauvaises surprises au moment de l'accouchement." },
      { heading: "Ce que prend en charge la Sécurité sociale", paragraph: "Le suivi de grossesse est remboursé à 100 % à partir du 6e mois, tout comme l'accouchement en maternité publique. Les dépassements d'honoraires et la chambre particulière restent à votre charge." },
      { heading: "Les postes à surveiller", paragraph: "Chambre particulière (60 à 120 € par jour), dépassements d'honoraires de l'obstétricien, anesthésiste, péridurale de confort, lit accompagnant pour le conjoint." },
      { heading: "Pensez à la prime de naissance", paragraph: "De nombreuses mutuelles versent un forfait de 150 à 500 € à la naissance. Un coup de pouce bienvenu pour la layette." },
      { heading: "Anticipez l'inscription de bébé", paragraph: "Votre enfant doit être ajouté au contrat dans les 30 jours suivant la naissance pour bénéficier d'une couverture rétroactive." },
    ],
  },
  {
    slug: "mutuelle-hospitalisation-bien-couvrir",
    title: "Hospitalisation : comment être vraiment bien couvert",
    description:
      "Chambre particulière, forfait journalier, dépassements d'honoraires : tout savoir pour éviter un reste à charge important en cas d'hospitalisation.",
    image: blogHospitalisation,
    category: "Hospitalisation",
    author: "Équipe NEOASSUR",
    date: "2026-05-18",
    readingTime: "6 min",
    keywords: ["mutuelle hospitalisation", "chambre particulière", "forfait journalier hospitalier", "dépassements honoraires"],
    content: [
      { paragraph: "Une hospitalisation, même courte, peut coûter cher. Bien comprendre les frais et les garanties de votre mutuelle est essentiel pour éviter une mauvaise surprise." },
      { heading: "Le forfait journalier hospitalier", paragraph: "Il s'élève à 20 € par jour en hôpital et 15 € en psychiatrie. Il n'est pas remboursé par la Sécurité sociale mais l'est par la quasi-totalité des mutuelles, sans limite de durée." },
      { heading: "La chambre particulière", paragraph: "Comptez 60 à 120 € par jour selon l'établissement. Les bons contrats proposent un forfait illimité ou supérieur à 80 €." },
      { heading: "Les dépassements d'honoraires", paragraph: "En secteur 2, ils peuvent doubler le coût d'une intervention. Visez une garantie d'au moins 200 % de la base de remboursement, voire 300 % en grande agglomération." },
      { heading: "Pensez au confort", paragraph: "Télévision, Wi-Fi, lit accompagnant : ces petits plus, souvent remboursés, font la différence en cas de séjour prolongé." },
    ],
  },
  {
    slug: "audioprotheses-remboursement-bien-choisir",
    title: "Audioprothèses : bien comprendre les remboursements en 2026",
    description:
      "Aides auditives, panier 100% Santé, forfaits mutuelle : nos conseils pour bien choisir vos audioprothèses sans exploser votre budget.",
    image: blogAudio,
    category: "Audition",
    author: "Équipe NEOASSUR",
    date: "2026-05-02",
    readingTime: "5 min",
    keywords: ["audioprothèse remboursement", "aides auditives", "100% santé audio", "mutuelle audition"],
    content: [
      { paragraph: "Une aide auditive coûte en moyenne 1 500 € par oreille. Heureusement, le dispositif 100% Santé et une bonne mutuelle limitent fortement votre reste à charge." },
      { heading: "Le panier 100% Santé", paragraph: "Depuis 2021, certaines audioprothèses sont intégralement remboursées par la Sécurité sociale et votre mutuelle, sans aucun reste à charge." },
      { heading: "Les modèles hors panier", paragraph: "Pour les appareils plus discrets ou plus performants, vérifiez le forfait audio de votre mutuelle (idéalement 800 € minimum par oreille tous les 4 ans)." },
      { heading: "Renouvellement", paragraph: "La prise en charge est possible tous les 4 ans. Anticipez pour ne pas vous retrouver sans solution en cas de panne." },
    ],
  },
  {
    slug: "mutuelle-etudiante-bien-choisir",
    title: "Mutuelle étudiante : faut-il en souscrire une et laquelle ?",
    description:
      "Depuis la fin du régime étudiant, comment bien se couvrir quand on est étudiant ? Nos conseils pour trouver une mutuelle santé pas chère et adaptée.",
    image: blogEtudiant,
    category: "Étudiant",
    author: "Équipe NEOASSUR",
    date: "2026-04-22",
    readingTime: "4 min",
    keywords: ["mutuelle étudiante", "mutuelle pas cher étudiant", "complémentaire santé étudiant"],
    content: [
      { paragraph: "Depuis 2019, les étudiants sont rattachés au régime général. Mais la Sécurité sociale ne rembourse pas tout : une mutuelle reste indispensable." },
      { heading: "Rester sur la mutuelle des parents", paragraph: "Jusqu'à 28 ans (parfois plus), vous pouvez rester ayant-droit sur la mutuelle familiale. Souvent l'option la plus économique." },
      { heading: "Souscrire une mutuelle étudiante", paragraph: "À partir de 10 €/mois, des formules dédiées couvrent l'essentiel : consultations, optique, contraception et même téléconsultation." },
      { heading: "Pensez à la CSS", paragraph: "Si vos revenus sont faibles, vous pouvez bénéficier de la Complémentaire Santé Solidaire, gratuite ou à 1 €/jour." },
    ],
  },
  {
    slug: "assurance-sante-expatries",
    title: "Assurance santé pour expatriés : ce qu'il faut savoir avant de partir",
    description:
      "Vous partez vivre à l'étranger ? Découvrez les différences entre CFE, assurance internationale et mutuelle locale pour bien vous couvrir où que vous soyez.",
    image: blogExpat,
    category: "Expatriation",
    author: "Équipe NEOASSUR",
    date: "2026-04-08",
    readingTime: "7 min",
    keywords: ["assurance expatrié", "santé international", "CFE", "mutuelle expat"],
    content: [
      { paragraph: "Quitter la France implique de revoir entièrement votre couverture santé. La Sécurité sociale française ne vous suit pas automatiquement à l'étranger." },
      { heading: "La CFE : garder un lien avec la Sécu", paragraph: "La Caisse des Français à l'Étranger permet de conserver une couverture proche du régime général. Indispensable si vous prévoyez de rentrer en France." },
      { heading: "Une assurance internationale en complément", paragraph: "Frais réels, rapatriement, hospitalisation à l'étranger : une assurance internationale couvre ce que la CFE ne prend pas en charge." },
      { heading: "Attention aux zones à risque", paragraph: "USA, Asie, Moyen-Orient : les coûts médicaux peuvent être exorbitants. Une couverture sans plafond y est fortement recommandée." },
      { heading: "Pensez à la famille", paragraph: "Conjoint, enfants scolarisés, parents en visite : assurez-vous que tout le monde est protégé." },
    ],
  },
  {
    slug: "teleconsultation-remboursement-mutuelle",
    title: "Téléconsultation : comment est-elle remboursée par votre mutuelle ?",
    description:
      "La téléconsultation explose en France. Découvrez comment elle est prise en charge par la Sécurité sociale et votre mutuelle, et comment en profiter au quotidien.",
    image: blogTeleconsultation,
    category: "Téléconsultation",
    author: "Équipe NEOASSUR",
    date: "2026-03-15",
    readingTime: "4 min",
    keywords: ["téléconsultation remboursement", "médecin en ligne", "mutuelle téléconsultation", "consultation vidéo"],
    content: [
      { paragraph: "Plus besoin d'attendre des semaines pour voir un médecin. La téléconsultation, remboursée comme une consultation classique, simplifie l'accès aux soins." },
      { heading: "Le remboursement Sécurité sociale", paragraph: "Une téléconsultation est remboursée à 70 % du tarif conventionnel, à condition de passer par votre médecin traitant ou un service partenaire." },
      { heading: "L'apport de la mutuelle", paragraph: "De nombreux contrats incluent un accès illimité à la téléconsultation 24/7, sans avance de frais ni dépassement." },
      { heading: "Une vraie solution pour les déserts médicaux", paragraph: "Là où les rendez-vous sont rares, la téléconsultation devient un outil indispensable pour un suivi régulier." },
    ],
  },
  {
    slug: "medecines-douces-remboursement",
    title: "Médecines douces : ostéopathie, acupuncture, sophrologie… quels remboursements ?",
    description:
      "Ostéopathie, acupuncture, sophrologie, naturopathie : la Sécu ne rembourse pas, mais votre mutuelle peut. Découvrez comment bien choisir vos garanties.",
    image: blogMedecinesDouces,
    category: "Médecines douces",
    author: "Équipe NEOASSUR",
    date: "2026-02-28",
    readingTime: "5 min",
    keywords: ["médecines douces remboursement", "ostéopathie mutuelle", "acupuncture remboursement", "sophrologie mutuelle"],
    content: [
      { paragraph: "De plus en plus de Français se tournent vers les médecines douces pour gérer stress, douleurs ou troubles du sommeil. Bonne nouvelle : la plupart des mutuelles en couvrent une partie." },
      { heading: "Un forfait annuel à comparer", paragraph: "La majorité des contrats proposent un forfait annuel (100 à 500 €) avec un plafond par séance. Idéal pour 4 à 10 consultations par an." },
      { heading: "Les disciplines couvertes", paragraph: "Ostéopathie, chiropractie, acupuncture, sophrologie et étiopathie sont les plus fréquemment remboursées. Vérifiez la liste exacte avant de souscrire." },
      { heading: "Justificatifs nécessaires", paragraph: "Conservez vos factures : la mutuelle exige généralement un numéro ADELI ou une attestation de formation du praticien." },
      { heading: "Notre conseil", paragraph: "Si vous consultez régulièrement, privilégiez un contrat avec un forfait dédié plutôt qu'un plafond global trop limité." },
    ],
  },
  {
    slug: "devis-mutuelle-2-minutes",
    title: "Devis mutuelle en 2 minutes : comment ça marche et combien vous économisez",
    description:
      "Obtenez un devis mutuelle santé personnalisé en moins de 2 minutes en ligne. Découvrez la méthode NEOASSUR pour comparer 20 assureurs et économiser jusqu'à 40 %.",
    image: blogDevis2min,
    category: "Devis en ligne",
    author: "Équipe NEOASSUR",
    date: "2026-06-18",
    readingTime: "4 min",
    keywords: ["devis mutuelle", "devis mutuelle gratuit", "devis mutuelle en ligne", "comparateur mutuelle"],
    content: [
      { paragraph: "Comparer les mutuelles santé n'a jamais été aussi rapide. En 2 minutes chrono, vous recevez plusieurs devis personnalisés sans engagement et un appel d'un expert si vous le souhaitez." },
      { heading: "Étape 1 : votre profil en 30 secondes", paragraph: "Âge, situation familiale, régime social et besoins prioritaires (optique, dentaire, hospitalisation). Aucune information médicale n'est demandée." },
      { heading: "Étape 2 : comparaison instantanée", paragraph: "Notre moteur interroge plus de 20 assureurs partenaires et classe les offres selon votre budget et vos garanties prioritaires." },
      { heading: "Étape 3 : un expert vous rappelle (gratuit)", paragraph: "Un conseiller NEOASSUR analyse votre contrat actuel, identifie les économies possibles et vous accompagne dans la souscription. Le tout sans frais." },
      { heading: "Combien économise-t-on ?", paragraph: "En moyenne, nos clients réduisent leur cotisation de 320 €/an, à garanties équivalentes ou supérieures. Pour les seniors, l'économie dépasse souvent 600 €/an." },
    ],
  },
  {
    slug: "resilier-mutuelle-loi-resiliation-infra-annuelle",
    title: "Résilier sa mutuelle santé : comment faire en 2026 (loi infra-annuelle)",
    description:
      "Vous voulez changer de mutuelle ? Depuis la loi de résiliation infra-annuelle, vous pouvez résilier à tout moment après 1 an. Mode d'emploi complet et lettre type.",
    image: blogResiliation,
    category: "Résiliation",
    author: "Équipe NEOASSUR",
    date: "2026-06-14",
    readingTime: "5 min",
    keywords: ["résilier mutuelle", "résiliation infra-annuelle", "loi Chatel mutuelle", "changer de mutuelle"],
    content: [
      { paragraph: "Depuis le 1er décembre 2020, la loi de résiliation infra-annuelle vous permet de résilier votre mutuelle à tout moment, sans frais ni justificatif, après un an de contrat." },
      { heading: "Les conditions à respecter", paragraph: "Le contrat doit avoir plus d'un an d'ancienneté. La résiliation prend effet un mois après réception de la demande par l'assureur." },
      { heading: "Comment envoyer la demande", paragraph: "Lettre recommandée avec accusé de réception, email, espace client ou même par téléphone selon les assureurs. NEOASSUR s'occupe gratuitement de toute la procédure à votre place." },
      { heading: "Sans interruption de garanties", paragraph: "Votre nouvelle mutuelle prend le relais le jour même de la résiliation. Aucune période sans couverture." },
      { heading: "Et avant 1 an de contrat ?", paragraph: "La loi Chatel s'applique : votre assureur doit vous informer de la date limite de résiliation au moins 15 jours avant l'échéance annuelle. À défaut, vous pouvez résilier à tout moment." },
    ],
  },
  {
    slug: "comparateur-mutuelle-2026",
    title: "Comparateur mutuelle 2026 : comment bien comparer pour économiser",
    description:
      "Tous les comparateurs ne se valent pas. Découvrez la méthode pour comparer efficacement les mutuelles santé en 2026 et trouver le meilleur rapport garanties/prix.",
    image: blogComparateur,
    category: "Comparateur",
    author: "Équipe NEOASSUR",
    date: "2026-06-10",
    readingTime: "6 min",
    keywords: ["comparateur mutuelle", "comparateur mutuelle 2026", "comparateur mutuelle gratuit", "meilleure mutuelle"],
    content: [
      { paragraph: "Avec plus de 400 organismes complémentaires en France, comparer les mutuelles est devenu indispensable. Mais attention : tous les comparateurs ne se valent pas." },
      { heading: "Comparez à garanties équivalentes", paragraph: "Une mutuelle moins chère qui rembourse 100 % au lieu de 300 % en dentaire n'est pas une bonne affaire. Toujours raisonner à niveau de couverture équivalent." },
      { heading: "Vérifiez le nombre de partenaires", paragraph: "Les meilleurs comparateurs interrogent 15 à 30 assureurs. Un comparateur avec seulement 3 partenaires donne une vision biaisée du marché." },
      { heading: "Le piège des frais cachés", paragraph: "Frais de dossier, hausse à la 2e année, exclusions sur certains soins : lisez attentivement les conditions générales avant de signer." },
      { heading: "L'avantage de l'accompagnement humain", paragraph: "Un comparateur 100 % en ligne ne remplace pas un conseiller. Chez NEOASSUR, l'expertise humaine est gratuite et permet de gagner en moyenne 320 €/an." },
    ],
  },
  {
    slug: "mutuelle-fonctionnaire-bien-choisir",
    title: "Mutuelle fonctionnaire : bien choisir en 2026 (PSC, référencement)",
    description:
      "Fonctionnaire d'État, territorial ou hospitalier : avec la réforme PSC, votre employeur participe à votre mutuelle. Comment en profiter et bien choisir votre contrat.",
    image: blogFonctionnaire,
    category: "Fonctionnaire",
    author: "Équipe NEOASSUR",
    date: "2026-06-06",
    readingTime: "6 min",
    keywords: ["mutuelle fonctionnaire", "PSC fonction publique", "mutuelle territoriale", "mutuelle référencée"],
    content: [
      { paragraph: "Depuis la réforme de la Protection Sociale Complémentaire (PSC), les employeurs publics participent au financement de la mutuelle santé de leurs agents. Une vraie opportunité." },
      { heading: "Fonction publique d'État", paragraph: "Depuis 2024, l'État rembourse 15 €/mois minimum sur votre cotisation, et à partir de 2026, prend en charge 50 % d'un contrat collectif obligatoire selon le ministère." },
      { heading: "Fonction publique territoriale", paragraph: "Votre collectivité peut participer dans le cadre d'une labellisation ou d'une convention de participation. Renseignez-vous auprès de votre service RH." },
      { heading: "Fonction publique hospitalière", paragraph: "Les agents bénéficient d'un cadre spécifique avec des contrats référencés négociés. À partir de 2026, la participation employeur monte à 50 %." },
      { heading: "Faut-il rester sur un contrat référencé ?", paragraph: "Pas toujours. Comparer avec une mutuelle individuelle reste pertinent : selon votre profil, l'économie peut atteindre 200 à 500 €/an, même avec la participation employeur." },
    ],
  },
  {
    slug: "assurance-emprunteur-refus-banque",
    title: "Refus d'assurance emprunteur : quelles solutions pour décrocher votre prêt",
    description:
      "Risque aggravé de santé, profession à risque, âge : un refus d'assurance emprunteur n'est pas une fatalité. Découvrez les recours et la convention AERAS.",
    image: blogEmprunteurRefus,
    category: "Assurance emprunteur",
    author: "Équipe NEOASSUR",
    date: "2026-06-02",
    readingTime: "6 min",
    keywords: ["refus assurance emprunteur", "convention AERAS", "risque aggravé santé", "assurance prêt immobilier"],
    content: [
      { paragraph: "Un refus d'assurance emprunteur peut faire échouer un projet immobilier. Pourtant, des solutions existent presque toujours, même en cas de risque aggravé de santé." },
      { heading: "La convention AERAS", paragraph: "S'Assurer et Emprunter avec un Risque Aggravé de Santé : cette convention impose à 3 niveaux d'examen d'étudier les dossiers refusés. Plus de 80 % des demandes finissent par aboutir." },
      { heading: "Le droit à l'oubli", paragraph: "Depuis la loi Lemoine, plus aucune information sur un ancien cancer ou hépatite C n'est exigée après 5 ans de rémission. Une avancée majeure pour des millions d'emprunteurs." },
      { heading: "La délégation d'assurance", paragraph: "Si votre banque refuse, un assureur externe spécialisé peut accepter votre dossier avec des garanties équivalentes. C'est votre droit depuis la loi Lagarde." },
      { heading: "Notre accompagnement", paragraph: "Les courtiers NEOASSUR analysent gratuitement votre dossier et orientent vers les assureurs les plus susceptibles d'accepter votre profil. Sans frais ni engagement." },
    ],
  },
  {
    slug: "prevoyance-arret-travail-tns",
    title: "Prévoyance arrêt de travail : pourquoi c'est vital pour les indépendants",
    description:
      "En cas d'arrêt maladie, les TNS touchent peu ou pas d'indemnités. Une prévoyance est indispensable pour maintenir vos revenus. Nos conseils pour bien choisir.",
    image: blogPrevoyanceArret,
    category: "Prévoyance",
    author: "Équipe NEOASSUR",
    date: "2026-05-22",
    readingTime: "6 min",
    keywords: ["prévoyance TNS", "prévoyance indépendant", "arrêt de travail", "indemnités journalières"],
    content: [
      { paragraph: "Pour un indépendant, un arrêt de travail de plusieurs semaines peut mettre en péril son foyer et son entreprise. La prévoyance arrêt de travail compense la chute de revenus." },
      { heading: "Ce que vous touchez sans prévoyance", paragraph: "Pour un artisan ou commerçant : environ 22 à 60 €/jour, après 3 jours de carence. Pour un profession libérale : souvent 0 € avant 90 jours. Insuffisant pour vivre." },
      { heading: "Les indemnités journalières complémentaires", paragraph: "Votre prévoyance verse un complément quotidien pour maintenir 80 à 100 % de vos revenus dès le 1er, 8e, 15e ou 30e jour selon le contrat choisi." },
      { heading: "Couvrir aussi l'invalidité et le décès", paragraph: "Une bonne prévoyance inclut une rente d'invalidité (jusqu'à 100 % des revenus) et un capital décès pour protéger vos proches." },
      { heading: "Loi Madelin : un avantage fiscal", paragraph: "Vos cotisations prévoyance sont déductibles du revenu imposable dans la limite légale. Un atout financier non négligeable." },
    ],
  },
  {
    slug: "assurance-animaux-chien-chat",
    title: "Assurance santé animale : bien protéger votre chien ou votre chat",
    description:
      "Frais vétérinaires en hausse, remboursements, délais de carence : découvrez comment choisir une assurance santé pour votre chien ou votre chat sans vous ruiner.",
    image: blogAnimaux,
    category: "Animaux",
    author: "Équipe NEOASSUR",
    date: "2026-07-08",
    readingTime: "6 min",
    keywords: ["assurance animaux", "mutuelle chien chat", "assurance chien", "assurance chat", "frais vétérinaires"],
    content: [
      { paragraph: "Une opération chirurgicale chez un chien peut dépasser 2 000 €. Face à la hausse des frais vétérinaires, l'assurance santé animale devient un vrai bouclier financier pour les propriétaires." },
      { heading: "Comment fonctionne le remboursement", paragraph: "Vous avancez les frais chez le vétérinaire, puis l'assurance vous rembourse selon un taux (de 50 à 100 %) et un plafond annuel. Les meilleurs contrats remboursent en quelques jours." },
      { heading: "Attention aux délais de carence et exclusions", paragraph: "La plupart des contrats appliquent un délai de carence (7 jours pour la maladie, 48h pour l'accident) et excluent les maladies préexistantes. Souscrire jeune évite les mauvaises surprises." },
      { heading: "Le forfait prévention", paragraph: "Vaccins, vermifuges, stérilisation ou détartrage sont parfois pris en charge via un forfait prévention annuel de 50 à 150 €. Un vrai plus au quotidien." },
      { heading: "Notre conseil", paragraph: "Comparez le taux de remboursement, le plafond annuel et le reste à charge réel. Un contrat à 100 % avec un plafond élevé est souvent plus rentable qu'une formule bas de gamme." },
    ],
  },
  {
    slug: "complementaire-sante-solidaire-css",
    title: "Complémentaire Santé Solidaire (CSS) : conditions et démarches en 2026",
    description:
      "La CSS remplace la CMU-C et l'ACS. Gratuite ou à moins de 1 €/jour, découvrez les conditions de ressources, les soins couverts et comment en faire la demande.",
    image: blogCss,
    category: "Aides",
    author: "Équipe NEOASSUR",
    date: "2026-07-05",
    readingTime: "5 min",
    keywords: ["complémentaire santé solidaire", "CSS", "CMU-C", "aide mutuelle", "mutuelle gratuite"],
    content: [
      { paragraph: "La Complémentaire Santé Solidaire (CSS) permet aux personnes à revenus modestes d'accéder à une couverture santé gratuite ou quasi gratuite, sans reste à charge sur de nombreux soins." },
      { heading: "Qui peut en bénéficier ?", paragraph: "L'attribution dépend de vos ressources et de la composition de votre foyer. Pour une personne seule, le plafond se situe autour de 10 300 €/an pour la version gratuite, et un peu plus pour la version payante." },
      { heading: "Gratuite ou à moins de 1 €/jour", paragraph: "Selon vos revenus, la CSS est totalement gratuite ou soumise à une participation plafonnée (moins de 1 €/jour et par personne, variable selon l'âge)." },
      { heading: "Des soins sans avance de frais", paragraph: "Consultations, médicaments, hospitalisation, lunettes, prothèses dentaires et auditives du panier 100 % Santé sont pris en charge sans reste à charge et sans avance de frais." },
      { heading: "Comment faire la demande", paragraph: "La demande se fait en ligne sur le compte ameli ou via un formulaire papier. Nos conseillers NEOASSUR peuvent vous aider gratuitement à monter votre dossier." },
    ],
  },
  {
    slug: "mutuelle-chomage-demandeur-emploi",
    title: "Mutuelle et chômage : comment rester bien couvert sans emploi",
    description:
      "Portabilité, CSS, mutuelle individuelle : découvrez toutes les solutions pour conserver une bonne couverture santé pendant une période de chômage.",
    image: blogChomage,
    category: "Chômage",
    author: "Équipe NEOASSUR",
    date: "2026-07-02",
    readingTime: "5 min",
    keywords: ["mutuelle chômage", "portabilité mutuelle", "mutuelle demandeur emploi", "mutuelle sans emploi"],
    content: [
      { paragraph: "Perdre son emploi ne signifie pas perdre sa couverture santé. Plusieurs dispositifs permettent de rester bien protégé, souvent gratuitement pendant plusieurs mois." },
      { heading: "La portabilité : 12 mois gratuits", paragraph: "Après une rupture de contrat ouvrant droit à l'assurance chômage, vous conservez gratuitement la mutuelle de votre ancien employeur jusqu'à 12 mois. Aucune démarche complexe : l'employeur informe l'organisme." },
      { heading: "Quand la portabilité prend fin", paragraph: "À l'issue des 12 mois, vous pouvez souscrire une mutuelle individuelle. Certains assureurs proposent de reprendre le contrat collectif à titre personnel, mais souvent à un tarif plus élevé." },
      { heading: "Pensez à la CSS", paragraph: "Si vos revenus baissent fortement, vous êtes peut-être éligible à la Complémentaire Santé Solidaire, gratuite ou à moins de 1 €/jour." },
      { heading: "Comparer pour économiser", paragraph: "Une mutuelle individuelle bien choisie peut coûter moins cher que la reprise du contrat d'entreprise. Un conseiller NEOASSUR compare gratuitement les offres adaptées à votre nouvelle situation." },
    ],
  },
  {
    slug: "assurance-vie-epargne-transmission",
    title: "Assurance vie : épargner et transmettre son patrimoine en 2026",
    description:
      "Placement préféré des Français, l'assurance vie combine épargne souple et fiscalité avantageuse pour transmettre. Découvrez comment bien en profiter.",
    image: blogAssuranceVie,
    category: "Épargne",
    author: "Équipe NEOASSUR",
    date: "2026-06-28",
    readingTime: "7 min",
    keywords: ["assurance vie", "épargne assurance vie", "transmission patrimoine", "fiscalité assurance vie"],
    content: [
      { paragraph: "Avec plus de 1 900 milliards d'euros investis, l'assurance vie reste le placement favori des Français. Souple et fiscalement avantageuse, elle sert autant à épargner qu'à transmettre." },
      { heading: "Fonds euros ou unités de compte ?", paragraph: "Le fonds euros garantit votre capital avec un rendement modéré. Les unités de compte visent une performance supérieure mais comportent un risque de perte. Un contrat multisupport permet de combiner les deux." },
      { heading: "Une fiscalité qui récompense la durée", paragraph: "Après 8 ans de détention, vos retraits bénéficient d'un abattement annuel (4 600 € pour une personne seule, 9 200 € pour un couple) sur les gains imposables." },
      { heading: "Un outil de transmission puissant", paragraph: "Les capitaux transmis au décès échappent en grande partie aux droits de succession : jusqu'à 152 500 € par bénéficiaire pour les versements effectués avant 70 ans." },
      { heading: "Bien rédiger sa clause bénéficiaire", paragraph: "C'est l'élément clé : une clause précise et à jour garantit que votre capital ira aux bonnes personnes. Nos conseillers vous accompagnent gratuitement dans sa rédaction." },
    ],
  },
  {
    slug: "mutuelle-optique-verres-progressifs",
    title: "Optique : bien se faire rembourser lunettes et verres progressifs",
    description:
      "Verres progressifs, montures, lentilles : les prix flambent. Découvrez comment le 100 % Santé et votre mutuelle limitent votre reste à charge en optique.",
    image: blogOptique,
    category: "Optique",
    author: "Équipe NEOASSUR",
    date: "2026-06-25",
    readingTime: "5 min",
    keywords: ["remboursement optique", "verres progressifs", "mutuelle lunettes", "100% santé optique", "remboursement lentilles"],
    content: [
      { paragraph: "Une paire de lunettes à verres progressifs dépasse souvent 500 €. Entre le 100 % Santé et une bonne mutuelle, il est pourtant possible de réduire fortement la facture." },
      { heading: "Le panier 100 % Santé optique", paragraph: "Il propose des montures et verres (y compris progressifs) intégralement remboursés, sans reste à charge. La qualité est correcte, même si le choix de montures est limité." },
      { heading: "Hors panier : vérifiez le forfait", paragraph: "Pour des verres amincis, anti-lumière bleue ou des montures de marque, comparez le forfait optique de votre mutuelle. Visez au moins 300 à 400 € pour des verres progressifs." },
      { heading: "Le rythme de renouvellement", paragraph: "La prise en charge est en général possible tous les 2 ans pour un adulte, et tous les ans pour les enfants ou en cas d'évolution de la vue." },
      { heading: "Et les lentilles ?", paragraph: "Souvent hors 100 % Santé, elles sont remboursées via un forfait annuel dédié (100 à 250 €). Vérifiez ce poste si vous portez des lentilles au quotidien." },
    ],
  },
  {
    slug: "prevoyance-deces-proteger-famille",
    title: "Assurance décès : comment protéger financièrement votre famille",
    description:
      "Capital décès, rente éducation, garantie invalidité : découvrez comment une assurance décès met vos proches à l'abri en cas de coup dur.",
    image: blogPrevoyanceDeces,
    category: "Prévoyance",
    author: "Équipe NEOASSUR",
    date: "2026-06-22",
    readingTime: "6 min",
    keywords: ["assurance décès", "capital décès", "prévoyance famille", "rente éducation", "garantie décès"],
    content: [
      { paragraph: "En cas de décès prématuré, la perte de revenus peut fragiliser gravement un foyer. L'assurance décès verse un capital ou une rente pour protéger financièrement vos proches." },
      { heading: "Le capital décès", paragraph: "Vous choisissez un montant (souvent 3 à 5 ans de revenus) versé à vos bénéficiaires. Il permet de rembourser un crédit, financer les études des enfants ou maintenir le niveau de vie du conjoint." },
      { heading: "La rente éducation et la rente de conjoint", paragraph: "En complément du capital, une rente éducation finance la scolarité des enfants jusqu'à la fin de leurs études, et une rente de conjoint sécurise le revenu du partenaire survivant." },
      { heading: "Souscrire jeune et en bonne santé", paragraph: "Plus vous souscrivez tôt, plus la cotisation est faible. Un questionnaire de santé simplifié suffit souvent pour des capitaux modérés." },
      { heading: "Ne pas confondre avec l'assurance obsèques", paragraph: "L'assurance décès protège le niveau de vie de la famille, alors que l'assurance obsèques finance uniquement les frais funéraires. Les deux sont complémentaires." },
    ],
  },
  {

    slug: "combien-coute-mutuelle-senior-70-ans",
    title: "Combien coûte une mutuelle senior à 70 ans en 2026 ?",
    description:
      "Prix moyen, fourchettes de tarifs et leviers d'économie : le vrai coût d'une mutuelle senior à 70 ans en France en 2026, expliqué simplement.",
    image: blogCoutMutuelle70,
    category: "Senior",
    author: "Équipe NEOASSUR",
    date: "2026-07-01",
    readingTime: "6 min",
    keywords: [
      "mutuelle senior 70 ans",
      "prix mutuelle 70 ans",
      "tarif mutuelle senior",
      "combien coûte mutuelle senior",
    ],
    relatedLanding: {
      to: "/mutuelle-senior-70-ans",
      label: "Comparer les mutuelles senior à 70 ans",
      description: "Devis gratuit en 2 minutes, sans engagement, adapté aux plus de 70 ans.",
    },
    content: [
      { paragraph: "À 70 ans, la cotisation d'une mutuelle santé est en moyenne 2 à 3 fois plus élevée qu'à 40 ans. Selon les niveaux de garanties choisis, comptez entre 65 € et 180 € par mois en 2026." },
      { heading: "Le prix moyen d'une mutuelle senior à 70 ans", paragraph: "Pour une couverture équilibrée (hospitalisation à 200 %, dentaire 300 %, optique 400 €/an), le tarif moyen constaté par NEOASSUR se situe autour de 95 € par mois. Une formule haut de gamme peut dépasser 160 €." },
      { heading: "Pourquoi ça coûte plus cher après 70 ans", paragraph: "Les besoins augmentent : consultations spécialisées, prothèses, audioprothèses, hospitalisations. Les assureurs répercutent le risque statistique dans la cotisation." },
      { heading: "3 leviers pour payer moins cher", paragraph: "1) Choisir un contrat sans questionnaire de santé, 2) ajuster les garanties inutiles (maternité, orthodontie), 3) faire jouer la concurrence chaque année avec un comparateur indépendant." },
      { heading: "Résiliation infra-annuelle", paragraph: "Depuis la loi du 14 juillet 2019, vous pouvez résilier votre mutuelle à tout moment après 1 an. Aucune raison de rester sur un contrat trop cher." },
      { heading: "Notre conseil NEOASSUR", paragraph: "Un audit gratuit de votre contrat actuel permet en moyenne 32 % d'économies chez les 70 ans et plus. Comparez avant de renouveler." },
    ],
    faq: [
      { question: "Quel est le prix moyen d'une mutuelle à 70 ans ?", answer: "Entre 65 € et 180 € par mois selon les garanties, avec une moyenne autour de 95 € pour une couverture équilibrée." },
      { question: "Peut-on souscrire une mutuelle senior sans questionnaire médical ?", answer: "Oui, plusieurs assureurs proposent des contrats sans sélection médicale, particulièrement adaptés après 70 ans." },
    ],
  },
  {
    slug: "comment-trouver-mutuelle-senior-pas-chere",
    title: "Comment trouver une mutuelle senior vraiment pas chère ?",
    description:
      "Astuces concrètes pour réduire de 30 à 40 % le prix de votre mutuelle senior sans perdre en couverture. Comparatif, garanties utiles, pièges à éviter.",
    image: blogSeniorPasChere,
    category: "Senior",
    author: "Équipe NEOASSUR",
    date: "2026-07-05",
    readingTime: "6 min",
    keywords: [
      "mutuelle senior pas cher",
      "mutuelle senior économique",
      "mutuelle retraité pas chère",
      "meilleure mutuelle senior prix",
    ],
    relatedLanding: {
      to: "/mutuelle-senior-pas-cher",
      label: "Voir les mutuelles senior pas chères",
      description: "Comparez les meilleures offres à petit prix pour les plus de 60 ans.",
    },
    content: [
      { paragraph: "Une mutuelle senior pas chère n'est pas forcément une mauvaise mutuelle. C'est surtout une mutuelle bien calibrée sur vos besoins réels, sans garanties superflues ni doublons." },
      { heading: "Étape 1 : auditez votre contrat actuel", paragraph: "Regardez vos remboursements sur les 12 derniers mois. Si vous n'avez pas utilisé un poste (orthodontie, maternité, cures thermales), il n'y a pas de raison de payer pour ça." },
      { heading: "Étape 2 : comparez au moins 5 offres", paragraph: "À garanties équivalentes, les écarts de prix atteignent souvent 40 % entre le moins cher et le plus cher. Un comparateur indépendant vous fait gagner du temps." },
      { heading: "Étape 3 : privilégiez les contrats modulables", paragraph: "Les meilleures mutuelles senior « pas chères » sont celles où vous choisissez le niveau de chaque garantie (hospitalisation, dentaire, optique, audio) séparément." },
      { heading: "Les pièges à éviter", paragraph: "Attention aux délais de carence longs, aux plafonds cachés (ex. 100 €/an en optique), et aux hausses tarifaires automatiques après la 1re année. Lisez toujours les conditions générales." },
      { heading: "Les aides méconnues", paragraph: "Si vos revenus sont modestes, vous avez peut-être droit à la Complémentaire Santé Solidaire (CSS) : gratuite ou à moins de 30 €/mois selon vos ressources." },
    ],
    faq: [
      { question: "À partir de quel prix une mutuelle senior est-elle « pas chère » ?", answer: "En dessous de 60 €/mois pour une couverture correcte après 65 ans, on considère le tarif comme compétitif." },
      { question: "Peut-on changer de mutuelle senior à tout moment ?", answer: "Oui, après la première année de souscription, la résiliation est libre grâce à la loi de 2019." },
    ],
  },
  {
    slug: "quel-meilleur-comparateur-mutuelle-senior",
    title: "Quel est le meilleur comparateur de mutuelle senior ?",
    description:
      "Comment choisir un comparateur de mutuelle senior fiable, indépendant et vraiment gratuit. Critères à vérifier et pièges à éviter avant de comparer.",
    image: blogMeilleurComparateur,
    category: "Comparateur",
    author: "Équipe NEOASSUR",
    date: "2026-07-08",
    readingTime: "5 min",
    keywords: [
      "comparateur mutuelle senior",
      "meilleur comparateur mutuelle",
      "comparateur mutuelle gratuit",
      "comparateur mutuelle indépendant",
    ],
    relatedLanding: {
      to: "/comparateur-mutuelle-senior",
      label: "Utiliser notre comparateur mutuelle senior",
      description: "Comparez 30+ mutuelles en 2 minutes, gratuitement et sans engagement.",
    },
    content: [
      { paragraph: "Les comparateurs de mutuelle senior sont partout — mais tous ne se valent pas. Voici comment distinguer un bon comparateur d'un simple apporteur d'affaires biaisé." },
      { heading: "Critère 1 : le nombre d'assureurs comparés", paragraph: "Un vrai comparateur analyse au minimum 20 assureurs. En dessous, le panel est trop réduit pour être représentatif du marché." },
      { heading: "Critère 2 : l'indépendance vis-à-vis des assureurs", paragraph: "Certains comparateurs appartiennent à des groupes d'assurance et poussent naturellement leurs propres produits. Vérifiez l'immatriculation ORIAS." },
      { heading: "Critère 3 : la personnalisation du devis", paragraph: "Un bon comparateur pose des questions sur votre âge, vos besoins (dentaire, audio, optique), votre région et votre budget avant de proposer une offre — pas juste 3 cases à cocher." },
      { heading: "Critère 4 : l'accompagnement humain", paragraph: "Les meilleurs comparateurs proposent un conseiller dédié gratuit pour décrypter les contrats et vous aider à choisir — pas juste un formulaire suivi de spam téléphonique." },
      { heading: "Critère 5 : la transparence sur les frais", paragraph: "Un comparateur gratuit se rémunère via les assureurs partenaires. Vérifiez qu'aucun frais de dossier ne s'ajoute au moment de la souscription." },
    ],
    faq: [
      { question: "Les comparateurs de mutuelle sont-ils vraiment gratuits ?", answer: "Oui, ils sont rémunérés par les assureurs partenaires. Vous ne payez rien de plus que la cotisation de votre nouvelle mutuelle." },
      { question: "Combien de mutuelles doit comparer un bon outil ?", answer: "Au moins 20 à 30 assureurs pour un comparatif représentatif du marché français." },
    ],
  },
  {
    slug: "quelle-mutuelle-sante-choisir-2026",
    title: "Quelle mutuelle santé choisir en 2026 ?",
    description:
      "Guide complet 2026 pour choisir la mutuelle santé adaptée à votre profil : critères, garanties clés, tarifs moyens et erreurs à éviter.",
    image: blogQuelleMutuelle2026,
    category: "Mutuelle santé",
    author: "Équipe NEOASSUR",
    date: "2026-07-10",
    readingTime: "7 min",
    keywords: [
      "quelle mutuelle choisir",
      "meilleure mutuelle santé 2026",
      "comparatif mutuelle santé",
      "choisir mutuelle santé",
    ],
    relatedLanding: {
      to: "/mutuelle-sante",
      label: "Comparer les mutuelles santé",
      description: "Trouvez la mutuelle santé adaptée à votre profil en 2 minutes.",
    },
    content: [
      { paragraph: "Face à des centaines de contrats sur le marché, choisir sa mutuelle santé en 2026 peut vite tourner au casse-tête. La bonne méthode : partir de votre profil, pas des offres." },
      { heading: "Étape 1 : définir votre profil", paragraph: "Jeune actif, famille avec enfants, TNS, senior : chaque profil a des besoins prioritaires très différents. Un jeune actif privilégiera l'hospitalisation, une famille l'orthodontie et l'optique enfants, un senior le dentaire et l'audio." },
      { heading: "Étape 2 : identifier les postes clés", paragraph: "Regardez sur vos décomptes CPAM les postes où vous avez eu le plus de reste à charge sur 12 mois. Ce sont eux qu'il faut renforcer en priorité." },
      { heading: "Étape 3 : viser le bon niveau de garantie", paragraph: "Hospitalisation à 200 % minimum, dentaire à 300 %, optique à 400 €/an, honoraires spécialistes à 150 % : c'est le socle d'une bonne mutuelle en 2026." },
      { heading: "Étape 4 : comparer sur le rapport garantie/prix", paragraph: "Le moins cher n'est pas toujours le meilleur, ni l'inverse. Ce qui compte, c'est le rapport entre les garanties que vous utiliserez et la cotisation annuelle." },
      { heading: "Les erreurs à éviter", paragraph: "Ne pas lire les délais de carence, oublier de vérifier la portabilité, sous-estimer la téléconsultation gratuite, ou renouveler sans comparer chaque année (jusqu'à 40 % d'économies possibles)." },
      { heading: "Combien ça coûte en 2026 ?", paragraph: "Une mutuelle correcte coûte entre 25 €/mois (étudiant) et 150 €/mois (senior +75 ans). Une famille de 4 personnes tourne autour de 130 €/mois pour une couverture équilibrée." },
    ],
    faq: [
      { question: "Quelle est la meilleure mutuelle santé en 2026 ?", answer: "Il n'y a pas de « meilleure » mutuelle universelle : le meilleur contrat est celui qui correspond à votre profil, vos besoins et votre budget. Un comparateur permet de l'identifier en 2 min." },
      { question: "Peut-on cumuler la Sécu et deux mutuelles ?", answer: "Oui, on peut avoir une mutuelle principale et une surcomplémentaire pour renforcer certains postes (optique, dentaire, hospitalisation)." },
    ],
  },
  {
    slug: "mutuelle-sante-bebe-enfant",
    title: "Mutuelle santé bébé et enfant : quelle couverture choisir en 2026 ?",
    description:
      "Guide 2026 pour choisir la meilleure mutuelle santé pour votre bébé ou votre enfant : garanties optique, orthodontie, vaccins non remboursés, hospitalisation.",
    image: blogBebeEnfant,
    category: "Famille",
    author: "Équipe NEOASSUR",
    date: "2026-07-14",
    readingTime: "6 min",
    keywords: [
      "mutuelle santé bébé",
      "mutuelle santé enfant",
      "mutuelle enfant pas chère",
      "mutuelle orthodontie enfant",
      "mutuelle vaccins bébé",
    ],
    relatedLanding: {
      to: "/mutuelle-sante-famille",
      label: "Comparer les mutuelles famille",
      description: "Trouvez la mutuelle famille qui protège vos enfants au meilleur tarif.",
    },
    content: [
      { paragraph: "Bébé arrive ou vos enfants grandissent : leurs besoins de santé évoluent vite. Une mutuelle adaptée évite des restes à charge importants sur les postes clés de l'enfance." },
      { heading: "Les postes prioritaires pour un enfant", paragraph: "Vaccins non remboursés (rotavirus, méningite B), consultations pédiatre en dépassement, orthodontie (2 000 à 6 000 € par enfant), lunettes cassées ou perdues, hospitalisation (amygdales, végétations)." },
      { heading: "Rattachement à la mutuelle des parents ou contrat dédié ?", paragraph: "Dans 90 % des cas, rattacher l'enfant à la mutuelle famille est plus économique. Vérifiez toutefois que le contrat couvre bien l'orthodontie non remboursée et l'optique enfant." },
      { heading: "La gratuité à partir du 3e enfant", paragraph: "Plusieurs de nos assureurs partenaires offrent la gratuité totale à partir du 3e enfant rattaché, ce qui peut représenter 400 à 700 €/an d'économies pour une famille nombreuse." },
      { heading: "Nos conseils NEOASSUR", paragraph: "Choisissez un contrat sans questionnaire médical pour l'enfant, avec forfait maternité si un autre bébé est prévu, et vérifiez la couverture téléconsultation pédiatrique 24/7 — devenue indispensable." },
    ],
    faq: [
      { question: "À quel âge souscrire une mutuelle pour bébé ?", answer: "Dès la naissance : votre enfant est rattaché à la Sécurité sociale d'un parent, mais il doit aussi être ajouté à la mutuelle famille dans les 30 jours suivant sa naissance." },
      { question: "La mutuelle rembourse-t-elle les vaccins non obligatoires ?", answer: "Oui, les bonnes mutuelles enfant prennent en charge un forfait annuel « vaccins non remboursés » (rotavirus, méningite B) jusqu'à 100–150 €/an." },
    ],
  },
  {
    slug: "mutuelle-sante-jeune-couple",
    title: "Mutuelle santé pour jeune couple : comment bien s'assurer à deux",
    description:
      "Vous êtes en couple, entre 25 et 35 ans ? Découvrez comment choisir une mutuelle à deux, avec ou sans projet bébé, et économiser jusqu'à 300 €/an.",
    image: blogJeuneCouple,
    category: "Jeune actif",
    author: "Équipe NEOASSUR",
    date: "2026-07-15",
    readingTime: "5 min",
    keywords: [
      "mutuelle jeune couple",
      "mutuelle santé couple",
      "mutuelle jeune actif",
      "mutuelle 25 ans",
      "mutuelle 30 ans",
    ],
    relatedLanding: {
      to: "/mutuelle-sante",
      label: "Comparer les mutuelles santé",
      description: "Trouvez la mutuelle qui couvre votre couple au meilleur tarif.",
    },
    content: [
      { paragraph: "Emménager à deux, se pacser, se marier, envisager un enfant : c'est le bon moment pour repenser sa mutuelle. Deux contrats individuels coûtent souvent plus cher qu'un seul contrat couple bien choisi." },
      { heading: "Un seul contrat ou deux ?", paragraph: "Un contrat couple offre des tarifs dégressifs (le 2e adulte est souvent 15 à 25 % moins cher). Mais si l'un de vous a des besoins très différents (spécialiste, dentaire), deux contrats individuels ciblés peuvent revenir moins cher." },
      { heading: "Anticiper un projet bébé", paragraph: "Choisissez un contrat avec forfait maternité (300 à 800 €), suivi PMA, chambre particulière et sans délai de carence sur la maternité. Souscrire avant la conception évite les mauvaises surprises." },
      { heading: "Les postes à renforcer entre 25 et 35 ans", paragraph: "Optique (30 % des jeunes actifs portent des lunettes), dentaire (une couronne = 800 €), hospitalisation ambulatoire, ostéopathie, contraception non remboursée." },
      { heading: "Le prix moyen pour un jeune couple en 2026", paragraph: "Entre 45 et 90 €/mois pour un couple sans enfant avec une bonne couverture. Comparer permet d'économiser en moyenne 300 €/an sans baisser les garanties." },
    ],
    faq: [
      { question: "Faut-il un contrat couple ou deux contrats individuels ?", answer: "Un contrat couple est généralement 15 à 25 % moins cher, sauf si vos besoins de santé sont très différents." },
      { question: "Quand ajouter le futur bébé à la mutuelle ?", answer: "Dès sa naissance, dans un délai maximum de 30 jours pour bénéficier d'une prise en charge rétroactive." },
    ],
  },
  {
    slug: "mutuelle-sante-auto-entrepreneur",
    title: "Mutuelle santé auto-entrepreneur : loi Madelin, prix et meilleures offres 2026",
    description:
      "Auto-entrepreneur, freelance ou micro-entreprise : découvrez quelle mutuelle choisir, si vous avez droit à la loi Madelin et comment économiser jusqu'à 40%.",
    image: blogAutoEntrepreneur,
    category: "Indépendant",
    author: "Équipe NEOASSUR",
    date: "2026-07-16",
    readingTime: "6 min",
    keywords: [
      "mutuelle auto-entrepreneur",
      "mutuelle freelance",
      "mutuelle micro-entreprise",
      "mutuelle Madelin",
      "mutuelle TNS",
    ],
    relatedLanding: {
      to: "/mutuelle-sante-independant",
      label: "Comparer les mutuelles indépendant",
      description: "Trouvez la mutuelle TNS Madelin adaptée à votre activité.",
    },
    content: [
      { paragraph: "L'auto-entrepreneur ne bénéficie pas de mutuelle d'entreprise : c'est à vous de souscrire, à 100 % de votre poche. D'où l'importance de bien comparer." },
      { heading: "Loi Madelin : qui y a droit ?", paragraph: "Les auto-entrepreneurs relevant du régime réel peuvent déduire fiscalement leurs cotisations mutuelle grâce à la loi Madelin. Les micro-entrepreneurs au régime micro-BIC/BNC n'ont pas cet avantage (abattement forfaitaire déjà appliqué)." },
      { heading: "Les garanties incontournables pour un indépendant", paragraph: "Arrêt de travail (la Sécu vous verse peu), hospitalisation renforcée, dentaire, optique, téléconsultation illimitée pour éviter les jours d'arrêt, et prévoyance décès/invalidité pour protéger vos proches." },
      { heading: "Le prix moyen en 2026", paragraph: "De 35 €/mois (jeune indépendant, entrée de gamme) à 130 €/mois (indépendant +50 ans, couverture premium). Comptez 55 à 75 €/mois pour un bon équilibre garanties/prix." },
      { heading: "Nos conseils NEOASSUR", paragraph: "Privilégiez un contrat sans délai de carence sur l'hospitalisation (vous ne pouvez pas vous permettre d'attendre 3 mois), avec option Madelin si vous êtes au régime réel et couplage prévoyance à tarif préférentiel." },
    ],
    faq: [
      { question: "Un auto-entrepreneur peut-il déduire sa mutuelle ?", answer: "Seuls les auto-entrepreneurs au régime réel simplifié peuvent déduire leur mutuelle Madelin. Au régime micro, l'abattement forfaitaire remplace toutes les déductions." },
      { question: "Faut-il aussi une prévoyance en auto-entreprise ?", answer: "Fortement recommandé : la Sécu verse peu en cas d'arrêt maladie (55 €/j au maximum), ce qui ne couvre ni les charges ni le train de vie." },
    ],
  },
  {
    slug: "mutuelle-sante-famille-nombreuse",
    title: "Mutuelle famille nombreuse : gratuité dès le 3e enfant et meilleures offres 2026",
    description:
      "Famille nombreuse (3 enfants et plus) : découvrez les mutuelles qui offrent la gratuité des enfants, jusqu'à 700 €/an d'économies. Comparatif 2026.",
    image: blogFamilleNombreuse,
    category: "Famille",
    author: "Équipe NEOASSUR",
    date: "2026-07-17",
    readingTime: "6 min",
    keywords: [
      "mutuelle famille nombreuse",
      "mutuelle 3 enfants",
      "mutuelle gratuité enfant",
      "mutuelle famille pas chère",
    ],
    relatedLanding: {
      to: "/mutuelle-sante-famille",
      label: "Comparer les mutuelles famille",
      description: "Trouvez la mutuelle famille nombreuse qui protège tout le monde au meilleur prix.",
    },
    content: [
      { paragraph: "Avec 3 enfants ou plus, votre budget santé peut vite exploser. Bonne nouvelle : plusieurs mutuelles offrent la gratuité totale à partir du 3e enfant rattaché." },
      { heading: "La gratuité 3e enfant : comment ça marche", paragraph: "Chez plusieurs de nos partenaires (Neoliane, April, SPVIE…), tout enfant rattaché à partir du 3e est couvert à 0 €, avec les mêmes garanties que ses aînés. Économie moyenne : 400 à 700 €/an." },
      { heading: "Les postes à ne pas négliger", paragraph: "Orthodontie (2 000 à 6 000 €/enfant), optique enfants (verres cassés), pédiatre en dépassement, forfait maternité si nouveau bébé prévu, hospitalisation (chambre particulière pour rester avec l'enfant)." },
      { heading: "Combien coûte une mutuelle famille nombreuse en 2026 ?", paragraph: "Entre 110 et 180 €/mois pour un couple avec 3 enfants, selon le niveau de garantie. La gratuité 3e enfant ramène souvent le budget au niveau d'une famille avec 2 enfants." },
      { heading: "Nos conseils NEOASSUR", paragraph: "Vérifiez que la gratuité est bien totale (et non partielle), qu'elle s'applique aux enfants majeurs étudiants rattachés (jusqu'à 26 ans), et que la couverture orthodontie est plafonnée à minimum 800 €/an/enfant." },
    ],
    faq: [
      { question: "À partir de combien d'enfants ai-je droit à la gratuité ?", answer: "Généralement à partir du 3e enfant rattaché au contrat. Certains assureurs offrent aussi la gratuité du 4e et suivants." },
      { question: "La gratuité s'applique-t-elle à l'étudiant majeur ?", answer: "Oui, tant qu'il est rattaché au foyer fiscal et étudiant (jusqu'à 26 ans dans la plupart des contrats)." },
    ],
  },
  {
    slug: "mutuelle-sante-frontalier",
    title: "Mutuelle santé frontalier Suisse, Luxembourg, Belgique : quel contrat choisir ?",
    description:
      "Frontalier travaillant en Suisse, au Luxembourg ou en Belgique : découvrez les mutuelles qui couvrent des deux côtés de la frontière, LAMal, CMU frontalier.",
    image: blogFrontalier,
    category: "Expatrié",
    author: "Équipe NEOASSUR",
    date: "2026-07-18",
    readingTime: "6 min",
    keywords: [
      "mutuelle frontalier",
      "mutuelle frontalier Suisse",
      "mutuelle frontalier Luxembourg",
      "LAMal frontalier",
      "CMU frontalier",
    ],
    relatedLanding: {
      to: "/mutuelle-sante-expatrie",
      label: "Comparer les mutuelles frontalier & expatrié",
      description: "Trouvez la mutuelle adaptée à votre statut de travailleur frontalier.",
    },
    content: [
      { paragraph: "Vous vivez en France et travaillez en Suisse, au Luxembourg ou en Belgique ? Votre couverture santé dépend de votre choix : régime local, CMU frontalier, ou assurance privée." },
      { heading: "Frontalier Suisse : droit d'option LAMal / CMU", paragraph: "Vous avez 3 mois pour choisir entre la LAMal suisse (obligatoire, chère, très couvrante) et la CMU frontalier française (moins chère, remboursements français). L'option est en général irrévocable." },
      { heading: "Frontalier Luxembourg / Belgique", paragraph: "Vous êtes affilié à la Sécurité sociale du pays d'emploi, avec droit aux soins des deux côtés de la frontière via la carte européenne (CEAM). Une mutuelle française reste indispensable pour couvrir les restes à charge." },
      { heading: "Les garanties spécifiques à viser", paragraph: "Couverture des soins en Suisse (souvent 2 à 3 × plus chers), tiers payant chez les médecins français, rapatriement, prise en charge des dépassements en clinique privée, hospitalisation transfrontalière." },
      { heading: "Combien coûte une mutuelle frontalier en 2026 ?", paragraph: "De 45 €/mois (frontalier Belgique célibataire) à 220 €/mois (famille frontalier Suisse avec enfants) selon le pays d'emploi et le niveau de couverture." },
    ],
    faq: [
      { question: "Puis-je garder ma mutuelle française en tant que frontalier ?", answer: "Oui, une mutuelle française reste recommandée pour couvrir vos soins en France (visites au médecin traitant, hospitalisation en France, dentaire, optique)." },
      { question: "La CMU frontalier remplace-t-elle la mutuelle ?", answer: "Non, la CMU frontalier est l'équivalent de la Sécurité sociale : elle rembourse aux taux français. Une mutuelle complémentaire reste utile." },
    ],
  },
  {
    slug: "mutuelle-sante-80-ans",
    title: "Mutuelle santé après 80 ans : garanties, tarifs et comparatif 2026",
    description:
      "Souscrire une mutuelle santé à 80 ans ou plus : quelles garanties privilégier (hospitalisation, audio, dentaire), quels tarifs et comment éviter le questionnaire médical.",
    image: blog80Ans,
    category: "Senior",
    author: "Équipe NEOASSUR",
    date: "2026-07-19",
    readingTime: "7 min",
    keywords: [
      "mutuelle santé 80 ans",
      "mutuelle senior 80 ans",
      "mutuelle personnes âgées",
      "mutuelle sans limite d'âge",
      "mutuelle sans questionnaire médical",
    ],
    relatedLanding: {
      to: "/mutuelle-senior-70-ans",
      label: "Comparer les mutuelles senior",
      description: "Trouvez la mutuelle senior sans limite d'âge adaptée après 80 ans.",
    },
    content: [
      { paragraph: "Après 80 ans, la mutuelle devient essentielle : les restes à charge en hospitalisation, dentaire, audioprothèse et optique peuvent atteindre plusieurs milliers d'euros par an." },
      { heading: "Peut-on souscrire une mutuelle à 80, 85 ou 90 ans ?", paragraph: "Oui. Plusieurs de nos partenaires acceptent la souscription sans limite d'âge, sans questionnaire médical et sans délai de carence sur les postes courants — même après 85 ans." },
      { heading: "Les postes à renforcer en priorité", paragraph: "Hospitalisation (chambre particulière : 80 à 120 €/jour), audioprothèse (jusqu'à 1 500 €/oreille non remboursés), dentaire (prothèses, implants), optique premium, et transport sanitaire." },
      { heading: "Combien coûte une mutuelle après 80 ans en 2026 ?", paragraph: "Entre 90 et 220 €/mois selon le niveau de garantie. Comparer permet d'économiser 25 à 40 % sans baisser la couverture — jusqu'à 800 €/an." },
      { heading: "Nos conseils NEOASSUR", paragraph: "Privilégiez un contrat viager (impossible à résilier par l'assureur), sans questionnaire médical, avec téléassistance incluse, et service de conseiller dédié qui vous accompagne dans vos démarches de remboursement." },
    ],
    faq: [
      { question: "Peut-on changer de mutuelle à 85 ans ?", answer: "Oui, la résiliation infra-annuelle s'applique après 1 an d'ancienneté, quel que soit votre âge. Vous pouvez donc changer sans frais ni justificatif." },
      { question: "L'assureur peut-il résilier une mutuelle senior ?", answer: "Non, un contrat mutuelle santé individuel senior ne peut pas être résilié unilatéralement par l'assureur (hors non-paiement des cotisations). C'est un contrat viager." },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  BLOG_POSTS.find((p) => p.slug === slug);

