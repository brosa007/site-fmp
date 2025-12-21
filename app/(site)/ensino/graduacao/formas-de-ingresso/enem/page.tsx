import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "ENEM",
  description: "Ingresso via ENEM na FMP",
  path: "/ensino/graduacao/formas-de-ingresso/enem",
});

export default function EnemPage() {
  return (
    <PlaceholderPage
      title="ENEM"
      description="Página sobre ingresso via ENEM"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "Formas de Ingresso", href: "/ensino/graduacao/formas-de-ingresso" },
        { label: "ENEM" },
      ]}
    />
  );
}

