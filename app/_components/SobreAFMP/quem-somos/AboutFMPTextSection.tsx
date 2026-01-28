"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";

export default function AboutFMPTextSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-8")}
        >
          Excelência em Direito há mais de 40 anos
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none space-y-6 text-foreground"
        >
          <p className="text-base md:text-lg leading-relaxed">
            Desde 1985, a FMP tem um propósito claro: fortalecer o ensino jurídico e formar
            profissionais preparados para defender direitos e atuar com justiça. Criada por
            Promotores e Procuradores de Justiça do Rio Grande do Sul, consolidou-se como
            referência naquele flagelo da justiça.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Como instituição pioneira sem fins lucrativos, dedica-se à pesquisa, ao ensino e à
            extensão em Direito, promovendo a iniciação científica e a produção profissional.
            Mantendo-se atenta às transformações do Direito, busca primorar a formação de seus
            estudantes com uma abordagem orientada às exigências do meio jurídico.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Ao longo de sua trajetória, a FMP expandiu sua atuação, acompanhando as mudanças na
            sociedade e no Direito. Seja na formação de novos profissionais ou no aperfeiçoamento
            daqueles que já atuam na área, a instituição segue comprometida com a evolução do
            ensino jurídico e o desenvolvimento acadêmico de seus alunos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
