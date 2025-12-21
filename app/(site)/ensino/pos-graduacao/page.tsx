import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Pós-Graduação",
  description: "Pós-Graduação da FMP",
  path: "/ensino/pos-graduacao",
});

export default function PosGraduacaoPage() {
  return (
    <PlaceholderPage
      title="Pós-Graduação"
      description="Página sobre pós-graduação"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Pós-Graduação" },
      ]}
      children={[
        { label: "Pós-Graduação FMP", href: ROUTES.ENSINO.POS_GRADUACAO.POS_GRADUACAO_FMP },
        { label: "Pós Presencial", href: ROUTES.ENSINO.POS_GRADUACAO.POS_PRESENCIAL },
        { label: "Pós EAD", href: ROUTES.ENSINO.POS_GRADUACAO.POS_EAD },
      ]}
    />
  );
}

