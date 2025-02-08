"use client";

import * as React from "react";
import updateCSSVariables from "./utils/updateCssVariables";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  React.useEffect(() => {
    //CSS variables based on the theme
    updateCSSVariables(isDarkMode);

    // transition class
    document.documentElement.style.setProperty(
      "transition",
      "all 0.7s ease-in-out"
    );
    document.body.style.setProperty("transition", "all 0.7s ease-in-out");

    // Add or remove the `dark` class based on the theme
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
