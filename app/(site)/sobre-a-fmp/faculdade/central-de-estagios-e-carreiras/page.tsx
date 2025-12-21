import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Central de Estágios e Carreiras",
  description: "Central de estágios e carreiras",
  path: "/sobre-a-fmp/faculdade/central-de-estagios-e-carreiras",
});

export default function CentralDeEstagiosECarreirasPage() {
  return (
    <PlaceholderPage
      title="Central de Estágios e Carreiras"
      description="Página sobre central de estágios e carreiras"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade", href: "/sobre-a-fmp/faculdade" },
        { label: "Central de Estágios e Carreiras" },
      ]}
    />
  );
}

