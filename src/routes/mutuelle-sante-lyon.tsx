import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, buildProductJsonLd } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import { buildCityMutuelleData, buildLocalBusinessJsonLd, CITY_DATA } from "@/lib/city-data";
import productImage from "@/assets/product-sante.jpg";

const info = CITY_DATA.lyon;
const data = buildCityMutuelleData(info, productImage);

export const Route = createFileRoute("/mutuelle-sante-lyon")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: `Mutuelle Santé Lyon — Comparez +25 assureurs | NEOASSUR` },
      { name: "description", content: `Mutuelle santé à Lyon (69) : comparez +25 assureurs, économisez jusqu'à 40%. Devis gratuit en 2 min, conseiller local joignable au 01 87 66 56 10.` },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: `Mutuelle Santé Lyon | NEOASSUR` },
      { property: "og:description", content: `Mutuelle santé à Lyon. Devis gratuit en 2 minutes.` },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `https://www.neo-assur.fr/mutuelle-sante-lyon` },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: `https://www.neo-assur.fr/mutuelle-sante-lyon` }],
    scripts: [
      ...buildProductJsonLd(data, `/mutuelle-sante-lyon`, loaderData?.origin ?? ""),
      buildLocalBusinessJsonLd(info, loaderData?.origin ?? ""),
    ],
  }),
  component: () => <ProductPage data={data} />,
});
