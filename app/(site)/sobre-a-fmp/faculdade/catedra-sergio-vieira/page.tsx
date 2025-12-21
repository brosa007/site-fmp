import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Cátedra Sérgio Vieira",
  description: "Cátedra Sérgio Vieira",
  path: "/sobre-a-fmp/faculdade/catedra-sergio-vieira",
});

export default function CatedraSergioVieiraPage() {
  return (
    <PlaceholderPage
      title="Cátedra Sérgio Vieira"
      description="Página sobre a Cátedra Sérgio Vieira"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade", href: "/sobre-a-fmp/faculdade" },
        { label: "Cátedra Sérgio Vieira" },
      ]}
    />
  );
}

