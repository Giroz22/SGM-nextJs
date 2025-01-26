"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { supabase } from "@/app/utils/supabase/supabase";
import Image from "next/image";

export default function AppSlider() {
  const [images, setImages] = useState([]);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    async function getTodos() {
      const { data: imgsfile, error } = await supabase.storage
        .from("SGMPublic")
        .list("images");

      if (error) {
        console.log("error", error);
        return [];
      }

      const { data: url } = await supabase.storage
        .from("SGMPublic")
        .getPublicUrl("images/");
      setBaseUrl(url.publicUrl);

      setImages(imgsfile);
    }

    getTodos();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };

  if (!images || images.length === 0) {
    return (
      <Slider {...settings}>
        {Array(2)
          .fill(0)
          .map((data, index) => (
            <div key={index} className="relative w-screen h-screen">
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
    );
  } else {
    return (
      <Slider {...settings}>
        {images?.map((image, index) => (
          <div key={index} className="relative w-screen h-screen">
            <Image
              src={baseUrl + image.name}
              alt="Imagen presentacion SGM"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        ))}
      </Slider>
    );
  }
}
