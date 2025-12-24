import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrendingUp, Mail, Users, Hospital, DollarSign, Twitter, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Instagram,
    title: "Beehives Distribution",
    description: "OFTAC provides beehives to refugee households, with a focus on those most in need.",
  },
  {
    icon: Twitter,
    title: "Comprehensive Training",
    description: "Youth and households undergo a four-month detailed training on beekeeping techniques, including how to make beehives from local materials and how to harvest honey effectively.",
  },
  {
    icon: Mail,
    title: "Ongoing Support",
    description: "OFTAC provides ongoing support to help households maintain their beehives, market honey, and manage income generation. They also offer access to a demonstration farm for those who lack suitable land.",
  },
];

const projectComponents = [
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

        {/* Expected Impact */}
        <section className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ways to Contact Us
              </h2>
              <p className="text-lg text-secondary-foreground/80">
                We are always here to help you. Please contact us using the methods below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {contactInfo.map((item) => (
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
