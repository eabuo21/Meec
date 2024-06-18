/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-700 ">
      <div
        className="flex justify-between w-full p-4 text-left focus:outline-none pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp}   className="border-2 border-blue-950 p-2 rounded-full" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown}   className="border-2 border-blue-950 p-2 rounded-full" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 text-white mx-auto bg-blue-950">
          <p className="text-left font-passion text-base md:text-xl">{text}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className=" border-t border-t-blue-950 mx-auto w-[80%] h-[300px]  overflow-y-scroll    md:overflow-hidden  md:h-auto p-2">
      <AccordionItem title="Products & Services 1" text="Description 1" />
      <AccordionItem title="Products & Services 2" text="Description 2" />
      <AccordionItem title="Products & Services 3" text="Description 3" />
      <AccordionItem title="Products & Services 4" text="Description 4" />
      <AccordionItem title="Products & Services 5" text="Description 5" />
      <AccordionItem title="Products & Services 6" text="Description 6" />
    </div>
  );
};

export default Accordion;
