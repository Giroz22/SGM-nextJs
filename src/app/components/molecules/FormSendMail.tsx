"use client";
import React from "react";
import { Form, Button, Input, Textarea } from "@heroui/react";

interface AppFormSendMailProps {
  className: string;
}

function AppFormSendMail({ className }: AppFormSendMailProps) {
  return (
    <Form className={"w-full h-full" + className}>
      <div className="w-3/5 flex flex-col gap-2">
        <Input label="Nombre completo" type="text" />
        <Input label="Teléfono" type="text" />
        <Input label="Correo" type="email" />
      </div>

      <Textarea
        label="Mensaje"
        placeholder="En que te podemos ayudar?"
        type="textarea"
        minRows={7}
        className="w-3/5"
      />
      <Button color="primary" type="submit" className="">
        Enviar
      </Button>
    </Form>
  );
}

export default AppFormSendMail;
