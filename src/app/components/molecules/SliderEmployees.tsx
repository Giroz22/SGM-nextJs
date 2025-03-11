"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { employeesData } from "../../../../public/data/data";
import CardEmploy from "./CardEmploy";

export default function SliderEmployees() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const employees = employeesData;

  return (
    <div className="slider-container w-[80vw] lg:w-[68vw]">
      <Slider {...settings}>
        {employees.map((employ, index) => {
          return (
            <div key={index} className="">
              <CardEmploy {...employ} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
