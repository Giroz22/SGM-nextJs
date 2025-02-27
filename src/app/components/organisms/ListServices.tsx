import React from "react";
import { servicesData } from "../../../../public/data/data";
import { Link } from "@heroui/react";
import AppModalService from "../molecules/ModalService";

function ListServices() {
  return (
    <section className="bg-[url(/imgs/background/header.jpg)] md:bg-cover md:h-screen">
      <div className="w-full md:h-full bg-black/80 flex flex-col justify-center items-center md:py-8 md:px-20 p-4 gap-4 md:gap-8 md:justify-evenly">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="text-xl text-center">
            Protegemos tus derechos, defendemos tu futuro
          </h3>
          <p className="text-white w-full md:w-4/5 text-center">
            Ya sea que necesites asesoría en derecho civil, laboral, penal o
            corporativo, estamos aquí para representarte con integridad y
            profesionalismo.
          </p>
        </div>
        <div className="flex-1 gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {servicesData.slice(0, 6).map((info, index) => (
            <AppModalService key={index + info.title} {...info} />
          ))}
        </div>
        <Link href="/services">Más Servicios</Link>
      </div>
    </section>
  );
}

export default ListServices;
