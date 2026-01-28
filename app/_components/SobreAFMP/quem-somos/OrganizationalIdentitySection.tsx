"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import MissionVisionValuesCard from "./MissionVisionValuesCard";
import { identidadeOrganizacional } from "../constants";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OrganizationalIdentitySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % identidadeOrganizacional.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + identidadeOrganizacional.length) % identidadeOrganizacional.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-12")}
        >
          Nossa Identidade Organizacional
        </motion.h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {identidadeOrganizacional.map((item, index) => (
                <div
                  key={item.title}
                  className="w-full flex-shrink-0 flex justify-center px-4"
                >
                  <MissionVisionValuesCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    index={index}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors shadow-lg"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors shadow-lg"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {identidadeOrganizacional.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-primary/50"
                )}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
