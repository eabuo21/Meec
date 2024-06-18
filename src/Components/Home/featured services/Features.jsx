/** @format */

import React from "react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const Features = ({ text }) => {
  return (
    <>
      <div className="items-container flex flex-row gap-8 w-full   ">
        <div className="  w-full  flex flex-row gap-4">
          <p className="text-black font-normal font-sans text-left text-base md:text-xl md:font-normal">
                     <span><FontAwesomeIcon icon={faAngleDoubleRight} className="text-blue-950 text-base  md:text-xl"/></span>
            {text}
          </p>
        </div>
      </div>
    </>
  );
};
export default Features;
