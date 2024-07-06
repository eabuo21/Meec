import React, { useEffect, useState } from "react";
import axios from "axios";

const Insights2 = () => {
  const [techNews, setTechNews] = useState([]);
  const API_Key = "2d8170b931954d8dac0b72498263be8b";

  useEffect(() => {
    const fetchTechNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              category: "business",
              apiKey: API_Key, // Replace with your actual API key
            },
          }
        );

        const fetchedNews = response.data.articles.map((article) => ({
          frame: article.urlToImage,
          heading: article.title,
          content: article.content ? article.content.slice(0, 60) + "..." : "",
          url: article.url,
          description: article.description
            ? article.description.slice(0, 100) + "..."
            : "",
        }));

        setTechNews(fetchedNews);
      } catch (error) {
        console.error("Error fetching technology news data:", error);
      }
    };

    fetchTechNews();
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full bg-white h-[fixed] md:flex-row-reverse shadow-xl rounded-md  md:h-[400px]">
      {techNews.length > 0 && (
        <>
          <section className="first-container relative flex flex-col gap-4 justify-start items-start w-full md:w-[50%] h-[500px] md:h-[400px] transform scale-x-[-1]">
            <img
              className="w-full h-[500px] md:w-auto md:h-[500px] object-cover"
              src={techNews[1].frame}
              alt={techNews[1].heading}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
              <article className="text-white flex flex-col gap-4 text-center transform scale-x-[-1]">
                <h1 className="text-xl font-bold font-dm md:text-4xl">
                  {techNews[1].heading}
                </h1>
                <h5 className="text-base font-semibold text-white md:text-xl">
                  {techNews[1].description}
                </h5>
                <h6 className="text-white text-base">{techNews[1].content}</h6>
                <a href={techNews[1].url} className="text-blue-500 underline">
                  Read more
                </a>
              </article>
            </div>
          </section>

          <section className="second-container grid grid-cols-2 justify-start items-start gap-2 w-full md:w-[50%] h-[fixed]">
            {techNews.slice(1, 4).map((newsItem, index) => (
              <div
                key={index}
                className="item-1  relative rounded-md flex flex-col gap-3 justify-start items-start h-[fixed] p-2"
              >
                <img
                  src={newsItem.frame}
                  className="shadow-xl w-full h-full object-cover  md:h-[180px]"
                  alt={newsItem.heading}
                />

                <div className=" hidden  md:flex absolute   transform scale-x-[-1]  inset-0 bg-black opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                  <article className="text-white flex flex-col gap-2 text-center transform scale-x-[-1]">
                    <h1 className="text-sm font-semibold font-dm md:text-sm">
                      {newsItem.heading}
                    </h1>
                    <h5 className="text-[12px] font-normal text-white md:text-sm">
                      {newsItem.description}
                    </h5>
                    <h6 className="text-white text-[12px]">
                      {newsItem.content}
                    </h6>
                    <a href={newsItem.url} className="text-blue-500 underline">
                      Read more
                    </a>
                  </article>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default Insights2;
