import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Diplomado",
  description: "Ingresso para diplomados na FMP",
  path: "/ensino/graduacao/formas-de-ingresso/diplomado",
});

export default function DiplomadoPage() {
  return (
    <PlaceholderPage
      title="Diplomado"
      description="Página sobre ingresso para diplomados"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "Formas de Ingresso", href: "/ensino/graduacao/formas-de-ingresso" },
        { label: "Diplomado" },
      ]}
    />
  );
}

