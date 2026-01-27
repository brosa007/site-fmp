import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { Curso, Diferencial } from "./types";

const placeholderImage = "/hero-section.png";

export const cursos: Curso[] = [
  { title: "Graduação", href: "/ensino/graduacao", image: placeholderImage },
  { title: "Pós-Graduação", href: "/ensino/pos-graduacao", image: placeholderImage },
  { title: "Mestrado", href: "/ensino/mestrado", image: placeholderImage },
  { title: "Preparatório", href: "/ensino/preparatorio", image: placeholderImage },
  { title: "Cursos Livres", href: "/ensino/cursos-livres", image: placeholderImage },
];

export const diferenciais: Diferencial[] = [
  {
    icon: GraduationCap,
    title: "Reputação acadêmica",
    description: "Nota máxima no credenciamento do MEC e referência em ensino jurídico.",
  },
  {
    icon: Award,
    title: "Especialização Absoluta",
    description: "Foco total em Direito para garantir profundidade e excelência.",
  },
  {
    icon: BookOpen,
    title: "Autoridade Institucional",
    description: "Formada pelo MP-RS com comprometimento com a justiça e cidadania.",
  },
  {
    icon: Users,
    title: "Docentes Protagonistas",
    description: "Professores atuantes no mercado jurídico com experiência prática.",
  },
];

export const animationVariants = {
  staggerContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

// Placeholder data - substituir com dados reais
export const reconhecimentos = [
  {
    title: "OAB Recomenda",
    image: placeholderImage,
    description: "Selo OAB Recomenda",
  },
  {
    title: "MEC",
    image: placeholderImage,
    description: "Nota máxima no credenciamento",
  },
  {
    title: "Reconhecimento",
    image: placeholderImage,
    description: "Excelência em ensino",
  },
];

export const noticias = [
  {
    id: "1",
    title: "FMP realiza evento sobre Direito Constitucional",
    category: "EVENTOS",
    date: "15 Jan 2026",
    image: placeholderImage,
    href: "/conteudos/noticias/1",
  },
  {
    id: "2",
    title: "Novos cursos de pós-graduação disponíveis",
    category: "NOTÍCIAS",
    date: "12 Jan 2026",
    image: placeholderImage,
    href: "/conteudos/noticias/2",
  },
  {
    id: "3",
    title: "Inscrições abertas para o vestibular 2026",
    category: "ADMISSÃO",
    date: "10 Jan 2026",
    image: placeholderImage,
    href: "/ensino/graduacao/formas-de-ingresso",
  },
];

export const depoimentos = [
  {
    id: "1",
    quote: "A FMP foi fundamental na minha formação como jurista. Os professores são excelentes e o ambiente acadêmico é inspirador.",
    name: "Maria Silva",
    course: "Graduação em Direito - 2020",
    image: placeholderImage,
  },
  {
    id: "2",
    quote: "O conhecimento adquirido na FMP me preparou perfeitamente para os desafios da advocacia. Recomendo a todos!",
    name: "João Santos",
    course: "Graduação em Direito - 2019",
    image: placeholderImage,
  },
  {
    id: "3",
    quote: "A qualidade do ensino e o comprometimento dos docentes fazem da FMP uma referência em educação jurídica.",
    name: "Ana Costa",
    course: "Mestrado - 2021",
    image: placeholderImage,
  },
];
