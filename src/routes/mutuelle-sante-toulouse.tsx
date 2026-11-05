import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, buildProductJsonLd } from "@/components/ProductPage";
import { getRequestOrigin } from "@/lib/site-url";
import { buildCityMutuelleData, buildLocalBusinessJsonLd, CITY_DATA } from "@/lib/city-data";
import productImage from "@/assets/product-sante.jpg";

const info = CITY_DATA.toulouse;
const data = buildCityMutuelleData(info, productImage);

export const Route = createFileRoute("/mutuelle-sante-toulouse")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => ({
    meta: [
      { title: `Mutuelle Santé Toulouse — Comparez +25 assureurs | NEOASSUR` },
      { name: "description", content: `Mutuelle santé à Toulouse (31) : comparez +25 assureurs, économisez jusqu'à 40%. Devis gratuit en 2 min, conseiller local joignable au 01 87 66 56 10.` },
      { name: "keywords", content: data.keywords!.join(", ") },
      { property: "og:title", content: `Mutuelle Santé Toulouse | NEOASSUR` },
      { property: "og:description", content: `Mutuelle santé à Toulouse. Devis gratuit en 2 minutes.` },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `https://www.neo-assur.fr/mutuelle-sante-toulouse` },
      { property: "og:image", content: productImage },
      { name: "twitter:image", content: productImage },
    ],
    links: [{ rel: "canonical", href: `https://www.neo-assur.fr/mutuelle-sante-toulouse` }],
    scripts: [
      ...buildProductJsonLd(data, `/mutuelle-sante-toulouse`, loaderData?.origin ?? ""),
      buildLocalBusinessJsonLd(info, loaderData?.origin ?? ""),
    ],
  }),
  component: () => <ProductPage data={data} />,
});
