import { Users, TrendingDown, DollarSign, Heart } from "lucide-react";

const stats = [
  {
    value: "144,000",
    label: "People in Kyangwali Settlement",
    description: "One of Uganda's largest refugee communities",
  },
  {
    value: "19%",
    label: "Youth Population (15-26)",
    description: "Young people seeking opportunities",
  },
  {
    value: "58%",
    label: "Aid Reduction",
    description: "Drop in monthly cash assistance",
  },
  {
    value: "$3.50",
    label: "Monthly Support Per Person",
    description: "Current aid level per month",
  },
];

export const StatsSection = () => {
  return (
    <section id="challenge" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A Community in Need
          </h2>
          <p className="text-lg text-muted-foreground">
            The Kyangwali Refugee Settlement faces significant challenges as international support 
            continues to decrease, leaving families struggling to meet basic needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-earth/5 rounded-2xl p-8 border border-earth/10">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Monthly cash assistance has dropped from 31,000 UGX (US$8.75) to just 
            13,000 UGX (US$3.67) per person. Families need sustainable solutions, 
            not temporary aid.
          </p>
        </div>
      </div>
    </section>
  );
};
