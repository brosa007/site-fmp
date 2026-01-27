"use client";

import { cn } from "@/app/_lib/utils";
import { containerFMPVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { timelineEvents } from "../constants";

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className={containerFMPVariants()}>
        <div className="relative">
          {/* Linha vertical central */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2" />

          {/* Container dos eventos */}
          <div className="relative space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const position = index % 2 === 0 ? "left" : "right";
              
              // Se for um item especial (como o card de 2023), renderiza diferente
              if (event.type === "special") {
                return (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full md:w-[45%] mx-auto"
                  >
                    <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-lg shadow-lg border border-border">
                      <p className="text-2xl md:text-3xl font-heading font-medium text-primary text-center">
                        {event.text}
                      </p>
                    </div>
                  </motion.div>
                );
              }

              return (
                <div key={event.year} className="relative">
                  {/* Ponto na linha central */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-background" />
                  
                  <TimelineItem
                    year={event.year}
                    text={event.text}
                    image={event.image}
                    imageAlt={event.imageAlt}
                    position={position}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
