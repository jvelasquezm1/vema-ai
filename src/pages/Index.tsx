import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SecuritySection from "@/components/landing/SecuritySection";
import SchedulingSection from "@/components/landing/SchedulingSection";
import DashboardSection from "@/components/landing/DashboardSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import DemoRequestDialog from "@/components/landing/DemoRequestDialog";
import { DemoRequestProvider } from "@/contexts/DemoRequestContext";

const Index = () => {
  return (
    <DemoRequestProvider>
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
      <DemoRequestDialog />
    </DemoRequestProvider>
  );
};

export default Index;
