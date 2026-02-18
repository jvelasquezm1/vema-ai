import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, Calendar } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useDemoRequest } from "@/contexts/DemoRequestContext";

const demoRequestSchema = z.object({
  nombre: z.string().min(2, "Introduce tu nombre completo"),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().min(9, "Introduce un teléfono válido"),
  clinica: z.string().min(2, "Introduce el nombre de tu clínica"),
  mensaje: z.string().optional(),
});

export type DemoRequestFormValues = z.infer<typeof demoRequestSchema>;

const DemoRequestDialog = () => {
  const { isOpen, closeDemo } = useDemoRequest();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DemoRequestFormValues>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      clinica: "",
      mensaje: "",
    },
  });

  // Reset form when dialog opens for a fresh start
  useEffect(() => {
    if (isOpen && !isSubmitted) {
      form.reset();
    }
  }, [isOpen, isSubmitted, form]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      if (isSubmitted) {
        setIsSubmitted(false);
        form.reset();
      }
      closeDemo();
    }
  };

  const onSubmit = async (data: DemoRequestFormValues) => {
    setIsSubmitting(true);
    try {
      // TODO: Integrate with CRM/API (e.g. HubSpot, Pipedrive, custom endpoint)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("[Demo Request]", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting demo request:", error);
      form.setError("root", {
        message: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-sm overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center text-center py-8 px-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="w-14 h-14 rounded-full bg-vema-green-soft flex items-center justify-center mb-4 ring-4 ring-vema-green-soft/30"
            >
              <CheckCircle2 className="w-7 h-7 text-accent" strokeWidth={2} />
            </motion.div>
            <h3 className="text-xl font-semibold font-display text-foreground mb-1">
              Reservado
            </h3>
            <p className="text-muted-foreground text-sm flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-muted-foreground/80" />
              (Agregar funcionalidad calendario)
            </p>
            <Button
              variant="hero"
              size="lg"
              className="mt-8 w-full"
              onClick={() => handleOpenChange(false)}
            >
              Entendido
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className="sm:max-w-[400px] max-h-[90vh] flex flex-col p-0 gap-0 overflow-hidden"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex-shrink-0 px-6 pt-6 pb-4 space-y-1.5 border-b border-border/60">
          <DialogTitle className="font-display text-lg tracking-tight">
            Solicitar demo gratuita
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            Completa el formulario y te contactaremos para agendar tu demo personalizada.
          </DialogDescription>
          <p className="text-xs text-muted-foreground/90 pt-1">
            Sin compromiso · Datos protegidos
          </p>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col min-h-0"
          >
            <div className="overflow-y-auto flex-1 space-y-4 py-5 px-6 max-h-[min(55vh,360px)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
              {/* Personal info group */}
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Nombre completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Dr. Juan García"
                          className="h-10 text-sm transition-colors focus:border-accent/50"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Email profesional</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="contacto@tuclinica.es"
                          className="h-10 text-sm transition-colors focus:border-accent/50"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Teléfono</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+34 600 000 000"
                          className="h-10 text-sm transition-colors focus:border-accent/50"
                          autoComplete="tel"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Clinic info group */}
              <div className="space-y-3 pt-1">
                <FormField
                  control={form.control}
                  name="clinica"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Nombre de la clínica</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Clínica Oftalmológica García"
                          className="h-10 text-sm transition-colors focus:border-accent/50"
                          autoComplete="organization"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-muted-foreground">
                        Mensaje <span className="font-normal">(opcional)</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Qué te gustaría ver en la demo..."
                          className="resize-none text-sm min-h-[72px] transition-colors focus:border-accent/50"
                          rows={2}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <AnimatePresence>
              {form.formState.errors.root && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-destructive px-6"
                >
                  {form.formState.errors.root.message}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="flex gap-3 p-6 pt-4 flex-shrink-0 bg-muted/30 border-t border-border/60">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-11"
                onClick={() => handleOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="hero"
                className="flex-1 h-11 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  "Reservar demo"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestDialog;
