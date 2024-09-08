"use client";

//Logo
import simpleLogoLight from "@/imgs/logos/simple-light-logo.png";
import simpleLogoDark from "@/imgs/logos/simple-dark-logo.png";
import { createContext, Dispatch, SetStateAction, useEffect } from "react";
import { useTheme } from "next-themes";
import { StaticImageData } from "next/image";

export type themeType = {
  logo: StaticImageData;
};

const baseTheme: themeType = {
  logo: simpleLogoLight,
};

export const ThemeContext = createContext(baseTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const logoTheme = theme == "light" ? simpleLogoDark : simpleLogoLight;

  useEffect(() => {
    setUserTheme(setTheme);
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ logo: logoTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const setUserTheme = (setTheme: Dispatch<SetStateAction<string>>) => {
  //Get theme of the user
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Define the initial theme based on the media query
  if (mediaQuery.matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  // Add event listener to detect changes in theme
  const handleChange = (e: MediaQueryListEvent) => {
    setTheme(e.matches ? "dark" : "light");
  };

  mediaQuery.addEventListener("change", handleChange);

  // Clean up the event listener on component unmount
  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
};
