import HeaderDefault from "../components/HeaderDefault";
import ListService from "./components/ListService";

export default function page() {
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
