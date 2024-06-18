/** @format */

import React from "react";
import Clients from "./Clients";

function ClientsCards() {
  const Cards = [
    {
      box: "white",
      image: "",
    },

    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
    {
      box: "",
      image: "",
    },
  ];

  return (
    <div className="grid grid-cols-2   h-[300px]   overflow-y-auto  mx-auto  gap-2 justify-center items-start  p-2  md:grid md:grid-cols-3 md:gap-5    md:h-auto  ">
      {Cards.map((card, index) => (
        <div key={index} className=" items-container  border  ">
          <Clients box={card.box} image={card.image} />
        </div>
      ))}
    </div>
  );
}

export default ClientsCards;
