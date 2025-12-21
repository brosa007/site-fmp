import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Ex-Presidentes",
  description: "Ex-presidentes da fundação",
  path: "/sobre-a-fmp/fundacao/ex-presidentes",
});

export default function ExPresidentesPage() {
  return (
    <PlaceholderPage
      title="Ex-Presidentes"
      description="Página sobre ex-presidentes"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Fundação", href: "/sobre-a-fmp/fundacao" },
        { label: "Ex-Presidentes" },
      ]}
    />
  );
}

