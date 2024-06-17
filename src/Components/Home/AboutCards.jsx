/** @format */

import React from "react";
import About from "../Home/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function AboutCards() {
  const card = [
    {
      icon: faStar,
      title: " Mission ",
      description: "Empower businesses through innovation",
    },
    {
      icon: "",
      title: " Vission ",
      description: "Leading in tech solutions for a digital future.",
    },
    {
      icon: "",
      title: " Philosophy ",
      description: "Build. Create. Innovate",
    },
  ];

  return (
    <>
     
      <div className="arrays-items-container flex flex-col gap-4 justify-center items-center md:flex-row md:gap-5">
        {card.map((card, index) => (
          <div key={index} className="items">
            <About icon={card.icon} title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutCards;
