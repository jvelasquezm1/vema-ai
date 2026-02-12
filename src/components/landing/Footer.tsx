import { Eye } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Eye className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">
              VEMA IA
            </span>
          </div>

          <nav className="flex gap-8 text-sm text-muted-foreground">
            <a
              href="#funcionalidades"
              className="hover:text-foreground transition-colors"
            >
              Funcionalidades
            </a>
            <a
              href="#agendamiento"
              className="hover:text-foreground transition-colors"
            >
              Agendamiento
            </a>
            <a
              href="#reportes"
              className="hover:text-foreground transition-colors"
            >
              Reportes
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VEMA IA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
