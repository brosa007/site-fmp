import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface Curso {
  title: string;
  href: string;
  image: string | StaticImageData;
}

export interface Diferencial {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Reconhecimento {
  title: string;
  image: string | StaticImageData;
  description?: string;
}

export interface Noticia {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string | StaticImageData;
  href: string;
}

export interface Depoimento {
  id: string;
  quote: string;
  name: string;
  course: string;
  image: string | StaticImageData;
}
