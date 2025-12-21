import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Identidade Visual",
  description: "Identidade Visual da FMP",
  path: "/sobre-a-fmp/identidade-visual",
});

export default function IdentidadeVisualPage() {
  return (
    <PlaceholderPage
      title="Identidade Visual"
      description="Página sobre identidade visual"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Identidade Visual" },
      ]}
      children={[
        { label: "Marca", href: ROUTES.SOBRE_A_FMP.IDENTIDADE_VISUAL.MARCA },
        { label: "Manual", href: ROUTES.SOBRE_A_FMP.IDENTIDADE_VISUAL.MANUAL },
      ]}
    />
  );
}

