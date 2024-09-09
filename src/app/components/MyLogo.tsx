"use client";

import Image, { StaticImageData } from "next/image";

//Logo
import simpleLogoLight from "@/imgs/logos/simple-light-logo.png";
import simpleLogoDark from "@/imgs/logos/simple-dark-logo.png";
import logoLight from "@/imgs/logos/light-logo.png";
import logoDark from "@/imgs/logos/dark-logo.png";

import { useTheme } from "next-themes";

type logoTypes = {
  className?: string;
  variant?: string;
};

export const MyLogo = ({
  className = "w-8 h-8",
  variant = "default",
}: logoTypes) => {
  const { theme } = useTheme();

  let logo: StaticImageData = logoDark;

  if (variant === "default") logo = theme == "light" ? logoDark : logoLight;
  if (variant === "simple")
    logo = theme == "light" ? simpleLogoDark : simpleLogoLight;

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
