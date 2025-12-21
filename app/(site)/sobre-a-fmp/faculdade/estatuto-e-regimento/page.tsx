import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Estatuto e Regimento - Faculdade",
  description: "Estatuto e regimento da faculdade",
  path: "/sobre-a-fmp/faculdade/estatuto-e-regimento",
});

export default function FaculdadeEstatutoERegimentoPage() {
  return (
    <PlaceholderPage
      title="Estatuto e Regimento - Faculdade"
      description="Página sobre estatuto e regimento"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade", href: "/sobre-a-fmp/faculdade" },
        { label: "Estatuto e Regimento" },
      ]}
    />
  );
}

