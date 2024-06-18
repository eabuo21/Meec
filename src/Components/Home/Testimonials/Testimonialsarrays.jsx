import React from "react";
import Testimonials from "../../components/home/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Caro() {
  const cards = [
    {
      icon: faStar,
      text: "MEEC-Technologies' cloud solutions were exactly what we needed to take our business to the next level. Their team provided seamless implementation and ongoi",
      image: "",
      heading: "SARAH THOMPSON",
    },

    {
      icon: faStar,
      text: "MEEC-Technologies' cloud solutions were exactly what we needed to take our business to the next level. Their team provided seamless implementation and ongoi",
      image: "",
      heading: "SARAH THOMPSON",
    },

    {
      icon: faStar,
      text: "MEEC-Technologies' cloud solutions were exactly what we needed to take our business to the next level. Their team provided seamless implementation and ongoi",
      image: "",
      heading: "SARAH THOMPSON",
    },
  ];

  return (
    <>
      <div className="main-container   flex flex-row  gap-4  ">
        <Testimonials cards={cards} />
      </div>
    </>
  );
}

export default Caro;
