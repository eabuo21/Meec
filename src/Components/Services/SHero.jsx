/** @format */

import React from "react";
import MLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const SHero = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 5, 0.8), rgba(0, 0, 5, 0.8)), url("https://cdn.openart.ai/stable_diffusion/db1548547aae95970ee66dbcf13385b6d5d93fea_2000x2000.webp")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[500px]   w-full  flex flex-col justify-center items-center   "
    >
      <div className="flex flex-col gap-4 justify-center items-center  mx-auto ">
        <h5 className="text-white font-dm text-xl       md:text-2xl text-center ">
          Tek Solutions
        </h5>
        <h1 className="text-white font-bold text-2xl text-center    md:text-4xl ">
          OUR SERVICES
        </h1>
      </div>
    </div>
  );
};

export default SHero;
