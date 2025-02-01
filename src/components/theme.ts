"use client";
import { createTheme } from "@mui/material/styles";

// Light Theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7927FF",
      light: "#DFE2C6",
      contrastText: "#171717",
    },
    secondary: {
      main: "#7927FF",
    },
    text: {
      primary: "#171717",
      secondary: "#F7F7F7",
    },

    background: {
      default: "#E8E8E8",
      paper: "#DFE2C6",
    },
  },
  typography: {
    fontFamily: "var(--font-jost)",
  },
});

// Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7927FF",
      light: "#DEEDEF",
      contrastText: "#171717",
    },
    secondary: {
      main: "#BA91FD",
    },
    text: {
      primary: "#EEE",
      secondary: "#EEE",
    },
    background: {
      default: "#08272C",
      paper: "#16373B",
    },
  },
  typography: {
    fontFamily: "var(--font-jost)",
  },
});

export { lightTheme, darkTheme };
