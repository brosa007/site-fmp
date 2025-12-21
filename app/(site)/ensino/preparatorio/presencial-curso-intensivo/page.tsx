import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Presencial - Curso Intensivo",
  description: "Presencial Curso Intensivo",
  path: "/ensino/preparatorio/presencial-curso-intensivo",
});

export default function PresencialCursoIntensivoPage() {
  return (
    <PlaceholderPage
      title="Presencial - Curso Intensivo"
      description="Página sobre Presencial Curso Intensivo"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Preparatório", href: "/ensino/preparatorio" },
        { label: "Presencial - Curso Intensivo" },
      ]}
    />
  );
}

