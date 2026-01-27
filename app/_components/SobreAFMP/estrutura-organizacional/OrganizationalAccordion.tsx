"use client";

import { cn } from "@/app/_lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { EstruturaOrganizacionalItem } from "../constants";

interface OrganizationalAccordionProps {
  items: EstruturaOrganizacionalItem[];
}

export default function OrganizationalAccordion({ items }: OrganizationalAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (title: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(title)) {
      newOpenItems.delete(title);
    } else {
      newOpenItems.add(title);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="border border-border rounded-lg overflow-hidden bg-card"
        >
          <button
            onClick={() => toggleItem(item.title)}
            className={cn(
              "w-full flex items-center justify-between p-4 md:p-6 text-left",
              "hover:bg-secondary transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            )}
            aria-expanded={openItems.has(item.title)}
          >
            <span className="font-medium text-foreground text-base md:text-lg">
              {item.title}
            </span>
            <ChevronRight
              className={cn(
                "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                openItems.has(item.title) && "rotate-90"
              )}
            />
          </button>
          
          {openItems.has(item.title) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2">
                {item.content && (
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                    {item.content}
                  </p>
                )}
                {item.children && item.children.length > 0 && (
                  <ul className="space-y-2">
                    {item.children.map((child) => (
                      <li
                        key={child.title}
                        className="text-sm md:text-base text-foreground"
                      >
                        {child.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
