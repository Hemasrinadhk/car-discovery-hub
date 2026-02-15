import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <div className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">Now serving Texas cities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
            Test Drives{" "}
            <span className="text-primary">Delivered</span>{" "}
            to Your Door
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Buy and sell cars the modern way. Our Skippers bring the car to you for a hassle-free test drive experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base font-semibold px-8 h-12">
              <Link to="/buy">
                See All Cars
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-semibold px-8 h-12">
              <Link to="/sell">Sell Your Car</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
