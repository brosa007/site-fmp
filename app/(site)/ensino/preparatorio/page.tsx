import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Preparatório",
  description: "Cursos preparatórios da FMP",
  path: "/ensino/preparatorio",
});

export default function PreparatorioPage() {
  return (
    <PlaceholderPage
      title="Preparatório"
      description="Página sobre cursos preparatórios"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Preparatório" },
      ]}
      children={[
        {
          label: "Preparatório FMP",
          href: ROUTES.ENSINO.PREPARATORIO.PREPARATORIO_FMP,
        },
        {
          label: "EAD - Curso de Direito Graduação",
          href: ROUTES.ENSINO.PREPARATORIO.EAD_CURSO_DE_DIRETO_GRADUACAO,
        },
        {
          label: "EAD - Curso Intensivo",
          href: ROUTES.ENSINO.PREPARATORIO.EAD_CURSO_INTENSIVO,
        },
        {
          label: "Presencial - Curso Intensivo",
          href: ROUTES.ENSINO.PREPARATORIO.PRESENCIAL_CURSO_INTENSIVO,
        },
      ]}
    />
  );
}

