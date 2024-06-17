/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const About = ({ icon, title, description }) => {
  return (
    <div className="main-container  flex flex-col  gap-2 justify-center items-center    md:flex-row md:gap-4   ">
      <Link to="#">
        <section className="items-container      flex flex-col gap-2 p-2 justify-center items-center     w-[300px]  h-[300px] ">
          <img
            src={icon}
            className="w-auto h-auto  flex  justify-center items-center  bg-blue-950 rounded-[50%]  w-[60px] h-[60px]"
          />

          <p className="text-black font-serif text-xl  font-semibold text-center     md:text-2xl ">
            {title}
          </p>

          <p className="text-black font-serif text-base  font-normal text-center     md:text-2xl ">
            {description}
          </p>
        </section>
      </Link>
    </div>
  );
};

export default About;
