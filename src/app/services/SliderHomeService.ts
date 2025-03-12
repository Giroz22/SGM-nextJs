import { ImgType, SliderImgsData } from "../../../public/data/data";

export default function getIMGSlider(): ImgType[] {
  const width = window.innerWidth;
  const isMobile = width < 768;

  return isMobile ? SliderImgsData.mobile : SliderImgsData.desktop;
}
