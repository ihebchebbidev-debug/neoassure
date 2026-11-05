import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/cgu")({
  head: () => ({
    meta: [
      { title: "Conditions Générales d'Utilisation — NEOASSUR" },
      { name: "description", content: "Conditions Générales d'Utilisation du site NEOASSUR édité par PRO-TECTION SAS." },
      { property: "og:title", content: "CGU — NEOASSUR" },
      { property: "og:description", content: "Conditions Générales d'Utilisation applicables au site NEOASSUR." },
      { property: "og:url", content: "https://www.neo-assur.fr/cgu" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://www.neo-assur.fr/cgu" }],
  }),
  component: CGU,
});

function CGU() {
  return (
    <LegalLayout
      title="Conditions Générales d'Utilisation"
      intro="Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site NEOASSUR édité par PRO-TECTION SAS."
    >
      <h2>1. Objet</h2>
      <p>
        Les présentes CGU ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs
        accèdent et utilisent le site NEOASSUR (ci-après le « Site »). Toute utilisation du Site implique l'acceptation
        sans réserve des présentes CGU.
      </p>

      <h2>2. Accès au site</h2>
      <p>
        Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Les frais liés à
        l'accès au Site (matériel, logiciels, connexion Internet, etc.) sont à la charge de l'utilisateur.
      </p>
      <p>
        NEOASSUR met en œuvre les moyens raisonnables pour assurer la disponibilité du Site, mais ne peut être tenue
        responsable des interruptions, ralentissements ou indisponibilités, notamment en cas de maintenance, de
        défaillance des réseaux ou de force majeure.
      </p>

      <h2>3. Services proposés</h2>
      <p>
        Le Site permet notamment à l'utilisateur de demander un devis gratuit, d'être recontacté par un conseiller, et
        de consulter des informations relatives aux contrats d'assurance distribués par NEOASSUR (mutuelle santé,
        assurance emprunteur, prévoyance obsèques, etc.).
      </p>
      <p>
        Les informations diffusées sur le Site ont une valeur informative et ne constituent pas une offre contractuelle.
        Seuls les documents contractuels remis lors de la souscription engagent NEOASSUR et la compagnie d'assurance.
      </p>

      <h2>4. Obligations de l'utilisateur</h2>
      <p>L'utilisateur s'engage à :</p>
      <ul>
        <li>Fournir des informations exactes, complètes et à jour lors de toute demande effectuée via le Site ;</li>
        <li>Utiliser le Site conformément à sa destination et à la réglementation en vigueur ;</li>
        <li>Ne pas porter atteinte à la sécurité, à l'intégrité ou au bon fonctionnement du Site ;</li>
        <li>Ne pas reproduire, copier ou exploiter, à des fins commerciales, tout ou partie du Site sans autorisation.</li>
      </ul>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments composant le Site (textes, images, logos, marques, vidéos, charte graphique, code, etc.)
        est protégé par le droit de la propriété intellectuelle et reste la propriété exclusive de PRO-TECTION SAS ou
        de ses partenaires. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation
        préalable et écrite est interdite.
      </p>

      <h2>6. Responsabilité</h2>
      <p>
        NEOASSUR s'efforce de fournir des informations exactes et à jour, mais ne saurait garantir l'exhaustivité ni
        l'absence d'erreurs. NEOASSUR ne pourra être tenue responsable des dommages directs ou indirects résultant de
        l'utilisation du Site ou de l'impossibilité d'y accéder.
      </p>

      <h2>7. Liens hypertextes</h2>
      <p>
        Le Site peut contenir des liens vers des sites tiers. NEOASSUR n'exerce aucun contrôle sur ces sites et décline
        toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques en matière de protection des
        données.
      </p>

      <h2>8. Données personnelles et cookies</h2>
      <p>
        Le traitement des données personnelles collectées via le Site est décrit dans notre{" "}
        <a href="/politique-de-confidentialite">Politique de confidentialité</a>.
      </p>

      <h2>9. Modification des CGU</h2>
      <p>
        NEOASSUR se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs sont invités à les
        consulter régulièrement. La version applicable est celle en vigueur au moment de la connexion au Site.
      </p>

      <h2>10. Droit applicable et juridiction compétente</h2>
      <p>
        Les présentes CGU sont régies par le droit français. À défaut de résolution amiable, tout litige relatif à leur
        interprétation ou exécution relèvera de la compétence exclusive des tribunaux du ressort de Paris, sous réserve
        des règles impératives applicables aux consommateurs.
      </p>
    </LegalLayout>
  );
}
