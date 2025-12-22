import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import founderPortrait from "@/assets/founder-portrait.jpg";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-cream to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                Meet Our Team
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                The People Behind
                <span className="text-honey"> OFTAC</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dedicated individuals working together to transform lives through sustainable beekeeping.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-honey/30 to-forest/30 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={founderPortrait}
                    alt="Samuel Usabuwera, Founder of OFTAC"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <span className="inline-block px-4 py-1.5 bg-honey/20 text-honey-dark rounded-full text-sm font-medium mb-6">
                  Founder & Director
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Samuel Usabuwera
                </h2>
                <div className="w-20 h-1 bg-honey mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Samuel Usabuwera grew up in the Kyangwali Refugee Settlement of Uganda, Africa, 
                    after his family was forced to flee Rwanda as a result of the Rwandan genocide.
                  </p>
                  <p>
                    He and his family experienced firsthand the devastation of leaving everything 
                    behind and facing the daunting task of starting over in life with minimal support.
                  </p>
                  <p>
                    But Samuel's father had a skill and experience that wasn't left behind in Rwanda: 
                    <strong className="text-foreground"> beekeeping</strong>.
                  </p>
                  <p>
                    This expertise proved to have a generational impact as Samuel took on the trade 
                    and now considers beekeeping a mission to help empower other refugees to become 
                    free from lifestyles of poverty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Join */}
        <section className="py-20 lg:py-32 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                We're always looking for passionate individuals who want to make a difference. 
                Whether through volunteering, partnerships, or donations, there's a place for you in our community.
              </p>
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-honey text-secondary font-semibold rounded-full hover:bg-honey-light transition-colors duration-300"
              >
                Support Our Cause
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
