"use client";

import HeroSection from "@/app/_components/Home/HeroSection";
import AboutFMPTextSection from "@/app/_components/SobreAFMP/quem-somos/AboutFMPTextSection";
import AdministrativeCouncilSection from "@/app/_components/SobreAFMP/quem-somos/AdministrativeCouncilSection";
import OrganizationalIdentitySection from "@/app/_components/SobreAFMP/quem-somos/OrganizationalIdentitySection";

const placeholderImage = "/hero-section.png";

export default function FundacaoQuemSomosPage() {
  return (
    <>
      <HeroSection
        title="Fundação Escola Superior do Ministério Público"
        subtitle="Fundada por Promotores e Procuradores, a FMP fortalece o ensino jurídico com pesquisa, extensão e prática."
        backgroundImage={placeholderImage}
      />

      <AboutFMPTextSection />
      <AdministrativeCouncilSection />
      <OrganizationalIdentitySection />
    </>
  );
}

