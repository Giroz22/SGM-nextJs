"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Image,
} from "@heroui/react";
//icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { ServicesType } from "../../../../public/data/data";

function AppModalService(props: ServicesType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onWhatsapp = () => {
    location.href = `https://api.whatsapp.com/send?phone=+573202543661&text=Hola,%20me%20podrias%20asesorar%20con%20${props.title}`;
  };

  const onEmail = () => {
    location.href =
      location.href = `mailto:sgmconsultoressas@gmail.com?subject=SGM%20asesor%C3%ADa&body=Hola%2C%20me%20podr%C3%ADas%20asesorar%20con%20${props.title}`;
  };

  return (
    <>
      <Card
        isPressable
        onPress={onOpen}
        className="w-full h-auto bg-white/40 hover:bg-primary/70 md:h-full"
      >
        <CardHeader className="text-center h-14">
          <h4 className="w-full font-bold text-xl text-white">{props.title}</h4>
        </CardHeader>
        <CardBody className="md:h-12">
          <p className="text-justify text-white text-sm truncate text-wrap">
            {props.summary}
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="flex items-center justify-between">
          <Image
            src={props.icon}
            alt={"Icono de " + props.title}
            width={40}
            height={40}
          />
          <div className="text-white font-bold flex items-center gap-1">
            Saber mas <ArrowForwardIosIcon className="text-large font-bold" />
          </div>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        placement="center"
        backdrop="blur"
      >
        <ModalContent className="bg-secondary/80">
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-primary tracking-normal text-center">
                  {props.title}
                </h2>
              </ModalHeader>
              <ModalBody>
                <div className="flex justify-evenly gap-6 flex-col-reverse md:flex-row">
                  <p className="text-justify md:w-[50%] text-white">
                    {props.description}
                  </p>
                  <Image src={props.urlImg} alt="" width={400} />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <div className="flex md:gap-4 gap-2">
                  <Button
                    color="default"
                    variant="bordered"
                    onPress={onWhatsapp}
                    className="border-primary text-primary hover:text-white hover:border-[#25D366] hover:bg-[#25D366]"
                  >
                    <WhatsAppIcon />
                    Whatsapp
                  </Button>
                  <Button
                    color="default"
                    variant="bordered"
                    onPress={onEmail}
                    className="border-primary text-primary hover:text-white hover:border-[#00aae4] hover:bg-[#00aae4]"
                  >
                    <EmailIcon />
                    Email
                  </Button>
                </div>
                <Button color="danger" variant="ghost" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AppModalService;
