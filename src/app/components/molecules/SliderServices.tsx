"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicesData } from "../../../../public/data/data";
import CardService from "./CardService";

function SliderServices() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    slidesPerRow: 1,
    rows: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          vertical: true,
          verticalSwiping: true,
          rows: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-[90vw] lg:w-[68vw] lg:h-[80vh]">
      <Slider {...settings} className="w-full">
        {servicesData.map((service, index) => {
          return (
            <div key={index + service.title}>
              <CardService {...service} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderServices;

// {
//   servicesData.slice(0, 6).map((info, index) => (
//     <div key={index}>
//       <AppModalService key={index + info.title} {...info} />
//     </div>
//   ));
// }
