import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Sobre o Curso",
  description: "Sobre o curso de mestrado",
  path: "/ensino/mestrado/sobre-o-curso",
});

export default function SobreOCursoPage() {
  return (
    <PlaceholderPage
      title="Sobre o Curso"
      description="Página sobre o curso de mestrado"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Mestrado", href: "/ensino/mestrado" },
        { label: "Sobre o Curso" },
      ]}
    />
  );
}

