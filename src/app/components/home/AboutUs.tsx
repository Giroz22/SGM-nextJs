import Image from "next/image";
import React from "react";

//Images
import ImgLawyer from "@/imgs/pictures/Elisabeth-removebg.png";

function AboutUs() {
  return (
    <div className="md:h-[80vh] w-full bg-primaryDark text-white flex flex-col items-center justify-center p-8 md:justify-between md:gap-20 md:px-20 md:flex-row ">
      <div className="h-full flex flex-col items-center justify-center gap-8 md:w-1/2">
        <h3 className="text-3xl uppercase text-center text-primarylight">
          Cómo actuamos
        </h3>
        <p className="text-justify">
          Nos enfocamos en proporcionarle a nuestros clientes la mejor atención
          en asesorías legales, brindando un acompañamiento permanente con
          nuestros expertos y con la mayor cobertura a nivel nacional e
          internacional; amplia gama de servicios, además con la calidad humana
          que nos caracteriza, el mejor servicio, la mejor atención y agilidad
          en tus procesos.
        </p>
      </div>
      <div className="w-1/2 h-full max-h-full bg-neutral-200 rounded-lg flex items-center justify-center">
        <Image
          src={ImgLawyer}
          alt="Img CEO SGM"
          fill={false}
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}

export default AboutUs;
