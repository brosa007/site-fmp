import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Formas de Ingresso",
  description: "Formas de ingresso na graduação da FMP",
  path: "/ensino/graduacao/formas-de-ingresso",
});

export default function FormasDeIngressoPage() {
  return (
    <PlaceholderPage
      title="Formas de Ingresso"
      description="Página sobre as formas de ingresso na graduação"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Graduação", href: "/ensino/graduacao" },
        { label: "Formas de Ingresso" },
      ]}
      children={[
        { label: "Vestibular", href: ROUTES.ENSINO.GRADUACAO.FORMAS_DE_INGRESSO.VESTIBULAR },
        { label: "ENEM", href: ROUTES.ENSINO.GRADUACAO.FORMAS_DE_INGRESSO.ENEM },
        {
          label: "Transferência",
          href: ROUTES.ENSINO.GRADUACAO.FORMAS_DE_INGRESSO.TRANSFERENCIA,
        },
        {
          label: "Diplomado",
          href: ROUTES.ENSINO.GRADUACAO.FORMAS_DE_INGRESSO.DIPLOMADO,
        },
      ]}
    />
  );
}

