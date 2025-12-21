import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Pesquisa",
  description: "Pesquisa da FMP",
  path: "/pesquisa/pesquisa",
});

export default function PesquisaDetailPage() {
  return (
    <PlaceholderPage
      title="Pesquisa"
      description="Página sobre pesquisa"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pesquisa", href: "/pesquisa" },
        { label: "Pesquisa" },
      ]}
    />
  );
}

