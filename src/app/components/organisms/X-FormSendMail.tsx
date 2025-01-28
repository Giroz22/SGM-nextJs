import React from "react";
import AppFormSendMail from "./FormSendMail";

function AppXFormSendMail() {
  return (
    <div className="flex flex-row min-h-[30vh] border-2 border-solid border-secondary">
      <div className="bg-secondary w-3/12 min-h-full flex flex-col justify-center items-center">
        <h4 className="text-center text-2xl text-primary">
          Reserva tu consultoria{" "}
          <span className="font-bold">Totalmente Gratis</span>
        </h4>
      </div>
      <div className="px-8 py-4 flex-1 flex flex-row justify-center items-center">
        <AppFormSendMail className="flex flex-row justify-center items-center gap-8" />
      </div>
    </div>
  );
}

export default AppXFormSendMail;
