import {
  BadgeSection,
  CardsSection,
  CarouselSection,
  HeroSection,
  StatsSection,
  TestimonialsSection,
  VideoSection,
  type Card,
  type Stat,
  type Testimonial,
} from "@/app/_components/sections";
import { ROUTES } from "@/app/_lib/routes";
import { generateMetadata } from "@/app/_lib/seo";
import Image from "next/image";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Faculdade de Direito da Fundação Escola Superior do Ministério Público",
  path: "/",
});

export default function HomePage() {
  // Estatísticas "O que faz a diferença no seu futuro"
  const diferenciaisStats: Stat[] = [
    {
      value: "+1500",
      label: "Alunos Egressos",
      description: "Profissionais formados",
    },
    {
      value: "+40",
      label: "Anos de Tradição",
      description: "Excelência em ensino",
    },
    {
      value: "+80%",
      label: "Promotores no MP",
      description: "Que atuam no Ministério Público",
    },
    {
      value: "+22 mil",
      label: "Matrículas",
      description: "Realizadas ao longo dos anos",
    },
  ];

  // Selos para o carrossel
  const selos = [
    { image: "/selos/selo1.png", alt: "Selo 1" },
    { image: "/selos/selo2.png", alt: "Selo 2" },
    { image: "/selos/selo3.png", alt: "Selo 3" },
    { image: "/selos/selo4.png", alt: "Selo 4" },
  ];

  // Últimas notícias do blog
  const ultimasNoticias: Card[] = [
    {
      title: "Notícia 1",
      description: "Descrição da notícia mais recente do blog.",
      metadata: "15 de Janeiro, 2024",
      href: ROUTES.CONTEUDOS.BLOG_E_REVISTAS.BASE,
    },
    {
      title: "Notícia 2",
      description: "Descrição da segunda notícia mais recente.",
      metadata: "12 de Janeiro, 2024",
      href: ROUTES.CONTEUDOS.BLOG_E_REVISTAS.BASE,
    },
    {
      title: "Notícia 3",
      description: "Descrição da terceira notícia mais recente.",
      metadata: "10 de Janeiro, 2024",
      href: ROUTES.CONTEUDOS.BLOG_E_REVISTAS.BASE,
    },
  ];

  // Depoimentos
  const depoimentos: Testimonial[] = [
    {
      name: "João Silva",
      role: "Promotor de Justiça",
      content:
        "A FMP foi fundamental para minha formação. O corpo docente é excelente e a estrutura é de primeira qualidade.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "Advogada",
      content:
        "Aprendi muito durante minha graduação na FMP. A instituição realmente prepara os alunos para o mercado de trabalho.",
      rating: 5,
    },
    {
      name: "Pedro Costa",
      role: "Desembargador",
      content:
        "Recomendo a FMP para todos que buscam excelência no ensino jurídico. Uma das melhores instituições do país.",
      rating: 5,
    },
  ];

  // Itens do carrossel de selos
  const carouselSelos = selos.map((selo, index) => (
    <div key={index} className="flex items-center justify-center p-4">
      <Image
        src={selo.image}
        alt={selo.alt}
        width={200}
        height={200}
        className="h-auto w-auto max-w-full object-contain"
      />
    </div>
  ));

  return (
    <div className="space-y-0">
      {/* Hero Sections - 6x */}
      <HeroSection
        title="Somos a evolução do Direito"
        backgroundImage="/hero-section.png"
        primaryAction={{
          label: "Conheça a FMP",
          href: ROUTES.SOBRE_A_FMP.BASE,
        }}
      />

      <HeroSection
        title="Graduação"
        backgroundImage="/hero-section.png"
        primaryAction={{
          label: "Saiba mais",
          href: ROUTES.ENSINO.GRADUACAO.BASE,
        }}
      />

      <HeroSection
        title="Pós-Graduação"
        backgroundImage="/hero-section.png"
        primaryAction={{
          label: "Saiba mais",
          href: ROUTES.ENSINO.POS_GRADUACAO.BASE,
        }}
      />

      <HeroSection
        title="Mestrado"
        backgroundImage="/hero-section.png"
        primaryAction={{
          label: "Saiba mais",
          href: ROUTES.ENSINO.MESTRADO.BASE,
        }}
      />

      <HeroSection
        title="Preparatório"
        backgroundImage="/hero-section.png"
        primaryAction={{
          label: "Matricule-se",
          href: ROUTES.ENSINO.PREPARATORIO.BASE,
        }}
      />

      <HeroSection
        title="Cursos Livres"
        backgroundImage="/hero-section.png"
        primaryAction={{
          label: "Saiba mais",
          href: ROUTES.ENSINO.CURSOS_LIVRES.BASE,
        }}
      />

      {/* Seção "O que faz a diferença no seu futuro" */}
      <StatsSection
        title="O que faz a diferença no seu futuro"
        stats={diferenciaisStats}
        className="bg-muted/30"
      />

      {/* Selo OAB Recomenda */}
      <BadgeSection
        title="OAB Recomenda"
        badges={[
          {
            image: "/selos/oab-recomenda.png",
            alt: "Selo OAB Recomenda",
          },
        ]}
        className="bg-muted/30"
      />

      {/* Autoridade em ensino jurídico */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-foreground text-3xl font-bold sm:text-4xl md:text-5xl">
            Autoridade em ensino jurídico
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Com mais de 40 anos de tradição, a FMP é referência nacional em
            ensino jurídico, formando profissionais que fazem a diferença no
            mercado de trabalho.
          </p>
        </div>
      </section>

      {/* Carrossel de Selos */}
      <CarouselSection
        items={carouselSelos}
        itemsPerView={4}
        className="bg-muted/30"
      />

      {/* Vídeo Institucional */}
      <VideoSection
        title="Conheça a FMP"
        subtitle="Nossa Instituição"
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Substituir pela URL real
        description="Assista ao vídeo institucional e conheça mais sobre a Faculdade de Direito FMP."
      />

      {/* Últimas Notícias do Blog */}
      <CardsSection
        title="Últimas Notícias"
        subtitle="Blog FMP"
        cards={ultimasNoticias}
        columns={3}
        showMoreLink={{
          label: "Ver todas as notícias",
          href: ROUTES.CONTEUDOS.BLOG_E_REVISTAS.BASE,
        }}
        className="bg-muted/30"
      />

      {/* Carrossel de Depoimentos */}
      <TestimonialsSection
        title="O que nossos alunos dizem"
        subtitle="Depoimentos"
        testimonials={depoimentos}
      />
    </div>
  );
}
