/** @format */

import React, { useEffect } from "react";
import Hero from "../Components/Home/Hero";
import HomeCards from "../Components/Home/HomeCards";
import Services from "../Components/Home/Services";
import AboutCards from "../Components/Home/AboutCards";
import FeaturedServices1 from "../Components/Home/featured services/Featuresarrays";
import FeaturedServices2 from "../Components/Home/featured services/Featuresarrays2";

const LandingPage = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <>
      <div className="main-home-container    w-full h-[fixed]  flex flex-col   justify-center ">
        <section className="hero-section    bg-white w-full h-[fixed]  ">
          <Hero />
        </section>

        <section className="  bg-[white]  p-2 h-[fixed] w-full  flex  justify-center items-center ">
          <AboutCards />
        </section>

        <section className="cards-section  h-[fixed]  w-full  block  items-center p-7 bg-blue-950   gap-7">
          <h2 className="text-center font-bold text-white   text-xl     md:text-4xl     flex justify-center items-start pb-8">
            Our Services
          </h2>
          <HomeCards />
        </section>

        <section className="services-=section   p-3   h-[fixed] w-full pb-8 bg-[zinc] flex flex-col justify-center items-center pt-12 ">
          <h2 className="text-center font-bold text-blue-950   text-xl     md:text-4xl  pt-8   flex justify-center items-center ">
            Solutions
          </h2>
          <div className=" flex flex-col  gap-2    md:gap-12  pt-12  md:flex-row gap-5 justify-start px-5 items-start  ">
            <FeaturedServices1 />
            <FeaturedServices2 />
            <img src="https://meectech.000webhostapp.com/assets/cloud-BPWQXJxz.webp"
            className="  hidden md:flex w-[30%] h-[30%]"/>
          </div>
        </section>

        <section className="services-=section   p-3   h-[400px] w-full pb-8 bg-white  pt-12 flex justify-center items-center ">
          <h2 className="text-center font-bold text-blue-950   text-xl     md:text-4xl  pt-8   flex justify-center items-center ">
            Clientele
          </h2>
        </section>

        <section className="services-=section   p-3   h-[400px] w-full pb-8 bg-white  ">
          <h2 className="text-center font-bold text-blue-950   text-xl     md:text-4xl  pt-8   flex justify-center items-center ">
            Testimonials
          </h2>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
