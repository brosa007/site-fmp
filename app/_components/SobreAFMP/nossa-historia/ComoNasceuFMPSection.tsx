"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { comoNasceuFMP } from "../constants";

export default function ComoNasceuFMPSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-8")}
        >
          Como nasceu a FMP
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-foreground"
          >
            {comoNasceuFMP.text.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={comoNasceuFMP.newspaperImage}
                alt="Jornal histórico da fundação da FMP"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
