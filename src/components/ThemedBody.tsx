"use client";

import React, { ReactNode } from "react";
import { useThemeContext } from "./ThemeToggle";

const ThemedBody = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useThemeContext();

  return (
    <main
      className={`min-h-screen mb-5 bg-no-repeat mt-8 bg-[length:100%_auto] 2xl:mt-7 xl:-mt-8 lg:-mt-32 md:-mt-48  md:bg-contain md:bg-center ${
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
          transition: "all 0.7s ease-in-out",
          backgroundColor: isDarkMode ? "#08272C" : "#E8E8E8",
        } as React.CSSProperties
      }
    >
      {children}
    </main>
  );
};

export default ThemedBody;
