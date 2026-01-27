"use client";

import { cn } from "@/app/_lib/utils";
import { buttonFMPVariants, containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AutoridadeSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-12 text-center")}
        >
          Autoridade em ensino jurídico
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Box Vermelho */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground p-8 rounded-lg"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4">
              Venha conhecer FMP de perto
            </h3>
            <p className="mb-6 text-primary-foreground/90">
              Agende uma visita e descubra por que a FMP é referência em ensino jurídico. Conheça nossa estrutura, metodologia e corpo docente.
            </p>
            <Link
              href="/sobre-a-fmp/fundacao/quem-somos"
              className={cn(
                buttonFMPVariants({ variant: "outline" }),
                "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              )}
            >
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Box Bege */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 rounded-lg"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4 text-primary">
              Acompanhe nossas notícias
            </h3>
            <p className="mb-6 text-muted-foreground">
              Fique por dentro dos eventos, novidades e conteúdos exclusivos da FMP. Acompanhe nossa trajetória de excelência.
            </p>
            <Link
              href="/conteudos"
              className={cn(
                buttonFMPVariants({ variant: "primary" }),
                "inline-flex items-center gap-2"
              )}
            >
              Ver todas <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
