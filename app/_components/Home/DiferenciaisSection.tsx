"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import { diferenciais, animationVariants } from "./constants";

export default function DiferenciaisSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-10")}
        >
          A diferença começa na escolha
        </motion.h2>

        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {diferenciais.map((item) => (
            <motion.div
              key={item.title}
              variants={animationVariants.fadeInUp}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading text-lg font-medium text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
