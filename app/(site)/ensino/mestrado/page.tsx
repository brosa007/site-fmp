import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Mestrado",
  description: "Mestrado da FMP",
  path: "/ensino/mestrado",
});

export default function MestradoPage() {
  return (
    <PlaceholderPage
      title="Mestrado"
      description="Página sobre o mestrado"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ensino", href: "/ensino" },
        { label: "Mestrado" },
      ]}
      links={[
        { label: "Mestrado FMP", href: ROUTES.ENSINO.MESTRADO.MESTRADO_FMP },
        { label: "Sobre o Curso", href: ROUTES.ENSINO.MESTRADO.SOBRE_O_CURSO },
        { label: "Processo Seletivo", href: ROUTES.ENSINO.MESTRADO.PROCESSO_SELETIVO },
        {
          label: "Coordenação e Corpo Docente",
          href: ROUTES.ENSINO.MESTRADO.COORDENACAO_E_CORPO_DOCENTE,
        },
      ]}
    />
  );
}

