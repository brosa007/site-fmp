import { cn } from "@/app/_lib/utils";
import Image from "next/image";

interface Badge {
  image: string;
  alt: string;
  href?: string;
}

interface BadgeSectionProps {
  title?: string;
  subtitle?: string;
  badges: Badge[];
  className?: string;
}

/**
 * BadgeSection - Seção de selos, badges e certificações
 * Componente reutilizável para exibir credenciais e reconhecimentos
 */
export function BadgeSection({
  title,
  subtitle,
  badges,
  className,
}: BadgeSectionProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {subtitle && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--color-vermelho-escuro)]">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-8">
          {badges.map((badge, index) => {
            const BadgeContent = (
              <div className="flex items-center justify-center">
                <Image
                  src={badge.image}
                  alt={badge.alt}
                  width={200}
                  height={200}
                  className="h-auto max-h-32 w-auto object-contain"
                />
              </div>
            );

            if (badge.href) {
              return (
                <a
                  key={index}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  {BadgeContent}
                </a>
              );
            }

            return <div key={index}>{BadgeContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

