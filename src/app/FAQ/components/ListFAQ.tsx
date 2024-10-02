"use client";

import React from "react";
// import { Accordion, AccordionItem } from "@nextui-org/react";

//Import data
import { FAQSGM } from "@/../public/data/dataSGM";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ListFAQ() {
  return (
    <Accordion variant="shadow">
      {FAQSGM.map((FAQ, index) => {
        return (
          <AccordionItem
            key={index + FAQ.answer}
            aria-label={FAQ.question}
            title={FAQ.question}
          >
            {FAQ.answer}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
