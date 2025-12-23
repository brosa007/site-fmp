import { cn } from "@/app/_lib/utils";

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  className?: string;
}

/**
 * StatsSection - Seção de estatísticas/números
 * Componente reutilizável para exibir dados numéricos importantes
 */
export function StatsSection({
  title,
  subtitle,
  stats,
  className,
}: StatsSectionProps) {
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

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-[var(--color-vermelho-escuro)] sm:text-5xl md:text-6xl">
                {stat.value}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground sm:text-xl">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

