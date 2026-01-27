import Image from "next/image";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string | StaticImageData;
  children?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-fmp relative z-10 text-center text-fmp-white">
        <h1 className="title-display mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
