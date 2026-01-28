"use client";

import { containerFMPVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function OABRecomendaSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-[8rem] md:text-[12rem] font-heading font-bold text-primary leading-none">
              4<span className="text-primary/50">x</span>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded font-medium">
                Selo OAB Recomenda
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-medium mb-4">
              Selo OAB Recomenda
            </h2>
            <p className="text-muted-foreground mb-6">
              A FMP é a única Faculdade Privada de Direito de Porto Alegre a conquistar o selo OAB Recomenda quatro vezes consecutivas. Um reconhecimento que atesta a qualidade do nosso ensino jurídico e o comprometimento com a formação de excelência.
            </p>
            <Link
              href="/sobre-a-fmp/faculdade/selos-e-reconhecimento"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Saiba mais <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
