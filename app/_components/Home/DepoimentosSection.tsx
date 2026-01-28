"use client";

import { cn } from "@/app/_lib/utils";
import { cardVariants, containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { depoimentos, animationVariants } from "./constants";

export default function DepoimentosSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-12 text-center")}
        >
          O que nossos ex-alunos dizem
        </motion.h2>

        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {depoimentos.map((depoimento) => (
            <motion.div
              key={depoimento.id}
              variants={animationVariants.fadeInUp}
              className={cn(cardVariants({ variant: "white", padding: "md" }))}
            >
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{depoimento.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={depoimento.image}
                    alt={depoimento.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{depoimento.name}</p>
                  <p className="text-sm text-muted-foreground">{depoimento.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicadores de carousel (dots) */}
        <div className="flex justify-center gap-2 mt-8">
          {depoimentos.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === 0 ? "bg-primary" : "bg-border"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
