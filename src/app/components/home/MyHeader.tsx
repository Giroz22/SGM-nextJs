import React from "react";
import FormContact from "./FormContact";
import { MyLogo } from "../MyLogo";

function MyHeader() {
  return (
    <header className='relative min-h-screen w-full bg-[url("/imgs/background/header.jpg")] bg-cover bg-no-repeat bg-center flex justify-center items-center p-8 md:p-20'>
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 md:gap-16 md:flex-row">
        <MyLogo className="" />
        <div className="max-w-xl flex flex-col items-center gap-8 basis-3/5">
          <h1 className="text-2xl md:text-4xl text-center">
            Convertir desafíos en soluciones
          </h1>
          <p className="text-lg text-justify font-texts">
            Somos una empresa de consultores jurídicos que ofrece servicios
            legales y de asesoría a particulares y empresas.
            <span className="text-primarylight">
              {" "}
              ¿Tiene alguna consulta legal?{" "}
            </span>
            Estamos dispuestos a asesorarlo.
          </p>
          <FormContact />
        </div>
      </div>
    </header>
  );
}

export default MyHeader;

{
  /* <style>
	header::before{
		content: "";
		width: 100%;
		height: 100%;		
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(2px);	
	}
</style> */
}
