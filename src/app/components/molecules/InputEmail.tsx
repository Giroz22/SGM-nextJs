import { Input } from "@heroui/react";
import React from "react";

interface InputEmailProps {
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
}

function InputEmail({
  name,
  label,
  onChange,
  isRequired = false,
}: InputEmailProps) {
  return (
    <Input
      name={name}
      label={label}
      onChange={onChange}
      required={isRequired} // Asegúrate de que este valor sea consistente
      type="email"
      errorMessage={({ validationDetails, validationErrors }) => {
        if (validationDetails.typeMismatch) {
          return "Por favor ingrese un correo válido";
        }
        return validationErrors;
      }}
    />
  );
}

export default InputEmail;
