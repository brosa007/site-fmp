import Link from "next/link";
import Image from "next/image";
import { cn } from "@/app/_lib/utils";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export interface Card {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  badge?: string;
  metadata?: string;
}

interface CardsSectionProps {
  title?: string;
  subtitle?: string;
  cards: Card[];
  columns?: 2 | 3 | 4;
  showMoreLink?: {
    label: string;
    href: string;
  };
  className?: string;
}

/**
 * CardsSection - Grid de cards reutilizável
 * Útil para cursos, notícias, eventos, projetos, etc.
 */
export function CardsSection({
  title,
  subtitle,
  cards,
  columns = 3,
  showMoreLink,
  className,
}: CardsSectionProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

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

        <div
          className={cn(
            "grid gap-6 sm:grid-cols-2",
            gridCols[columns],
            columns === 4 && "lg:grid-cols-4"
          )}
        >
          {cards.map((card, index) => {
            const CardContent = (
              <>
                {card.image && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    {card.badge && (
                      <span className="absolute right-4 top-4 z-10 rounded-full bg-[var(--color-vermelho-escuro)] px-3 py-1 text-xs font-semibold text-white">
                        {card.badge}
                      </span>
                    )}
                  </div>
                )}
                <div className="p-6">
                  {card.metadata && (
                    <p className="mb-2 text-sm text-muted-foreground">
                      {card.metadata}
                    </p>
                  )}
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-muted-foreground">{card.description}</p>
                  )}
                </div>
              </>
            );

            if (card.href) {
              return (
                <Link
                  key={index}
                  href={card.href}
                  className="group block overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  {CardContent}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {showMoreLink && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href={showMoreLink.href}>
                {showMoreLink.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

