import { ThemeProvider } from "@/components/ThemeToggle";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
