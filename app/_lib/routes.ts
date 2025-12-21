/**
 * Constantes de rotas do site FMP
 */

export const ROUTES = {
  HOME: "/",
  ENSINO: {
    BASE: "/ensino",
    GRADUACAO: {
      BASE: "/ensino/graduacao",
      CURSO_DO_DIRETO: "/ensino/graduacao/curso-do-direito",
      FORMAS_DE_INGRESSO: {
        BASE: "/ensino/graduacao/formas-de-ingresso",
        VESTIBULAR: "/ensino/graduacao/formas-de-ingresso/vestibular",
        ENEM: "/ensino/graduacao/formas-de-ingresso/enem",
        TRANSFERENCIA: "/ensino/graduacao/formas-de-ingresso/transferencia",
        DIPLOMADO: "/ensino/graduacao/formas-de-ingresso/diplomado",
      },
      INFORMACOES_ACADEMICAS: "/ensino/graduacao/informacoes-academicas",
      NPJ: {
        BASE: "/ensino/graduacao/npj",
        NUCLEO_DE_PRATICAS_JURIDICAS: "/ensino/graduacao/npj/nucleo-de-praticas-juridicas",
        ESTAGIO_OBRIGATORIO: "/ensino/graduacao/npj/estagio-obrigatorio",
        PROJETOS_DO_NPJ: "/ensino/graduacao/npj/projetos-do-npj",
        ESCRITORIO_MODELO: "/ensino/graduacao/npj/escritorio-modelo",
        TRIBUNAL_DIDATICO: "/ensino/graduacao/npj/tribunal-didatico",
      },
      AGENDA_DE_EVENTOS: "/ensino/graduacao/agenda-de-eventos",
    },
    POS_GRADUACAO: {
      BASE: "/ensino/pos-graduacao",
      POS_GRADUACAO_FMP: "/ensino/pos-graduacao/pos-graduacao-fmp",
      POS_PRESENCIAL: "/ensino/pos-graduacao/pos-presencial",
      POS_EAD: "/ensino/pos-graduacao/pos-ead",
      CURSO_SLUG: "/ensino/pos-graduacao/cursos/[slug]",
    },
    MESTRADO: {
      BASE: "/ensino/mestrado",
      MESTRADO_FMP: "/ensino/mestrado/mestrado-fmp",
      SOBRE_O_CURSO: "/ensino/mestrado/sobre-o-curso",
      PROCESSO_SELETIVO: "/ensino/mestrado/processo-seletivo",
      COORDENACAO_E_CORPO_DOCENTE: "/ensino/mestrado/coordenacao-e-corpo-docente",
    },
    PREPARATORIO: {
      BASE: "/ensino/preparatorio",
      PREPARATORIO_FMP: "/ensino/preparatorio/preparatorio-fmp",
      EAD_CURSO_DE_DIRETO_GRADUACAO: "/ensino/preparatorio/ead-curso-de-direito-graduacao",
      EAD_CURSO_INTENSIVO: "/ensino/preparatorio/ead-curso-intensivo",
      PRESENCIAL_CURSO_INTENSIVO: "/ensino/preparatorio/presencial-curso-intensivo",
    },
    CURSOS_LIVRES: {
      BASE: "/ensino/cursos-livres",
      CURSOS_LIVRES_FMP: "/ensino/cursos-livres/cursos-livres-fmp",
      CURSO_SLUG: "/ensino/cursos-livres/cursos/[slug]",
    },
  },
  PESQUISA: {
    BASE: "/pesquisa",
    DOCUMENTOS_E_EDITAIS: "/pesquisa/documentos-e-editais",
    EVENTOS_PERMANENTES: "/pesquisa/eventos-permanentes",
    GRUPOS_DE_PESQUISA: "/pesquisa/grupos-de-pesquisa",
    LINHAS_DE_PESQUISA: "/pesquisa/linhas-de-pesquisa",
    PESQUISA: "/pesquisa/pesquisa",
    EGRUPE: {
      BASE: "/pesquisa/egrupe",
      SLUG: "/pesquisa/egrupe/[slug]",
    },
  },
  EXTENSAO: "/extensao",
  RESPONSABILIDADE_SOCIAL: "/responsabilidade-social",
  SOBRE_A_FMP: {
    BASE: "/sobre-a-fmp",
    FUNDACAO: {
      BASE: "/sobre-a-fmp/fundacao",
      QUEM_SOMOS: "/sobre-a-fmp/fundacao/quem-somos",
      ESTRUTURA_ORGANIZACIONAL: "/sobre-a-fmp/fundacao/estrutura-organizacional",
      NOSSA_HISTORIA: "/sobre-a-fmp/fundacao/nossa-historia",
      LINHA_DO_TEMPO: "/sobre-a-fmp/fundacao/linha-do-tempo",
      EX_PRESIDENTES: "/sobre-a-fmp/fundacao/ex-presidentes",
      ESTATUTO_E_REGIMENTO: "/sobre-a-fmp/fundacao/estatuto-e-regimento",
      POLITICA_DE_PRIVACIDADE: "/sobre-a-fmp/fundacao/politica-de-privacidade",
    },
    FACULDADE: {
      BASE: "/sobre-a-fmp/faculdade",
      QUEM_SOMOS: "/sobre-a-fmp/faculdade/quem-somos",
      SELOS_E_RECONHECIMENTO: "/sobre-a-fmp/faculdade/selos-e-reconhecimento",
      CATEDRA_SERGIO_VIEIRA: "/sobre-a-fmp/faculdade/catedra-sergio-vieira",
      PORTAL_DO_EGRESSO: "/sobre-a-fmp/faculdade/portal-do-egresso",
      CENTRAL_DE_ESTAGIOS_E_CARREIRAS: "/sobre-a-fmp/faculdade/central-de-estagios-e-carreiras",
      OUVIDORIA: "/sobre-a-fmp/faculdade/ouvidoria",
      ESTATUTO_E_REGIMENTO: "/sobre-a-fmp/faculdade/estatuto-e-regimento",
      POLITICA_DE_PRIVACIDADE: "/sobre-a-fmp/faculdade/politica-de-privacidade",
    },
    COMISSAO_PROPRIA_DE_AVALIACAO: {
      BASE: "/sobre-a-fmp/comissao-propria-de-avaliacao",
      CPA: "/sobre-a-fmp/comissao-propria-de-avaliacao/cpa",
    },
    IDENTIDADE_VISUAL: {
      BASE: "/sobre-a-fmp/identidade-visual",
      MARCA: "/sobre-a-fmp/identidade-visual/marca",
      MANUAL: "/sobre-a-fmp/identidade-visual/manual",
    },
  },
  CONTEUDOS: {
    BASE: "/conteudos",
    ESTUDIO_360: "/conteudos/estudio-360",
    PROJETOS_ACADEMICOS: "/conteudos/projetos-academicos",
    PUBLICACOES_CIENTIFICAS: "/conteudos/publicacoes-cientificas",
    DISSERTACOES: "/conteudos/dissertacoes",
    COLECOES: {
      BASE: "/conteudos/colecoes",
      SLUG: "/conteudos/colecoes/[slug]",
    },
    BLOG_E_REVISTAS: {
      BASE: "/conteudos/blog-e-revistas",
      SLUG: "/conteudos/blog-e-revistas/[slug]",
    },
  },
  MINHA_FMP: "/minha-fmp",
} as const;

