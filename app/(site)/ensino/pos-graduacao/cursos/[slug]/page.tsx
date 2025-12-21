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
    title: `Curso: ${slug}`,
    description: `Página do curso ${slug}`,
    path: `/ensino/pos-graduacao/cursos/${slug}`,
  });
}

export default async function CursoPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <PlaceholderPage
      title={`Curso: ${slug}`}
      description={`Página do curso ${slug}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Pós-Graduação", href: "/ensino/pos-graduacao" },
        { label: `Curso: ${slug}` },
      ]}
    />
  );
}

