"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { finalText } from "../constants";

export default function FinalTextSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-foreground"
          >
            {finalText.text.map((paragraph, index) => (
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
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={finalText.image}
                alt="Sala de conferências da FMP"
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
