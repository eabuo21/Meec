import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHackerNews,
  faSquareGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function News() {
  const news = [
    {
      border: "white",
      frame:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/E6C8/production/_122008095_googlegettyimages-1234869764.jpg",
      icon: faHackerNews,
      heading: "CYBER SECURITY",
      description: "Cyber Treats News Worldwide",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis itaque minus soluta repreh]pore aper",
      url: "https://linkstopost.com",
      frame_source: "https://linkstopost.com",
    },

    {
      border: "white",
      frame: "https://tongston.com/assets/mobileXR-fc7c8978.png",
      icon: faSquareGooglePlus,
      heading: "CYBER SECURITY",
      description: "Cyber Treats News Worldwide",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis itaque minus soluta repreh]pore aper",
      url: "https://linkstopost.com",
      frame_source: "https://linkstopost.com",
    },

    {
      border: "white",
      frame:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/1772A/production/_111424069_icub.jpg",
      icon: faSquareGooglePlus,
      heading: "CYBER SECURITY",
      description: "Cyber Treats News Worldwide",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis itaque minus soluta repreh]pore aper",
      url: "https://linkstopost.com",
      frame_source: "https://linkstopost.com",
    },
  ];

  return (
    <div className=" flex flex-col gap-12 justify-start items-center p-2  w-full  md:gap-12">
      {news.map((news, index) => (
        <div
          key={index}
          style={{
            background: news.border,
          }}
          className="h-[fixed] w-[355px]    shadow-xl  justify-start items-start flex flex-col md:flex-row gap-8      
          
          lg:h-[60vh] lg:w-[150vh]  lg:pl-2 lg:pr-2         md:h-[30vh] md:w-[75vh]  md:pl-2 md:pr-2  "
        >
          <section
            className="image-container   h-[300px] w-[355px] flex flex-col justify-center items-center mx-auto
          lg:h-[60vh] lg:w-[60%] lg:justify-start lg:items-start lg:mx-0
          md:h-[30vh] md:w-[60%] md:justify-start md:items-start md:mx-0
         "
          >
            <img
              src={news.frame}
              className=" h-[300px] w-full 
          md:h-[60vh] md:w-[800px] "
            />
          </section>

          <section
            className="others-container   h-[300px] w-[350px] 
          flex flex-col gap-4 justify-start items-start py-3 p-2
          md:h-[60vh] md:w-[600px] 
          "
          >
            <FontAwesomeIcon
              icon={news.icon}
              className="text-gold font-bold text-4xl md:text-6xl"
            />
            <h5
              className="text-xl  font-sans text-gray text-left font-bold    
            md:text-2xl     "
            >
              {news.heading}
            </h5>
            <h6
              className="text- base text-left font-semibold text-gray 
            md:text-xl underline
            "
            >
              {news.description}
            </h6>
            <article className="text-sm font-serif text-left    md:text-base ">
              {news.content}
            </article>
            <Link
              to={news.url}
              className="text-blue-400 italic underline "
              target="blank"
            >
              {news.frame_source}
            </Link>
          </section>
        </div>
      ))}
    </div>
  );
}

export default News;
