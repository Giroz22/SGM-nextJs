import React from "react";
import Questions from "../organisms/Questions";
import AppYFormSendMail from "../organisms/Y-FormSendMail";

export default function HomePage() {
  return (
    <>
      <AppYFormSendMail />
      <Questions />
    </>
  );
}
