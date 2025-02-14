"use client";

import React from "react";
import BackgroundImg from "../molecules/BackgroundImg";
import { Accordion, AccordionItem } from "@heroui/react";
import { FAQData, FAQType } from "../../../../public/data/data";
import Title from "../atoms/Title";
import RedirectForm from "../molecules/RedirectForm";

function Questions() {
  const questions: FAQType[] = FAQData;

  return (
    <>
      <BackgroundImg className="bg-[url(/imgs/background/lawyer-environment.png)]">
        <div className="h-full flex flex-col p-4 md:p-8">
          <Title>Tienes alguna pregunta? Nosostros te damos una solucion</Title>
          <div className="w-full flex flex-col gap-2 md:w-1/2 md:flex-1 md:justify-evenly">
            <Accordion className="w-full">
              {questions.slice(0, 8).map((question, index) => (
                <AccordionItem
                  key={index}
                  aria-label="Accordion 1"
                  title={question.question}
                >
                  {question.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </BackgroundImg>
      <RedirectForm />
    </>
  );
}

export default Questions;
