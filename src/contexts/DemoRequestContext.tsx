import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type DemoRequestContextValue = {
  openDemo: () => void;
  closeDemo: () => void;
  isOpen: boolean;
};

const DemoRequestContext = createContext<DemoRequestContextValue | null>(null);

export const DemoRequestProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDemo = useCallback(() => setIsOpen(true), []);
  const closeDemo = useCallback(() => setIsOpen(false), []);

  return (
    <DemoRequestContext.Provider
      value={{ openDemo, closeDemo, isOpen }}
    >
      {children}
    </DemoRequestContext.Provider>
  );
};

export const useDemoRequest = () => {
  const ctx = useContext(DemoRequestContext);
  if (!ctx) {
    throw new Error("useDemoRequest must be used within DemoRequestProvider");
  }
  return ctx;
};
