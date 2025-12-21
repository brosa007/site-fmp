import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Grupos de Pesquisa",
  description: "Grupos de pesquisa da FMP",
  path: "/pesquisa/grupos-de-pesquisa",
});

export default function GruposDePesquisaPage() {
  return (
    <PlaceholderPage
      title="Grupos de Pesquisa"
      description="Página sobre grupos de pesquisa"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pesquisa", href: "/pesquisa" },
        { label: "Grupos de Pesquisa" },
      ]}
    />
  );
}

