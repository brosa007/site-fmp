import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Quem Somos - Faculdade",
  description: "Quem somos - Faculdade",
  path: "/sobre-a-fmp/faculdade/quem-somos",
});

export default function FaculdadeQuemSomosPage() {
  return (
    <PlaceholderPage
      title="Quem Somos - Faculdade"
      description="Página sobre quem somos - faculdade"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade", href: "/sobre-a-fmp/faculdade" },
        { label: "Quem Somos" },
      ]}
    />
  );
}

