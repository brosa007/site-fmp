import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Pós EAD",
  description: "Pós-Graduação EAD da FMP",
  path: "/ensino/pos-graduacao/pos-ead",
});

export default function PosEADPage() {
  return (
    <PlaceholderPage
      title="Pós EAD"
      description="Página sobre pós-graduação EAD"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Pós-Graduação", href: "/ensino/pos-graduacao" },
        { label: "Pós EAD" },
      ]}
    />
  );
}

