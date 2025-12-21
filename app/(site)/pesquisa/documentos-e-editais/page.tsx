import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Documentos e Editais",
  description: "Documentos e editais de pesquisa",
  path: "/pesquisa/documentos-e-editais",
});

export default function DocumentosEEditaisPage() {
  return (
    <PlaceholderPage
      title="Documentos e Editais"
      description="Página sobre documentos e editais"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pesquisa", href: "/pesquisa" },
        { label: "Documentos e Editais" },
      ]}
    />
  );
}

