import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Transferência",
  description: "Transferência para a FMP",
  path: "/ensino/graduacao/formas-de-ingresso/transferencia",
});

export default function TransferenciaPage() {
  return (
    <PlaceholderPage
      title="Transferência"
      description="Página sobre transferência"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "Formas de Ingresso", href: "/ensino/graduacao/formas-de-ingresso" },
        { label: "Transferência" },
      ]}
    />
  );
}

