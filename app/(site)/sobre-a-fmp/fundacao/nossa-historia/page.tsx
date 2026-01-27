"use client";

import HeroSection from "@/app/_components/Home/HeroSection";
import ComoNasceuFMPSection from "@/app/_components/SobreAFMP/nossa-historia/ComoNasceuFMPSection";
import FinalTextSection from "@/app/_components/SobreAFMP/nossa-historia/FinalTextSection";
import LogosImpactSection from "@/app/_components/SobreAFMP/nossa-historia/LogosImpactSection";
import MilestonesSection from "@/app/_components/SobreAFMP/nossa-historia/MilestonesSection";
import MinisterioPublicoSection from "@/app/_components/SobreAFMP/nossa-historia/MinisterioPublicoSection";

const placeholderImage = "/hero-section.png";

export default function NossaHistoriaPage() {
  return (
    <>
      <HeroSection
        title="Uma história de propósito"
        subtitle="Inspirado por modelos internacionais e guiada por excelência e compromisso cívico."
        backgroundImage={placeholderImage}
      />

      <ComoNasceuFMPSection />
      <MinisterioPublicoSection />
      <MilestonesSection />
      <LogosImpactSection />
      <FinalTextSection />
    </>
  );
}

