import InfoLayers from "../components/InfoLayers";
import HeaderDefault from "../components/HeaderDefault";
import Information from "./components/Information";

//Data
import { about_SGM } from "@/../public/data/dataSGM";

export default function page() {
  return (
    <>
      <HeaderDefault
        title="Sobre nosotros"
        urlImgBG="/imgs/background/header.jpg"
      />
      <main className="max-w-screen-xl py-8 m-auto">
        <InfoLayers />
        <div className="">
          <Information {...about_SGM.history} LtoR={true} />
          <Information {...about_SGM.mission} LtoR={false} />
          <Information {...about_SGM.vision} LtoR={true} />
          <Information {...about_SGM.values} LtoR={false} />
        </div>
      </main>
    </>
  );
}
