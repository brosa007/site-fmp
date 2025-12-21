import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Cursos Livres FMP",
  description: "Cursos Livres FMP",
  path: "/ensino/cursos-livres/cursos-livres-fmp",
});

export default function CursosLivresFMPPage() {
  return (
    <PlaceholderPage
      title="Cursos Livres FMP"
      description="Página sobre cursos livres FMP"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Cursos Livres", href: "/ensino/cursos-livres" },
        { label: "Cursos Livres FMP" },
      ]}
    />
  );
}

