import AboutUs from "./components/home/AboutUs";
import MyHeader from "./components/home/MyHeader";
import MyServices from "./components/home/MyServices";
import InfoLayers from "./components/InfoLayers";

export default function Home() {
  return (
    <main>
      <MyHeader />
      <main>
        <AboutUs />
        <MyServices />
        <InfoLayers />
      </main>
    </main>
  );
}
