"use client";

import { cn } from "@/app/_lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CarouselSectionProps {
  title?: string;
  subtitle?: string;
  items: React.ReactNode[];
  className?: string;
  itemsPerView?: 1 | 2 | 3 | 4;
}

/**
 * CarouselSection - Carrossel genérico e reutilizável
 * Componente reutilizável para exibir qualquer tipo de conteúdo em carrossel
 */
export function CarouselSection({
  title,
  subtitle,
  items,
  className,
  itemsPerView = 3,
}: CarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const nextItems = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevItems = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  if (items.length === 0) return null;

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);

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

        <div className="relative">
          {/* Navigation Arrows */}
          {items.length > itemsPerView && (
            <>
              <button
                onClick={prevItems}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background p-2 shadow-md transition-all hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextItems}
                disabled={currentIndex >= maxIndex}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background p-2 shadow-md transition-all hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Próximo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden px-12">
            <div
              className="flex gap-6 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * (100% / ${itemsPerView} + 1.5rem)))`,
              }}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% / ${itemsPerView}) - 1.5rem * ${(itemsPerView - 1) / itemsPerView})`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          {items.length > itemsPerView && (
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({
                length: maxIndex + 1,
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === currentIndex
                      ? "w-8 bg-[var(--color-vermelho-escuro)]"
                      : "w-2 bg-muted-foreground/30"
                  )}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
