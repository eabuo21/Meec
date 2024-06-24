import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../Components/Home/Hero";
import HomeCards from "../Components/Home/HomeCards";
import AboutCards from "../Components/Home/AboutCards";
import FeaturedServices1 from "../Components/Home/featured services/Featuresarrays";
import FeaturedServices2 from "../Components/Home/featured services/Featuresarrays2";
import Clientele from "../Components/Home/Clientele/Clientele";
import Testimonials from "../Components/Home/Testimonials/Testimonials";
import FaqBg from "../assets/images/background.png";
import FQ from "../Components/Home/Faq/FQ";
import FQ2 from "../Components/Home/Faq/FQ2";
import Cs1 from "../Components/Home/CSR/Cs1";
import Cs2 from "../Components/Home/CSR/Cs2";
import CSRVideo from "../assets/files/videos/7706758-uhd_4096_2160_25fps.mp4";
import CSRIcon from "../assets/images/customer-service.png";
import Maps from "../Components/Home/Google/Maps";
import MailingList from "../Components/Home/MailingList";

const LandingPage = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="main-home-container w-full h-[fixed] flex flex-col gap-8 ">
        <section className="hero-section bg-white w-full h-[fixed]">
          <Hero />
        </section>

        <section className="bg-[white] p-2 h-[fixed] w-full flex justify-center items-center">
          <AboutCards />
        </section>

        <section className="cards-section h-[fixed] w-full block items-center p-7 bg-blue-950 gap-7">
          <h2 className="text-center font-bold text-white text-xl md:text-4xl flex justify-center items-start pb-8">
            Our Services
          </h2>
          <HomeCards />
        </section>

        <section className="services-=section p-3 h-[fixed] w-full pb-8 bg-[zinc] flex flex-col justify-center items-center pt-12">
          <h2 className="text-center font-bold text-blue-950 text-xl md:text-4xl pt-8">
            Solutions
          </h2>
          <div className="flex flex-col gap-2 md:gap-12 pt-12 md:flex-row gap-5 justify-start px-5 items-start">
            <FeaturedServices1 />
            <FeaturedServices2 />
            <img
              data-aos="zoom-in"
              data-aos-easing="ease linear"
              data-aos-duration="2500"
              data-aos-delay="50"
              data-aos-anchor-placement="top-bottom"
              data-aos-throttle="true"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_software_developer.jpg"
              className="hidden md:flex w-[30%] h-[300px]"
            />
          </div>
        </section>

        <section className="services-=section flex flex-col p-3 h-[fixed] w-full pb-8 bg-white pt-12 flex justify-center items-center">
          <h2 className="text-center font-bold text-blue-950 text-xl md:text-4xl pt-8 pb-8">
            Clientele
          </h2>
          <Clientele />
        </section>

        <section className="services-=section p-3 h-[400px] w-full pb-8 bg-white">
          <h2 className="text-center font-bold text-blue-950 text-xl md:text-4xl pt-8">
            Testimonials
          </h2>
          <Testimonials />
        </section>

        <section
          style={{
            position: "relative", // Ensure the section can contain absolutely positioned elements
            width: "100%",
            height: "600px", // Default height for larger screens
            // background: "linear-gradient(rgba(0, 0, 5, 0.1), rgba(0, 0, 5, 0.1))",
            overflow: "hidden", // Ensure video does not overflow the section
          }}
          className="services-=section pb-16 p-5 mx-auto h-[fixed] w-full relative top-[4rem] gap-8 justify-center items-center    md:top-[7rem]"
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "100%",
              minHeight: "100%",
              width: "auto",
              height: "auto",
              zIndex: "-1", // Ensure video stays behind other content
            }}
          >
            <source src={CSRVideo} type="video/mp4" />
             browser does not support the video tag.
          </video>

          <h2 className="text-center font-bold text-blue-950 text-xl md:text-4xl relative top-7 pt-8 flex justify-center items-center  md:text-white">
            Consult an Expert
          </h2>
          <div className="items-holders flex flex-col gap-4 relative top-[4rem] h-[fixed] p-3 bg-dance_blue shadow-current shadow-md md:shadow-none justify-center items-center md:grid md:grid-cols-2 md:gap-6 md:justify-center md:items-center">
            <Cs2 />
            <Cs1 />
          </div>
        </section>

        <section className="services-=section  bg-dance_blue pb-4 p-5 mx-auto   h-[fixed] w-full  relative top-[7rem]  gap-8   md:pb-16">
          <h2 className="text-center font-bold text-blue-950   text-xl     md:text-4xl  pt-8   flex justify-center items-center ">
            FAQ
          </h2>
          <div className="flex flex-col gap-9 justify-center items-start    md:grid md:grid-cols-2 md:gap-4 p-2">
            <FQ />

            <FQ2 />
          </div>
        </section>

        <section className="map-=section     p-4  h-[fixed] w-full  relative  top-[6rem]  md:flex  flex-col gap-4 justify-center items-center ">
          <h2 className="text-center font-bold text-blue-950 text-xl md:text-4xl pt-8">
            Need Direction ?
          </h2>
          <Maps />
        </section>
      </div>
    </>
  );
};

export default LandingPage;
