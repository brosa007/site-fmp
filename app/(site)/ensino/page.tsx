import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Ensino",
  description: "Ensino da FMP",
  path: "/ensino",
});

export default function EnsinoPage() {
  return (
    <PlaceholderPage
      title="Ensino"
      description="Página sobre o ensino da FMP"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Ensino" }]}
      children={[
        { label: "Graduação", href: ROUTES.ENSINO.GRADUACAO.BASE },
        { label: "Pós-Graduação", href: ROUTES.ENSINO.POS_GRADUACAO.BASE },
        { label: "Mestrado", href: ROUTES.ENSINO.MESTRADO.BASE },
        { label: "Preparatório", href: ROUTES.ENSINO.PREPARATORIO.BASE },
        { label: "Cursos Livres", href: ROUTES.ENSINO.CURSOS_LIVRES.BASE },
      ]}
    />
  );
}

