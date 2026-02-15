import { Home, ShieldCheck, DollarSign, Zap } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "At-Home Test Drives",
    description: "No dealership trips. We bring the car to your door so you can test drive in comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Safest Way to Buy",
    description: "Every vehicle is inspected. Every Skipper is verified. Buy with complete confidence.",
  },
  {
    icon: DollarSign,
    title: "Full Price Transparency",
    description: "No hidden fees, no surprise markups. What you see is what you pay.",
  },
  {
    icon: Zap,
    title: "Instant Pricing",
    description: "Get a fair market estimate for your car in seconds using our smart pricing tool.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Why Choose <span className="text-primary">CarSkipper</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="mb-4 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
