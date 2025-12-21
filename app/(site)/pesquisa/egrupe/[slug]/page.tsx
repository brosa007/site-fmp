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
    title: `EGRUPE: ${slug}`,
    description: `Página do EGRUPE ${slug}`,
    path: `/pesquisa/egrupe/${slug}`,
  });
}

export default async function EGRUPESlugPage({ params }: PageProps) {
  const { slug } = await params;
  return (
    <PlaceholderPage
      title={`EGRUPE: ${slug}`}
      description={`Página do EGRUPE ${slug}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pesquisa", href: "/pesquisa" },
        { label: "EGRUPE", href: "/pesquisa/egrupe" },
        { label: slug },
      ]}
    />
  );
}

