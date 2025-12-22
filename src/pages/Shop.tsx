import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Droplets, Sparkles, Leaf, Heart, ShieldCheck, Users } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Raw Honey",
    tagline: "Pure & Unprocessed",
    description: "Natural, unprocessed honey rich in nutrients. Serves as a natural sweetener and health supplement with all enzymes and nutrients preserved.",
    price: "$25",
    size: "500g",
    icon: Droplets,
    features: ["Rich in antioxidants", "Natural enzymes preserved", "Supports immune health", "Combat malnutrition"],
    primary: true,
  },
  {
    id: 2,
    name: "Bee Venom",
    tagline: "Medicinal Grade",
    description: "Highly valuable bee venom used in various medicinal products, including treatments for arthritis and other health conditions.",
    price: "$120",
    size: "10g",
    icon: Sparkles,
    features: ["Medicinal applications", "Arthritis treatment", "High market value", "Sustainably harvested"],
    primary: false,
  },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Quality and Purity",
    description: "Our honey is raw and unprocessed, retaining all natural nutrients and enzymes, unlike pasteurized commercial honey.",
  },
  {
    icon: Users,
    title: "Community-Based Production",
    description: "Every purchase supports economic empowerment, refugee self-reliance, and community resilience.",
  },
  {
    icon: Leaf,
    title: "Organic and Sustainable",
    description: "Produced with minimal environmental impact using locally available materials and sustainable practices.",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-cream to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-honey/20 text-honey-dark rounded-full text-sm font-medium mb-6">
                Shop With Purpose
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our
                <span className="text-honey"> Products</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every purchase directly supports refugee families in their journey toward financial independence 
                through sustainable beekeeping.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`rounded-3xl p-8 lg:p-10 border-2 transition-all duration-300 hover:shadow-xl ${
                    product.primary 
                      ? "bg-gradient-to-br from-honey/10 to-honey/5 border-honey" 
                      : "bg-card border-border hover:border-honey/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      product.primary ? "bg-honey" : "bg-honey/20"
                    }`}>
                      <product.icon className={`w-8 h-8 ${
                        product.primary ? "text-secondary" : "text-honey"
                      }`} />
                    </div>
                    {product.primary && (
                      <span className="px-3 py-1 bg-honey text-secondary text-xs font-semibold rounded-full">
                        Primary Product
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-honey font-medium mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Heart className="w-4 h-4 text-honey flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-end justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-3xl font-display font-bold text-foreground">{product.price}</p>
                      <p className="text-sm text-muted-foreground">per {product.size}</p>
                    </div>
                    <Button className={product.primary ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}>
                      Contact to Order
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-honey/20 text-honey-light rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Makes Our Products Different
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="bg-forest-light/30 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-honey/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-honey" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-secondary-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Interested in Ordering?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us directly to place an order or inquire about bulk purchases and partnerships.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:info@oftac.org">Get in Touch</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
