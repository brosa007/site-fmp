import { PlaceholderPage } from "@/app/_lib/page-helpers";
import { ROUTES } from "@/app/_lib/routes";
import { generateMetadata } from "@/app/_lib/seo";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Faculdade de Direito da Fundação Escola Superior do Ministério Público",
  path: "/",
});

export default function HomePage() {
  return (
    <PlaceholderPage
      title="Bem-vindo à FMP"
      description="Faculdade de Direito da Fundação Escola Superior do Ministério Público"
      links={[
        { label: "Ensino", href: ROUTES.ENSINO.BASE },
        { label: "Pesquisa", href: ROUTES.PESQUISA.BASE },
        { label: "Extensão", href: ROUTES.EXTENSAO },
        {
          label: "Responsabilidade Social",
          href: ROUTES.RESPONSABILIDADE_SOCIAL,
        },
        { label: "Sobre a FMP", href: ROUTES.SOBRE_A_FMP.BASE },
        { label: "Conteúdos", href: ROUTES.CONTEUDOS.BASE },
      ]}
    />
  );
}
