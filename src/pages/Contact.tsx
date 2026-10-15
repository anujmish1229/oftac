import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, type LucideIcon } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import whatsappIcon from "@/assets/whatsapp.svg";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const contactInfo: Array<{
  icon: LucideIcon | typeof InstagramIcon | string;
  title: string;
  description: string;
  href?: string;
  isImage?: boolean;
}> = [
  {
    icon: InstagramIcon,
    title: "@OFTAC",
    description: "Reach out to us on Instagram",
  },
  {
    icon: whatsappIcon,
    title: WHATSAPP_DISPLAY,
    description: "Reach out to us on WhatsApp",
    href: WHATSAPP_URL,
    isImage: true,
  },
  {
    icon: Mail,
    title: CONTACT_EMAIL,
    description: "Reach out to us on Email",
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-linear-to-b from-cream to-background">
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
              {contactInfo.map((item) => {
                const IconComponent = item.icon as LucideIcon | typeof InstagramIcon;
                const CardTag = item.href ? "a" : "div";
                const isExternal = item.href?.startsWith("http");
                return (
                  <CardTag
                    key={item.title}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`block bg-forest-light/30 backdrop-blur-xs rounded-2xl p-8 border border-secondary-foreground/10 ${
                      item.href ? "transition-colors hover:border-honey/60" : ""
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-honey/20 flex items-center justify-center mb-6">
                      {item.isImage ? (
                        <img 
                          src={item.icon as string} 
                          alt="" 
                          className="w-7 h-7" 
                          style={{ filter: 'brightness(0) saturate(100%) invert(60%) sepia(98%) saturate(1574%) hue-rotate(360deg) brightness(98%) contrast(101%)' }}
                        />
                      ) : (
                        <IconComponent className="w-7 h-7 text-honey" />
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-secondary-foreground/80 leading-relaxed">{item.description}</p>
                  </CardTag>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
