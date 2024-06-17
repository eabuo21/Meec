import React from "react";
import Features from "../featured services/Features";

function Feature() {
  const cards = [
    {
     
      text: "Expert IT Consulting",
    },

    {
     
      text: "Cutting-Edge Digital Transformation",
    },

    {
     
      text: "Seamless Cloud Solutions & Integrations",
    },

    {
       
        text: "Custom Software Dvelopment",
      },

      {
       
        text: "Domain name Registration",
      },

      {
       
        text: "Professional Email / Remote WorkPlace  Setup",
      },

      {
       
        text: "Business Visibility (GMB)",
      },

      {
       
        text: "General System Administration/ Technical Support",
      },

    {
     
      text: "Comprehensive Cybersecurity",
    },

    {
     
      text: "Reliable Managed Services",
    },
  ];

  return (
    <>
      <div className="main-container  flex flex-col gap-2 ">
        {cards.map((card, index) => (
          <div key={index} className="  ">
            <Features  text={card.text} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Feature;
