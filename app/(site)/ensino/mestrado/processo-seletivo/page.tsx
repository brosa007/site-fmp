import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";

export const metadata = generateMetadata({
  title: "Processo Seletivo",
  description: "Processo seletivo do mestrado",
  path: "/ensino/mestrado/processo-seletivo",
});

export default function ProcessoSeletivoPage() {
  return (
    <PlaceholderPage
      title="Processo Seletivo"
      description="Página sobre o processo seletivo"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Mestrado", href: "/ensino/mestrado" },
        { label: "Processo Seletivo" },
      ]}
    />
  );
}

