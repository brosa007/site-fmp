const placeholderImage = "/hero-section.png";

export interface ConselhoMembro {
  name: string;
  image: string;
  role?: string;
}

export interface IdentidadeOrganizacional {
  title: string;
  description: string;
  image: string;
}

export const conselhoAdministrativo: ConselhoMembro[] = [
  {
    name: "Luciano de Faria Brasil",
    image: placeholderImage,
  },
  {
    name: "Mauro Henrique Renner",
    image: placeholderImage,
  },
  {
    name: "Joseane Mariele Schuck",
    image: placeholderImage,
  },
  {
    name: "Alexandre Lipp João",
    image: placeholderImage,
  },
];

// Membros do Conselho Administrativo para a página de Estrutura Organizacional
export const conselhoAdministrativoEstrutura: ConselhoMembro[] = [
  {
    name: "Luis Amaro da Fonseca Brasil",
    image: placeholderImage,
  },
  {
    name: "Mauro Henrique Renner",
    image: placeholderImage,
  },
  {
    name: "Joseane Nardella Zoch",
    image: placeholderImage,
  },
  {
    name: "Alexandre Gava Jobim",
    image: placeholderImage,
  },
];

export interface EstruturaOrganizacionalItem {
  title: string;
  content?: string;
  children?: EstruturaOrganizacionalItem[];
}

export const estruturaOrganizacional: EstruturaOrganizacionalItem[] = [
  {
    title: "Conselho Deliberativo",
  },
  {
    title: "Conselho Curador",
  },
  {
    title: "Conselho Consultivo",
  },
  {
    title: "Direção da Faculdade",
  },
  {
    title: "Coordenação de Apoio de Curso de Graduação em Direito",
  },
  {
    title: "Coordenação Geral dos Cursos de Pós-Graduação",
  },
  {
    title: "Coordenação de Área de Pós-Graduação",
  },
  {
    title: "Coordenação de Mestrado",
  },
  {
    title: "Coordenação dos Cursos Preparatórios",
  },
];

export const identidadeOrganizacional: IdentidadeOrganizacional[] = [
  {
    title: "Missão",
    description:
      "Promover, por meio da educação, o desenvolvimento humano e profissional de quem vive e melhora o mundo.",
    image: placeholderImage,
  },
  {
    title: "Visão",
    description:
      "Ser referência nacional em ensino jurídico, reconhecida pela excelência acadêmica e pelo compromisso com a justiça e a cidadania.",
    image: placeholderImage,
  },
  {
    title: "Valores",
    description:
      "Ética, excelência, inovação, compromisso social e respeito à diversidade são os pilares que guiam nossa atuação.",
    image: placeholderImage,
  },
  {
    title: "Propósito",
    description:
      "Formar profissionais do Direito capazes de transformar a sociedade, defendendo direitos e promovendo a justiça.",
    image: placeholderImage,
  },
];

// Dados para a página Nossa História
export const comoNasceuFMP = {
  text: [
    "A Fundação Escola Superior do Ministério Público (FMP) foi criada em 1985, inspirada por modelos internacionais de ensino jurídico e guiada pelos princípios de excelência e compromisso cívico.",
    "Sua criação representou um marco importante na educação jurídica brasileira, estabelecendo uma instituição dedicada exclusivamente ao ensino do Direito, com foco na formação de profissionais comprometidos com a justiça e a cidadania.",
    "Desde o início, a FMP buscou integrar teoria e prática, preparando seus estudantes para os desafios do exercício profissional e para a transformação social através do Direito.",
  ],
  newspaperImage: placeholderImage,
};

export const ministerioPublico = {
  image: placeholderImage,
  text: [
    "Inicialmente instalada no prédio do Ministério Público em Porto Alegre, a FMP consolidou sua presença como referência em ensino jurídico no Rio Grande do Sul.",
    "A proximidade com o Ministério Público permitiu uma integração única entre a academia e a prática jurídica, enriquecendo a formação dos estudantes com experiências reais e atualizadas do sistema de justiça.",
    "Ao longo dos anos, a FMP expandiu suas atividades, mantendo sempre o compromisso com a excelência acadêmica e o desenvolvimento de profissionais preparados para atuar com ética e competência.",
  ],
};

export const milestones: string[] = [
  "Ao longo de sua trajetória, a FMP alcançou marcos significativos: ofereceu cursos de pós-graduação reconhecidos pelo MEC, estabeleceu parcerias estratégicas com a OAB e outras instituições, e formou centenas de juristas que hoje atuam em diversas áreas do Direito.",
  "A instituição sempre manteve-se atenta às transformações do Direito e da sociedade, adaptando seus cursos e metodologias para garantir que seus estudantes estejam preparados para os desafios contemporâneos do exercício jurídico.",
  "O reconhecimento da qualidade do ensino da FMP é evidenciado por diversos selos e certificações, incluindo o Selo OAB Recomenda, conquistado por quatro vezes consecutivas.",
];

export const logosImpact = {
  logos: [
    {
      name: "CAES",
      subtitle: "Coletivo Antirracista Esperança Garcia",
      image: placeholderImage,
    },
    {
      name: "FMP PLURAL",
      subtitle: "",
      image: placeholderImage,
    },
  ],
  text: [
    "A FMP também se destaca por seu compromisso com a responsabilidade social e o enfrentamento de desafios sociais. Projetos como o CAES (Coletivo Antirracista Esperança Garcia) e o FMP Plural demonstram o engajamento da instituição com questões de diversidade, inclusão e justiça social.",
    "Essas iniciativas refletem a compreensão de que o Direito é uma ferramenta de transformação social e que a formação jurídica deve estar conectada com os desafios e necessidades da sociedade contemporânea.",
  ],
};

export const finalText = {
  text: [
    "Hoje, a FMP continua sua missão de formar juristas comprometidos com a excelência, a ética e a transformação social. Com mais de 1.500 profissionais formados, a instituição mantém seu papel fundamental na educação jurídica brasileira.",
    "O Direito transforma. E a FMP transforma através do Direito, formando profissionais que não apenas conhecem a lei, mas que compreendem seu papel na construção de uma sociedade mais justa e democrática.",
  ],
  image: placeholderImage,
};
