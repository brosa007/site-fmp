"use client";

import { cn } from "@/app/_lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface MissionVisionValuesCardProps {
  title: string;
  description: string;
  image: string;
  index?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export default function MissionVisionValuesCard({
  title,
  description,
  image,
  index = 0,
  isActive = false,
  onClick,
}: MissionVisionValuesCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={cn(
        "relative rounded-lg overflow-hidden cursor-pointer group",
        "w-full max-w-[400px] h-[400px] md:h-[500px]",
        "flex-shrink-0 mx-auto"
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-fmp-black/90 via-fmp-black/50 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-heading font-medium text-fmp-white mb-3">
          {title}
        </h3>
        <p className="text-fmp-white/90 text-sm md:text-base leading-relaxed mb-4">
          {description}
        </p>
        
        {onClick && (
          <button
            className="w-10 h-10 rounded-full bg-fmp-white/20 hover:bg-fmp-white/30 text-fmp-white flex items-center justify-center transition-colors"
            aria-label={`Ver mais sobre ${title}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
