import { generateMetadata as generateSEOMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<ReturnType<typeof generateSEOMetadata>> {
  const { slug } = await params;
  return generateSEOMetadata({
    title: `Coleção: ${slug}`,
    description: `Página da coleção ${slug}`,
    path: `/conteudos/colecoes/${slug}`,
  });
}

export default async function ColecaoPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <PlaceholderPage
      title={`Coleção: ${slug}`}
      description={`Página da coleção ${slug}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: "Coleções", href: "/conteudos/colecoes" },
        { label: slug },
      ]}
    />
  );
}

