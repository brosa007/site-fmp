"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { reconhecimentos, animationVariants } from "./constants";

export default function ReconhecimentosSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-12 text-center")}
        >
          Entre as melhores faculdades privadas
        </motion.h2>

        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {reconhecimentos.map((reconhecimento, index) => (
            <motion.div
              key={reconhecimento.title}
              variants={animationVariants.fadeInUp}
              className={cn(
                "flex flex-col items-center justify-center",
                index === 1 && "md:scale-110" // Badge central maior
              )}
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-primary flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src={reconhecimento.image}
                  alt={reconhecimento.title}
                  fill
                  className="object-cover p-8"
                />
              </div>
              {reconhecimento.description && (
                <p className="mt-4 text-center text-sm text-muted-foreground font-medium">
                  {reconhecimento.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Indicadores de carousel (dots) */}
        <div className="flex justify-center gap-2 mt-8">
          {reconhecimentos.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === 1 ? "bg-primary" : "bg-border"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
