"use client";

import Image, { StaticImageData } from "next/image";

// Logo
import simpleLogoLight from "/public/imgs/logos/simple-light-logo.png";
import simpleLogoDark from "/public/imgs/logos/simple-dark-logo.png";
import logoLight from "/public/imgs/logos/light-logo.png";
import logoDark from "/public/imgs/logos/dark-logo.png";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type logoTypes = {
  className?: string;
  variant?: string;
};

export const MyLogo = ({
  className = "w-8 h-8",
  variant = "default",
}: logoTypes) => {
  const { theme } = useTheme();
  const [logo, setLogo] = useState<StaticImageData>(logoLight);

  useEffect(() => {
    setLogo(getLogo(theme, variant));
  }, [theme, variant]); // Solo se ejecuta cuando `theme` o `variant` cambian

  return (
    <Image
      src={logo}
      alt="Logo de la compañia"
      fill={false}
      priority={true}
      className={className}
    />
  );
};

function getLogo(theme: string | undefined, variant: string | undefined) {
  let imgLogo: StaticImageData = simpleLogoDark;
  const isLogoDark = theme === "light";

  switch (variant) {
    case "simple":
      imgLogo = isLogoDark ? simpleLogoDark : simpleLogoLight;
      break;
    default:
      imgLogo = isLogoDark ? logoDark : logoLight;
      break;
  }

  return imgLogo;
}
