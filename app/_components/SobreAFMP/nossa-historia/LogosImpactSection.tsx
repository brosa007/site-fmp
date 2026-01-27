"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { logosImpact } from "../constants";

export default function LogosImpactSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {logosImpact.logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-medium text-foreground mb-1">
                    {logo.name}
                  </h3>
                  {logo.subtitle && (
                    <p className="text-sm md:text-base text-muted-foreground">
                      {logo.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-foreground"
          >
            {logosImpact.text.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
