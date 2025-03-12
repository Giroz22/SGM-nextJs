"use client";

import React from "react";
import CircleButton from "../atoms/CircleButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function RedirectForm() {
  return (
    <div className="w-full text-black flex flex-col justify-center items-center gap-6 p-8 border-y-2 border-secondary">
      <div className="text-center">
        <h3 className="mb-2">Todavia tienes dudas?</h3>
        <p className="text-justify">
          Comunicate con nosotros, con mucho gusto te solucionaremos cualquier
          duda que tengas.
        </p>
      </div>

      <CircleButton action={() => (window.location.href = "#FormSendMail")}>
        Ir al formulario <ArrowOutwardIcon className="ml-2" />
      </CircleButton>
    </div>
  );
}

export default RedirectForm;
