import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Cumplimiento RGPD",
    description:
      "Todos los datos se procesan conforme al Reglamento General de Protección de Datos europeo.",
  },
  {
    icon: Lock,
    title: "Cifrado end-to-end",
    description:
      "Comunicaciones y datos clínicos protegidos con cifrado de nivel bancario.",
  },
  {
    icon: FileCheck,
    title: "Auditoría continua",
    description:
      "Registro completo de accesos y modificaciones para trazabilidad total.",
  },
  {
    icon: Server,
    title: "Infraestructura en la UE",
    description:
      "Servidores ubicados en la Unión Europea con certificaciones de seguridad.",
  },
];

const SecuritySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-section">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vema-green-soft text-vema-green text-sm font-medium mb-4">
            Seguridad y privacidad
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
            La confianza de tus pacientes,{" "}
            <span className="text-gradient">nuestra prioridad</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Diseñado desde el primer día para cumplir con los estándares más
            exigentes de seguridad en el sector salud.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 glow-subtle hover:glow-cyan transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-vema-cyan-soft flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
