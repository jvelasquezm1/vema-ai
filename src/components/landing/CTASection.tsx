import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useDemoRequest } from "@/contexts/DemoRequestContext";

const CTASection = () => {
  const { openDemo } = useDemoRequest();
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />

      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Lleva tu clínica al{" "}
            <span className="text-gradient">siguiente nivel</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Descubre cómo VEMA AI puede transformar la gestión de tu clínica
            oftalmológica. Sin compromiso, sin presión.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              className="text-base px-8 py-6"
              onClick={openDemo}
            >
              Reservar una demo
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              className="text-base px-8 py-6"
            >
              Más información
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Demo personalizada · Sin coste · Sin compromiso
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
