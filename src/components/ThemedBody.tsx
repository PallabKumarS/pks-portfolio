"use client";

import React, { ReactNode } from "react";
import { useThemeContext } from "./ThemeToggle";

const ThemedBody = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useThemeContext();

  return (
    <main
      className={`h-screen mb-5 bg-no-repeat bg-cover bg-center ${
        isDarkMode
          ? "md:bg-[image:var(--bgDark-desktop)]"
          : "md:bg-[image:var(--bg-desktop)]"
      } ${
        isDarkMode
          ? "bg-[image:var(--bgDark-mobile)]"
          : "bg-[image:var(--bg-mobile)]"
      }`}
      style={
        {
          "--bg-desktop": `url(/desktopBackground.svg)`,
          "--bg-mobile": `url(/mobileBackground.svg)`,
          "--bgDark-desktop": `url(/desktopBackgroundDark.svg)`,
          "--bgDark-mobile": `url(/mobileBackgroundDark.svg)`,
        } as React.CSSProperties
      }
    >
      {children}
    </main>
  );
};

export default ThemedBody;
