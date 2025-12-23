"use client";

import { cn } from "@/app/_lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export interface Testimonial {
  name: string;
  role?: string;
  image?: string;
  content: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
}

/**
 * TestimonialsSection - Carrossel de depoimentos
 * Componente reutilizável para exibir depoimentos/testemunhos
 */
export function TestimonialsSection({
  title,
  subtitle,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

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

        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-lg border border-border bg-card p-8 shadow-lg">
            {/* Testimonial Content */}
            <div className="text-center">
              {currentTestimonial.rating && (
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "text-2xl",
                        i < currentTestimonial.rating!
                          ? "text-yellow-400"
                          : "text-gray-300"
                      )}
                    >
                      ★
                    </span>
                  ))}
                </div>
              )}

              <blockquote className="mb-6 text-lg italic text-foreground sm:text-xl">
                "{currentTestimonial.content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                {currentTestimonial.image && (
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {currentTestimonial.name}
                  </div>
                  {currentTestimonial.role && (
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonial.role}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-md transition-colors hover:bg-muted"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background p-2 shadow-md transition-colors hover:bg-muted"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {testimonials.length > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === currentIndex
                        ? "w-8 bg-[var(--color-vermelho-escuro)]"
                        : "w-2 bg-muted-foreground/30"
                    )}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

