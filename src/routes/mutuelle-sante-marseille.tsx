import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, buildProductJsonLd } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import { buildCityMutuelleData, buildLocalBusinessJsonLd, CITY_DATA } from "@/lib/city-data";
import productImage from "@/assets/product-sante.jpg";

const info = CITY_DATA.marseille;
const data = buildCityMutuelleData(info, productImage);

export const Route = createFileRoute("/mutuelle-sante-marseille")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: `Mutuelle Santé Marseille — Comparez +25 assureurs | NEOASSUR` },
      { name: "description", content: `Mutuelle santé à Marseille (13) : comparez +25 assureurs, économisez jusqu'à 40%. Devis gratuit en 2 min, conseiller local joignable au 01 87 66 56 10.` },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: `Mutuelle Santé Marseille | NEOASSUR` },
      { property: "og:description", content: `Mutuelle santé à Marseille. Devis gratuit en 2 minutes.` },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `https://www.neo-assur.fr/mutuelle-sante-marseille` },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: `https://www.neo-assur.fr/mutuelle-sante-marseille` }],
    scripts: [
      ...buildProductJsonLd(data, `/mutuelle-sante-marseille`, loaderData?.origin ?? ""),
      buildLocalBusinessJsonLd(info, loaderData?.origin ?? ""),
    ],
  }),
  component: () => <ProductPage data={data} />,
});
