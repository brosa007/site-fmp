import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Estatuto e Regimento - Fundação",
  description: "Estatuto e regimento da fundação",
  path: "/sobre-a-fmp/fundacao/estatuto-e-regimento",
});

export default function FundacaoEstatutoERegimentoPage() {
  return (
    <PlaceholderPage
      title="Estatuto e Regimento - Fundação"
      description="Página sobre estatuto e regimento"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Fundação", href: "/sobre-a-fmp/fundacao" },
        { label: "Estatuto e Regimento" },
      ]}
    />
  );
}

