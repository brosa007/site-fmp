import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Política de Privacidade - Fundação",
  description: "Política de privacidade da fundação",
  path: "/sobre-a-fmp/fundacao/politica-de-privacidade",
});

export default function FundacaoPoliticaDePrivacidadePage() {
  return (
    <PlaceholderPage
      title="Política de Privacidade - Fundação"
      description="Página sobre política de privacidade"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Fundação", href: "/sobre-a-fmp/fundacao" },
        { label: "Política de Privacidade" },
      ]}
    />
  );
}

