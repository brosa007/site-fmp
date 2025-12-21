import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Estágio Obrigatório",
  description: "Estágio obrigatório do NPJ",
  path: "/ensino/graduacao/npj/estagio-obrigatorio",
});

export default function EstagioObrigatorioPage() {
  return (
    <PlaceholderPage
      title="Estágio Obrigatório"
      description="Página sobre o estágio obrigatório"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "NPJ", href: "/ensino/graduacao/npj" },
        { label: "Estágio Obrigatório" },
      ]}
    />
  );
}

