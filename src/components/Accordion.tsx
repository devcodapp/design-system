// components/Accordion.tsx
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, ReactNode } from 'react';

interface AccordionProps {
    title: string;
    content: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-gray-600 p-4 mb-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                <button
                    className="text-blue-500 focus:outline-none"
                    onClick={toggleAccordion}
                >
                    {isOpen ? <FontAwesomeIcon icon={faCircleChevronUp} /> : <FontAwesomeIcon icon={faCircleChevronDown} />}
                </button>
            </div>
            {isOpen && <div className="mt-4">{content}</div>}
        </div>
    );
};

export default Accordion;
