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
