//NextUI
import { Link } from "@nextui-org/react";
//Components
import CardService from "../components/CardService";
//Data
import { servicesSGM } from "../../../public/data/dataSGM";
import React from "react";

function MyServices() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8 gap-8 md:justify-evenly">
      <h3 className="text-2xl text-center">Conoce más de nuestros servicios</h3>
      <div className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
        {servicesSGM.slice(0, 4).map((info, index) => (
          <CardService key={index + info.title} props={info} />
        ))}
      </div>
      <Link href="/services">Más Servicios</Link>
    </section>
  );
}

export default MyServices;
