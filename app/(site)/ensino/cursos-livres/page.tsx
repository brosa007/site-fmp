import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Cursos Livres",
  description: "Cursos Livres da FMP",
  path: "/ensino/cursos-livres",
});

export default function CursosLivresPage() {
  return (
    <PlaceholderPage
      title="Cursos Livres"
      description="Página sobre cursos livres"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Cursos Livres" },
      ]}
      children={[
        {
          label: "Cursos Livres FMP",
          href: ROUTES.ENSINO.CURSOS_LIVRES.CURSOS_LIVRES_FMP,
        },
      ]}
    />
  );
}

