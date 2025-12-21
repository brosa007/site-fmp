import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Faculdade",
  description: "Faculdade FMP",
  path: "/sobre-a-fmp/faculdade",
});

export default function FaculdadePage() {
  return (
    <PlaceholderPage
      title="Faculdade"
      description="Página sobre a faculdade"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade" },
      ]}
      children={[
        { label: "Quem Somos", href: ROUTES.SOBRE_A_FMP.FACULDADE.QUEM_SOMOS },
        {
          label: "Selos e Reconhecimento",
          href: ROUTES.SOBRE_A_FMP.FACULDADE.SELOS_E_RECONHECIMENTO,
        },
        {
          label: "Cátedra Sérgio Vieira",
          href: ROUTES.SOBRE_A_FMP.FACULDADE.CATEDRA_SERGIO_VIEIRA,
        },
        {
          label: "Portal do Egresso",
          href: ROUTES.SOBRE_A_FMP.FACULDADE.PORTAL_DO_EGRESSO,
        },
        {
          label: "Central de Estágios e Carreiras",
          href: ROUTES.SOBRE_A_FMP.FACULDADE.CENTRAL_DE_ESTAGIOS_E_CARREIRAS,
        },
        { label: "Ouvidoria", href: ROUTES.SOBRE_A_FMP.FACULDADE.OUVIDORIA },
        {
          label: "Estatuto e Regimento",
          href: ROUTES.SOBRE_A_FMP.FACULDADE.ESTATUTO_E_REGIMENTO,
        },
        {
          label: "Política de Privacidade",
          href: ROUTES.SOBRE_A_FMP.FACULDADE.POLITICA_DE_PRIVACIDADE,
        },
      ]}
    />
  );
}

