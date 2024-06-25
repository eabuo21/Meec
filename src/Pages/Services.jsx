/** @format */

import React, { useEffect } from "react";
import SHero from "../Components/Services/SHero";
import SSubHero from "../Components/Services/SSubHero";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-container w-full h-[fixed] flex flex-col  bg-dance_blue">
      <SHero className="hero-section bg-white w-full h-[fixed] pb-8" />
      <SSubHero className="hero-sub-section w-full h-[fixed]  "/>
    </div>
  );
};

export default Services;
