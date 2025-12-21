import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Comissão Própria de Avaliação",
  description: "Comissão Própria de Avaliação",
  path: "/sobre-a-fmp/comissao-propria-de-avaliacao",
});

export default function ComissaoPropriaDeAvaliacaoPage() {
  return (
    <PlaceholderPage
      title="Comissão Própria de Avaliação"
      description="Página sobre comissão própria de avaliação"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Comissão Própria de Avaliação" },
      ]}
      children={[
        { label: "CPA", href: ROUTES.SOBRE_A_FMP.COMISSAO_PROPRIA_DE_AVALIACAO.CPA },
      ]}
    />
  );
}

