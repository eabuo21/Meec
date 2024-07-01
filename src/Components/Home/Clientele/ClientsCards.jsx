/** @format */

import React from "react";
import Clients from "./Clients";

function ClientsCards() {
  const Cards = [
    {
      box: "white",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefRGuKYQbZR4APOFHbtE9BDPumdvN0lEn3w&usqp=CAU",
    },

    {
      box: "",
      image:
        "https://www.bellanaija.com/wp-content/uploads/2023/08/pexels-rdne-stock-project-10375959.jpg",
    },
    {
      box: "",
      image:
        "https://static.fmgsuite.com/media/images/7943df26-707d-4d06-855e-98f6c5b34fdc.jpg",
    },
    {
      box: "",
      image:
        "https://static.pib.gov.in/WriteReadData/userfiles/image/image001UTVZ.jpg",
    },
    {
      box: "",
      image:
        "https://www.lexartifexllp.com/wp-content/uploads/2018/01/how_to_register_non_governmental_organization_ngo_in_nigeria.jpg",
    },
  ];

  return (
    <div
      data-aos="fade-in"
      data-aos-easing="ease-in"
      data-aos-duration="2500"
      data-aos-delay="50"
      data-aos-anchor-placement="top-bottom"
      data-aos-throttle="true"
      className="grid grid-cols-2   h-[300px]  w-full  overflow-y-auto  mx-auto  gap-1 justify-center items-start  p-2   lg:grid lg:grid-cols-3  lg:h-full  lg:overflow-hidden  md:h-[400px]  md:overflow-y-auto md:grid md:grid-cols-2 md:gap-5    md:h-auto  "
    >
      {Cards.map((card, index) => (
        <div key={index} className=" items-container  border  ">
          <Clients box={card.box} image={card.image} />
        </div>
      ))}
    </div>
  );
}

export default ClientsCards;
