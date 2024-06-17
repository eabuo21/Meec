/** @format */

// /** @format */

import React from "react";
import HomeCard from "../../Components/Home/HomeCard";
import { faCloud, faCode, faTicket, faHeadSideCoughSlash, faDesktop, faMicrochip } from "@fortawesome/free-solid-svg-icons";


function ArrayItems() {
  const Cards = [
    {
      box: "white",
      icon: "https://meectech.000webhostapp.com/assets/cloud1-DwkoUgqn.webp",
      title: " Website Design & Development",
      awesomefont: faCode,
      description:
        "Crafting dynamic and responsive sites tailored to your needs",
      route: "",
      designedline: "",
      halfbox: "",
    },
    {
      box: "white",
      icon: "https://meectech.000webhostapp.com/assets/transformation-B0X5jWHv.webp",
      title: "Cloud Solutions",
       awesomefont: faCloud,
      description:
        "Innovative cloud services for seamless business operations.",
      designedline: "",
      route: "",
      halfbox: "",
    },
    {
      box: "white",
      icon: "https://meectech.000webhostapp.com/assets/transformation-B0X5jWHv.webp",
      title: "Technical Support ",
       awesomefont: faTicket,
      description: "Reliable tech support ensuring your systems run smoothly",
      designedline: "",
      route: "",
      halfbox: "",
    },
    {
      box: "white",
      icon: "https://meectech.000webhostapp.com/assets/transformation-B0X5jWHv.webp",
      title: "Virtual Assistance",
       awesomefont: faHeadSideCoughSlash,
      description: "Professional virtual assistance to boost your productivity",
      designedline: "",
      route: "",
      halfbox: "",
    },
    {
      box: "white",
      icon: "https://meectech.000webhostapp.com/assets/transformation-B0X5jWHv.webp",
      title: "Sys & Net Administration",
       awesomefont: faDesktop,
      description: "Efficient system and network management for your business",
      designedline: "",
      route: "",
      halfbox: "",
    },
    {
      box: "white",
      icon: "https://meectech.000webhostapp.com/assets/transformation-B0X5jWHv.webp",
      title: "Data Migration & Integration",
       awesomefont: faMicrochip,
      description:
        "Secure data migration and integration for seamless transitions",
      designedline: "",
      route: "",
      halfbox: "",
    },
  ];

  return (
    <React.Fragment>
      <div className="main-cards-container flex overflow-x-auto justify-between items-start gap-4 md:grid md:grid-cols-3 md:gap-12  ">
        {Cards.map((card, index) => (
          <div key={index} className="items-alignment shadow-current shadow-xl">
            <HomeCard
              box={card.box}
              icon={card.icon}
              title={card.title}
              description={card.description}
              designedline={card.designedline}
              halfbox={card.halfbox}
              route={card.route}
              awesomefont={card.awesomefont}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ArrayItems;

// /** @format */

// import React, { useState } from "react";
// import HomeCard from "../../Components/Home/HomeCard";

// function ArrayItems() {
//   const Cards = [
//     {
//       box: "white",
//       icon: "",
//       description: "this is a domm text and will be replaced later at the cost of finishing the project",
//       designedline: 'black',
//       halfbox: '#cc5500',
//     },
//     {
//       box: "#cc5500",
//       icon: "",
//       description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
//       designedline: 'white',
//       halfbox: 'white',
//     },
//     {
//       box: "white",
//       icon: "",
//       description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
//       designedline: 'black',
//       halfbox: '#cc5500',
//     },
//     {
//       box: "#cc5500",
//       icon: "",
//       description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
//       designedline: 'white',
//       halfbox: 'white',
//     },
//     {
//       box: "white",
//       icon: "",
//       description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
//       designedline: 'black',
//       halfbox: '#cc5500',
//     },
//     {
//       box: "#cc5500",
//       icon: "",
//       description: "this is a domm text and will be replaced later at the cost of finishing the project this is a domm text and will be replaced later at the cost of finishing the project",
//       designedline: 'white',
//       halfbox: 'white',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? Cards.length - 1 : prevIndex - 1));
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === Cards.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <React.Fragment>
//       <div className="main-cards-container flex flex-col items-center  ">
//         <div className="flex    overflow-x-auto   justify-between   items-start
//         md:grid md:grid-cols-3    ">
//           <button onClick={handlePrevClick} className="arrow-button    md:hidden">{"<"}</button>
//           <div className="items-alignment   ">
//             <HomeCard
//               box={Cards[currentIndex].box}
//               icon={Cards[currentIndex].icon}
//               description={Cards[currentIndex].description}
//               designedline={Cards[currentIndex].designedline}
//               halfbox={Cards[currentIndex].halfbox}
//             />
//           </div>
//           <button onClick={handleNextClick} className="arrow-button   md:hidden">{">"}</button>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default ArrayItems;
