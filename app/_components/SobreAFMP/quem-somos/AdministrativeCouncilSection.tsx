"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import PersonCard from "./PersonCard";
import { conselhoAdministrativo } from "../constants";

export default function AdministrativeCouncilSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-12")}
        >
          Conselho Administrativo
        </motion.h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {conselhoAdministrativo.map((membro, index) => (
            <PersonCard
              key={membro.name}
              name={membro.name}
              image={membro.image}
              role={membro.role}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
