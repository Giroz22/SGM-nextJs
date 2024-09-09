import { MyLogo } from "./MyLogo";

export const MyFooter = () => {
  return (
    <footer className="h-3/5 w-full grid grid-rows-2 gap-8 md:grid-cols-3 p-8  md:p-20">
      <div className="row-span-2 flex items-center justify-center">
        <MyLogo className="" />
      </div>
      <div className="">
        <h3 className="">Horario atencion</h3>
        <p>
          Lunes a Viernes
          <br />
          8:00 a.m. a 5:00 p.m.
          <br />
          <br />
          Sábado
          <br />
          9:00 a.m. a 1:00 p.m.
        </p>
      </div>
      <div className="">
        <h3>Detalles de contacto</h3>
        <p>
          Cl. 49A #80-32
          <br />
          Calasanz, La América
          <br />
          Medellín, Antioquia
          <br />
          <br />
          +57 301 5748914
          <br />
          +57 305 8969476
          <br />
          <br />
          sgmconsultoressas@gmail.com
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3>Siguenos</h3>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100090155021614&mibextid=LQQJ4d">
            <i className="bi bi-facebook text-3xl duration-300 hover:text-primary"></i>
          </a>
          <a href="https://www.instagram.com/s.g.m_sas?igsh=MXBiMW1rajFudnBtNg==">
            <i className="bi bi-instagram text-3xl duration-300 hover:text-primary"></i>
          </a>
          <a href="https://co.linkedin.com/in/consultores-s-g-m-s-a-s-847160241">
            <i className="bi bi-linkedin text-3xl duration-300 hover:text-primary"></i>
          </a>
        </div>
      </div>
      <div className="">
        <iframe
          className="border-none"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2445.8940587358893!2d-75.59776885115065!3d6.262177362700494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429bcb3503ab9%3A0x340577e87beedfca!2sSGM%20Consultores%20S.A.S%20Abogados!5e0!3m2!1ses-419!2sco!4v1711580846923!5m2!1ses-419!2sco"
          width="100%"
          height="100%"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa ubicacion SGM Consultores S.A.S Abogados"
        ></iframe>
      </div>
    </footer>
  );
};
