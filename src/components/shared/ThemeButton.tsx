"use client";

import { useThemeContext } from "../ThemeToggle";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const ThemeButton = () => {
  const { toggleTheme, isDarkMode } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme}>
      {isDarkMode ? (
        <Brightness7Icon sx={{ color: "#08272C" }} />
      ) : (
        <Brightness4Icon sx={{ color: "#8E9361" }} />
      )}
    </IconButton>
  );
};
