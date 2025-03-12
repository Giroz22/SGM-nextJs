import React from "react";
import { ServicesType } from "../../../../public/data/data";
import Image from "next/image";

function CardService({ icon, title, summary }: ServicesType) {
  return (
    <div className="w-auto h-[40vh] border-l-2 border-l-solid border-black px-8 py-4 my-4 flex flex-col gap-4 items-center hover:border-primary shadow-card-service">
      <div className="w-full h-[20%] mb-2">
        <Image src={icon} alt={"Icono de " + title} width={40} height={40} />
      </div>
      <h4 className="font-bold text-xl w-full">{title}</h4>
      <p className="overflow-hidden text-justify text-sm truncate text-wrap">
        {summary}
      </p>
    </div>
  );
}

export default CardService;
