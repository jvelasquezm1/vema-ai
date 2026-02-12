import { motion } from "framer-motion";
import {
  Bot,
  Calendar,
  Bell,
  FileText,
  CreditCard,
  MessageCircle,
  TrendingUp,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamiento inteligente",
    description:
      "Automatiza la programación de citas y optimiza la ocupación de tu consulta.",
  },
  {
    icon: Bell,
    title: "Reducción de no-shows",
    description:
      "Recordatorios inteligentes por múltiples canales que se adaptan a cada paciente.",
  },
  {
    icon: Bot,
    title: "Seguimiento postoperatorio",
    description:
      "Monitorización automatizada de la recuperación con alertas para el equipo médico.",
  },
  {
    icon: FileText,
    title: "Informes automáticos",
    description:
      "Generación de reportes mensuales de actividad clínica y financiera.",
  },
  {
    icon: CreditCard,
    title: "Gestión de cobros",
    description:
      "Automatización de facturación, pagos y seguimiento de cuentas pendientes.",
  },
  {
    icon: MessageCircle,
    title: "Atención 24/7",
    description:
      "Respuestas inmediatas a consultas de pacientes en cualquier momento del día.",
  },
  {
    icon: TrendingUp,
    title: "Marketing automatizado",
    description:
      "Estrategias de captación y fidelización ejecutadas de forma inteligente.",
  },
  {
    icon: Clock,
    title: "Optimización clínica",
    description:
      "Más tiempo para lo que importa: tus pacientes y tu práctica médica.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vema-cyan-soft text-accent text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
            Automatización inteligente para{" "}
            <span className="text-gradient">cada proceso</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un ecosistema completo de agentes de IA que trabajan en conjunto
            para optimizar cada aspecto de tu clínica oftalmológica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-accent/30 hover:glow-cyan transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-lg bg-vema-cyan-soft flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2 text-sm">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
