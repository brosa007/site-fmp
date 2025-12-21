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
    title: `Post: ${slug}`,
    description: `Página do post ${slug}`,
    path: `/conteudos/blog-e-revistas/${slug}`,
  });
}

export default async function BlogERevistasSlugPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <PlaceholderPage
      title={`Post: ${slug}`}
      description={`Página do post ${slug}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: "Blog e Revistas", href: "/conteudos/blog-e-revistas" },
        { label: slug },
      ]}
    />
  );
}

