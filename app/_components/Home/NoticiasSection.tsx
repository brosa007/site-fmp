"use client";

import { cn } from "@/app/_lib/utils";
import { badgeVariants, cardVariants, containerFMPVariants } from "@/app/_lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { noticias, animationVariants } from "./constants";

export function NoticiasSection() {
  const featuredNews = noticias.slice(0, 2);
  const newsList = noticias;

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className={containerFMPVariants()}>
        <motion.div
          variants={animationVariants.staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Colunas Esquerda e Meio - Cards de Artigos */}
          {featuredNews.map((noticia, index) => (
            <motion.div
              key={noticia.id}
              variants={animationVariants.fadeInUp}
              className={cn(cardVariants({ variant: "white", padding: "none" }), "overflow-hidden")}
            >
              <Link href={noticia.href} className="block group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={noticia.image}
                    alt={noticia.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className={badgeVariants({ variant: "default" })}>
                      {noticia.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-medium text-primary mb-2 line-clamp-2 group-hover:underline">
                    {noticia.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{noticia.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Coluna Direita - Lista de Notícias */}
          <motion.div
            variants={animationVariants.fadeInUp}
            className={cn(cardVariants({ variant: "white", padding: "md" }))}
          >
            <h3 className="font-heading text-lg font-medium text-primary mb-4">
              Últimas notícias
            </h3>
            <ul className="space-y-4">
              {newsList.map((noticia) => (
                <li key={noticia.id}>
                  <Link
                    href={noticia.href}
                    className="block group hover:text-primary transition-colors"
                  >
                    <p className="text-sm font-medium mb-1 line-clamp-2 group-hover:underline">
                      {noticia.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{noticia.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
