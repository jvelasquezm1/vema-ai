import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SecuritySection from "@/components/landing/SecuritySection";
import SchedulingSection from "@/components/landing/SchedulingSection";
import DashboardSection from "@/components/landing/DashboardSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <SchedulingSection />
      <DashboardSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
