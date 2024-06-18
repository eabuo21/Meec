/** @format */

import React from "react";
import Clients from "./Clients";

function ClientsCards() {
  const Cards = [
    {
      box: "white",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },

    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
    {
      box: "",
      image: "https://images.shiksha.com/mediadata/images/articles/1709552003phpZlYRUW.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-2   h-[300px]  w-full  overflow-y-auto  mx-auto  gap-1 justify-center items-start  p-2  md:grid md:grid-cols-3 md:gap-5    md:h-auto  ">
      {Cards.map((card, index) => (
        <div key={index} className=" items-container  border  ">
          <Clients box={card.box} image={card.image} />
        </div>
      ))}
    </div>
  );
}

export default ClientsCards;
