import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import PopularBrands from "@/components/landing/PopularBrands";
import FAQ from "@/components/landing/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <PopularBrands />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
