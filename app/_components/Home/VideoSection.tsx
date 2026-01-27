"use client";

import { containerFMPVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";

interface VideoSectionProps {
  imageSrc?: string;
  alt?: string;
}

export function VideoSection({ 
  imageSrc = "/hero-section.png", 
  alt = "Campus FMP" 
}: VideoSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className={containerFMPVariants()}>
        <div className="relative h-[50vh] md:h-[60vh] rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-fmp-black/40 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
            >
              <div 
                className="w-0 h-0 border-l-[20px] border-l-primary-foreground border-y-[12px] border-y-transparent ml-1" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
