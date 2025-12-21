import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Estrutura Organizacional",
  description: "Estrutura organizacional da fundação",
  path: "/sobre-a-fmp/fundacao/estrutura-organizacional",
});

export default function EstruturaOrganizacionalPage() {
  return (
    <PlaceholderPage
      title="Estrutura Organizacional"
      description="Página sobre estrutura organizacional"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Fundação", href: "/sobre-a-fmp/fundacao" },
        { label: "Estrutura Organizacional" },
      ]}
    />
  );
}

