import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Sobre a FMP",
  description: "Sobre a FMP",
  path: "/sobre-a-fmp",
});

export default function SobreAFMPPage() {
  return (
    <PlaceholderPage
      title="Sobre a FMP"
      description="Página sobre a FMP"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sobre a FMP" }]}
      links={[
        { label: "Fundação", href: ROUTES.SOBRE_A_FMP.FUNDACAO.BASE },
        { label: "Faculdade", href: ROUTES.SOBRE_A_FMP.FACULDADE.BASE },
        {
          label: "Comissão Própria de Avaliação",
          href: ROUTES.SOBRE_A_FMP.COMISSAO_PROPRIA_DE_AVALIACAO.BASE,
        },
        {
          label: "Identidade Visual",
          href: ROUTES.SOBRE_A_FMP.IDENTIDADE_VISUAL.BASE,
        },
      ]}
    />
  );
}

