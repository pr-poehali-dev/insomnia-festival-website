import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FestivalHighlights from "@/components/FestivalHighlights";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <FestivalHighlights />
    </div>
  );
};

export default Index;
