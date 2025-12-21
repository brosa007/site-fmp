import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Graduação",
  description: "Graduação da FMP",
  path: "/ensino/graduacao",
});

export default function GraduacaoPage() {
  return (
    <PlaceholderPage
      title="Graduação"
      description="Página sobre a graduação da FMP"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação" },
      ]}
      children={[
        { label: "Curso de Direito", href: ROUTES.ENSINO.GRADUACAO.CURSO_DO_DIRETO },
        {
          label: "Formas de Ingresso",
          href: ROUTES.ENSINO.GRADUACAO.FORMAS_DE_INGRESSO.BASE,
        },
        {
          label: "Informações Acadêmicas",
          href: ROUTES.ENSINO.GRADUACAO.INFORMACOES_ACADEMICAS,
        },
        { label: "NPJ", href: ROUTES.ENSINO.GRADUACAO.NPJ.BASE },
        { label: "Agenda de Eventos", href: ROUTES.ENSINO.GRADUACAO.AGENDA_DE_EVENTOS },
      ]}
    />
  );
}

