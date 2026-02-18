import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useDemoRequest } from "@/contexts/DemoRequestContext";

const HeroSection = () => {
  const { openDemo } = useDemoRequest();
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-vema-cyan-soft rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vema-green-soft rounded-full blur-3xl opacity-30" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-vema-cyan-soft text-accent text-sm font-medium mb-6">
              Inteligencia artificial para oftalmología
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-foreground leading-tight mb-6">
              La gestión de tu clínica,{" "}
              <span className="text-gradient">automatizada con IA</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              VEMA AI es el sistema de agentes inteligentes diseñado
              exclusivamente para clínicas oftalmológicas privadas en España.
              Automatiza procesos, protege datos y mejora la experiencia de tus
              pacientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-8 py-6"
                onClick={openDemo}
              >
                Solicitar demo gratuita
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="text-base px-8 py-6"
              >
                <Play className="w-4 h-4 mr-1" />
                Ver cómo funciona
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Sin compromiso · Configuración asistida · Cumplimiento RGPD
            </p>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-cyan animate-float">
              <img
                src={heroDashboard}
                alt="Panel de VEMA AI mostrando analíticas oftalmológicas"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
