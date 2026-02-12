import { motion } from "framer-motion";
import { MessageCircle, Clock, Smartphone } from "lucide-react";

const SchedulingSection = () => {
  return (
    <section id="agendamiento" className="py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-vema-cyan-soft text-accent text-sm font-medium mb-4">
              Siempre disponible
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-6">
              Tu clínica, operativa{" "}
              <span className="text-gradient">las 24 horas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Los pacientes pueden agendar citas, resolver dudas y recibir
              información relevante en cualquier momento, sin necesidad de que
              tu equipo esté presente.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MessageCircle,
                  title: "Integración con WhatsApp",
                  text: "Canal preferido por los pacientes, gestionado automáticamente.",
                },
                {
                  icon: Clock,
                  title: "Respuesta inmediata",
                  text: "Sin tiempos de espera. Cada consulta recibe atención al instante.",
                },
                {
                  icon: Smartphone,
                  title: "Panel de control unificado",
                  text: "Visibilidad completa de todas las interacciones desde un solo lugar.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-vema-cyan-soft flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 glow-subtle max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-vema-cyan-soft flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    VEMA Asistente
                  </p>
                  <p className="text-xs text-vema-green flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-vema-green inline-block animate-pulse-glow" />
                    En línea
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-vema-blue-soft rounded-xl rounded-tl-sm p-3 max-w-[80%]">
                  <p className="text-sm text-foreground">
                    Hola, me gustaría agendar una cita para revisión ocular.
                  </p>
                </div>
                <div className="bg-vema-cyan-soft rounded-xl rounded-tr-sm p-3 max-w-[80%] ml-auto">
                  <p className="text-sm text-foreground">
                    ¡Por supuesto! Tenemos disponibilidad esta semana. ¿Prefiere
                    por la mañana o por la tarde?
                  </p>
                </div>
                <div className="bg-vema-blue-soft rounded-xl rounded-tl-sm p-3 max-w-[80%]">
                  <p className="text-sm text-foreground">
                    Por la mañana, preferiblemente martes.
                  </p>
                </div>
                <div className="bg-vema-cyan-soft rounded-xl rounded-tr-sm p-3 max-w-[80%] ml-auto">
                  <p className="text-sm text-foreground">
                    Perfecto. Le he reservado el martes a las 10:00h con el Dr.
                    García. Recibirá confirmación por email.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="bg-muted rounded-lg p-3 flex items-center gap-2">
                  <p className="text-sm text-muted-foreground flex-1">
                    Escribe un mensaje...
                  </p>
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-accent-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-vema-cyan-soft rounded-full opacity-60 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-vema-green-soft rounded-full opacity-60 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;
