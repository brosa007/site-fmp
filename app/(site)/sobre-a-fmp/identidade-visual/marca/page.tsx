import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Marca",
  description: "Marca da FMP",
  path: "/sobre-a-fmp/identidade-visual/marca",
});

export default function MarcaPage() {
  return (
    <PlaceholderPage
      title="Marca"
      description="Página sobre a marca"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Identidade Visual", href: "/sobre-a-fmp/identidade-visual" },
        { label: "Marca" },
      ]}
    />
  );
}

