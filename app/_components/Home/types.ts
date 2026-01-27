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
