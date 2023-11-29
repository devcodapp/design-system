'use client'

import Accordion from "@/components/Accordion";
import AccordionComp from "@/components/Accordion"
import App from "@/components/accordionteste";
import * as React from "react";

export default function Home() {

    return (
        <div>
            <App />
            <h1>pagina inicial</h1>
            <Accordion title="Titulo 1" content="Conteudo teste"></Accordion>
        </div>
    )
}
