import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Preparatório FMP",
  description: "Preparatório FMP",
  path: "/ensino/preparatorio/preparatorio-fmp",
});

export default function PreparatorioFMPPage() {
  return (
    <PlaceholderPage
      title="Preparatório FMP"
      description="Página sobre o preparatório FMP"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Preparatório", href: "/ensino/preparatorio" },
        { label: "Preparatório FMP" },
      ]}
    />
  );
}

