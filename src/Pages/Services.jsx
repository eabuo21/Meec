import React, { useEffect } from "react";
import SHero from "../Components/Services/SHero";
import SSubHero from "../Components/Services/SSubHero";
import SRider from "../Components/Services/SRider";
import Approach from "../Components/Services/Approach";
import Projects from "../Components/Services/Projects";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-container w-full h-[fixed] flex flex-col  bg-dance_blue  gap-[7rem]">
      <SHero className="hero-section bg-white w-full h-[fixed] pb-8" />
      <section className="flex justify-center items-center mx-auto">
        <SRider />
      </section>
      <SSubHero className="hero-sub-sections w-full h-[fixed] p-4 relative top-[10rem]   md:pb-16" />
      <Approach className="approach-section w-full h-[fixed] p-4  " />
      {/* <Projects className="approach-section w-full h-[fixed] p-4 "/> */}
    </div>
  );
};

export default Services;
