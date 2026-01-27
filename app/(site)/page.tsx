"use client";

import {
  HeroSection,
  CursosSection,
  DiferenciaisSection,
  OABRecomendaSection,
  CTASection,
  VideoSection,
} from "@/app/_components/Home";
import Link from "next/link";

const placeholderImage = "/hero-section.png";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Onde o saber jurídico se encontra."
        subtitle="Fundação Escola Superior do Ministério Público - Excelência em ensino jurídico desde 1983."
        backgroundImage={placeholderImage}
      >
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/ensino/graduacao" className="btn-fmp-primary">
            Conheça a Graduação
          </Link>
          <Link href="/sobre-a-fmp/fundacao/quem-somos" className="btn-fmp bg-fmp-white/20 text-fmp-white hover:bg-fmp-white hover:text-foreground">
            Sobre a FMP
          </Link>
        </div>
      </HeroSection>

      <CursosSection />
      <DiferenciaisSection />
      <OABRecomendaSection />
      <CTASection />
      <VideoSection />
    </>
  );
}
