import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Minha FMP",
  description: "Minha FMP",
  path: "/minha-fmp",
});

export default function MinhaFMPPage() {
  return (
    <PlaceholderPage
      title="Minha FMP"
      description="Página Minha FMP (placeholder - pode virar redirect depois)"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Minha FMP" }]}
    />
  );
}

