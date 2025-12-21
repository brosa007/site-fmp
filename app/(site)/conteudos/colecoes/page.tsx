import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Coleções",
  description: "Coleções da FMP",
  path: "/conteudos/colecoes",
});

export default function ColecoesPage() {
  return (
    <PlaceholderPage
      title="Coleções"
      description="Página sobre coleções"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: "Coleções" },
      ]}
    />
  );
}

