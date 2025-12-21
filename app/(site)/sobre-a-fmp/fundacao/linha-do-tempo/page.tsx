import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Linha do Tempo",
  description: "Linha do tempo da fundação",
  path: "/sobre-a-fmp/fundacao/linha-do-tempo",
});

export default function LinhaDoTempoPage() {
  return (
    <PlaceholderPage
      title="Linha do Tempo"
      description="Página sobre linha do tempo"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Fundação", href: "/sobre-a-fmp/fundacao" },
        { label: "Linha do Tempo" },
      ]}
    />
  );
}

