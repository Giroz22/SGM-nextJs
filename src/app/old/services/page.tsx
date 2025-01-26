import HeaderDefault from "../components/HeaderDefault";
import ListService from "./components/ListService";

export default function Services() {
  return (
    <>
      <HeaderDefault
        title="Nuestros servicios"
        urlImgBG="/imgs/background/header.jpg"
      />
      <ListService />
    </>
  );
}
