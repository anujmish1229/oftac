import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beekeeping.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community beekeeping in Uganda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Honeycomb Pattern Overlay */}
      <div className="absolute inset-0 honeycomb-pattern opacity-100 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Empowering Refugees
            <br />
            <span className="text-gradient-honey">One Hive at a Time</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" onClick={() => window.scrollTo({ top: document.getElementById('support')?.offsetTop, behavior: 'smooth' })}>
              Get Involved
            </Button>
            <Button variant="hero-outline" onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
