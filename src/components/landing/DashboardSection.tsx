import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart3, ArrowUpRight } from "lucide-react";

const DashboardSection = () => {
  return (
    <section id="reportes" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-vema-cyan-soft text-accent text-sm font-medium mb-4">
            Reportes y cobros
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
            Control financiero{" "}
            <span className="text-gradient">en tiempo real</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visualiza el rendimiento de tu clínica con paneles claros y
            automatiza la gestión de cobros.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-6 lg:p-8 glow-subtle max-w-4xl mx-auto"
        >
          {/* Top Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                label: "Citas del mes",
                icon: BarChart3,
                color: "bg-vema-cyan-soft text-accent",
              },
              {
                label: "Facturación",
                icon: DollarSign,
                color: "bg-vema-green-soft text-vema-green",
              },
              {
                label: "Tasa de asistencia",
                icon: TrendingUp,
                color: "bg-vema-cyan-soft text-accent",
              },
              {
                label: "Cobros pendientes",
                icon: ArrowUpRight,
                color: "bg-vema-blue-soft text-vema-blue",
              },
            ].map((stat, i) => (
              <div key={i} className="bg-muted/50 rounded-xl p-4">
                <div
                  className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center mb-3`}
                >
                  <stat.icon className="w-4 h-4" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {stat.label}
                </p>
                <div className="h-5 bg-border/50 rounded w-20 animate-pulse-glow" />
              </div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="bg-muted/30 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <p className="font-display font-semibold text-foreground text-sm">
                Actividad mensual
              </p>
              <div className="flex gap-3">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent" /> Citas
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-vema-green" />{" "}
                  Ingresos
                </span>
              </div>
            </div>
            {/* Simplified chart bars */}
            <div className="flex items-end gap-2 h-32">
              {[40, 65, 50, 80, 60, 90, 70, 85, 55, 75, 95, 60].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1">
                  <div
                    className="bg-accent/20 rounded-t-sm w-full transition-all duration-500"
                    style={{ height: `${h}%` }}
                  >
                    <div
                      className="bg-accent rounded-t-sm w-full"
                      style={{ height: `${Math.random() * 40 + 30}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Preview */}
          <div className="bg-muted/30 rounded-xl p-4">
            <p className="font-display font-semibold text-foreground text-sm mb-3">
              Últimas transacciones
            </p>
            <div className="space-y-2">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-vema-cyan-soft" />
                    <div>
                      <div className="h-3 bg-border/60 rounded w-24 mb-1" />
                      <div className="h-2 bg-border/40 rounded w-16" />
                    </div>
                  </div>
                  <div className="h-3 bg-vema-green-soft rounded w-16" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
