import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "EAD - Curso de Direito Graduação",
  description: "EAD Curso de Direito Graduação",
  path: "/ensino/preparatorio/ead-curso-de-direito-graduacao",
});

export default function EADCursoDeDireitoGraduacaoPage() {
  return (
    <PlaceholderPage
      title="EAD - Curso de Direito Graduação"
      description="Página sobre EAD Curso de Direito Graduação"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Preparatório", href: "/ensino/preparatorio" },
        { label: "EAD - Curso de Direito Graduação" },
      ]}
    />
  );
}

