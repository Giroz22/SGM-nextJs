import React from "react";
import HeaderDefault from "../components/HeaderDefault";
import ListFAQ from "./components/ListFAQ";

export default function FAQ() {
  return (
    <>
      <HeaderDefault
        title="Preguntas frecuentes"
        urlImgBG="/imgs/background/header.jpg"
      />
      <main className="max-w-screen-xl p-8 md:px-20 m-auto">
        <ListFAQ />
      </main>
    </>
  );
}
