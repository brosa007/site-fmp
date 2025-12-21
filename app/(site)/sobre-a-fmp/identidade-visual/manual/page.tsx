import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Manual",
  description: "Manual de identidade visual",
  path: "/sobre-a-fmp/identidade-visual/manual",
});

export default function ManualPage() {
  return (
    <PlaceholderPage
      title="Manual"
      description="Página sobre o manual de identidade visual"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Identidade Visual", href: "/sobre-a-fmp/identidade-visual" },
        { label: "Manual" },
      ]}
    />
  );
}

