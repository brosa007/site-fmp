import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Eventos Permanentes",
  description: "Eventos permanentes de pesquisa",
  path: "/pesquisa/eventos-permanentes",
});

export default function EventosPermanentesPage() {
  return (
    <PlaceholderPage
      title="Eventos Permanentes"
      description="Página sobre eventos permanentes"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Pesquisa", href: "/pesquisa" },
        { label: "Eventos Permanentes" },
      ]}
    />
  );
}

