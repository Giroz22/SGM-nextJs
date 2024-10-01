"use client";

import CardLawyer from "./CardLawyer";
import { lawyers_SGM } from "@/data/dataSGM";
import React from "react";

function InfoLayers() {
  return (
    <section className="my-8 md:my-16">
      <h3 className="text-center text-xl mb-8 md:mb-16">Nuestro equipo</h3>
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_280px))] justify-evenly gap-8">
        {lawyers_SGM.map((lawyer, index) => (
          <CardLawyer key={index + lawyer.name} props={lawyer} />
        ))}
      </div>
    </section>
  );
}

export default InfoLayers;
