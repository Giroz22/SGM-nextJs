import React from "react";
import { employeesData } from "../../../../public/data/data";
import CardEmploy from "../molecules/CardEmploy";

function Employees() {
  const employees = employeesData;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 p-4 md:px-6">
      <div>
        <h2 className="text-xl">Juntos logramos más</h2>
      </div>
      <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {employees.map((employ, index) => {
          return <CardEmploy key={index} {...employ} />;
        })}
      </div>
    </div>
  );
}

export default Employees;
