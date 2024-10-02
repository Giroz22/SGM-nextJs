import AboutUs from "./home/AboutUs";
import MyHeader from "./home/MyHeader";
import MyServices from "./home/MyServices";
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
