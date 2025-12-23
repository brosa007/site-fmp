import { cn } from "@/app/_lib/utils";

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * FeaturesSection - Seção de recursos/destaques
 * Componente reutilizável para exibir características ou benefícios
 */
export function FeaturesSection({
  title,
  subtitle,
  features,
  columns = 3,
  className,
}: FeaturesSectionProps) {
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
            "grid gap-8 sm:grid-cols-2",
            gridCols[columns],
            columns === 4 && "lg:grid-cols-4"
          )}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              {feature.icon && (
                <div className="mb-4 text-[var(--color-vermelho-escuro)]">
                  {feature.icon}
                </div>
              )}
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

