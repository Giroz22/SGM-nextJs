"use client";

import React, { useState } from "react";
import { Form, Button, Textarea, Input } from "@heroui/react";
import sendInfo, { DataFormType } from "@/app/services/FormService";

interface AppFormSendMailProps {
  className: string;
}

function AppFormSendMail({ className }: AppFormSendMailProps) {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    if (e === undefined) return;

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendInfo(formData as DataFormType);
    resetForm(e);
  };

  const resetForm = (e) => {
    e.currentTarget.reset();
    setFormData({
      name: "",
      tel: "",
      email: "",
      message: "",
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className={`w-full h-full ${className}`}
      validationBehavior="native"
    >
      <div className="w-3/5 flex flex-col gap-2">
        <Input
          name="name"
          label="Nombre"
          onChange={handleChange}
          type="text"
          isRequired
          value={formData.name}
          errorMessage="Ingrese un valor válido"
        />

        <Input
          name="tel"
          label="Telefono"
          onChange={handleChange}
          type="tel"
          isRequired
          value={formData.tel}
          errorMessage={({ validationDetails, validationErrors }) => {
            if (validationDetails?.typeMismatch) {
              return "Ingrese un valor válido";
            }
            return validationErrors;
          }}
          validate={(value) => {
            if (!/^\d+$/.test(value)) {
              return "Ingrese un número válido";
            }
            if (value.length < 10) {
              return "El teléfono debe tener al menos 10 caracteres";
            }
          }}
        />

        <Input
          name="email"
          label="Correo"
          onChange={handleChange}
          type="email"
          value={formData.email}
          errorMessage={({ validationDetails, validationErrors }) => {
            if (validationDetails.typeMismatch) {
              return "Por favor ingrese un correo válido";
            }
            return validationErrors;
          }}
        />
      </div>

      <Textarea
        label="Mensaje"
        name="message"
        placeholder="En que te podemos ayudar?"
        type="textarea"
        minRows={7}
        className="w-3/5"
        onChange={handleChange}
        value={formData.message}
      />
      <Button color="primary" type="submit" className="">
        Enviar
      </Button>
    </Form>
  );
}

export default AppFormSendMail;
