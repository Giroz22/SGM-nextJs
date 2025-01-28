import { Input } from "@heroui/react";
import React from "react";

function InputText({ name, label, onChange, isRequired, type = "text" }) {
  return (
    <Input
      name={name}
      label={label}
      placeholder={`Ingrese su ${label.toLowerCase()}`}
      onChange={(e) => onChange?.(e.target.value)}
      type={type}
      isRequired={isRequired}
      {...(isRequired ? { required: true } : {})}
      errorMessage={({ validationDetails, validationErrors }) => {
        if (validationDetails?.typeMismatch) {
          return "Ingrese un valor válido";
        }
        if (validationErrors && typeof validationErrors === "string") {
          return validationErrors;
        }
        return null;
      }}
      validate={(value) => {
        if (type === "tel") {
          if (!/^\d+$/.test(value)) {
            return "Ingrese un número válido";
          }
          if (value.length < 10) {
            return "El teléfono debe tener al menos 10 caracteres";
          }
        } else if (type === "text") {
          if (value.trim().length === 0) {
            return "Este campo es obligatorio";
          }
        }
        return undefined;
      }}
    />
  );
}

export default InputText;
