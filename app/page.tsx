import {
  CampusTourSection,
  CtaSection,
  FacilitiesSection,
  FooterSection,
  GallerySection,
  HeroSection,
  NewsSection,
  OverviewSection,
  ProgramsSection,
  StatsSection,
  StudentLifeSection,
  TestimonialsSection,
  TrustSection,
} from "@/components/sections/home-sections";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustSection />
        <OverviewSection />
        <StatsSection />
        <ProgramsSection />
        <FacilitiesSection />
        <CampusTourSection />
        <StudentLifeSection />
        <TestimonialsSection />
        <NewsSection />
        <GallerySection />
        <CtaSection />
      </main>
      <FooterSection />
    </>
  );
}
