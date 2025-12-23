import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Pesquisa",
  description: "Pesquisa da FMP",
  path: "/pesquisa",
});

export default function PesquisaPage() {
  return (
    <PlaceholderPage
      title="Pesquisa"
      description="Página sobre pesquisa"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pesquisa" }]}
      links={[
        {
          label: "Documentos e Editais",
          href: ROUTES.PESQUISA.DOCUMENTOS_E_EDITAIS,
        },
        {
          label: "Eventos Permanentes",
          href: ROUTES.PESQUISA.EVENTOS_PERMANENTES,
        },
        { label: "Grupos de Pesquisa", href: ROUTES.PESQUISA.GRUPOS_DE_PESQUISA },
        { label: "Linhas de Pesquisa", href: ROUTES.PESQUISA.LINHAS_DE_PESQUISA },
        { label: "Pesquisa", href: ROUTES.PESQUISA.PESQUISA },
        { label: "EGRUPE", href: ROUTES.PESQUISA.EGRUPE.BASE },
      ]}
    />
  );
}

