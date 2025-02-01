import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nav-bg": "var(--nav-bg)",
        "nav-text": "var(--nav-text)",
        "nav-mobile": "var(--nav-mobile)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "footer-text": "var(--footer-text)",
      },
    },
  },
  plugins: [],
} satisfies Config;
