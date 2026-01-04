import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrendingUp, Users, Hospital, Leaf, DollarSign, GraduationCap } from "lucide-react";

const projectComponents = [
  {
    icon: Leaf,
    title: "Beehives Distribution",
    description: "OFTAC provides beehives to refugee households, with a focus on those most in need.",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Training",
    description: "Youth and households undergo a four-month detailed training on beekeeping techniques, including how to make beehives from local materials and how to harvest honey effectively.",
  },
  {
    icon: Users,
    title: "Ongoing Support",
    description: "OFTAC provides ongoing support to help households maintain their beehives, market honey, and manage income generation. They also offer access to a demonstration farm for those who lack suitable land.",
  },
];

const impactAreas = [
  {
    icon: DollarSign,
    title: "Economic Empowerment & Financial Independence",
    description: "By providing beekeeping training and support, the project aims to help refugee families create their own source of income. Each trained beekeeper can produce up to 50 kg of honey and 100 grams of bee venom annually, generating approximately $1,800 per household.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Employment for Youth",
    description: "Through the project, youth who are self-reliant for funding their education and family expenses gain the opportunity to work in a minimally demanding setting. This is particularly beneficial for those with pre-existing conditions that limit their ability to engage in traditional jobs.",
  },
  {
    icon: Hospital,
    title: "Improvement in Nutrition and Health",
    description: "The beekeeping project helps mitigate malnutrition and disease by making honey more accessible. Raw honey is rich in nutrients and antioxidants that support health, combat malnutrition, and fight diseases like diabetes and heart conditions.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-cream to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Empowering Through
                <span className="text-honey"> Beekeeping</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The primary goal of the beekeeping project is to provide vulnerable refugee households 
                with a sustainable source of income through beekeeping, reducing their reliance 
                on external aid.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stat */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-primary-foreground/80 text-lg">As of January 2025</p>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                  79 people are already producing honey and experiencing financial independence with a steady source of income
                </p>
                <p className="text-primary-foreground/80 text-lg">and experiencing financial independence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Components */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Components of the Project
              </h2>
              <p className="text-lg text-muted-foreground">
                Our comprehensive approach ensures sustainable success for every household we work with.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectComponents.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-honey/50 transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="w-16 h-16 rounded-2xl bg-honey/20 flex items-center justify-center mb-6 group-hover:bg-honey group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-honey group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expected Impact */}
        <section className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Expected Impact
              </h2>
              <p className="text-lg text-secondary-foreground/80">
                Our beekeeping initiative creates lasting change across multiple dimensions of life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {impactAreas.map((item) => (
                <div
                  key={item.title}
                  className="bg-forest-light/30 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10"
                >
                  <div className="w-14 h-14 rounded-full bg-honey/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-honey" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-secondary-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
