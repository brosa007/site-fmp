"use client";

import { cn } from "@/app/_lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItemProps {
  year: string;
  text: string;
  image: string;
  imageAlt: string;
  position: "left" | "right";
  index: number;
}

export default function TimelineItem({
  year,
  text,
  image,
  imageAlt,
  position,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "relative w-full md:w-[45%]",
        position === "left" ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto md:text-left"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          position === "left" ? "md:items-end" : "md:items-start"
        )}
      >
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
        
        <div className={cn("space-y-2", position === "left" ? "md:text-right" : "md:text-left")}>
          <h3 className="text-2xl md:text-3xl font-heading font-medium text-primary">
            {year}
          </h3>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
