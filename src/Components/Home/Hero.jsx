/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";
import Herobg from "../../assets/images/herobg.jpg";
const Hero = () => {
  return (
    <React.Fragment>
      <div
        className="hero-container   flex flex-col gap-4 p-2  justify-start items-start  px-3   md:gap-1    
      "
        style={{
          background: `linear-gradient(rgba(1,0, 0, 0.4), rgba(1,0, 0, 0.4)),  url(${Herobg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="background-holder flex  flex-col justify-start items-start ">
          <h1 className="text-white font-passion text-left font-bold  text-xl  md:text-6xl  py-6">
            WELCOME TO{" "}
            <span className="text-[#cc5500]  font-bold text-2xl  font-cur   md:text-5xl  ">
              M
            </span>{" "}
            <span className=" text-[white]  font-bold text-2xl  font-cur   md:text-5xl ">E</span> <span className=" text-[#cc5500]  font-bold text-2xl  font-cur   md:text-5xl ">E</span>{" "}
            <span className="text-white  font-bold text-2xl  font-cur   md:text-5xl  ">
              C
            </span>
          </h1>
          <h3
            className="welcome-text  text-[orange] flex   justify-start  md:text-xl  md:text-2xl font-bold font-passion
                md:text-5xl md:pb-8 "
          >
            <TypeAnimation
              sequence={["Build", 2000, "Create", 2000, "Innovate", 2000]}
              wrapper="span"
              speed={10}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h3>

          <p className="under-description-text text-base font-normal font-dm pt-8  md:text-2xl md:pb-6  text-white font-bold   w-[98%] md:w-[50%]">
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "
                  )
                  .pauseFor(1000)

                  .start();
              }}
            /> */}
            We are your trusted partner in delivering comprehensive IT
            solutions. As a startup technology company, we specialize in
            cutting-edge services to enhance your digital presence and
            streamline operations. Partner with us to stay at the forefront of
            innovation and efficiency.
          </p>
          <section className="pushed-to-right-on-desktop  flex flex-col  md:ml-auto md:w-[60%]  ">
            <p
              className="second-under-text  text-white text-sm font-bold font-dm  pt-6 
          
          md:text-2xl md:pb-8 "
            >
              Join us at MEEC Technologies and experience innovation that drives
              results. Discover how our tailored IT solutions and expert
              services can empower your organization to thrive in the digital
              age
            </p>
            <div className="flex flex-col pt-6">
              <Link to="/shortener">
                <button className="url-shorten-navigate bg-[#cc5500] hover:bg-[#87CEEB]  hover:text-black hver:font-bold  p-4 text-white  h-auto w-[30vh]  text-center  md:w-[fixed] flex justify-center items-center ">
                  Get Started
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
