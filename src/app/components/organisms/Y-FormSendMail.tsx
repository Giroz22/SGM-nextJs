"use client";

import React from "react";
import AppFormSendMail from "./FormSendMail";
import BackgroundImg from "../molecules/BackgroundImg";
import CardInfoImg from "../molecules/CardInfoImg";

function YFormSendMail() {
  return (
    <BackgroundImg className="bg-[url(/imgs/background/header.jpg)]">
      <div
        id="FormSendMail"
        className="w-full flex flex-col justify-center p-4 gap-6 md:flex-row-reverse md:items-center md:h-full md:justify-evenly md:py-16 md:px-8 md:gap-16"
      >
        <div className="md:w-1/3">
          <h4 className="text-center text-2xl text-primary py-4">
            Reserva tu consultoria{" "}
            <span className="font-bold block text-3xl">Totalmente Gratis</span>
          </h4>
          <AppFormSendMail className="w-full flex-col items-center" />
        </div>
        <div className="md:w-1/2 md:h-full">
          <CardInfoImg
            src="/imgs/pictures/EquipoReunion.jpeg"
            alt="Imagen abogados sgm"
          >
            <h4 className="text-center text-2xl font-bold text-primary">
              ¿Qué pasará cuando envíes el formulario?
            </h4>
            <ol type="1" className="text-justify">
              <li>1. Un asesor recibirá tu solicitud.</li>
              <li>
                2. Un asesor se pondrá en contacto contigo para agendar una
                cita.
              </li>
              <li>3. Recibirás una asesoría personalizada.</li>
            </ol>
          </CardInfoImg>
        </div>
      </div>
    </BackgroundImg>
  );
}

export default YFormSendMail;
