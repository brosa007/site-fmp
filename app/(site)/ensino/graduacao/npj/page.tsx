import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "NPJ",
  description: "Núcleo de Práticas Jurídicas da FMP",
  path: "/ensino/graduacao/npj",
});

export default function NPJPage() {
  return (
    <PlaceholderPage
      title="NPJ - Núcleo de Práticas Jurídicas"
      description="Página sobre o NPJ"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "NPJ" },
      ]}
      links={[
        {
          label: "Núcleo de Práticas Jurídicas",
          href: ROUTES.ENSINO.GRADUACAO.NPJ.NUCLEO_DE_PRATICAS_JURIDICAS,
        },
        {
          label: "Estágio Obrigatório",
          href: ROUTES.ENSINO.GRADUACAO.NPJ.ESTAGIO_OBRIGATORIO,
        },
        { label: "Projetos do NPJ", href: ROUTES.ENSINO.GRADUACAO.NPJ.PROJETOS_DO_NPJ },
        {
          label: "Escritório Modelo",
          href: ROUTES.ENSINO.GRADUACAO.NPJ.ESCRITORIO_MODELO,
        },
        {
          label: "Tribunal Didático",
          href: ROUTES.ENSINO.GRADUACAO.NPJ.TRIBUNAL_DIDATICO,
        },
      ]}
    />
  );
}

