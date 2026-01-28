"use client";

import { cn } from "@/app/_lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface PersonCardProps {
  name: string;
  image: string;
  role?: string;
  index?: number;
}

export default function PersonCard({ name, image, role, index = 0 }: PersonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-center font-medium text-sm md:text-base text-foreground">
        {name}
      </h3>
      {role && (
        <p className="text-center text-xs md:text-sm text-muted-foreground mt-1">
          {role}
        </p>
      )}
    </motion.div>
  );
}
