export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background honeycomb-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Organization for Transforming
            <br />
            <span className="text-gradient-honey">African Communities</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground text-left sm:text-center">
            <p>
              OFTAC was established to <span className="text-foreground font-semibold">empower refugee families and youth</span> by 
              providing them with sustainable income opportunities. We believe that with the right tools, 
              training, and support, refugees can break free from dependency and build dignified, 
              self-sufficient lives.
            </p>
            <p>
              Our organization has been operating for just over a year and has recently been officially 
              registered in Uganda as a community-based organization. We are growing every day, driven by 
              the passion and resilience of the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
