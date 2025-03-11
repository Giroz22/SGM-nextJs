import React, { ReactNode } from "react";
import AppNavbar from "../organisms/Navbar";
import { Footer } from "../organisms/Footer";

type PageTemplateType = {
  children: ReactNode;
};

export default function PageTemplate({ children }: PageTemplateType) {
  return (
    <>
      <AppNavbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
