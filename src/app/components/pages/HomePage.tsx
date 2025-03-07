import React from "react";
import Employees from "../organisms/Employees";
import AppSlider from "../molecules/Slider";
import XFormSendMail from "../organisms/X-FormSendMail";
import { Footer } from "../organisms/Footer";
import AppNavbar from "../organisms/Navbar";
import YFormSendMail from "../organisms/Y-FormSendMail";
import Questions from "../organisms/Questions";
import ListServices from "../organisms/ListServices";

export default function HomePage() {
  return (
    <>
      <AppNavbar />
      <AppSlider />
      <XFormSendMail />
      <Employees />
      <ListServices />
      <YFormSendMail />
      <Questions />
      <Footer />
    </>
  );
}
