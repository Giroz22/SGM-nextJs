"use client";

// components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering on the server

  return (
    <>
      {theme === "light" ? (
        <button className="style-none" onClick={() => setTheme("dark")}>
          <DarkModeOutlinedIcon />
        </button>
      ) : (
        <button className="style-none" onClick={() => setTheme("light")}>
          <LightModeOutlinedIcon />
        </button>
      )}
    </>
  );
};
