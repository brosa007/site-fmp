import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Mestrado FMP",
  description: "Mestrado da FMP",
  path: "/ensino/mestrado/mestrado-fmp",
});

export default function MestradoFMPPage() {
  return (
    <PlaceholderPage
      title="Mestrado FMP"
      description="Página sobre o mestrado FMP"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Mestrado", href: "/ensino/mestrado" },
        { label: "Mestrado FMP" },
      ]}
    />
  );
}

