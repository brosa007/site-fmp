import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Publicações Científicas",
  description: "Publicações científicas da FMP",
  path: "/conteudos/publicacoes-cientificas",
});

export default function PublicacoesCientificasPage() {
  return (
    <PlaceholderPage
      title="Publicações Científicas"
      description="Página sobre publicações científicas"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: "Publicações Científicas" },
      ]}
    />
  );
}

