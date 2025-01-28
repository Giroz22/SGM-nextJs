import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export interface DataFormType {
  name: string;
  tel: string;
  email: string;
  message: string;
}

const PUBLIC_KEY = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;
const SERVICE_ID = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;

export default function sendInfo(data: DataFormType) {
  sendEmail(data);
}

const sendEmail = (data: DataFormType) => {
  emailjs
    .send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        ...data,
      },
      {
        publicKey: PUBLIC_KEY,
      }
    )
    .then(
      (response) => {
        Swal.fire({
          title: "Solicitud enviada!!",
          text: "Pronto estaremos en contacto contigo",
          icon: "success",
        });
      },
      (err) => {
        Swal.fire({
          title: "Ocurrio un error",
          text: "Intentalo nuevamente",
          icon: "error",
        });
      }
    );
};
