import CardService from "@/app/components/CardService";

//Data
import { servicesSGM } from "@/../public/data/dataSGM";

import React from "react";

export default function ListService() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-8 gap-8 md:justify-evenly">
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:max-w-[800px]">
        {servicesSGM.map((info, index) => (
          <CardService key={index} props={info} />
        ))}
      </div>
    </section>
  );
}
