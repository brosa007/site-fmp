import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/app/_lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  variant?: "default" | "gradient";
  className?: string;
}

/**
 * CTASection - Seção de Call to Action
 * Componente reutilizável para destacar ações importantes
 */
export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
  className,
}: CTASectionProps) {
  const isGradient = variant === "gradient";

  return (
    <section
      className={cn(
        "py-16 sm:py-20",
        isGradient &&
          "bg-gradient-to-r from-[var(--color-vermelho-escuro)] to-[var(--color-vermelho-claro)]",
        !isGradient && "bg-muted",
        className
      )}
    >
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={cn(
            "mb-4 text-3xl font-bold sm:text-4xl md:text-5xl",
            isGradient ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mx-auto mb-8 max-w-2xl text-lg",
              isGradient ? "text-white/90" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className={cn(
              isGradient
                ? "bg-white text-[var(--color-vermelho-escuro)] hover:bg-white/90"
                : "bg-gradient-to-r from-[var(--color-vermelho-escuro)] to-[var(--color-vermelho-claro)] text-white hover:opacity-90"
            )}
          >
            <Link href={primaryAction.href}>{primaryAction.label}</Link>
          </Button>
          {secondaryAction && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                isGradient
                  ? "border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  : "border-border"
              )}
            >
              <Link href={secondaryAction.href}>
                {secondaryAction.label}
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

