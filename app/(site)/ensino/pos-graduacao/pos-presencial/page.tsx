import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Pós Presencial",
  description: "Pós-Graduação Presencial da FMP",
  path: "/ensino/pos-graduacao/pos-presencial",
});

export default function PosPresencialPage() {
  return (
    <PlaceholderPage
      title="Pós Presencial"
      description="Página sobre pós-graduação presencial"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Pós-Graduação", href: "/ensino/pos-graduacao" },
        { label: "Pós Presencial" },
      ]}
    />
  );
}

