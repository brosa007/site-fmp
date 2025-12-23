import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Fundação",
  description: "Fundação FMP",
  path: "/sobre-a-fmp/fundacao",
});

export default function FundacaoPage() {
  return (
    <PlaceholderPage
      title="Fundação"
      description="Página sobre a fundação"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Fundação" },
      ]}
      links={[
        { label: "Quem Somos", href: ROUTES.SOBRE_A_FMP.FUNDACAO.QUEM_SOMOS },
        {
          label: "Estrutura Organizacional",
          href: ROUTES.SOBRE_A_FMP.FUNDACAO.ESTRUTURA_ORGANIZACIONAL,
        },
        { label: "Nossa História", href: ROUTES.SOBRE_A_FMP.FUNDACAO.NOSSA_HISTORIA },
        { label: "Linha do Tempo", href: ROUTES.SOBRE_A_FMP.FUNDACAO.LINHA_DO_TEMPO },
        { label: "Ex-Presidentes", href: ROUTES.SOBRE_A_FMP.FUNDACAO.EX_PRESIDENTES },
        {
          label: "Estatuto e Regimento",
          href: ROUTES.SOBRE_A_FMP.FUNDACAO.ESTATUTO_E_REGIMENTO,
        },
        {
          label: "Política de Privacidade",
          href: ROUTES.SOBRE_A_FMP.FUNDACAO.POLITICA_DE_PRIVACIDADE,
        },
      ]}
    />
  );
}

