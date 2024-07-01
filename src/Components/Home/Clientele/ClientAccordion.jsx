/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-700  hover:bg-blue-400 hover:transition-all hover:duration-1000 hover:ease-in-out      ease-in-out transition-all duration-1000">
      <div
        className="flex justify-between w-full p-4 text-left focus:outline-none pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span>
          {isOpen ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              className="border-2 border-blue-950 p-2 rounded-full"
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              className="border-2 border-blue-950 p-2 rounded-full"
            />
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
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in"
      data-aos-duration="2000"
      data-aos-delay="50"
      data-aos-anchor-placement="top-bottom"
      data-aos-throttle="true"
      className=" border-t border-t-blue-950 mx-auto w-full  h-[300px]  overflow-y-scroll    lg:overflow-hidden  lg:h-auto  md:h-auto p-2   md:h-[300px]  md:overflow-y-scroll "
    >
      <AccordionItem
        title="Governments"
        text="We provide comprehensive IT solutions for government entities, focusing on secure and compliant digital infrastructure. From robust network administration to cutting-edge cloud computing, our services ensure smooth operations and enhanced public service delivery "
      />
      <AccordionItem
        title="Businesses"
        text="Our IT services for businesses are designed to drive growth and efficiency. From dynamic websites and apps to secure cloud solutions, we support your digital transformation with reliable, scalable IT infrastructure"
      />
      <AccordionItem
        title="Individuals"
        text="For individuals looking to make their mark online, we offer tailored website development, reliable hosting, and professional email services. Whether you're building a personal blog or showcasing your portfolio, we provide the tools you need to stand out"
      />
      <AccordionItem
        title="MSEs (Micro and Small Enterprises)
"
        text="Our IT services for MSEs are designed to empower small businesses with affordable, effective technology solutions. From creating engaging websites to ensuring secure and efficient operations, we help you grow and succeed in the digital landscape"
      />
      <AccordionItem
        title="NGOs"
        text="We offer dedicated IT solutions for NGOs, focusing on enhancing digital outreach and operational efficiency. From secure websites to reliable network support, our services empower NGOs to make a greater impact in their communities"
      />
    </div>
  );
};

export default Accordion;
