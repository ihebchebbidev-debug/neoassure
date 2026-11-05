import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — NEOASSUR" },
      { name: "description", content: "Informations légales et réglementaires concernant le site NEOASSUR (PRO-TECTION SAS)." },
      { property: "og:title", content: "Mentions légales — NEOASSUR" },
      { property: "og:description", content: "Informations légales et réglementaires concernant le site NEOASSUR." },
      { property: "og:url", content: "https://www.neo-assur.fr/mentions-legales" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/mentions-legales" }],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales" intro="Informations légales et réglementaires concernant le site NEOASSUR.">
      <h2>1. Informations sur le site</h2>
      <p>
        Le site est édité par la société <strong>PRO-TECTION SAS</strong>, Société par actions simplifiée (SASU) au
        capital de <strong>1 000 €</strong>, immatriculée au Registre du Commerce et des Sociétés de Paris sous le
        n° <strong>798 662 797 R.C.S. Paris</strong> (n° de gestion 2014B00902, EUID FR7501.798662797), dont le siège
        social est situé au <strong>49-51 rue de Ponthieu, 75008 Paris, France</strong>. Nom commercial : <strong>NEOASSUR</strong>.
      </p>

      <h3>Coordonnées</h3>
      <ul>
        <li>Adresse : 49-51 rue de Ponthieu, 75008 Paris, France</li>
        <li>Téléphone : <a href="tel:+33187665610">01 87 66 56 10</a></li>
        <li>Email : <a href="mailto:contact@neo-assur.fr">contact@neo-assur.fr</a></li>
      </ul>

      <h3>Directeur de la publication</h3>
      <p>M. Mohamed Amine Khiari dit Medeb, Président de PRO-TECTION SAS.</p>

      <h3>Hébergement</h3>
      <p>Le site est hébergé par <strong>Cloudflare, Inc.</strong> — 101 Townsend Street, San Francisco, CA 94107, USA.</p>

      <h3>Informations réglementaires</h3>
      <p>
        PRO-TECTION SAS est immatriculée au <strong>Registre unique des Intermédiaires en Assurance, Banque et
        Finance (ORIAS)</strong> sous le n° <strong>14001288</strong> en qualité de <strong>Courtier d'assurance ou
        de réassurance (COA)</strong> depuis le 14/06/2024 (le registre peut être consulté sur{" "}
        <a href="https://www.orias.fr/" target="_blank" rel="noopener noreferrer">le site de l'ORIAS</a>) et exerce
        sous le contrôle de l'<strong>Autorité de Contrôle Prudentiel et de Résolution (ACPR)</strong> — 4 place de
        Budapest, CS 92459, 75436 Paris Cedex 09.
      </p>
      <p>
        La société est régie par le <strong>Code des Assurances</strong>, sous la classification de courtier « dit b »,
        au titre de l'art. L.521-2 du Code des Assurances (la société n'est pas en mesure de fonder son analyse sur un
        nombre suffisant de contrats d'assurance offerts sur le marché).
      </p>
      <ul>
        <li><strong>SIREN :</strong> 798662797</li>
        <li><strong>Code NAF :</strong> 6622Z</li>
        <li><strong>Activité :</strong> Courtage d'assurance et intermédiation, gestion de contrats d'assurance</li>
      </ul>

      <h3>Assurances et garanties</h3>
      <p>
        La société a souscrit une <strong>assurance responsabilité civile professionnelle</strong> et une{" "}
        <strong>garantie financière</strong> en application des articles L.512-6 et L.512-7 du Code des Assurances.
      </p>

      <h3>Médiation de la consommation</h3>
      <p>
        Conformément aux articles L.611-1 et suivants du Code de la consommation, en cas de litige non résolu de manière
        amiable avec nos services, le client peut saisir gratuitement le <strong>Médiateur de l'Assurance</strong> — La
        Médiation de l'Assurance, TSA 50110, 75441 Paris Cedex 09 —{" "}
        <a href="https://www.mediation-assurance.org/" target="_blank" rel="noopener noreferrer">mediation-assurance.org</a>.
      </p>

      <h2>2. Propriété intellectuelle</h2>
      <p>
        La présentation et le contenu du site sont protégés par les conventions internationales et toute législation
        applicable en matière de propriété intellectuelle notamment au titre du droit d'auteur et du droit des marques
        ainsi qu'en matière de concurrence déloyale.
      </p>

      <h3>Marque et droits</h3>
      <p>
        La dénomination <strong>NEOASSUR</strong> est une marque exploitée par la SAS Pro-Tection. Le Site et tous les
        éléments qui le composent (images, logos, textes, charte graphique, etc.) sont la propriété exclusive de
        Pro-Tection et tous les droits de propriété intellectuelle qui y sont attachés, y compris le droit de
        reproduction, appartiennent à Pro-Tection.
      </p>

      <h3>⚠️ Avertissement</h3>
      <p>
        Toute utilisation, reproduction, téléchargement, affichage, mise en ligne, transmission, représentation, totale
        ou partielle, sous quelque forme et par quelque moyen que ce soit, du Site ou de l'un quelconque de ses
        éléments, à des fins et dans des conditions autres que celles prévues à l'article L.122-5 du Code de la
        Propriété Intellectuelle est <strong>interdite</strong>, sauf autorisation expresse et préalable de Pro-Tection.
      </p>
    </LegalLayout>
  );
}
