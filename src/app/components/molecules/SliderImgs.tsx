"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { supabase } from "@/app/utils/supabase/supabase";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/useWindowSize";

export default function SliderImgs() {
  const [images, setImages] = useState([]);
  const [baseUrl, setBaseUrl] = useState("");

  //It get size of the window to know if it is mobile or desktop
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const pathFolder = isMobile
    ? "images/slider/mobile"
    : "images/slider/desktop";

  useEffect(() => {
    async function getTodos() {
      const { data: imgsfile, error } = await supabase.storage
        .from("SGMPublic")
        .list(pathFolder);

      if (error) {
        console.log("error", error);
        return [];
      }

      const { data: url } = await supabase.storage
        .from("SGMPublic")
        .getPublicUrl(pathFolder);

      setBaseUrl(url.publicUrl);
      setImages(imgsfile);
    }

    getTodos();
  }, [pathFolder]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };

  if (!images || images.length === 0) {
    return (
      <div className="slider-container">
        <Slider {...settings} className="h-screen md:h-[70vh]">
          {Array(2)
            .fill(0)
            .map((data, index) => (
              <div key={index} className="relative w-screen h-[70vh]">
                <Image
                  src="/imgs/background/LawyerPresentation.png"
                  alt="Imagen presentacion SGM"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ))}
        </Slider>
      </div>
    );
  } else {
    return (
      <div className="slider-container h-screen md:h-[70vh]">
        <Slider {...settings}>
          {images?.map((image, index) => (
            <div key={index} className="relative w-screen h-screen md:h-[70vh]">
              <Image
                src={baseUrl + "/" + image.name}
                alt="Imagen presentacion SGM"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
