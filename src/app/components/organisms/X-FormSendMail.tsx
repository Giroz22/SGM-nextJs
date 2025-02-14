import React from "react";
import AppFormSendMail from "./FormSendMail";

function XFormSendMail() {
  return (
    <div className="flex flex-col min-h-[30vh] border-2 border-solid border-secondary md:flex-row">
      <div className="bg-secondary min-h-full flex flex-col justify-center items-center md:w-3/12">
        <h4 className="text-center text-2xl text-primary">
          Reserva tu consultoria{" "}
          <span className="font-bold">Totalmente Gratis</span>
        </h4>
      </div>
      <div className="px-8 py-4 flex-1 flex flex-row justify-center items-center">
        <AppFormSendMail className="justify-center items-center md:flex-row" />
      </div>
    </div>
  );
}

export default XFormSendMail;
