import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const pros = [
    {
      heading: "heading 1",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, enim!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem sint placeat veniam consequuntur nihil praesentium cum, adipisci provident saepe?",
      image:
        "https://www.techosquare.com/images/blog/website-development-project-plan-home.jpg",
      link: "",
    },
    {
      heading: "heading 2",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, enim!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem sint placeat veniam consequuntur nihil praesentium cum, adipisci provident saepe?",
      image:
        "https://www.techosquare.com/images/blog/website-development-project-plan-home.jpg",
      link: "",
    },
    {
      heading: "heading 3",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, enim!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem sint placeat veniam consequuntur nihil praesentium cum, adipisci provident saepe?",
      image:
        "https://www.techosquare.com/images/blog/website-development-project-plan-home.jpg",
      link: "",
    },

    {
        heading: "heading 3",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, enim!",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem sint placeat veniam consequuntur nihil praesentium cum, adipisci provident saepe?",
        image:
          "https://www.techosquare.com/images/blog/website-development-project-plan-home.jpg",
        link: "",
      },
  ];

  return (
    <div className="   flex flex-col gap-4  justify-center items-center    md:flex-row">
      {pros.map((pros, index) => (
        <div
          key={index}
          className="flex  flex-col  rounded-md border border-blue-400 shadow-md shadow-current p-2  gap-4   justify-center items-center  w-[400px] md:w-[400px]   md:gap-8"
        >
          <div className="w-full h-[fixed] border-b border-b-blue-500 flex flex-col justify-center items-center">
            <h5 className="text-blue-950 text-base font-bold font-sans text-center       md:text-xl">
              {pros.heading}
            </h5>
          </div>
          <div className="flex flex-col justify-center items-center  gap-4">
            <h6 className="title-container text-sm font-blue-600 font-serif text-center   md:text-base">
              {pros.title}
            </h6>
            <article className="text-center ">{pros.description}</article>
            <img src={pros.image} className="w-full h-[200px]" />
            <button className=" btn-with-arrow  bg-transparent  text-black font-bold text-base font-sans w-[180px] h-[40px] p-2  md:text-xl md:w-[200px] h-[50px] ">
            {pros.link}
            View Code <span className="arrows text-black font-bold ">&rarr;</span>
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
