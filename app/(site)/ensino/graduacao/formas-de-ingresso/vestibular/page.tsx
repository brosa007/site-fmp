import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Vestibular",
  description: "Vestibular da FMP",
  path: "/ensino/graduacao/formas-de-ingresso/vestibular",
});

export default function VestibularPage() {
  return (
    <PlaceholderPage
      title="Vestibular"
      description="Página sobre o vestibular"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "Formas de Ingresso", href: "/ensino/graduacao/formas-de-ingresso" },
        { label: "Vestibular" },
      ]}
    />
  );
}

