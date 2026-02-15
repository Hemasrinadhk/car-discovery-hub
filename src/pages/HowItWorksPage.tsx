import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import FAQ from "@/components/landing/FAQ";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              How <span className="text-primary">CarSkipper</span> Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              We're changing the way people buy and sell cars — one doorstep test drive at a time.
            </p>
          </div>
        </section>
        <HowItWorks />
        <Benefits />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
