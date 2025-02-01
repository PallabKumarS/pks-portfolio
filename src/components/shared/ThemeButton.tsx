"use client";

import { useThemeContext } from "../ThemeToggle";
import { motion } from "framer-motion";

export const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-10 h-5 md:w-14 md:h-8 rounded-full p-1 cursor-pointer transition-colors ${
        isDarkMode ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <motion.div
        className="absolute -mt-[6px] -ml-2 md:mt-0 lg:ml-0 w-6 h-6 bg-white rounded-full shadow-md"
        animate={{
          x: isDarkMode ? "100%" : "0%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};
