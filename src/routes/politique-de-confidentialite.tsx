import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — NEOASSUR" },
      { name: "description", content: "Politique de confidentialité et de protection des données personnelles du site NEOASSUR (PRO-TECTION SAS)." },
      { property: "og:title", content: "Politique de confidentialité — NEOASSUR" },
      { property: "og:description", content: "Comment NEOASSUR collecte, utilise et protège vos données personnelles, conformément au RGPD." },
      { property: "og:url", content: "https://www.neo-assur.fr/politique-de-confidentialite" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/politique-de-confidentialite" }],
  }),
  component: PolitiqueConfidentialite,
});

function PolitiqueConfidentialite() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      intro="La présente politique décrit la manière dont NEOASSUR (PRO-TECTION SAS) collecte, utilise et protège vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés."
    >
      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données est <strong>PRO-TECTION SAS</strong>, dont le siège social est situé
        au 49-51 rue de Ponthieu, 75008 Paris, France, immatriculée au RCS de Paris sous le n° 798 662 797.
      </p>

      <h2>2. Données collectées</h2>
      <p>Dans le cadre de la fourniture de nos services de courtage en assurance, nous collectons les catégories de données suivantes :</p>
      <ul>
        <li><strong>Données d'identification :</strong> civilité, nom, prénom, date de naissance.</li>
        <li><strong>Coordonnées :</strong> adresse postale, adresse e-mail, numéro de téléphone.</li>
        <li><strong>Données relatives à votre situation :</strong> situation familiale, professionnelle, régime de sécurité sociale.</li>
        <li><strong>Données de santé</strong> strictement nécessaires à l'établissement d'un devis ou d'un contrat d'assurance, avec votre consentement explicite.</li>
        <li><strong>Données de connexion :</strong> adresse IP, type de navigateur, pages consultées, date et heure de connexion.</li>
      </ul>

      <h2>3. Finalités du traitement</h2>
      <p>Vos données sont traitées pour les finalités suivantes :</p>
      <ul>
        <li>Établir un devis personnalisé et vous proposer des contrats adaptés.</li>
        <li>Gérer la relation contractuelle et le suivi des contrats souscrits.</li>
        <li>Répondre à vos demandes d'information et de contact.</li>
        <li>Respecter nos obligations légales et réglementaires (lutte contre le blanchiment, devoir de conseil, etc.).</li>
        <li>Améliorer nos services et réaliser des analyses statistiques.</li>
        <li>Vous adresser, avec votre consentement, des communications commerciales.</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>
        Les traitements reposent, selon les cas, sur l'exécution d'un contrat ou de mesures précontractuelles, le
        respect d'obligations légales, votre consentement (notamment pour les données de santé et la prospection
        commerciale) ou l'intérêt légitime de NEOASSUR.
      </p>

      <h2>5. Destinataires des données</h2>
      <p>Vos données peuvent être transmises à :</p>
      <ul>
        <li>Les compagnies d'assurance partenaires nécessaires à l'établissement et à la gestion de votre contrat.</li>
        <li>Nos sous-traitants techniques (hébergeur, prestataires informatiques, plateformes de messagerie).</li>
        <li>Les autorités administratives et judiciaires lorsque la loi l'exige.</li>
      </ul>

      <h2>6. Durée de conservation</h2>
      <p>
        Vos données sont conservées pendant la durée nécessaire à la finalité poursuivie, augmentée des durées légales
        de prescription. À titre indicatif : 3 ans après le dernier contact pour les prospects, et jusqu'à 5 ans après
        la fin du contrat pour les clients (hors obligations légales spécifiques).
      </p>

      <h2>7. Sécurité</h2>
      <p>
        NEOASSUR met en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité
        et la confidentialité de vos données (chiffrement, contrôles d'accès, sauvegardes, sensibilisation du
        personnel).
      </p>

      <h2>8. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
        d'opposition, de portabilité et du droit de définir des directives relatives au sort de vos données après votre
        décès. Vous pouvez également retirer votre consentement à tout moment.
      </p>
      <p>
        Pour exercer ces droits, contactez-nous à <a href="mailto:contact@neo-assur.fr">contact@neo-assur.fr</a> ou
        par courrier à l'adresse du siège social. Une réponse vous sera adressée dans un délai d'un mois.
      </p>
      <p>
        En cas de difficulté, vous pouvez introduire une réclamation auprès de la{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">Commission Nationale de l'Informatique
        et des Libertés (CNIL)</a>.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Le site utilise des cookies destinés à assurer son bon fonctionnement, mesurer son audience et, sous réserve de
        votre consentement, personnaliser votre expérience. Vous pouvez à tout moment paramétrer vos préférences via le
        bandeau cookies (lien « Gérer mes cookies » en bas de page) ou les paramètres de votre navigateur. Les traceurs publicitaires de Meta (Facebook) ne sont activés qu'après votre accord explicite ; aucune donnée d'identification (nom, e-mail, téléphone) ne leur est transmise.
      </p>
    </LegalLayout>
  );
}
