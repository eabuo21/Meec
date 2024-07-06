/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHackerNews,
  faSquareGooglePlus,
  faNimblr,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function News() {
  const [generalNews, setGeneralNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [showAllGeneral, setShowAllGeneral] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const responseGeneral = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              apiKey: "2d8170b931954d8dac0b72498263be8b", // Replace with your actual API key
            },
          }
        );

        const responseTech = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              category: "technology",
              apiKey: "2d8170b931954d8dac0b72498263be8b", // Replace with your actual API key
            },
          }
        );

        const processArticles = (articles) =>
          articles.map((article, index) => ({
            border: "white",
            frame: article.urlToImage,
            icon: index % 3 === 0 ? faHackerNews : index % 3 === 1 ? faSquareGooglePlus : faNimblr,
            heading: article.title,
            description: article.description
              ? article.description.slice(0, 70) + "..."
              : "",
            content: article.content
              ? article.content.slice(0, 40) + "..."
              : "",
            url: article.url,
            frame_source: article.url,
          }));

        setGeneralNews(processArticles(responseGeneral.data.articles));
        setTechNews(processArticles(responseTech.data.articles));
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  const toggleShowAllGeneral = () => {
    setShowAllGeneral(!showAllGeneral);
  };

  const toggleShowAllTech = () => {
    setShowAllTech(!showAllTech);
  };

  return (
    <div className="flex flex-col gap-16 justify-start items-center p-2 w-full md:gap-12">
      <h2 className="text-2xl font-bold">Highlights</h2>
      {generalNews
        .slice(0, showAllGeneral ? generalNews.length : 4)
        .map((newsItem, index) => (
          <div
            key={index}
            style={{
              background: newsItem.border,
            }}
            className="h-[fixed] w-[340px] shadow-xl justify-start items-start flex flex-col md:flex-row gap-8      
          lg:h-[60vh] lg:w-[150vh] lg:pl-2 lg:pr-2 md:h-[30vh] md:w-[75vh] md:pl-2 md:pr-2"
          >
            <section
              className="image-container h-[300px] w-[340px] flex flex-col justify-center items-center mx-auto
            lg:h-[60vh] lg:w-[60%] lg:justify-start lg:items-start lg:mx-0
            md:h-[30vh] md:w-[60%] md:justify-start md:items-start md:mx-0 relative"
            >
              <img
                src={newsItem.frame}
                className="w-full h-full object-cover"
                alt={newsItem.heading}
              />
              <div className="absolute inset-0 bg-blue-950 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <article className="text-white text-base md:text-xl font-bold text-center">
                  {newsItem.description}
                </article>
              </div>
            </section>

            <section
              className="others-container h-[300px] w-[350px] 
            flex flex-col gap-4 justify-start items-start py-3 p-2
            md:h-[60vh] md:w-[600px]"
            >
              <FontAwesomeIcon
                icon={newsItem.icon}
                className="text-gold font-bold text-4xl md:text-6xl"
              />
              <h5
                className="text-xl font-sans text-gray text-left font-bold    
              md:text-2xl"
              >
                {newsItem.heading}
              </h5>
              <article className="text-sm font-serif text-left md:text-base">
                {newsItem.content}
              </article>
              <Link
                to={newsItem.url}
                className="text-blue-400 italic underline w-full flex flex-wrap"
                target="blank"
              >
                {newsItem.frame_source}
              </Link>
            </section>
          </div>
        ))}
      {generalNews.length > 4 && (
        <button
          onClick={toggleShowAllGeneral}
          className="text-blue-500 underline"
        >
          {showAllGeneral ? "Show Less" : "See More"}
        </button>
      )}

      <h2 className="text-2xl font-bold mt-8">Technology </h2>
      {techNews
        .slice(0, showAllTech ? techNews.length : 4)
        .map((newsItem, index) => (
          <div
            key={index}
            style={{
              background: newsItem.border,
            }}
            className="h-[fixed] w-[340px] shadow-xl justify-start items-start flex flex-col md:flex-row gap-8      
          lg:h-[60vh] lg:w-[150vh] lg:pl-2 lg:pr-2 md:h-[30vh] md:w-[75vh] md:pl-2 md:pr-2"
          >
            <section
              className="image-container h-[300px] w-[340px] flex flex-col justify-center items-center mx-auto
            lg:h-[60vh] lg:w-[60%] lg:justify-start lg:items-start lg:mx-0
            md:h-[30vh] md:w-[60%] md:justify-start md:items-start md:mx-0 relative"
            >
              <img
                src={newsItem.frame}
                className="w-full h-full object-cover"
                alt={newsItem.heading}
              />
              <div className="absolute inset-0 bg-blue-950 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                <article className="text-white text-base md:text-xl font-bold text-center">
                  {newsItem.description}
                </article>
              </div>
            </section>

            <section
              className="others-container h-[300px] w-[350px] 
            flex flex-col gap-4 justify-start items-start py-3 p-2
            md:h-[60vh] md:w-[600px]"
            >
              <FontAwesomeIcon
                icon={newsItem.icon}
                className="text-gold font-bold text-4xl md:text-6xl"
              />
              <h5
                className="text-xl font-sans text-gray text-left font-bold    
              md:text-2xl"
              >
                {newsItem.heading}
              </h5>
              <article className="text-sm font-serif text-left md:text-base">
                {newsItem.content}
              </article>
              <Link
                to={newsItem.url}
                className="text-blue-400 italic underline w-full flex flex-wrap"
                target="blank"
              >
                {newsItem.frame_source}
              </Link>
            </section>
          </div>
        ))}
      {techNews.length > 4 && (
        <button onClick={toggleShowAllTech} className="text-blue-500 underline">
          {showAllTech ? "Show Less" : "See More"}
        </button>
      )}
    </div>
  );
}

export default News;
