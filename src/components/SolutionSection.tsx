import { Hexagon, GraduationCap, ShoppingBag } from "lucide-react";

const initiatives = [
  {
    icon: Hexagon,
    title: "Beehive Distribution",
    description: "We provide vulnerable households with quality beehives to start their beekeeping journey.",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Comprehensive training in beekeeping techniques, hive maintenance, and honey harvesting.",
  },
  {
    icon: ShoppingBag,
    title: "Marketing & Sales Support",
    description: "Assistance with packaging, branding, and connecting producers to local and regional markets.",
  },
];

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Beekeeping for
            <span className="text-honey-light"> Independence</span>
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Our flagship beekeeping initiative provides a complete pathway from skill acquisition 
            to sustainable income generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div
              key={item.title}
              className="bg-forest-light/30 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10 hover:border-honey/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-honey/20 flex items-center justify-center mb-6 group-hover:bg-honey group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-8 h-8 text-honey group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-secondary-foreground/80">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-forest-light/30 rounded-full px-6 py-3 border border-secondary-foreground/10">
            <Hexagon className="w-5 h-5 text-honey" />
            <span className="text-sm font-medium">
              Beekeeping creates sustainable income while preserving the environment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
