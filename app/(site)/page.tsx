"use client";

import HeroSection from "@/app/_components/Home/HeroSection";
import CursosSection from "@/app/_components/Home/CursosSection";
import DiferenciaisSection from "@/app/_components/Home/DiferenciaisSection";
import OABRecomendaSection from "@/app/_components/Home/OABRecomendaSection";
import AutoridadeSection from "@/app/_components/Home/AutoridadeSection";
import ReconhecimentosSection from "@/app/_components/Home/ReconhecimentosSection";
import VideoSection from "@/app/_components/Home/VideoSection";
import NoticiasSection from "@/app/_components/Home/NoticiasSection";
import DepoimentosSection from "@/app/_components/Home/DepoimentosSection";
import { cn } from "@/app/_lib/utils";
import { buttonFMPVariants } from "@/app/_lib/variants";
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
          <Link
            href="/ensino/graduacao"
            className={buttonFMPVariants({ variant: "primary" })}
          >
            Conheça a Graduação
          </Link>
          <Link
            href="/sobre-a-fmp/fundacao/quem-somos"
            className={cn(
              buttonFMPVariants({ variant: "ghost" }),
              "bg-fmp-white/20 text-fmp-white hover:bg-fmp-white hover:text-foreground"
            )}
          >
            Sobre a FMP
          </Link>
        </div>
      </HeroSection>

      <CursosSection />
      <DiferenciaisSection />
      <OABRecomendaSection />
      <AutoridadeSection />
      <ReconhecimentosSection />
      <VideoSection />
      <NoticiasSection />
      <DepoimentosSection />
    </>
  );
}
