import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAccessibleIcon,
  faAffiliatetheme,
  faAccusoft,
} from "@fortawesome/free-brands-svg-icons";

const Approach = () => {
  const cards = [
    {
      icon: faAccessibleIcon,
      heading: "heading 1",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore necessitatibus beatae eos.",
      btn: "",
    },

    {
      icon: faAffiliatetheme,
      heading: "heading 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore necessitatibus beatae eos.",
      btn: "",
    },
    {
      icon: faAccusoft,
      heading: "heading 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore necessitatibus beatae eos.",
      btn: "",
    },
  ];

  return (
    <div className="items-container   flex flex-col gap-4  justify-center items-center    md:flex-row  ">
      {cards.map((cards, index) => (
        <div
          key={index}
          className="items  flex  flex-col  gap-4  justify-center items-center  w-[350px]"
        >
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in linear"
            data-aos-duration="2000"
            className=""
          >
            <FontAwesomeIcon
              icon={cards.icon}
              className="text-gold font-bold text-6xl"
            />
          </div>
          <div
            data-aos="flip-right"
            data-aos-easing="ease-in  cubic"
            data-aos-duration="2500"
            data-aos-delay="50"
            data-aos-anchor-placement="top-bottom"
            data-aos-throttle="true"
            className=" flex flex-col justify-center items-center "
          >
            <h2 className="text-blue-950 text-xl font-bold text-center font-sans   md:text-2xl">
              {cards.heading}
            </h2>
            <article className="text-center text-base text-black font-serif   md:text-xl  w-[80%]">
              {cards.description}
            </article>

            <button className=" btn-with-arrow    rounded-[80%] border-b-2 border-b-blue-950 hover:border-t-2 hover:border-t-gold transition-all duration-1000 ease-in-out  hover:transition-all hover:duration-1000 hover:ease-in-out        text-blue-700 font-bold text-base font-sans w-[100px] h-[40px] p-2  md:text-xl md:w-[200px] h-[50px] ">
              {cards.btn}
              Request
              {/* <span className="arrows text-white font-bold ">&rarr;</span> */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
