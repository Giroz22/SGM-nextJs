"use client";

import React from "react";
import { EmployeesType } from "../../../../public/data/data";
import { Button, ButtonGroup, Chip } from "@heroui/react";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

function CardEmploy({
  name,
  position,
  email,
  whatsapp,
  urlPicture,
}: EmployeesType) {
  const onWhatsapp = () => {
    location.href = `https://api.whatsapp.com/send?phone=+57${whatsapp}&text=Hola,%20me%20podrias%20asesorar%20con%20`;
  };

  const onEmail = () => {
    location.href =
      location.href = `mailto:${email}?subject=SGM%20asesor%C3%ADa&body=Hola%2C%20me%20podr%C3%ADas%20asesorar%20con%20`;
  };

  return (
    <div className="flex flex-col gap-4 bg-transparent h-[450px] md:w-[300px]">
      <div className="relative h-full flex items-center justify-center">
        <Image
          className="object-cover object-top rounded-xl"
          src={urlPicture ? urlPicture : "/imgs/logos/simple-dark-logo.png"}
          alt={"Foto del empleado " + name}
          fill
          priority
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h5 className="text-secondary font-title text-center">{name}</h5>
        <Chip variant="flat" color="success">
          {position}
        </Chip>
        <div className="flex md:gap-2 gap-1">
          <ButtonGroup>
            <Button
              color="default"
              variant="bordered"
              onPress={onWhatsapp}
              className="border-primary text-primary hover:text-white hover:border-[#25D366] hover:bg-[#25D366]"
            >
              <WhatsAppIcon />
            </Button>
            <Button
              color="default"
              variant="bordered"
              onPress={onEmail}
              className="border-primary text-primary hover:text-white hover:border-[#00aae4] hover:bg-[#00aae4]"
            >
              <EmailIcon />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default CardEmploy;
