/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeC = ({ box, icon, title, description, route, awesomefont }) => {
  return (
    <React.Fragment>
      <div
        className="main-box-container flex flex-col gap-4  p-3 rounded-md shadow-current shadow-xl justify-center items-center p-2 mx-auto w-[250px] h-[fixed] md:w-auto md:h-[fixed] relative border border-2 shadow-2xl shadow-inherit "
        style={{
          background: box,
        }}
      >
        <img
          className="container-imag w-[250px] h-[125px]     md:w-[400px]  md:h-[200px]  "
          alt="image"
          src={icon}
        />

        <h3 className="card-title   text-center  text-black font-semibold font-dm text-base    md:text-xl">
          {title}
        </h3>
        <div className="icon-awesomefont-container  flex justify-center items-center mx-auto    border border-blue-950 rounded-[50%] p-2 ">
          <FontAwesomeIcon icon={awesomefont}  className="text-2xl font-bold text-blue-950" />
        </div>
        <p className="description_text text-sm font-normal font-passion text-black  text-center   md:text-xl ">
          {description}
        </p>
        <button className=" bg-blue-950   w-full p-2 rounded-md text-white  ">
          <Link to={route}>Learn More</Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default HomeC;
