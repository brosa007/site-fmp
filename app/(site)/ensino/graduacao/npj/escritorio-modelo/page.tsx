import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Escritório Modelo",
  description: "Escritório Modelo do NPJ",
  path: "/ensino/graduacao/npj/escritorio-modelo",
});

export default function EscritorioModeloPage() {
  return (
    <PlaceholderPage
      title="Escritório Modelo"
      description="Página sobre o Escritório Modelo"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "NPJ", href: "/ensino/graduacao/npj" },
        { label: "Escritório Modelo" },
      ]}
    />
  );
}

