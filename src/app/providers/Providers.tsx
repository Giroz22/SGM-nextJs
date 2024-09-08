"use client";

// app/providers.tsx
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MyThemeProvider } from "./ThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class">
        <MyThemeProvider>{children}</MyThemeProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
