import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Dissertações",
  description: "Dissertações da FMP",
  path: "/conteudos/dissertacoes",
});

export default function DissertacoesPage() {
  return (
    <PlaceholderPage
      title="Dissertações"
      description="Página sobre dissertações"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: "Dissertações" },
      ]}
    />
  );
}

