/** @format */

import React from "react";
import Features2 from "../featured services/Features2";

function Feature() {
  const cards = [
    {
   
      text: "Streamlined Operations",
    },

    {
   
      text: "Improved Efficiency",
    },

    {
   
      text: "Enhanced Customer Experience",
    },

    {
   
      text: "Increased Productivity",
    },
    {
   
      text: "Sustained Growth",
    },

    {
   
      text: "conceptualization of Business Solutions ",
    },
  ];

  return (
    <>
      <div className="main-container  flex flex-col gap-2 ">
        {cards.map((card, index) => (
          <div key={index} className="  ">
            <Features2  text={card.text} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Feature;
