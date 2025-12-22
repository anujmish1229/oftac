import founderImage from "@/assets/founder-portrait.jpg";
import { useNavigate } from "react-router-dom";

export const FounderSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="founder" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={founderImage}
                alt="Samuel Usabuwera, Founder of OFTAC"
                className="w-fullobject-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 hover:cursor-pointer" onClick={() => navigate('/team')}>
              Samuel Usabuwera
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Samuel grew up in the Kyangwali Refugee Settlement of Uganda after his family was 
                forced to flee Rwanda as a result of the Rwandan genocide.
              </p>
              <p>
                He and his family experienced firsthand the devastation of leaving everything behind 
                and facing the daunting task of starting over with minimal support.
              </p>
              <p className="text-foreground font-medium">
                But Samuel&apos;s father had a skill that wasn&apos;t left behind in Rwanda: beekeeping.
              </p>
              <p>
                This expertise proved to have a generational impact as Samuel took on the trade and 
                now considers beekeeping a mission to help empower other refugees to become free from 
                lifestyles of poverty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
