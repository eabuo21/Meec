/** @format */

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    smooth: true,
    adaptiveHeight: true,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 7000,
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
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div
          key={i}
          className={`custom-dot flex flex-col justify-center items-center  border-2     border-blue-950  ${
            i === activeIndex ? "active  border-aa2 border-red" : "   " // Add a class for the active dot
          }`}
        ></div>
      );
    },
  };

  // Define your array of testimonial content
  const testimonials = [
    {
      content: "excellent services rendered",
      image:
        "https://thumbs.dreamstime.com/b/beautiful-african-american-business-woman-portrait-arms-folded-confident-happy-ceo-cheerful-smiling-businesswoman-corporate-162367854.jpg",
      author: "SARAH THOMPSON",
    },
    // Add more testimonials as needed
    {
      content: "excellent services rendered",
      image:
        "https://www.shutterstock.com/image-photo/excited-entrepreneur-40s-dressed-white-600nw-1873826818.jpg",
      author: "JOHN CARTER",
    },

    {
      content: "excellent services rendered",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPZ-x3xxXptzOTIGTlej757gdWLChDUQyAg&usqp=CAU",
      author: "EMMA RODGRIGUEZ",
    },
    {
      content: "excellent services rendered",
      image:
        "https://img.freepik.com/premium-photo/happy-success-portrait-black-man-startup-ceo-proud-confident-leader-african-business-vision-future-businessman-africa-with-leadership-corporate-company-with-smile-office_590464-89006.jpg",
      author: "DAVID WILSON",
    },
  ];

  return (
    <>
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in"
        data-aos-duration="2500"
        data-aos-delay="50"
        data-aos-throttle="true"
        className="main-slider-container p-1 flex flex-col justify-center items-center pb-8
      
      "
      >
        <p
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-linear"
          data-aos-duration="1500"
          data-aos-mirror="true"
          data-aos-once="true"
          className="text-center font-bold text-blue-950   text-base     md:text-xl  pt-8   flex justify-center items-center "
        >
          What Our Clients are Saying About Our Services
        </p>
        <Slider
          {...settings}
          className="w-full h-[fixed] flex flex-row justify-between  items-start gap-16 md:gap-9  p-2 pt-8  "
        >
          {/* Render each testimonial dynamically */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="slide-1 flex flex-col gap-3 justify-center items-start w-[200px] p-2 bg-grey  rounded-lg  shadow-xl bg-opacity-40    md :shadow-xl md :rounded-md  md:gap-8 md:items-center "
            >
              <section className=" flex flex-row gap-4 justify-start items-start p-2">
                <div className=" flex flex-col  gap-5 bg-white  w-[160px] h-[120px]   justify-center items-center  p-2 rounded-md shadow-current shadow-md    md:w-[150px] md:h-[150px]          md:hover:bg-blue-950  md:hover:text-white  md:hover:transition-all  md:hover:duration-1000 md:hover:ease-in-out   md:transition-all md:duration-1000  md:ease-in-out">
                  <img
                    className="rounded-[50%] flex flex-col justify-center items-center p-2 w-[70px] h-[70px]  shadow-current shadow-md   bg-white"
                    src={testimonial.image}
                    alt="client-image"
                  />

                  <h5 className=" text-sm font-passion text- font-normal text-left  md:text-sm">
                    {testimonial.author}
                  </h5>
                </div>
                <section className="flex flex-col gap-2 p-2 justify-center items-center ">
                  <div className="image-container w-full flex flex-row justify-center items-center p-1   lg:pt-9">
                    {/* Render four FontAwesome icons for each testimonial */}
                    {[...Array(4)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        star-icon
                        className="text-blue-950  text-sm font-normal   md:text-base"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-serif text-black text-center pb-6       md:text-base ">
                    <span className="quotation font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#c168aa] to-blue-700 font-sans text-4xl   lg:w-full">
                      {" "}
                      “
                    </span>
                    {testimonial.content}
                    <span className="quotation font-normal text-blue-950 bg-clip-text bg-gradient-to-b from-[#c168aa] to-blue-950 font-sans  ">
                      ”
                    </span>
                  </p>
                </section>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
