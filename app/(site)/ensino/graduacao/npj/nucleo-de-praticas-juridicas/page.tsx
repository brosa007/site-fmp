import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Núcleo de Práticas Jurídicas",
  description: "Núcleo de Práticas Jurídicas da FMP",
  path: "/ensino/graduacao/npj/nucleo-de-praticas-juridicas",
});

export default function NucleoDePraticasJuridicasPage() {
  return (
    <PlaceholderPage
      title="Núcleo de Práticas Jurídicas"
      description="Página sobre o Núcleo de Práticas Jurídicas"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "NPJ", href: "/ensino/graduacao/npj" },
        { label: "Núcleo de Práticas Jurídicas" },
      ]}
    />
  );
}

