import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import { ReactNode, useState } from "react";

interface AccordionProps {
  title: string;
  subtitle?: string;
  content: ReactNode;
}

export default function Accordion({ title, subtitle, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`rounded-md  ${isOpen ?  'rounded-md transition duration-1000 border-blue-600 border  border-solid bg-neutral-100' : 'bg-neutral-100'}`}>
      <div className={` flex flex-row justify-between px-6 py-6 ${isOpen ? 'bg-blue-50 transition duration-1000 rounded-md' : ''}`}>
        <div className="flex flex-col gap-1">
          <h1 className={`font-semibold ${isOpen ? 'text-blue-600 transition duration-1000' : 'text-black'}`}>{title}</h1>
          <p className={`text-neutral-600 ${isOpen ? 'text-blue-600 transition duration-1000' : ''}`}>{subtitle? subtitle : null}</p>
        </div>
        
        <button className="mx-2 my-1.5" onClick={toggleAccordion}>
          {isOpen ? <ChevronUpCircle className="text-blue-600 transition duration-1000" /> : <ChevronDownCircle className="text-neutral-600 transition duration-1000" />}
        </button>
      </div>
      <div className={`py-3 px-3 bg-white rounded-b-md ${isOpen ? 'block transition duration-1000' : 'hidden'}`}>
        {content}
      </div>
    </div>
  );
}
