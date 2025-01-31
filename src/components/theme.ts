"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#DFE2C6",
      contrastText: "#000000",
    },
    background: {
      default: "#fff",
      paper: "#7927FF",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
