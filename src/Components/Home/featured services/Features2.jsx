/** @format */

import React from "react";
import Typewriter from "typewriter-effect";

const Features2 = ({  text }) => {
  return (
    <>
      <div className="items-container flex flex-row gap-8 w-full   ">
        <div className="  w-full  flex flex-row gap-4">
         

          <p className="text-black font-normal font-sans text-left text-sm  md:text-xl md:font-normal">
           {text}
          </p>
        </div>
      </div>
    </>
  );
};
export default Features2;
