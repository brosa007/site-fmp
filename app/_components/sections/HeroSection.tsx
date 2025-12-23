import { cn } from "@/app/_lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface HeroSectionProps {
  title: string;
  backgroundImage?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

/**
 * HeroSection - Banner principal de destaque
 * Componente reutilizável com imagem de fundo, título, divisor e CTA
 */
export function HeroSection({
  title,
  backgroundImage,
  primaryAction,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[90vh] items-center justify-center overflow-hidden",
        className,
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Divisor */}
        <div className="mb-8 flex justify-center">
          <div className="h-px w-24 bg-[var(--color-bege)]" />
        </div>

        {/* CTA */}
        {primaryAction && (
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[var(--color-vermelho-escuro)] to-[var(--color-vermelho-claro)] text-white hover:opacity-90"
          >
            <Link href={primaryAction.href}>{primaryAction.label}</Link>
          </Button>
        )}
      </div>
    </section>
  );
}
