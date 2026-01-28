"use client";

import HeroSection from "@/app/_components/Home/HeroSection";
import AdministrativeCouncilSectionEstrutura from "@/app/_components/SobreAFMP/estrutura-organizacional/AdministrativeCouncilSectionEstrutura";
import OrganizationalStructureSection from "@/app/_components/SobreAFMP/estrutura-organizacional/OrganizationalStructureSection";
import QuemDefinePadraoSection from "@/app/_components/SobreAFMP/estrutura-organizacional/QuemDefinePadraoSection";

const placeholderImage = "/hero-section.png";

export default function EstruturaOrganizacionalPage() {
  return (
    <>
      <HeroSection
        title="Estrutura Organizacional da FMP"
        subtitle="Gestão sistêmica e integrada para excelência em ensino jurídico"
        backgroundImage={placeholderImage}
      />
      <QuemDefinePadraoSection />
      <AdministrativeCouncilSectionEstrutura />
      <OrganizationalStructureSection />
    </>
  );
}

