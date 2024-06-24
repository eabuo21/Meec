/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";
import Herobg from "../../assets/images/herobg.jpg";
import "../../assets/styles/HerroButton.css";

const Hero = () => {
  return (
    <React.Fragment>
      <div
        className="hero-container  h-[500px] flex flex-col gap-4 p-2  justify-center items-center  px-3   md:gap-1  md:h-[550px ]  
      "
        style={{
          background: `linear-gradient(rgba(1,0, 0, 0.7), rgba(1,0, 0, 0.7)),  url("https://media.istockphoto.com/id/178842131/photo/door-to-office.jpg?s=612x612&w=0&k=20&c=3Ci4NchY3YUEXJE-u6SiM9NSVKM7ILpK3EOoiPb-LZ8=")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="background-holder flex  flex-col justify-center items-center  gap-4  ">
          <h3
            className="welcome-text   text-xl text-gold  flex  flex-col   gap-4  justify-center  items-center  font-bold font-passion
                md:text-4xl md:pb-8   md:flex-row"
          >
            <h4 className=" text-white  ">Experience First Class Blend of</h4>
            <TypeAnimation
              sequence={[
                "Creativity",
                2000,
                "Innovation",
                2000,
                " Capacity",
                2000,
              ]}
              wrapper="span"
              speed={10}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h3>
          <section className="rider-text  flex flex-col gap-3 justify-center items-center  ">
            <div className="flex gap-4">
              <p>
                <span className="text-blue-400 font-bold text-xl    md:text-2xl">
                  C
                </span>
                <span className=" text-white font-bold text-xl    md:text-2xl ">
                  reate
                </span>
              </p>
              <p>
                <span className="text-blue-400 font-bold text-xl    md:text-2xl">
                  B
                </span>
                <span className=" text-white font-bold text-xl    md:text-2xl ">
                  uild
                </span>
              </p>
              <p>
                <span className="text-blue-400 font-bold text-xl    md:text-2xl">
                  I
                </span>
                <span className=" text-white font-bold text-xl    md:text-2xl ">
                  nnovate
                </span>
              </p>
            </div>
            <p className="flex flex-row gap-2">
              <span className="text-white  font-bold text-xl    md:text-2xl">
                WITH
              </span>  <span className=" text-blue-400 font-bold text-xl    md:text-2xl ">
                MEEC TECHNOLOGIES
              </span>
            </p>
          </section>
          <section className="buttons-section  flex flex-row gap-2      md:flex-row md:gap-5  md:mr-[10rem] md:pt-8">
            <button className="hover-effect-1 flex flex-row w-[fixed]   r-auto ml-auto      h-[60px] justify-center items-center p-4    md:w-[fixed] md:h-[45px]    bg-transparent border border-white  hover:text-dark text-white  md:text-2xl">
              <Link to="" className="link-text"> Get Started</Link>
            </button>

            <button className="hover-effect-2 flex flex-row w-[fixed]   r-auto ml-auto      h-[60px] justify-center items-center p-4    md:w-[fixed] md:h-[45px]    bg-white border border-white  text-dark hover:text-white   md:text-2xl">
              <Link to=""  className="link-text">Get Started</Link>
            </button>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
