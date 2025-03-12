import React from "react";
import SliderServices from "../molecules/SliderServices";

function ListServices() {
  return (
    <div
      id="services"
      className="w-full md:h-full flex flex-col justify-center items-center p-8 gap-14 md:justify-evenly"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-xl text-center">
          Protegemos tus derechos, defendemos tu futuro
        </h3>
        <p className="w-full md:w-4/5 text-center">
          Ya sea que necesites asesoría en derecho civil, laboral, penal o
          corporativo, estamos aquí para representarte con integridad y
          profesionalismo.
        </p>
      </div>
      <div>
        <SliderServices />
      </div>
    </div>
  );
}

export default ListServices;
