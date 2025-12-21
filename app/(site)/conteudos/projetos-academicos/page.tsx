import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Projetos Acadêmicos",
  description: "Projetos acadêmicos da FMP",
  path: "/conteudos/projetos-academicos",
});

export default function ProjetosAcademicosPage() {
  return (
    <PlaceholderPage
      title="Projetos Acadêmicos"
      description="Página sobre projetos acadêmicos"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: "Projetos Acadêmicos" },
      ]}
    />
  );
}

