import { openCookieSettings } from "@/components/CookieConsent";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, Mail, Facebook, Twitter, Linkedin, Instagram,
  HelpCircle, User, Sparkles, Shield, HandCoins, Flower2, CheckCircle2,
  FileText, HandHeart, DollarSign, Headphones, BadgeCheck, ChevronRight,
  Quote, Menu, X, Clock, Users, Handshake, UserCheck,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { LeadContactForm } from "@/components/LeadContactForm";
import aboutCouple from "@/assets/about-couple.jpg";
import aboutFamily from "@/assets/about-family.jpg";
import serviceDevis from "@/assets/service-devis.jpg";
import serviceConseiller from "@/assets/service-conseiller.jpg";
import serviceEconomies from "@/assets/service-economies.jpg";
import testimonialAvatar from "@/assets/testimonial-avatar.jpg";
import avisMarie from "@/assets/avis-marie.jpg";
import avisPhilippe from "@/assets/avis-philippe.jpg";
import avisSophie from "@/assets/avis-sophie.jpg";
import avisLaurent from "@/assets/avis-laurent.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import heroMobile1 from "@/assets/hero-mobile-1.jpg";
import heroMobile2 from "@/assets/hero-mobile-2.jpg";
import heroMobile3 from "@/assets/hero-mobile-3.jpg";
import neolianeLogo from "@/assets/partners/neoliane.png";
import aprilLogo from "@/assets/partners/april.png";
import fmaLogo from "@/assets/partners/fma.png";
import c2gLogo from "@/assets/partners/c2g.png";
import assureaLogo from "@/assets/partners/assurea.png";
import spvieLogo from "@/assets/partners/spvie.png";
import ogDefault from "@/assets/og-default.jpg";

