"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import { milestones } from "../constants";

export default function MilestonesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6 text-foreground"
        >
          {milestones.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
