import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ImpactGrid from "@/components/ImpactGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CompetenciesSection from "@/components/CompetenciesSection";
import EducationSection from "@/components/EducationSection";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <StickyHeader />
      <HeroSection />
      <ImpactGrid />
      <ExperienceTimeline />
      <CompetenciesSection />
      <EducationSection />
      <DownloadCTA />
      <Footer />
    </>
  );
};

export default Index;
