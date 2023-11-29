'use client'

import AccordionComp from "@/components/Accordion"
import * as React from "react";

export default function Home() {
  const accordionsControl = [
    { accTitle: "Titulo 1", content: "Conteúdo 1" },
    { accTitle: "Titulo 2", content: "Conteúdo 2" },
    { accTitle: "Titulo 3", content: "Conteúdo 3" },
    { accTitle: "Titulo 4", content: "Conteúdo 4" },
    { accTitle: "Titulo 5", content: "Conteúdo 5" },
  ];
  return (
    <div>
      <div>
        <AccordionComp accordions={accordionsControl}/>
      </div>
    </div>
  )
}
