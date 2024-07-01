/** @format */

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBridgeLock } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: true, // Only animate once
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    smooth: true,
    adaptiveHeight: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    useCss: true,
    useTransform: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div
          key={i}
          className={` flex flex-col justify-center items-center  border-2  w-[20px] h-[20px] rounded-full bg-blue-950   border-blue-950  ${
            i === activeIndex ? "active  border-2 border-gold bg-gold" : "   " // Add a class for the active dot
          }`}
        ></div>
      );
    },
  };

  // Define your array of testimonial content
  const testimonials = [
    {
      icon: faBridgeLock,
      Background: "white",
      heading: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laborum alias consequatur quidem tempore.",
      route: "",
    },

    {
      icon: faBridgeLock,
      Background: "white",
      heading: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laborum alias consequatur quidem tempore.",
      route: "",
    },

    {
      icon: faBridgeLock,
      Background: "white",
      heading: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laborum alias consequatur quidem tempore.",
      route: "",
    },

    {
      icon: faBridgeLock,
      Background: "white",
      heading: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laborum alias consequatur quidem tempore.",
      route: "",
    },

    {
      icon: faBridgeLock,
      Background: "white",
      heading: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laborum alias consequatur quidem tempore.",
      route: "",
    },
  ];

  return (
    <>
      <div
        className="main-slider-container  flex  justify-start items-start w-full overflow-hidden
      
      "
      >
        <div className=" flex flex-row w-full    h-[400px]">
          <Slider
            {...settings}
            className="w-full h-[400px]    flex flex-row justify-center  items-center gap-2  md:gap-2  p-4  focus:outline-none bg-dance_blue md:justify-between md:items-start"
          >
            {testimonials.map((testimonials, index) => (
              <div
                key={index}
                className="items-container    flex   justify-center items-center  gap-3   "
              >
                <section
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  style={{
                    background: testimonials.Background,
                  }}
                  className="  h-[400px] w-full  flex flex-col justify-center items-center gap-6  shadow-xl "
                >
                  <FontAwesomeIcon
                    icon={testimonials.icon}
                    className="text-gold text-6xl font-bold "
                  />
                  <h6 className="text-xl font-bold font-dm text-blue-950 ">
                    {testimonials.heading}
                  </h6>
                  <p className="text-base text-gray text-center font-serif ">
                    {testimonials.description}
                  </p>

                  <Link
                    to={testimonials.route}
                    className="text-blue-400 text-xl font-bold "
                    target="_blank"
                  >
                    Learn More &rarr;
                  </Link>
                </section>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
