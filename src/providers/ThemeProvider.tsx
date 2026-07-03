import { type ReactNode, useEffect } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
  }, []);

  return <>{children}</>;
}
