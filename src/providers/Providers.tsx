"use client";

// app/providers.tsx
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GlobalProvider } from "./GlobalProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" enableSystem={true}>
        <GlobalProvider>{children}</GlobalProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
