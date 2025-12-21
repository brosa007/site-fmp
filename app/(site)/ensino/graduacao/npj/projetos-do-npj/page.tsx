import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Projetos do NPJ",
  description: "Projetos do Núcleo de Práticas Jurídicas",
  path: "/ensino/graduacao/npj/projetos-do-npj",
});

export default function ProjetosDoNPJPage() {
  return (
    <PlaceholderPage
      title="Projetos do NPJ"
      description="Página sobre os projetos do NPJ"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "NPJ", href: "/ensino/graduacao/npj" },
        { label: "Projetos do NPJ" },
      ]}
    />
  );
}

