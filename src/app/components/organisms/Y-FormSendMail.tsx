"use client";

import React from "react";
import AppFormSendMail from "./FormSendMail";
import Image from "next/image";

function AppYFormSendMail() {
  return (
    <div
      className="w-full h-screen bg-[url(/imgs/background/header.jpg)] bg-cover"
      id="FormSendMail"
    >
      <div className="w-full h-full bg-black/80 flex flex-row justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="relative w-11/12 h-5/6">
            <Image
              className="w-9/12 h-full object-cover"
              src="/imgs/pictures/EquipoReunion.jpeg"
              alt="Imagen abogados sgm"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="bg-white/90 flex flex-col justify-center items-center gap-4 py-4">
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
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex flex-col justify-center items-center gap-6">
          <h4 className="text-center text-2xl text-primary">
            Reserva tu consultoria{" "}
            <span className="font-bold block text-3xl">Totalmente Gratis</span>
          </h4>
          <AppFormSendMail className="flex flex-col justify-center items-center" />
        </div>
      </div>
    </div>
  );
}

export default AppYFormSendMail;
