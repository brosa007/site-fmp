import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Blog e Revistas",
  description: "Blog e revistas da FMP",
  path: "/conteudos/blog-e-revistas",
});

export default function BlogERevistasPage() {
  return (
    <PlaceholderPage
      title="Blog e Revistas"
      description="Página sobre blog e revistas"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: "Blog e Revistas" },
      ]}
    />
  );
}

