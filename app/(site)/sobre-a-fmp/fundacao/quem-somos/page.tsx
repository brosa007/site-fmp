import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Quem Somos - Fundação",
  description: "Quem somos - Fundação",
  path: "/sobre-a-fmp/fundacao/quem-somos",
});

export default function FundacaoQuemSomosPage() {
  return (
    <PlaceholderPage
      title="Quem Somos - Fundação"
      description="Página sobre quem somos - fundação"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Fundação", href: "/sobre-a-fmp/fundacao" },
        { label: "Quem Somos" },
      ]}
    />
  );
}

