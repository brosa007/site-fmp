import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Selos e Reconhecimento",
  description: "Selos e reconhecimento da faculdade",
  path: "/sobre-a-fmp/faculdade/selos-e-reconhecimento",
});

export default function SelosEReconhecimentoPage() {
  return (
    <PlaceholderPage
      title="Selos e Reconhecimento"
      description="Página sobre selos e reconhecimento"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Sobre a FMP", href: "/sobre-a-fmp" },
        { label: "Faculdade", href: "/sobre-a-fmp/faculdade" },
        { label: "Selos e Reconhecimento" },
      ]}
    />
  );
}

