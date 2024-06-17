/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const About = ({ icon, title, description }) => {
  return (
    <div className="main-container  flex flex-col  gap-2 justify-center items-center    md:flex-row md:gap-4   ">
      <Link to="#">
        <section className="items-container      flex flex-col gap-2 p-2 justify-center items-center     w-[300px]  h-[300px] ">
           <div className="icon-awesomefont-container  flex justify-center items-center mx-auto    border border-blue-950 rounded-[50%] p-2 ">
          <FontAwesomeIcon icon={icon}  className="text-4xl font-bold text-blue-950" />
        </div>

          <p className="text-black font-serif text-xl  font-semibold text-center     md:text-2xl ">
            {title}
          </p>

          <p className="text-black font-serif text-base  font-normal text-center     md:text-2xl ">
            {description}
          </p>
          <div className=" w-[50px] h-[1px] bg-blue-950 border-2 border-blue-950 flex justify-enter items-center mx-auto"></div>
        </section>
      </Link>
    </div>
  );
};

export default About;
