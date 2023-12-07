'use client'
import React from "react";
import Accordion from "@/components/Accordion";

export default function Home() {

  return (
    
      <main className="w-full p-5">
        <div className="w-full flex flex-col gap-3  ">
          <Accordion title={"Titulo 1"} content={"Conteudo 1"} subtitle={"Subtitulo 1"}/>
          <Accordion title={"Titulo 2"} content={"Conteudo 2"} subtitle={"Subtitulo 2"}/>
        </div>
      </main>
  );
}