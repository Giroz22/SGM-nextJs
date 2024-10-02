"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { detectUserTheme } from "../services/detectUserTheme";

export default function LayoutBasic({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTheme } = useTheme();

  useEffect(() => {
    detectUserTheme(setTheme);
  }, [setTheme]);

  return <>{children}</>;
}
