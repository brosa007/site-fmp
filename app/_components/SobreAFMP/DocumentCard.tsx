import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface DocumentCardProps {
  title: string;
  href: string;
  className?: string;
}

export function DocumentCard({ title, href, className = "" }: DocumentCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`document-card group ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
        {title}
      </span>
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
        <ChevronRight className="w-5 h-5" />
      </span>
    </motion.a>
  );
}
