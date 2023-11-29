/* eslint-disable react/jsx-key */
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

interface AccordionProps {
  accordions: { accTitle: string, content: string} [];
}
export default function AccordionComp({accordions}:AccordionProps) {


  return (
    <Accordion selectionMode="multiple" variant="shadow">
      {accordions.map((accordion) => (
        <AccordionItem title={accordion.accTitle}>
          {accordion.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
