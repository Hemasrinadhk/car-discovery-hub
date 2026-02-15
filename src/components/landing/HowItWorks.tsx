import { Car, Users, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Car,
    title: "Browse & Select",
    description: "Find your perfect car from our curated marketplace. Filter by make, model, price, and location.",
  },
  {
    icon: Users,
    title: "Meet Your Skipper",
    description: "A verified Skipper host will be assigned to deliver the car right to your doorstep for a test drive.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule & Drive",
    description: "Pick a time that works for you. Test drive the car at your convenience with zero pressure.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How <span className="text-primary">CarSkipper</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three simple steps to your next car — no dealership visit required.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
