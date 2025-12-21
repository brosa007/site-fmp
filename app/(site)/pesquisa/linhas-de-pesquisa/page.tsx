import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Linhas de Pesquisa",
  description: "Linhas de pesquisa da FMP",
  path: "/pesquisa/linhas-de-pesquisa",
});

export default function LinhasDePesquisaPage() {
  return (
    <PlaceholderPage
      title="Linhas de Pesquisa"
      description="Página sobre linhas de pesquisa"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pesquisa", href: "/pesquisa" },
        { label: "Linhas de Pesquisa" },
      ]}
    />
  );
}

