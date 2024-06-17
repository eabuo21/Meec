/** @format */

import React, { useEffect } from "react";
import Hero from "../Components/Home/Hero";
import HomeCards from "../Components/Home/HomeCards";
import Services from "../Components/Home/Services";

const LandingPage = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);
    
  return (
    <>
      <div className="main-home-container    w-full h-[fixed]  flex flex-col gap-16 ">
        <section className="hero-section  pb:16  bg-white w-full h-[fixed] md:pb-16 ">
          <Hero />
        </section>

        <section className="cards-section  pt-16 h-[fixed]  bg-white flex justify-center items-center p-7 bg-gradient-to-br from-white via-white to-[violet] ">
          <HomeCards />
        </section>
        <section className="services-=section   p-3   h-[fixed] w-full pb-8 ">
          <Services/>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
