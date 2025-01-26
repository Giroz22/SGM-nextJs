import InfoLayers from "../components/InfoLayers";
import HeaderDefault from "../components/HeaderDefault";
import Information from "./components/Information";

//Data
import { aboutData } from "../../../public/data/data";

export default function AboutUs() {
  return (
    <>
      <HeaderDefault
        title="Sobre nosotros"
        urlImgBG="/imgs/background/header.jpg"
      />
      <main className="max-w-screen-xl py-8 m-auto">
        <InfoLayers />
        <div className="">
          <Information {...aboutData.history} LtoR={true} />
          <Information {...aboutData.mission} LtoR={false} />
          <Information {...aboutData.vision} LtoR={true} />
          <Information {...aboutData.values} LtoR={false} />
        </div>
      </main>
    </>
  );
}
