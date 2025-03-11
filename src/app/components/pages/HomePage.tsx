import React from "react";
import Employees from "../organisms/Employees";
import XFormSendMail from "../organisms/X-FormSendMail";
import YFormSendMail from "../organisms/Y-FormSendMail";
import Questions from "../organisms/Questions";
import ListServices from "../organisms/ListServices";
import SliderImgs from "../molecules/SliderImgs";
import PageTemplate from "../template/PageTemplate";

export default function HomePage() {
  return (
    <PageTemplate>
      <SliderImgs />
      <XFormSendMail />
      <ListServices />
      <Employees />
      <YFormSendMail />
      <Questions />
    </PageTemplate>
  );
}
