"use client";

import React from "react";
// import { Accordion, AccordionItem } from "@nextui-org/react";

//Import data
import { FAQData } from "../../../../public/data/data";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ListFAQ() {
  return (
    <Accordion variant="shadow">
      {FAQData.map((FAQ, index) => {
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