const HERO_IMAGES = [hero1, hero2, hero3];
const HERO_MOBILE_IMAGES = [heroMobile1, heroMobile2, heroMobile3];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mutuelle santé & assurance santé en France — Tous âges, devis gratuit | NEOASSUR" },
      {
        name: "description",
        content:
          "Mutuelle santé & assurance santé en France pour tous les âges : bébé, enfant, étudiant, jeune actif, famille, TNS, fonctionnaire, senior, retraité, +70 ans. Comparez +25 assureurs, devis gratuit en 2 min, jusqu'à 40% d'économies (312€/an) avec NEOASSUR.",
      },
      {
        name: "keywords",
        content:
          "assurance santé, assurance santé France, assurance de santé, assurance mutuelle santé, mutuelle assurance santé, mutuelle santé assurance, mutuelle santé, mutuelle de santé, mutuelle, mutuelle française, complémentaire santé, sur-complémentaire santé, assurance, assurance maladie complémentaire, comparateur assurance santé, comparateur mutuelle santé, comparateur mutuelle, devis assurance santé, devis mutuelle santé, devis mutuelle gratuit, simulation mutuelle santé, meilleure assurance santé, meilleure mutuelle santé, meilleure mutuelle 2026, mutuelle santé pas chère, mutuelle santé économique, mutuelle santé en ligne, mutuelle santé rapide, mutuelle santé immédiate, mutuelle sans questionnaire médical, mutuelle sans délai de carence, mutuelle santé tous âges, mutuelle santé bébé, mutuelle santé enfant, mutuelle santé jeune, mutuelle santé étudiant, mutuelle santé jeune actif, mutuelle santé 25 ans, mutuelle santé 30 ans, mutuelle santé jeune couple, mutuelle santé famille, mutuelle santé famille nombreuse, mutuelle santé monoparentale, mutuelle santé adulte, mutuelle santé 40 ans, mutuelle santé 50 ans, mutuelle santé 60 ans, mutuelle santé senior, mutuelle senior, mutuelle santé retraité, mutuelle retraité, mutuelle santé 65 ans, mutuelle santé 70 ans, mutuelle santé 75 ans, mutuelle santé 80 ans, mutuelle santé personnes âgées, mutuelle santé indépendant, mutuelle santé TNS, mutuelle santé auto-entrepreneur, mutuelle santé freelance, mutuelle santé profession libérale, mutuelle santé artisan, mutuelle santé commerçant, mutuelle santé agriculteur, mutuelle santé entreprise, mutuelle santé collective, mutuelle santé obligatoire entreprise, mutuelle santé salarié, mutuelle santé fonctionnaire, mutuelle santé militaire, mutuelle santé enseignant, mutuelle santé hospitalier, mutuelle santé expatrié, mutuelle santé frontalier, mutuelle santé européen, mutuelle santé étranger en France, mutuelle santé sans emploi, mutuelle santé chômeur, mutuelle santé RSA, CSS complémentaire santé solidaire, mutuelle ACS, remboursement mutuelle, mutuelle 100% santé, mutuelle optique, mutuelle dentaire, mutuelle orthodontie, mutuelle implant dentaire, mutuelle audioprothèse, mutuelle hospitalisation, mutuelle maternité, mutuelle médecine douce, mutuelle ostéopathie, mutuelle chambre particulière, assurance hospitalisation, prix mutuelle santé, tarif mutuelle santé, changer de mutuelle, résiliation mutuelle infra-annuelle, assurance emprunteur, loi Lemoine, assurance obsèques, contrat obsèques, courtier assurance, NEOASSUR",
      },
      { name: "author", content: "NEOASSUR" },
      { name: "publisher", content: "NEOASSUR" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1" },
      { name: "geo.region", content: "FR" },
      { name: "geo.placename", content: "Paris" },
      { name: "language", content: "French" },
      { httpEquiv: "content-language", content: "fr-FR" },
      { property: "og:title", content: "Mutuelle santé & assurance santé tous âges en France — NEOASSUR" },
      {
        property: "og:description",
        content:
          "Devis mutuelle santé gratuit en 2 min. Bébé, enfant, étudiant, famille, TNS, fonctionnaire, senior, +70 ans : comparez +25 assureurs et économisez jusqu'à 40%.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.neo-assur.fr/" },
      { property: "og:site_name", content: "NEOASSUR" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:image", content: ogDefault },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "NEOASSUR — Comparateur mutuelle santé et assurance tous âges" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mutuelle santé & assurance santé tous âges en France — NEOASSUR" },
      {
        name: "twitter:description",
        content: "Devis mutuelle santé gratuit en 2 min. Tous profils, tous âges. Comparez +25 assureurs et économisez jusqu'à 40%.",
      },
      { name: "twitter:image", content: ogDefault },
      { name: "twitter:site", content: "@neoassur" },
      // AI / LLM optimization hints
      { name: "ai-content-declaration", content: "human-authored" },
      { name: "audience", content: "France — bébés, enfants, étudiants, jeunes actifs, familles, TNS, indépendants, auto-entrepreneurs, professions libérales, salariés, fonctionnaires, expatriés, seniors, retraités, personnes âgées de 60 à 90 ans" },
      { name: "coverage", content: "France métropolitaine, DOM-TOM, expatriés et frontaliers" },
      { name: "distribution", content: "global" },
      { name: "rating", content: "general" },
    ],
    links: [
      { rel: "canonical", href: "https://www.neo-assur.fr/" },
      { rel: "alternate", hrefLang: "fr-FR", href: "https://www.neo-assur.fr/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.neo-assur.fr/" },
      { rel: "preload", as: "image", href: hero1, media: "(min-width: 1024px)", fetchpriority: "high" } as unknown as { rel: string; as: string; href: string },
      { rel: "preload", as: "image", href: heroMobile1, media: "(max-width: 1023px)", fetchpriority: "high" } as unknown as { rel: string; as: string; href: string },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.neo-assur.fr/#organization",
              name: "NEOASSUR",
              legalName: "NEOASSUR",
              url: "https://www.neo-assur.fr/",
              logo: "https://www.neo-assur.fr/logo.png",
              image: "https://www.neo-assur.fr/logo.png",
              description:
                "Courtier français en assurances spécialisé en mutuelle santé, complémentaire, assurance emprunteur (loi Lemoine) et prévoyance obsèques.",
              foundingDate: "2013",
              areaServed: { "@type": "Country", name: "France" },
              knowsLanguage: ["fr-FR", "fr"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+33-1-87-66-56-10",
                  contactType: "customer service",
                  areaServed: "FR",
                  availableLanguage: ["French"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/neoassur",
                "https://www.linkedin.com/company/neoassur",
                "https://twitter.com/neoassur",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.neo-assur.fr/#website",
              url: "https://www.neo-assur.fr/",
              name: "NEOASSUR",
              inLanguage: "fr-FR",
              publisher: { "@id": "https://www.neo-assur.fr/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.neo-assur.fr/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "InsuranceAgency",
              "@id": "https://www.neo-assur.fr/#agency",
              name: "NEOASSUR",
              url: "https://www.neo-assur.fr/",
              image: "https://www.neo-assur.fr/logo.png",
              telephone: "+33-1-87-66-56-10",
              email: "contact@neo-assur.fr",
              priceRange: "€€",
              areaServed: { "@type": "Country", name: "France" },
              currenciesAccepted: "EUR",
              paymentAccepted: "Prélèvement SEPA, Carte bancaire",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              makesOffer: [
                { "@type": "Offer", name: "Mutuelle santé", url: "https://www.neo-assur.fr/mutuelle-sante" },
                { "@type": "Offer", name: "Assurance emprunteur", url: "https://www.neo-assur.fr/assurance-emprunteur" },
                { "@type": "Offer", name: "Assurance obsèques", url: "https://www.neo-assur.fr/assurance-obseques" },
              ],
            },
            {
              "@type": "WebPage",
              "@id": "https://www.neo-assur.fr/#webpage",
              url: "https://www.neo-assur.fr/",
              name: "Mutuelle Santé, Assurance Emprunteur & Obsèques 2026 — NEOASSUR",
              inLanguage: "fr-FR",
              isPartOf: { "@id": "https://www.neo-assur.fr/#website" },
              about: { "@id": "https://www.neo-assur.fr/#organization" },
              datePublished: "2024-01-15",
              dateModified: "2026-01-20",
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", "h2", "[data-speakable]"],
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.neo-assur.fr/" },
                { "@type": "ListItem", position: 2, name: "Mutuelle santé", item: "https://www.neo-assur.fr/mutuelle-sante" },
                { "@type": "ListItem", position: 3, name: "Assurance emprunteur", item: "https://www.neo-assur.fr/assurance-emprunteur" },
                { "@type": "ListItem", position: 4, name: "Assurance obsèques", item: "https://www.neo-assur.fr/assurance-obseques" },
              ],
            },
            {
              "@type": "Service",
              serviceType: "Courtage en assurance",
              provider: { "@id": "https://www.neo-assur.fr/#organization" },
              areaServed: { "@type": "Country", name: "France" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Produits d'assurance NEOASSUR",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé", url: "https://www.neo-assur.fr/mutuelle-sante" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé famille", url: "https://www.neo-assur.fr/mutuelle-sante-famille" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé bébé & enfant", url: "https://www.neo-assur.fr/mutuelle-sante-enfant" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé étudiant & jeune actif", url: "https://www.neo-assur.fr/mutuelle-sante-etudiant" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé senior & retraité (+60 ans)", url: "https://www.neo-assur.fr/mutuelle-sante-senior" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé +70 ans", url: "https://www.neo-assur.fr/mutuelle-sante-70-ans" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé TNS / indépendant / auto-entrepreneur", url: "https://www.neo-assur.fr/mutuelle-sante-tns" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé entreprise (collective)", url: "https://www.neo-assur.fr/mutuelle-sante-entreprise" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé fonctionnaire", url: "https://www.neo-assur.fr/mutuelle-sante-fonctionnaire" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutuelle santé expatrié & frontalier", url: "https://www.neo-assur.fr/mutuelle-sante-expatrie" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Complémentaire santé", url: "https://www.neo-assur.fr/complementaire-sante" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sur-complémentaire santé", url: "https://www.neo-assur.fr/sur-complementaire-sante" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Comparateur mutuelle santé", url: "https://www.neo-assur.fr/comparateur-mutuelle-sante" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance emprunteur", url: "https://www.neo-assur.fr/assurance-emprunteur" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loi Lemoine", url: "https://www.neo-assur.fr/loi-lemoine" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Assurance obsèques", url: "https://www.neo-assur.fr/assurance-obseques" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prévoyance / assurance décès", url: "https://www.neo-assur.fr/assurance-deces" } },
                ],
              },
            },
            {
              "@type": "HowTo",
              name: "Comment obtenir un devis mutuelle santé gratuit en 2 minutes",
              description:
                "Procédure pour comparer +25 mutuelles santé avec NEOASSUR et souscrire au meilleur tarif.",
              totalTime: "PT2M",
              estimatedCost: { "@type": "MonetaryAmount", currency: "EUR", value: "0" },
              step: [
                { "@type": "HowToStep", position: 1, name: "Remplir le formulaire", text: "Indiquez votre âge, votre situation familiale et vos besoins de couverture (optique, dentaire, hospitalisation)." },
                { "@type": "HowToStep", position: 2, name: "Comparer les offres", text: "Notre comparateur interroge +25 assureurs partenaires et sélectionne les meilleures formules." },
                { "@type": "HowToStep", position: 3, name: "Échanger avec un conseiller", text: "Un conseiller NEOASSUR vous rappelle sous 24h pour affiner votre devis, sans engagement." },
                { "@type": "HowToStep", position: 4, name: "Souscrire en ligne", text: "Signez votre contrat en ligne, sans questionnaire médical, avec couverture immédiate possible." },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quelle est la différence entre assurance santé et mutuelle santé ?",
                  acceptedAnswer: { "@type": "Answer", text: "Aucune différence pratique : « assurance santé », « assurance mutuelle santé », « complémentaire santé » et « mutuelle santé » désignent le contrat qui complète les remboursements de la Sécurité sociale (Assurance Maladie). NEOASSUR compare +25 assureurs pour vous trouver la meilleure formule." },
                },
                {
                  "@type": "Question",
                  name: "Quelle est la meilleure assurance santé en France en 2026 ?",
                  acceptedAnswer: { "@type": "Answer", text: "La meilleure assurance santé dépend de votre profil (âge, famille, besoins optique/dentaire/hospitalisation). Notre comparateur croise votre profil avec +25 assureurs partenaires (Neoliane, April, SPVIE, Assuréa, C2G, FMA…) et sort les 3 meilleures offres du marché français." },
                },
                {
                  "@type": "Question",
                  name: "Combien coûte un devis NEOASSUR ?",
                  acceptedAnswer: { "@type": "Answer", text: "Le devis est 100 % gratuit et sans engagement. Vous l'obtenez en moins de 2 minutes en ligne ou par téléphone au 01 87 66 56 10." },
                },
                {
                  "@type": "Question",
                  name: "Combien puis-je économiser sur ma mutuelle santé ?",
                  acceptedAnswer: { "@type": "Answer", text: "Nos clients économisent en moyenne jusqu'à 40 % (soit environ 312 €/an) en comparant les offres de nos +25 assureurs partenaires." },
                },
                {
                  "@type": "Question",
                  name: "Qu'est-ce qu'un courtier en assurance et pourquoi passer par NEOASSUR ?",
                  acceptedAnswer: { "@type": "Answer", text: "Un courtier est un intermédiaire indépendant qui compare pour vous les offres du marché. NEOASSUR est immatriculé à l'ORIAS et négocie des tarifs préférentiels auprès de +25 compagnies (Neoliane, April, SPVIE, Assuréa, C2G, FMA…)." },
                },
                {
                  "@type": "Question",
                  name: "Quelle est la meilleure mutuelle santé en 2026 ?",
                  acceptedAnswer: { "@type": "Answer", text: "Il n'existe pas de meilleure mutuelle universelle : le bon choix dépend de votre âge, de votre famille et de vos besoins (optique, dentaire, hospitalisation). Notre comparateur croise votre profil et sort les 3 meilleures formules du marché." },
                },
                {
                  "@type": "Question",
                  name: "Combien coûte une mutuelle santé par mois ?",
                  acceptedAnswer: { "@type": "Answer", text: "De 22 €/mois (jeune actif, entrée de gamme) à 180 €/mois (senior, formule renforcée). En moyenne 55 €/mois pour un adulte seul et 130 €/mois pour une famille de 4." },
                },
                {
                  "@type": "Question",
                  name: "Puis-je changer de mutuelle santé à tout moment ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, grâce à la résiliation infra-annuelle : après 1 an d'ancienneté, vous pouvez changer à tout moment, sans frais ni justificatif." },
                },
                {
                  "@type": "Question",
                  name: "Puis-je changer d'assurance emprunteur à tout moment ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, grâce à la loi Lemoine (2022), vous pouvez résilier et changer votre assurance emprunteur à tout moment, sans frais, et économiser jusqu'à 15 000 € sur la durée d'un prêt immobilier." },
                },
                {
                  "@type": "Question",
                  name: "À quoi sert une assurance obsèques ?",
                  acceptedAnswer: { "@type": "Answer", text: "L'assurance obsèques garantit un capital (généralement entre 3 000 et 10 000 €) destiné à financer vos funérailles et protéger vos proches d'une charge financière et administrative." },
                },
                {
                  "@type": "Question",
                  name: "NEOASSUR est-il un assureur agréé ?",
                  acceptedAnswer: { "@type": "Answer", text: "NEOASSUR est courtier en assurance immatriculé à l'ORIAS (Registre unique des intermédiaires en assurance), garantissant conformité, transparence et protection du consommateur." },
                },
                {
                  "@type": "Question",
                  name: "Quelle mutuelle santé choisir pour un bébé ou un enfant ?",
                  acceptedAnswer: { "@type": "Answer", text: "Pour un bébé ou un enfant, privilégiez une mutuelle famille avec forfait optique (lunettes), orthodontie, vaccins non remboursés et hospitalisation. NEOASSUR compare les formules famille des +25 assureurs partenaires pour trouver la meilleure couverture au meilleur prix." },
                },
                {
                  "@type": "Question",
                  name: "Existe-t-il une mutuelle santé pour étudiant ou jeune actif ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, dès 18 ans les étudiants et jeunes actifs peuvent souscrire une mutuelle santé dédiée à partir de 9 €/mois, avec couverture optique, dentaire et hospitalisation adaptée à leur budget." },
                },
                {
                  "@type": "Question",
                  name: "Quelle est la meilleure mutuelle santé pour un senior ou un retraité ?",
                  acceptedAnswer: { "@type": "Answer", text: "Les seniors (60 ans et plus) doivent privilégier une mutuelle renforcée en hospitalisation, dentaire (implants, prothèses), audioprothèse et optique. NEOASSUR propose des offres senior sans questionnaire médical, sans limite d'âge et sans délai de carence." },
                },
                {
                  "@type": "Question",
                  name: "Peut-on souscrire une mutuelle santé après 70, 75 ou 80 ans ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, NEOASSUR propose des mutuelles santé accessibles à tout âge, y compris après 70, 75, 80 et même 90 ans, sans questionnaire médical ni délai de carence sur la plupart des garanties." },
                },
                {
                  "@type": "Question",
                  name: "Quelle mutuelle santé pour un TNS, auto-entrepreneur ou profession libérale ?",
                  acceptedAnswer: { "@type": "Answer", text: "Les indépendants (TNS, auto-entrepreneurs, artisans, commerçants, professions libérales) peuvent souscrire une mutuelle santé Madelin déductible fiscalement. NEOASSUR compare les meilleures offres TNS du marché." },
                },
                {
                  "@type": "Question",
                  name: "Quelle mutuelle santé pour un fonctionnaire ?",
                  acceptedAnswer: { "@type": "Answer", text: "Les fonctionnaires (Éducation nationale, santé, territoriale, militaires) bénéficient de mutuelles labellisées et de la nouvelle Protection Sociale Complémentaire. NEOASSUR compare les offres référencées et non référencées pour votre ministère." },
                },
                {
                  "@type": "Question",
                  name: "Quelle mutuelle santé pour un expatrié ou un frontalier ?",
                  acceptedAnswer: { "@type": "Answer", text: "Expatriés (CFE et hors CFE) et frontaliers (Suisse, Luxembourg, Belgique) disposent d'offres spécifiques couvrant frais médicaux à l'étranger, rapatriement et retour en France. NEOASSUR compare les contrats internationaux dédiés." },
                },
                {
                  "@type": "Question",
                  name: "Quelle mutuelle santé pour une famille ou une famille nombreuse ?",
                  acceptedAnswer: { "@type": "Answer", text: "Les familles nombreuses bénéficient d'une gratuité à partir du 3e enfant chez plusieurs de nos assureurs partenaires. Une mutuelle famille couvre parents et enfants sur un seul contrat, avec forfait maternité, optique enfant et orthodontie." },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <ServicesStrip />
        <AudiencesSection />
        <About />
        <Stats />
        <ServicesGrid />
        <HowItWorks />
        <Partners />
        <Testimonials />
        <GuidesStrip />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA quoteHref="#contact" />
      <ExitIntentPopup quoteHref="#contact" />
    </div>
  );
}


