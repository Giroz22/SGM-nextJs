import React from "react";
import SliderEmployees from "../molecules/SliderEmployees";

function Employees() {
  return (
    <div className="max-w-screen flex flex-col justify-center items-center gap-4 p-8 py-20 md:gap-8 md:py-52">
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
