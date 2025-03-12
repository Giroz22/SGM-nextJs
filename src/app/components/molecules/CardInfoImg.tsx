import Image from "next/image";
import React, { ReactNode } from "react";

type TypeCardInfoImg = {
  src: string;
  alt: string;
  children: ReactNode;
};

function CardInfoImg({ children, src, alt }: TypeCardInfoImg) {
  return (
    <div className="w-full h-full md:relative">
      <Image
        alt={alt}
        src={src}
        fill
        className="invisible md:visible md:absolute md:object-cover md:object-right-bottom"
      />
      <div className="bg-white/80 flex flex-col justify-center items-center gap-4 p-4 text-black md:absolute md:bottom-6">
        {children}
      </div>
    </div>
  );
}

export default CardInfoImg;