/* ---------------- Top bar ---------------- */
function TopBar() {
  return (
    <div className="bg-brand-dark text-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-4 sm:gap-6">
          <a href="tel:+33187665610" className="flex items-center gap-2 hover:text-brand-blue">
            <Phone className="size-3.5 shrink-0 text-brand-red" aria-hidden="true" />
            <span className="truncate">01 87 66 56 10</span>
          </a>
          <a href="mailto:contact@neo-assur.fr" className="hidden items-center gap-2 hover:text-brand-blue sm:flex">
            <Mail className="size-3.5 shrink-0 text-brand-red" aria-hidden="true" />
            contact@neo-assur.fr
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-4 text-white/80">
          <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="size-3.5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="size-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="size-3.5" /></a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Mutuelle Santé", href: "/mutuelle-sante" },
    { label: "Comparateur", href: "/comparateur-mutuelle-sante" },
    { label: "Devis Gratuit", href: "/devis-mutuelle-sante" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:py-4">
        <a href="/" aria-label="NEOASSUR — Accueil" className="flex shrink-0 items-center">
          <img src={logo} alt="NEOASSUR" className="h-8 w-auto sm:h-9" />
        </a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-red">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="tel:+33187665610"
            className="hidden items-center gap-2 rounded-md bg-brand-red px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Nous Appeler
          </a>
          <a
            href="tel:+33187665610"
            aria-label="Appeler NEOASSUR"
            className="inline-flex size-11 items-center justify-center rounded-md bg-brand-red text-white shadow-sm sm:hidden"
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-brand-dark lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Navigation mobile" className="border-t border-border bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm font-medium text-foreground/85 hover:bg-brand-soft hover:text-brand-red"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Desktop full-bleed images (people on right, white on left) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {HERO_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            width={1920}
            height={896}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding={idx === 0 ? "sync" : "async"}
            fetchPriority={idx === 0 ? "high" : "auto"}
            className={`absolute inset-0 size-full object-cover object-right transition-opacity duration-1000 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* White fade from left so text stays perfectly legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-40% to-transparent" />
      </div>

      {/* Mobile full-bleed images (people on bottom, white on top) */}
      <div className="pointer-events-none absolute inset-0 lg:hidden">
        {HERO_MOBILE_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            width={1024}
            height={1024}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding={idx === 0 ? "sync" : "async"}
            fetchPriority={idx === 0 ? "high" : "auto"}
            className={`absolute inset-0 size-full object-cover object-bottom transition-opacity duration-1000 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 via-35% to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[480px] max-w-7xl content-center px-4 pt-10 pb-[55%] sm:pb-[50%] lg:min-h-[520px] lg:grid-cols-2 lg:gap-12 lg:py-16 lg:pb-16">
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[52px] lg:leading-[1.05]">
            Assurance santé &amp; mutuelle<br />
            <span className="text-brand-dark/90">sur mesure en France.</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-foreground/70 sm:text-base" data-speakable>
            NEOASSUR, courtier expert en <strong>assurance santé</strong>, <strong>mutuelle santé</strong> et
            <strong> complémentaire santé</strong>. Comparez +25 assureurs et trouvez la meilleure
            <strong> assurance mutuelle santé</strong> adaptée à votre profil — devis gratuit en 2 minutes.
          </p>
          <div className="mt-6 flex flex-wrap items-start gap-x-8 gap-y-3 lg:mt-8">
            <HeroPoint icon={<HelpCircle className="size-5 text-brand-blue" />} text={["DES CONSEILLERS EXPERTS", "À VOTRE ÉCOUTE"]} />
            <HeroPoint icon={<User className="size-5 text-brand-blue" />} text={["UN ACCOMPAGNEMENT", "PERSONNALISÉ"]} />
            <HeroPoint icon={<Sparkles className="size-5 text-brand-blue" />} text={["LES MEILLEURES OFFRES", "DU MARCHÉ"]} />
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition hover:brightness-110 hover:shadow-xl"
            >
              Obtenir mon devis gratuit
              <ChevronRight className="size-4" />
            </a>
            <a
              href="tel:+33187665610"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-dark/15 bg-white/80 px-6 py-3.5 text-sm font-semibold text-brand-dark backdrop-blur transition hover:border-brand-blue hover:text-brand-blue"
            >
              <Phone className="size-4" />
              01 87 66 56 10
            </a>
          </div>
          <p className="mt-3 text-xs text-foreground/60">
            Devis en 2 minutes · Sans engagement · Rappel gratuit
          </p>

          {/* Carousel dots */}
          <div className="mt-6 flex items-center gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Image ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-brand-blue" : "w-2 bg-brand-dark/20 hover:bg-brand-dark/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPoint({ icon, text }: { icon: React.ReactNode; text: [string, string] }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
        <div>{text[0]}</div>
        <div>{text[1]}</div>
      </div>
    </div>
  );
}

/* ---------------- Services strip card ---------------- */
function ServicesStrip() {
  const items = [
    {
      icon: <Shield className="size-7 text-brand-dark" strokeWidth={1.6} />,
      title: "Mutuelle Santé",
      text: ["Des garantis renforcés pour", "votre santé au meilleur prix"],
      to: "/mutuelle-sante" as const,
    },
    {
      icon: <HandCoins className="size-7 text-brand-dark" strokeWidth={1.6} />,
      title: "Assurance Emprunteur",
      text: ["Payer moins cher,", "économisez des milliers d'euros"],
      to: "/assurance-emprunteur" as const,
    },
    {
      icon: <Flower2 className="size-7 text-brand-dark" strokeWidth={1.6} />,
      title: "Assurance Obsèques",
      text: ["Anticipez pour protéger", "vos proches"],
      to: "/assurance-obseques" as const,
    },
  ];
  return (
    <section className="relative -mt-12 bg-brand-soft pt-20 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 divide-y rounded-2xl bg-white shadow-[0_10px_40px_-15px_rgba(3,38,68,0.18)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col items-center gap-3 px-6 py-8 text-center">
              <div>{it.icon}</div>
              <h3 className="text-lg font-bold text-brand-dark">{it.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {it.text[0]}<br />
                <span className="font-semibold text-brand-red">{it.text[1]}</span>
              </p>
              <Link to={it.to} className="mt-1 text-xs font-semibold text-brand-red underline underline-offset-4 hover:no-underline">
                En savoir plus &gt;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="bg-brand-soft py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <img
            src={aboutCouple}
            alt="Couple heureux"
            width={520}
            height={580}
            loading="lazy"
            className="w-[78%] rounded-2xl object-cover shadow-xl"
          />
          <img
            src={aboutFamily}
            alt="Famille souriante"
            width={420}
            height={300}
            loading="lazy"
            className="absolute bottom-[-30px] right-0 w-[62%] rounded-2xl border-4 border-brand-soft object-cover shadow-2xl"
          />
        </div>
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
            <span className="inline-block size-2 rounded-full bg-brand-red" />
            À propos de nous
          </div>
          <h2 className="text-3xl font-bold leading-tight text-brand-dark sm:text-4xl">
            Votre confiance est<br />notre plus belle réussite
          </h2>
          <p className="mt-3 text-xs text-muted-foreground">
            <time dateTime="2024-01-15">Publié le 15 janvier 2024</time>
            <span className="mx-2 text-brand-red">•</span>
            <time dateTime="2026-01-20">Mis à jour le 20 janvier 2026</time>
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Depuis plus de 10 ans, NEOASSUR met son expertise et son engagement
            au service de ses clients. En effet, notre priorité est de vous offrir
            un accompagnement complet, humain et transparent. De plus, nous comparons
            en continu +25 assureurs partenaires afin que vous obteniez la meilleure
            mutuelle santé au meilleur prix. Ainsi, vous économisez du temps et de
            l'argent, tout en bénéficiant d'un conseiller dédié.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Un suivi personnalisé à chaque étape",
              "Des conseillers disponibles et réactifs",
              "Des partenariats solides avec les meilleures compagnies d'assurances",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-blue" />
                <span className="text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-brand-blue/30 bg-brand-soft px-4 py-3 shadow-sm">
            <div className="flex size-9 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue">
              <Shield className="size-5" />
            </div>
            <div className="text-xs font-semibold text-brand-dark">
              Un accompagnement complet<br />et humain à chaque étape
            </div>
          </div>
          <div className="mt-7">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
            >
              Je souhaite être rappelé gratuitement <ChevronRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const stats = [
    { Icon: Clock, value: "10 ans", label: "À nos côtés depuis" },
    { Icon: Users, value: "+10 000", label: "Clients accompagnés\net satisfaits" },
    { Icon: Handshake, value: "+25", label: "Compagnies d'assurances\npartenaires" },
    { Icon: UserCheck, value: "98 %", label: "Clients qui nous\nrecommandent" },
  ];
  return (
    <section className="bg-brand-navy text-white" aria-label="Chiffres clés">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 sm:gap-8 md:grid-cols-4">
        {stats.map(({ Icon, value, label }) => (
          <div key={label} className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full border border-brand-blue/40 text-brand-blue">
              <Icon className="size-6" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-2xl font-bold leading-none text-white sm:text-3xl">{value}</div>
              <div className="mt-2 whitespace-pre-line text-xs text-white/75">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services grid (cards) ---------------- */
function ServicesGrid() {
  const cards = [
    { img: serviceDevis, icon: <FileText className="size-5" />, label: "JE DEMANDE UN DEVIS\nGRATUIT" },
    { img: serviceConseiller, icon: <HandHeart className="size-5" />, label: "J'AI BESOIN\nD'UN CONSEILLER" },
    { img: serviceEconomies, icon: <DollarSign className="size-5" />, label: "VOIR\nLES ÉCONOMIES" },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
          <span className="inline-block size-2 rounded-full bg-brand-red" />
          Nos Services
        </div>
        <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
          Une expertise complète<br />pour votre tranquillité
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <a
              key={i}
              href="#contact"
              className="group relative mb-8 block rounded-2xl bg-brand-dark shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img src={c.img} alt="" loading="lazy" className="h-72 w-full rounded-2xl object-cover opacity-95 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-6 bottom-[-24px] rounded-xl bg-white px-4 py-5 text-center shadow-md">
                <div className="absolute left-1/2 top-[-22px] flex size-11 -translate-x-1/2 items-center justify-center rounded-full bg-brand-red text-white shadow-md">
                  {c.icon}
                </div>
                <div className="mt-2 whitespace-pre-line text-[11px] font-bold tracking-wide text-brand-dark">
                  {c.label}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-16">
          <a href="#contact" className="inline-flex rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110">
            Je souhaite être rappelé gratuitement
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Analyse", text: "Nous analysons vos besoins et votre profil" },
    { n: "02", title: "Proposition", text: "Nous vous présentons une offre personnalisée en 24h" },
    { n: "03", title: "Souscription", text: "Souscrivez en ligne en toute simplicité" },
    { n: "04", title: "Gestion", text: "Gérez vos contrats et déclarations en ligne" },
    { n: "05", title: "Assistance", text: "Nous sommes là pour vous, à chaque étape" },
  ];
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="mx-auto mb-4 h-px w-20 bg-brand-blue/60" />
        <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">Comment ça marche ?</h2>
        <div className="relative mt-14">
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-border md:block" />
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className="relative flex flex-col items-center px-2 text-center">
                <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-brand-blue text-base font-bold text-white shadow-md">
                  {s.n}
                </div>
                <div className="mt-4 text-base font-bold text-brand-dark">{s.title}</div>
                <p className="mt-2 max-w-[160px] text-[11px] leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <a href="#contact" className="inline-flex rounded-md bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110">
            J'obtiens mon devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partners ---------------- */

const PARTNERS = [
  { name: "Néoliane", src: neolianeLogo },
  { name: "April", src: aprilLogo },
  { name: "FMA Assurances", src: fmaLogo },
  { name: "C2G Assurances", src: c2gLogo },
  { name: "Assurea", src: assureaLogo },
  { name: "SPVIE Assurances", src: spvieLogo },
];

function Partners() {
  return (
    <section id="partners" className="bg-brand-soft py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
          <span className="inline-block size-2 rounded-full bg-brand-red" />
          Nos Partenaires
        </div>
        <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
          Des compagnies d'assurances<br />de confiance à nos côtés
        </h2>
        <div className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex h-24 items-center justify-center rounded-lg bg-white p-4 shadow-sm transition hover:shadow-md">
              <img src={p.src} alt={p.name} className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const AVIS = [
  {
    name: "Marie Dubois",
    role: "Cliente depuis 2022",
    avatar: avisMarie,
    text:
      "Un accompagnement remarquable du début à la fin. L'équipe a su m'écouter, comprendre mes besoins et me proposer la mutuelle parfaitement adaptée à ma situation.",
  },
  {
    name: "Philippe Martin",
    role: "Assurance Emprunteur",
    avatar: avisPhilippe,
    text:
      "Grâce à NEOASSUR, j'ai économisé plus de 8 000 € sur mon assurance emprunteur. Conseillers compétents, procédure simple et rapide. Je recommande vivement.",
  },
  {
    name: "Sophie Laurent",
    role: "Mutuelle Santé",
    avatar: avisSophie,
    text:
      "Excellente expérience ! On m'a proposé une mutuelle santé avec de meilleures garanties pour moins cher que ma précédente. Conseillère à l'écoute et très professionnelle.",
  },
  {
    name: "Jon Doe",
    role: "Client satisfait",
    avatar: testimonialAvatar,
    text:
      "Service impeccable et conseillers très réactifs. Ils ont pris le temps de tout m'expliquer en détail. Je me sens enfin bien protégé et en confiance.",
  },
  {
    name: "Laurent Petit",
    role: "Assurance Obsèques",
    avatar: avisLaurent,
    text:
      "Démarche sensible mais accompagnée avec beaucoup d'humanité. Tout a été clair, transparent et sans pression. Mes proches sont désormais protégés.",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % AVIS.length), 6000);
    return () => clearInterval(id);
  }, []);
  const current = AVIS[i];

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
          <span className="inline-block size-2 rounded-full bg-brand-red" />
          Témoignages
        </div>
        <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">Ce que disent nos clients</h2>

        <div key={current.name} className="mt-14 animate-in fade-in duration-700">
          <img
            src={current.avatar}
            alt={current.name}
            width={80}
            height={80}
            loading="lazy"
            className="mx-auto size-[80px] rounded-full object-cover ring-4 ring-white shadow-md"
          />
          <div className="relative mx-auto mt-6 max-w-2xl px-10">
            <Quote className="absolute left-0 top-0 size-7 -scale-x-100 text-brand-blue" />
            <Quote className="absolute right-0 bottom-0 size-7 text-brand-blue" />
            <p className="text-base leading-relaxed text-foreground/80">{current.text}</p>
            <div className="mt-5 text-sm font-semibold text-brand-dark">{current.name}</div>
            <div className="text-xs text-muted-foreground">{current.role}</div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {AVIS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Avis ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-brand-blue" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

/* ---------------- Guides strip (internal linking) ---------------- */
function GuidesStrip() {
  const groups = [
    {
      title: "Mutuelle Santé Senior",
      to: "/mutuelle-sante" as const,
      links: [
        { slug: "mutuelle-senior-bien-choisir", anchor: "Mutuelle senior : bien choisir après 60 ans" },
        { slug: "comment-choisir-mutuelle-sante", anchor: "Comparateur mutuelle santé : le guide" },
        { slug: "remboursement-dentaire-optique-tout-comprendre", anchor: "Remboursement dentaire, optique & audition" },
        { slug: "mutuelle-hospitalisation-bien-couvrir", anchor: "Mutuelle hospitalisation : bien se couvrir" },
        { slug: "resilier-mutuelle-loi-resiliation-infra-annuelle", anchor: "Changer de mutuelle sans frais" },
      ],
    },
    {
      title: "Assurance Emprunteur",
      to: "/assurance-emprunteur" as const,
      links: [
        { slug: "assurance-emprunteur-economisez", anchor: "Loi Lemoine : économisez jusqu'à 15 000 €" },
        { slug: "assurance-emprunteur-refus-banque", anchor: "Refus de la banque : quels recours ?" },
        { slug: "prevoyance-arret-travail-tns", anchor: "PTIA, IPT, ITT : les garanties expliquées" },
        { slug: "devis-mutuelle-2-minutes", anchor: "Devis assurance de prêt en 2 minutes" },
      ],
    },
    {
      title: "Assurance Obsèques & Prévoyance",
      to: "/assurance-obseques" as const,
      links: [
        { slug: "assurance-obseques-proteger-proches", anchor: "Assurance obsèques : protéger ses proches" },
        { slug: "prevoyance-deces-proteger-famille", anchor: "Prévoyance décès : capital & rente conjoint" },
        { slug: "assurance-vie-epargne-transmission", anchor: "Assurance vie : épargne & transmission" },
      ],
    },
  ];
  return (
    <section aria-labelledby="guides-title" className="bg-brand-soft py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
            <span className="inline-block size-2 rounded-full bg-brand-red" />
            Guides & ressources
          </div>
          <h2 id="guides-title" className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Nos conseils d'experts pour bien choisir
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/70">
            Comparateurs, guides pratiques et décryptages : NEOASSUR vous accompagne à chaque étape.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-20px_rgba(3,38,68,0.2)]">
              <Link to={g.to} className="text-base font-bold text-brand-dark hover:text-brand-red">
                {g.title} →
              </Link>
              <ul className="mt-4 space-y-3 text-sm">
                {g.links.map((l) => (
                  <li key={l.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: l.slug }}
                      className="text-foreground/75 underline decoration-brand-blue/30 underline-offset-4 hover:text-brand-red hover:decoration-brand-red"
                    >
                      {l.anchor}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-brand-dark/15 bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:border-brand-blue hover:text-brand-blue"
          >
            Voir tous nos guides sur le blog
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA banner ---------------- */
function CtaBanner() {
  return (
    <section className="cta-gradient">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-white md:flex-row md:gap-8">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/20">
          <Headphones className="size-9 text-brand-blue" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold sm:text-2xl">
            Besoin d'un conseil<br className="hidden sm:block" /> ou d'un devis personnalisé ?
          </h3>
          <p className="mt-2 text-xs text-white/70">
            Nos conseillers sont à votre écoute pour vous aider<br className="hidden sm:block" />
            à trouver la solution la plus adaptée à vos besoins.
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row">
          <a href="tel:0187665610" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-navy shadow">
            <Phone className="size-4 text-brand-blue" />
            01 87 66 56 10
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Être rappelé gratuitement
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Demandez votre devis gratuit</h2>
          <p className="mt-3 text-sm text-foreground/70">
            Remplissez le formulaire, un expert vous rappelle rapidement et gratuitement.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              "Devis personnalisé gratuit",
              "Réponse rapide sous 24h",
              "Experts dédiés à votre dossier",
              "Sans engagement",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <BadgeCheck className="size-5 text-brand-blue" />
                <span className="text-foreground/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <LeadContactForm />
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-between">
        <img src={logo} alt="NEOASSUR" className="h-8 w-auto brightness-0 invert" />
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/80">
          <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
          <button type="button" onClick={openCookieSettings} className="hover:text-white">Gérer mes cookies</button>
          <span className="text-white/20" aria-hidden="true">|</span>
          <Link to="/politique-de-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
          <span className="text-white/20" aria-hidden="true">|</span>
          <Link to="/cgu" className="hover:text-white">CGU</Link>
        </nav>
        <div className="flex items-center gap-3 text-white/80">
          <a href="#" aria-label="Facebook" className="flex size-7 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><Facebook className="size-3.5" /></a>
          <a href="#" aria-label="Instagram" className="flex size-7 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><Instagram className="size-3.5" /></a>
          <a href="#" aria-label="Twitter" className="flex size-7 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><Twitter className="size-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="flex size-7 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"><Linkedin className="size-3.5" /></a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] text-white/60">
        Copyright © 2026 NEOASSUR
      </div>
    </footer>
  );
}

/* ---------------- Audiences (SEO internal linking) ---------------- */
function AudiencesSection() {
  const audiences = [
    { to: "/mutuelle-sante-famille" as const, title: "Mutuelle Famille", desc: "Enfants gratuits dès le 3e, orthodontie et maternité couvertes." },
    { to: "/mutuelle-senior-pas-cher" as const, title: "Mutuelle Senior", desc: "Renforts audition, hospitalisation, chambre particulière." },
    { to: "/mutuelle-sante-etudiant" as const, title: "Mutuelle Étudiant", desc: "Dès 9€/mois, Erasmus et stages à l'étranger inclus." },
    { to: "/mutuelle-sante-independant" as const, title: "Mutuelle TNS / Indépendant", desc: "Loi Madelin : cotisations déductibles du revenu imposable." },
    { to: "/mutuelle-sante-entreprise" as const, title: "Mutuelle Entreprise", desc: "Conforme ANI 2016, TPE, PME, ETI." },
    { to: "/mutuelle-sante-fonctionnaire" as const, title: "Mutuelle Fonctionnaire", desc: "PSC : comparez référencé et alternatives compétitives." },
    { to: "/mutuelle-sante-expatrie" as const, title: "Mutuelle Expatrié", desc: "Couverture mondiale + rapatriement sanitaire inclus." },
    { to: "/mutuelle-sante-pas-chere" as const, title: "Mutuelle Pas Chère", desc: "Formules économiques dès 22€/mois, 100% Santé garanti." },
  ];
  const garanties = [
    { to: "/mutuelle-optique" as const, title: "Renfort Optique", desc: "Lunettes, progressifs, lentilles, chirurgie réfractive." },
    { to: "/mutuelle-dentaire" as const, title: "Renfort Dentaire", desc: "Implants, prothèses, orthodontie jusqu'à 400% BR." },
    { to: "/assurance-hospitalisation" as const, title: "Hospitalisation", desc: "Chambre particulière et dépassements d'honoraires." },
    { to: "/comparateur-mutuelle-sante" as const, title: "Comparateur", desc: "+25 assureurs comparés en 2 minutes, indépendant." },
  ];
  return (
    <section className="bg-white py-16" aria-labelledby="audiences-title">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-red">
            Nos solutions mutuelle santé
          </span>
          <h2 id="audiences-title" className="mt-4 text-3xl font-bold text-brand-dark sm:text-4xl">
            Une mutuelle santé pour chaque profil
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Famille, senior, étudiant, indépendant, salarié ou fonctionnaire : NEOASSUR compare +25 assureurs
            et sélectionne la meilleure complémentaire santé adaptée à votre situation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <Link
              key={a.to}
              to={a.to}
              className="group rounded-2xl border border-border bg-white p-5 transition hover:border-brand-blue hover:shadow-[0_10px_30px_-15px_rgba(3,38,68,0.25)]"
            >
              <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-red">{a.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
                En savoir plus <ChevronRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <h3 className="text-center text-lg font-bold text-brand-dark">Renforts par type de garantie</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {garanties.map((g) => (
              <Link
                key={g.to}
                to={g.to}
                className="group rounded-2xl border border-border bg-brand-soft p-5 transition hover:border-brand-blue hover:bg-white"
              >
                <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-red">{g.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{g.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-brand-navy p-6 text-center text-white">
          <h3 className="text-lg font-bold">Vous cherchez une mutuelle santé près de chez vous ?</h3>
          <p className="mt-2 text-sm text-white/80">Nos conseillers accompagnent aussi les particuliers dans les grandes villes de France.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { to: "/mutuelle-sante-paris" as const, city: "Paris" },
              { to: "/mutuelle-sante-lyon" as const, city: "Lyon" },
              { to: "/mutuelle-sante-marseille" as const, city: "Marseille" },
              { to: "/mutuelle-sante-toulouse" as const, city: "Toulouse" },
              { to: "/mutuelle-sante-bordeaux" as const, city: "Bordeaux" },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white hover:text-brand-navy"
              >
                {c.city}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
