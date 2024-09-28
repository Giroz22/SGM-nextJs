import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryDark: "var(--color-primary-dark)", //Blue dark
        primarylight: "var(--color-primary-light)", //Golden
        secondaryDark: "var(--color-secondary-dark)", //Black
        secondarylight: "var(--color-secondary-light)", //Gray
      },
    },
    fontFamily: {
      title: "Main Font",
      texts: "Open Sans", // Adds a new `font-display` class
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: "#ffffff",
            default: "#292526",
            primary: {
              DEFAULT: "#ce9f44",
              foreground: "#eaeaea",
            },
            secondary: {
              DEFAULT: "#121e41",
              foreground: "#eaeaea",
            },
            // success: "",
            // warning: "",
            // danger: "",
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: "#222",
            default: "#838b90",
            primary: {
              DEFAULT: "#ce9f44",
              foreground: "#eaeaea",
            },
            secondary: {
              DEFAULT: "#121e41",
              foreground: "#eaeaea",
            },
            // success: "",
            // warning: "",
            // danger: "",
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
