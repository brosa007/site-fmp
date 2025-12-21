import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Coordenação e Corpo Docente",
  description: "Coordenação e corpo docente do mestrado",
  path: "/ensino/mestrado/coordenacao-e-corpo-docente",
});

export default function CoordenacaoECorpoDocentePage() {
  return (
    <PlaceholderPage
      title="Coordenação e Corpo Docente"
      description="Página sobre coordenação e corpo docente"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Mestrado", href: "/ensino/mestrado" },
        { label: "Coordenação e Corpo Docente" },
      ]}
    />
  );
}

