import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Nossa História",
  description: "Nossa história - Fundação",
  path: "/sobre-a-fmp/fundacao/nossa-historia",
});

export default function NossaHistoriaPage() {
  return (
    <PlaceholderPage
      title="Nossa História"
      description="Página sobre nossa história"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Fundação", href: "/sobre-a-fmp/fundacao" },
        { label: "Nossa História" },
      ]}
    />
  );
}

