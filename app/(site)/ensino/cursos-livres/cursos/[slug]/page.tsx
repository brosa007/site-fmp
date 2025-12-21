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
    description: `Página do curso livre ${slug}`,
    path: `/ensino/cursos-livres/cursos/${slug}`,
  });
}

export default async function CursoLivresPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <PlaceholderPage
      title={`Curso: ${slug}`}
      description={`Página do curso livre ${slug}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Cursos Livres", href: "/ensino/cursos-livres" },
        { label: `Curso: ${slug}` },
      ]}
    />
  );
}

