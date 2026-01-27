"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants, titleVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cursos, animationVariants } from "./constants";

export function CursosSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(titleVariants({ variant: "section" }), "mb-10")}
        >
          Conheça nossos cursos:
        </motion.h2>

        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {cursos.map((curso, index) => (
            <motion.div key={curso.title} variants={animationVariants.fadeInUp}>
              <Link
                href={curso.href}
                className={`relative block rounded-lg overflow-hidden group ${
                  index === 0 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={curso.image}
                    alt={curso.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fmp-black/80 via-fmp-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-fmp-white font-medium text-lg">
                      {curso.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
