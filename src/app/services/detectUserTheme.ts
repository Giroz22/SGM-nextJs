import { Dispatch, SetStateAction } from "react";

export const detectUserTheme = (setTheme: Dispatch<SetStateAction<string>>) => {
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
