/**
 * Configuração centralizada de navegação do site FMP
 * Alimenta Header, Footer e MegaMenu
 */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navigationConfig: NavGroup[] = [
  {
    label: "Ensino",
    href: "/ensino",
    children: [
      {
        label: "Graduação",
        href: "/ensino/graduacao",
        children: [
          {
            label: "Curso de Direito",
            href: "/ensino/graduacao/curso-do-direito",
          },
          {
            label: "Formas de Ingresso",
            href: "/ensino/graduacao/formas-de-ingresso",
            children: [
              {
                label: "Vestibular",
                href: "/ensino/graduacao/formas-de-ingresso/vestibular",
              },
              {
                label: "ENEM",
                href: "/ensino/graduacao/formas-de-ingresso/enem",
              },
              {
                label: "Transferência",
                href: "/ensino/graduacao/formas-de-ingresso/transferencia",
              },
              {
                label: "Diplomado",
                href: "/ensino/graduacao/formas-de-ingresso/diplomado",
              },
            ],
          },
          {
            label: "Informações Acadêmicas",
            href: "/ensino/graduacao/informacoes-academicas",
          },
          {
            label: "NPJ",
            href: "/ensino/graduacao/npj",
            children: [
              {
                label: "Núcleo de Práticas Jurídicas",
                href: "/ensino/graduacao/npj/nucleo-de-praticas-juridicas",
              },
              {
                label: "Estágio Obrigatório",
                href: "/ensino/graduacao/npj/estagio-obrigatorio",
              },
              {
                label: "Projetos do NPJ",
                href: "/ensino/graduacao/npj/projetos-do-npj",
              },
              {
                label: "Escritório Modelo",
                href: "/ensino/graduacao/npj/escritorio-modelo",
              },
              {
                label: "Tribunal Didático",
                href: "/ensino/graduacao/npj/tribunal-didatico",
              },
            ],
          },
          {
            label: "Agenda de Eventos",
            href: "/ensino/graduacao/agenda-de-eventos",
          },
        ],
      },
      {
        label: "Pós-Graduação",
        href: "/ensino/pos-graduacao",
        children: [
          {
            label: "Pós-Graduação FMP",
            href: "/ensino/pos-graduacao/pos-graduacao-fmp",
          },
          {
            label: "Pós Presencial",
            href: "/ensino/pos-graduacao/pos-presencial",
          },
          {
            label: "Pós EAD",
            href: "/ensino/pos-graduacao/pos-ead",
          },
        ],
      },
      {
        label: "Mestrado",
        href: "/ensino/mestrado",
        children: [
          {
            label: "Mestrado FMP",
            href: "/ensino/mestrado/mestrado-fmp",
          },
          {
            label: "Sobre o Curso",
            href: "/ensino/mestrado/sobre-o-curso",
          },
          {
            label: "Processo Seletivo",
            href: "/ensino/mestrado/processo-seletivo",
          },
          {
            label: "Coordenação e Corpo Docente",
            href: "/ensino/mestrado/coordenacao-e-corpo-docente",
          },
        ],
      },
      {
        label: "Preparatório",
        href: "/ensino/preparatorio",
        children: [
          {
            label: "Preparatório FMP",
            href: "/ensino/preparatorio/preparatorio-fmp",
          },
          {
            label: "EAD - Curso de Direito Graduação",
            href: "/ensino/preparatorio/ead-curso-de-direito-graduacao",
          },
          {
            label: "EAD - Curso Intensivo",
            href: "/ensino/preparatorio/ead-curso-intensivo",
          },
          {
            label: "Presencial - Curso Intensivo",
            href: "/ensino/preparatorio/presencial-curso-intensivo",
          },
        ],
      },
      {
        label: "Cursos Livres",
        href: "/ensino/cursos-livres",
        children: [
          {
            label: "Cursos Livres FMP",
            href: "/ensino/cursos-livres/cursos-livres-fmp",
          },
        ],
      },
    ],
  },
  {
    label: "Pesquisa",
    href: "/pesquisa",
    children: [
      {
        label: "Documentos e Editais",
        href: "/pesquisa/documentos-e-editais",
      },
      {
        label: "Eventos Permanentes",
        href: "/pesquisa/eventos-permanentes",
      },
      {
        label: "Grupos de Pesquisa",
        href: "/pesquisa/grupos-de-pesquisa",
      },
      {
        label: "Linhas de Pesquisa",
        href: "/pesquisa/linhas-de-pesquisa",
      },
      {
        label: "Pesquisa",
        href: "/pesquisa/pesquisa",
      },
      {
        label: "EGRUPE",
        href: "/pesquisa/egrupe",
      },
    ],
  },
  {
    label: "Extensão",
    href: "/extensao",
  },
  {
    label: "Responsabilidade Social",
    href: "/responsabilidade-social",
  },
  {
    label: "Sobre a FMP",
    href: "/sobre-a-fmp",
    children: [
      {
        label: "Fundação",
        href: "/sobre-a-fmp/fundacao",
        children: [
          {
            label: "Quem Somos",
            href: "/sobre-a-fmp/fundacao/quem-somos",
          },
          {
            label: "Estrutura Organizacional",
            href: "/sobre-a-fmp/fundacao/estrutura-organizacional",
          },
          {
            label: "Nossa História",
            href: "/sobre-a-fmp/fundacao/nossa-historia",
          },
          {
            label: "Linha do Tempo",
            href: "/sobre-a-fmp/fundacao/linha-do-tempo",
          },
          {
            label: "Ex-Presidentes",
            href: "/sobre-a-fmp/fundacao/ex-presidentes",
          },
          {
            label: "Estatuto e Regimento",
            href: "/sobre-a-fmp/fundacao/estatuto-e-regimento",
          },
          {
            label: "Política de Privacidade",
            href: "/sobre-a-fmp/fundacao/politica-de-privacidade",
          },
        ],
      },
      {
        label: "Faculdade",
        href: "/sobre-a-fmp/faculdade",
        children: [
          {
            label: "Quem Somos",
            href: "/sobre-a-fmp/faculdade/quem-somos",
          },
          {
            label: "Selos e Reconhecimento",
            href: "/sobre-a-fmp/faculdade/selos-e-reconhecimento",
          },
          {
            label: "Cátedra Sérgio Vieira",
            href: "/sobre-a-fmp/faculdade/catedra-sergio-vieira",
          },
          {
            label: "Portal do Egresso",
            href: "/sobre-a-fmp/faculdade/portal-do-egresso",
          },
          {
            label: "Central de Estágios e Carreiras",
            href: "/sobre-a-fmp/faculdade/central-de-estagios-e-carreiras",
          },
          {
            label: "Ouvidoria",
            href: "/sobre-a-fmp/faculdade/ouvidoria",
          },
          {
            label: "Estatuto e Regimento",
            href: "/sobre-a-fmp/faculdade/estatuto-e-regimento",
          },
          {
            label: "Política de Privacidade",
            href: "/sobre-a-fmp/faculdade/politica-de-privacidade",
          },
        ],
      },
      {
        label: "Comissão Própria de Avaliação",
        href: "/sobre-a-fmp/comissao-propria-de-avaliacao",
        children: [
          {
            label: "CPA",
            href: "/sobre-a-fmp/comissao-propria-de-avaliacao/cpa",
          },
        ],
      },
      {
        label: "Identidade Visual",
        href: "/sobre-a-fmp/identidade-visual",
        children: [
          {
            label: "Marca",
            href: "/sobre-a-fmp/identidade-visual/marca",
          },
          {
            label: "Manual",
            href: "/sobre-a-fmp/identidade-visual/manual",
          },
        ],
      },
    ],
  },
  {
    label: "Conteúdos",
    href: "/conteudos",
    children: [
      {
        label: "Estúdio 360",
        href: "/conteudos/estudio-360",
      },
      {
        label: "Projetos Acadêmicos",
        href: "/conteudos/projetos-academicos",
      },
      {
        label: "Publicações Científicas",
        href: "/conteudos/publicacoes-cientificas",
      },
      {
        label: "Dissertações",
        href: "/conteudos/dissertacoes",
      },
      {
        label: "Coleções",
        href: "/conteudos/colecoes",
      },
      {
        label: "Blog e Revistas",
        href: "/conteudos/blog-e-revistas",
      },
    ],
  },
  {
    label: "Minha FMP",
    href: "/minha-fmp",
  },
];

/**
 * Retorna todos os itens de navegação achatados (útil para Footer)
 */
export function getFlattenedNavItems(): NavItem[] {
  const items: NavItem[] = [];

  function flatten(navItems: NavItem[] | NavGroup[]) {
    for (const item of navItems) {
      if ("href" in item && item.href) {
        items.push({ label: item.label, href: item.href });
      }
      if ("children" in item && item.children) {
        flatten(item.children);
      }
    }
  }

  for (const group of navigationConfig) {
    if (group.href) {
      items.push({ label: group.label, href: group.href });
    }
    if (group.children) {
      flatten(group.children);
    }
  }

  return items;
}

