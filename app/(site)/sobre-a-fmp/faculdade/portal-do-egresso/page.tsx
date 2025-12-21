import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Portal do Egresso",
  description: "Portal do egresso",
  path: "/sobre-a-fmp/faculdade/portal-do-egresso",
});

export default function PortalDoEgressoPage() {
  return (
    <PlaceholderPage
      title="Portal do Egresso"
      description="Página sobre o portal do egresso"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade", href: "/sobre-a-fmp/faculdade" },
        { label: "Portal do Egresso" },
      ]}
    />
  );
}

