import React from "react";
import AppFormSendMail from "./FormSendMail";

function XFormSendMail() {
  return (
    <div className="flex flex-col h-auto border-2 border-solid border-secondary md:flex-row">
      <div className="bg-secondary min-h-full flex flex-col justify-center items-center md:w-3/12">
        <h4 className="text-center text-2xl text-primary flex flex-col py-7 md:py-0">
          <span>Reserva tu consultoria</span>
          <span className="font-bold">Totalmente Gratis</span>
        </h4>
      </div>
      <div className="flex-1 flex flex-row justify-center items-center px-4 py-8 md:p-4">
        <AppFormSendMail className="justify-center items-center md:flex-row" />
      </div>
    </div>
  );
}

export default XFormSendMail;
