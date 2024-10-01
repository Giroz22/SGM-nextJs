"use client";

//NextUI
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Avatar,
  Chip,
} from "@nextui-org/react";

//Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

export default function CardLawyer({ props }) {
  return (
    <Card className="w-full h-[300px] shadow-primarylight">
      <CardBody className="flex items-center justify-around">
        <Avatar
          src={props.urlPicture}
          className="w-24 h-24 text-large"
          isBordered
          color="primary"
          name={props.name}
        />
        <h3 className="mb-2 text-lg text-center text-primary">{props.name}</h3>
        <Chip color="success" variant="flat">
          {props.position}
        </Chip>
      </CardBody>
      <Divider />
      <CardFooter className="flex p-0 h-14">
        <Link
          href={`mailto:${props.email}?subject=SGM%20asesor%C3%ADa&body=Hola%2C%20me%20podr%C3%ADas%20ayudar%20`}
          className="w-1/2 h-full flex gap-2 justify-center hover:text-[#00aae4]"
        >
          <EmailIcon />
          Email
        </Link>
        <Divider orientation="vertical" />
        <Link
          href={`https://api.whatsapp.com/send?phone=${props.whatsapp}&text=Hola,%20me%20podrias%20ayudar%20`}
          className="h-full w-1/2 flex gap-2 justify-center hover:text-[#25D366]"
        >
          <WhatsAppIcon />
          Whatsapp
        </Link>
      </CardFooter>
    </Card>
  );
}
