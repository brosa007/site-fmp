import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Política de Privacidade - Faculdade",
  description: "Política de privacidade da faculdade",
  path: "/sobre-a-fmp/faculdade/politica-de-privacidade",
});

export default function FaculdadePoliticaDePrivacidadePage() {
  return (
    <PlaceholderPage
      title="Política de Privacidade - Faculdade"
      description="Página sobre política de privacidade"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade", href: "/sobre-a-fmp/faculdade" },
        { label: "Política de Privacidade" },
      ]}
    />
  );
}

