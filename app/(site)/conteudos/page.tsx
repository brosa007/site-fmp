import { generateMetadata } from "@/app/_lib/seo";
import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";

export const metadata = generateMetadata({
  title: "Conteúdos",
  description: "Conteúdos da FMP",
  path: "/conteudos",
});

export default function ConteudosPage() {
  return (
    <PlaceholderPage
      title="Conteúdos"
      description="Página sobre conteúdos"
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Conteúdos" }]}
      links={[
        { label: "Estúdio 360", href: ROUTES.CONTEUDOS.ESTUDIO_360 },
        { label: "Projetos Acadêmicos", href: ROUTES.CONTEUDOS.PROJETOS_ACADEMICOS },
        {
          label: "Publicações Científicas",
          href: ROUTES.CONTEUDOS.PUBLICACOES_CIENTIFICAS,
        },
        { label: "Dissertações", href: ROUTES.CONTEUDOS.DISSERTACOES },
        { label: "Coleções", href: ROUTES.CONTEUDOS.COLECOES.BASE },
        { label: "Blog e Revistas", href: ROUTES.CONTEUDOS.BLOG_E_REVISTAS.BASE },
      ]}
    />
  );
}

