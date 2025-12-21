import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "CPA",
  description: "CPA - Comissão Própria de Avaliação",
  path: "/sobre-a-fmp/comissao-propria-de-avaliacao/cpa",
});

export default function CPAPage() {
  return (
    <PlaceholderPage
      title="CPA"
      description="Página sobre CPA"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        {
          label: "Comissão Própria de Avaliação",
          href: "/sobre-a-fmp/comissao-propria-de-avaliacao",
        },
        { label: "CPA" },
      ]}
    />
  );
}

