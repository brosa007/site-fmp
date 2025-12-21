import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Curso de Direito",
  description: "Curso de Direito da FMP",
  path: "/ensino/graduacao/curso-do-direito",
});

export default function CursoDoDireitoPage() {
  return (
    <PlaceholderPage
      title="Curso de Direito"
      description="Página sobre o curso de Direito"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "Curso de Direito" },
      ]}
    />
  );
}

