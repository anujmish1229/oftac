import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FounderSection } from "@/components/FounderSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SolutionSection />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
