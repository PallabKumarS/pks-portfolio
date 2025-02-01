"use client";

import { useTheme } from "@mui/material";
import React, { ReactNode } from "react";

const ThemedBody = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <main
      className={`-mt-24 h-[calc(100vh-70px)] mb-5 bg-no-repeat bg-cover ${
        isLight
          ? "md:bg-[image:var(--bg-desktop)]"
          : "md:bg-[image:var(--bgDark-desktop)]"
      } ${
        isLight
          ? "bg-[image:var(--bg-mobile)]"
          : "bg-[image:var(--bgDark-mobile)]"
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
