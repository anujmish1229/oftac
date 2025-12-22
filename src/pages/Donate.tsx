import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { DonationForm } from "@/components/DonationForm";
import { AlternativePaymentInfo } from "@/components/AlternativePaymentInfo";
import { Heart, Users, Hexagon, GraduationCap, Home, Sparkles } from "lucide-react";

const impactStats = [
  { value: "$1,800", label: "Potential annual income per trained beekeeper" },
  { value: "50kg", label: "Honey produced per beekeeper annually" },
  { value: "4 months", label: "Comprehensive training program duration" },
  { value: "50+", label: "Households already achieving independence" },
];

const Donate = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-cream to-background relative overflow-hidden">
          <div className="absolute inset-0 honeycomb-pattern opacity-30" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-honey/20 rounded-full mb-8">
                <Heart className="w-10 h-10 text-honey" />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Lives Through
                <span className="text-honey"> Giving</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Your donation directly empowers refugee families to build sustainable livelihoods 
                through beekeeping, breaking the cycle of dependency on external aid.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-honey/20 text-honey-dark rounded-full text-sm font-medium mb-4">
                Make an Impact
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Donate with Mobile Money
              </h2>
              <p className="text-lg text-muted-foreground">
                Every contribution, no matter the size, creates lasting change in the lives of refugee families.
              </p>
            </div>

            {/* Donation Form Component */}
            <DonationForm />

            {/* Alternative Payment Methods */}
            <div className="mt-16">
              <AlternativePaymentInfo />
            </div>
          </div>
        </section>

        {/* Why Donate */}
        <section className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                  Your Donation Creates Lasting Change
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-forest-light/30 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10">
                  <h3 className="font-display text-xl font-bold mb-4">Breaking the Cycle</h3>
                  <p className="text-secondary-foreground/80">
                    Instead of temporary relief, your support provides skills and resources that 
                    generate income for years to come. Each trained beekeeper becomes a beacon 
                    of hope for their entire community.
                  </p>
                </div>
                <div className="bg-forest-light/30 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10">
                  <h3 className="font-display text-xl font-bold mb-4">Transparent Impact</h3>
                  <p className="text-secondary-foreground/80">
                    100% of your donation goes directly to supporting refugee families through 
                    beehives, training, and ongoing support. We believe in complete transparency 
                    and accountability.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-secondary-foreground/80 mb-6">
                  Questions about donating or want to discuss partnership opportunities?
                </p>
                <Button size="lg" className="bg-honey text-secondary hover:bg-honey-light" asChild>
                  <a href="mailto:info@oftac.org">Contact Our Team</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
