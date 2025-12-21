import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Informações Acadêmicas",
  description: "Informações acadêmicas da graduação",
  path: "/ensino/graduacao/informacoes-academicas",
});

export default function InformacoesAcademicasPage() {
  return (
    <PlaceholderPage
      title="Informações Acadêmicas"
      description="Página sobre informações acadêmicas"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "Informações Acadêmicas" },
      ]}
    />
  );
}

