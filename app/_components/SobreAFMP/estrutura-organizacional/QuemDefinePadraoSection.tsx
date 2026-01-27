"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";

export default function QuemDefinePadraoSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-8")}
        >
          Quem define o padrão
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none space-y-6 text-foreground"
        >
          <p className="text-base md:text-lg leading-relaxed">
            A estrutura organizacional da FMP é definida por conselhos e órgãos que garantem a
            excelência acadêmica e a gestão sistêmica e integrada da instituição. Cada conselho
            possui responsabilidades específicas que contribuem para o fortalecimento do ensino
            jurídico e o desenvolvimento institucional.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Esses órgãos trabalham de forma coordenada para estabelecer diretrizes, definir políticas
            acadêmicas e administrativas, e garantir que a FMP mantenha seu compromisso com a
            qualidade do ensino, a pesquisa e a extensão em Direito.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
