"use client";

import React from "react";
import BackgroundImg from "../molecules/BackgroundImg";
import { Accordion, AccordionItem } from "@heroui/react";
import { FAQData, FAQType } from "../../../../public/data/data";
import Title from "../atoms/Title";

function Questions() {
  const questions: FAQType[] = FAQData;

  return (
    <>
      <BackgroundImg className="bg-[url(/imgs/background/lawyer-environment.png)]">
        <div id="FAQ" className="h-full flex flex-col p-4 md:px-8 md:py-10">
          <Title>
            Tienes alguna pregunta? <br /> Nosotros te damos una solucion
          </Title>
          <div className="w-full flex flex-col gap-2 md:w-1/2 md:flex-1 md:justify-evenly">
            <Accordion className="w-full">
              {questions.slice(0, 7).map((question, index) => (
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
    </>
  );
}

export default Questions;
