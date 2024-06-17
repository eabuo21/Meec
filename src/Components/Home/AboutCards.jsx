/** @format */

import React from "react";
import About from "../Home/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHelicopter, faPersonHiking } from "@fortawesome/free-solid-svg-icons";



function AboutCards() {
  const card = [
    {
      icon:  faHelicopter,
      title: " Mission ",
      description: "Empower businesses through innovation",
    },
    {
      icon: faEye,
      title: " Vission ",
      description: "Leading in tech solutions for a digital future.",
    },
    {
      icon: faPersonHiking,
      title: " Philosophy ",
      description: "Build. Create. Innovate",
    },
  ];

  return (
    <>
     
      <div
        className="arrays-items-container flex flex-col gap-1 justify-center items-center md:flex-row md:gap-5">
        {card.map((card, index) => (
          <div
          data-aos="fade-in"
          data-aos-easing="ease-in linear"
          data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-bottom"
            data-aos-throttle="true"
            key={index} className="items">
            <About icon={card.icon} title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutCards;
