"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import getIMGSlider from "@/app/services/SliderHomeService";

export default function SliderImgs() {
  const [images, setImages] = useState([{ src: "", alt: "" }]);

  useEffect(() => {
    async function getImages() {
      const images = getIMGSlider();
      setImages(images);
    }

    getImages();
  }, []);

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
                src={image.src}
                alt={image.alt}
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
