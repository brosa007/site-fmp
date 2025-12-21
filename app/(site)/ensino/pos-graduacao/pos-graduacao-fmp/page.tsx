import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Pós-Graduação FMP",
  description: "Pós-Graduação da FMP",
  path: "/ensino/pos-graduacao/pos-graduacao-fmp",
});

export default function PosGraduacaoFMPPage() {
  return (
    <PlaceholderPage
      title="Pós-Graduação FMP"
      description="Página sobre pós-graduação FMP"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Pós-Graduação", href: "/ensino/pos-graduacao" },
        { label: "Pós-Graduação FMP" },
      ]}
    />
  );
}

