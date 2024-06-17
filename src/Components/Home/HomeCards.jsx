/** @format */

import React from "react";
import HomeCard from "../../Components/Home/HomeCard";

function ArrayItems() {
  const Cards = [
    {
      box: "white",
      icon: "",
      description: "this is a domm text and will be replaced later at the cost of finishing the project",
      designedline: 'black',
      halfbox: '#cc5500',
    },
    {
      box: "#cc5500",
      icon: "",
      description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
      designedline: 'white',
      halfbox: 'white',
    },
    {
      box: "white",
      icon: "",
      description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
      designedline: 'black',
      halfbox: '#cc5500',
    },
    {
      box: "#cc5500",
      icon: "",
      description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
      designedline: 'white',
      halfbox: 'white',
    },
    {
      box: "white",
      icon: "",
      description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
      designedline: 'black',
      halfbox: '#cc5500',
    },
    {
      box: "#cc5500",
      icon: "",
      description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
      designedline: 'white',
      halfbox: 'white',
    },
  ];

  return (
    <React.Fragment>
      <div className="main-cards-container flex overflow-x-auto justify-between items-center gap-7 md:grid md:grid-cols-3 md:gap-12">
        {Cards.map((card, index) => (
          <div key={index} className="items-alignment">
            <HomeCard
              box={card.box}
              icon={card.icon}
              description={card.description}
              designedline={card.designedline}
              halfbox={card.halfbox}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ArrayItems;
