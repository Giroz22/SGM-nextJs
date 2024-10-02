"use client";

import { createContext } from "react";

const baseTheme = {};

export const GlobalContext = createContext(baseTheme);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return <GlobalContext.Provider value="">{children}</GlobalContext.Provider>;
};
