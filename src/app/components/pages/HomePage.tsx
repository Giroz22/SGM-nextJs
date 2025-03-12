import React from "react";
import Employees from "../organisms/Employees";
import XFormSendMail from "../organisms/X-FormSendMail";
import YFormSendMail from "../organisms/Y-FormSendMail";
import Questions from "../organisms/Questions";
import ListServices from "../organisms/ListServices";
import SliderImgs from "../molecules/SliderImgs";
import PageTemplate from "../template/PageTemplate";
import RedirectForm from "../molecules/RedirectForm";

export default function HomePage() {
  return (
    <PageTemplate>
      <SliderImgs />
      <XFormSendMail />
      <div className="flex flex-col gap-32 py-32">
        <ListServices />
        <Employees />
        <YFormSendMail />
      </div>
      <Questions />
      <RedirectForm />
    </PageTemplate>
  );
}
