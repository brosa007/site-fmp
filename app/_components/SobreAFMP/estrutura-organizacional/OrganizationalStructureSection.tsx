"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import OrganizationalAccordion from "./OrganizationalAccordion";
import { estruturaOrganizacional } from "../constants";

export default function OrganizationalStructureSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-12")}
        >
          Estrutura Organizacional
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <OrganizationalAccordion items={estruturaOrganizacional} />
        </motion.div>
      </div>
    </section>
  );
}
