import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";

const TrustSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.TrustSection), {
  ssr: true,
});
const OverviewSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.OverviewSection), {
  ssr: true,
});
const StatsSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.StatsSection), {
  ssr: true,
});
const ProgramsSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.ProgramsSection), {
  ssr: true,
});
const FacilitiesSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.FacilitiesSection), {
  ssr: true,
});
const CampusTourSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.CampusTourSection), {
  ssr: true,
});
const StudentLifeSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.StudentLifeSection), {
  ssr: true,
});
const TestimonialsSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.TestimonialsSection), {
  ssr: true,
});
const NewsSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.NewsSection), {
  ssr: true,
});
const GallerySection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.GallerySection), {
  ssr: true,
});
const CtaSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.CtaSection), {
  ssr: true,
});
const FooterSection = dynamic(() => import("@/components/sections/home-sections").then((mod) => mod.FooterSection), {
  ssr: true,
});

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
