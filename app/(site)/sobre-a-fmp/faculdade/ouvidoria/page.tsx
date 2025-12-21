import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Ouvidoria",
  description: "Ouvidoria da faculdade",
  path: "/sobre-a-fmp/faculdade/ouvidoria",
});

export default function OuvidoriaPage() {
  return (
    <PlaceholderPage
      title="Ouvidoria"
      description="Página sobre ouvidoria"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade", href: "/sobre-a-fmp/faculdade" },
        { label: "Ouvidoria" },
      ]}
    />
  );
}

