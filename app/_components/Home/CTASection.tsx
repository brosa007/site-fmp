"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-fmp-black text-fmp-white">
      <div className="container-fmp">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/20 border-l-4 border-primary p-6 rounded-r-lg mb-6">
              <p className="font-heading italic text-lg md:text-xl">
                O Direito transforma. E você também.
              </p>
              <p className="text-sm text-fmp-white/70 mt-2">
                Junte-se a mais de 1500 juristas formados pela FMP e faça parte dessa história de excelência.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="font-heading italic text-2xl mb-4">
              Construa sua autoridade no Direito.
            </h3>
            <Link href="/ensino/graduacao/formas-de-ingresso" className="btn-fmp-primary">
              Formas de Ingresso
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
