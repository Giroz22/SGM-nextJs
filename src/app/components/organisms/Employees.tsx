import React from "react";
import SliderEmployees from "../molecules/SliderEmployees";

function Employees() {
  return (
    <div
      id="nosotros"
      className="max-w-screen flex flex-col justify-center items-center gap-4 p-8 md:gap-8"
    >
      <div>
        <h2 className="text-xl">Juntos logramos más</h2>
      </div>
      <div className="">
        <SliderEmployees />
      </div>
    </div>
  );
}

export default Employees;
