import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "EAD - Curso Intensivo",
  description: "EAD Curso Intensivo",
  path: "/ensino/preparatorio/ead-curso-intensivo",
});

export default function EADCursoIntensivoPage() {
  return (
    <PlaceholderPage
      title="EAD - Curso Intensivo"
      description="Página sobre EAD Curso Intensivo"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Preparatório", href: "/ensino/preparatorio" },
        { label: "EAD - Curso Intensivo" },
      ]}
    />
  );
}

