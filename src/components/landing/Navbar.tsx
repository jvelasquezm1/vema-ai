import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Eye className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground text-lg">
              VEMA IA
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
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

          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Reservar demo
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden py-4 border-t border-border"
          >
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground mb-4">
              <a
                href="#funcionalidades"
                onClick={() => setMobileOpen(false)}
                className="hover:text-foreground py-2"
              >
                Funcionalidades
              </a>
              <a
                href="#agendamiento"
                onClick={() => setMobileOpen(false)}
                className="hover:text-foreground py-2"
              >
                Agendamiento
              </a>
              <a
                href="#reportes"
                onClick={() => setMobileOpen(false)}
                className="hover:text-foreground py-2"
              >
                Reportes
              </a>
            </nav>
            <Button variant="hero" size="sm" className="w-full">
              Reservar demo
            </Button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
