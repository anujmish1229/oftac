import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="support" className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 honeycomb-pattern opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Help Us Transform
            <span className="text-gradient-honey"> More Lives</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Your support can provide a family with the tools they need to build a sustainable future. 
            Every contribution helps us expand our beekeeping program and reach more vulnerable households.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" className="group" onClick={() => window.location.href = '/donate'}>
              Donate Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
