import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Estúdio 360",
  description: "Estúdio 360 da FMP",
  path: "/conteudos/estudio-360",
});

export default function Estudio360Page() {
  return (
    <PlaceholderPage
      title="Estúdio 360"
      description="Página sobre o Estúdio 360"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Conteúdos", href: "/conteudos" },
        { label: "Estúdio 360" },
      ]}
    />
  );
}

