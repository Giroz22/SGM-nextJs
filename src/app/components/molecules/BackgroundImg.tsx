import React, { ReactNode } from "react";

type BackgroundType = {
  children: ReactNode;
  className: string;
};

function BackgroundImg({ children, className }: BackgroundType) {
  return (
    <div
      className={`${className} w-full bg-cover bg-right-top md:object-contain md:h-screen`}
    >
      <div className="w-full h-full bg-black/80 text-white">{children}</div>
    </div>
  );
}

export default BackgroundImg;
