"use client";

// app/providers.tsx
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GlobalProvider } from "./GlobalProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" enableSystem={true}>
        <GlobalProvider>{children}</GlobalProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
