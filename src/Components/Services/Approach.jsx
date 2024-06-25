import React from "react";

const Approach = () => {
  const cards = [
    {
      heading: "heading 1",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore necessitatibus beatae eos.",
      btn: "",
    },

    {
      heading: "heading 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore necessitatibus beatae eos.",
      btn: "",
    },
    {
      heading: "heading 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore necessitatibus beatae eos.",
      btn: "",
    },
  ];

  return (
    <div className="items-container   flex flex-col gap-4  justify-center items-center    md:flex-row  ">
      {cards.map((cards, index) => (
        <div
          key={index}
          className="items  flex  flex-col  gap-4  justify-center items-center  w-[350px]"
        >
          <h2 className="text-blue-950 text-xl font-bold text-center font-sans   md:text-2xl">
            {cards.heading}
          </h2>
          <article className="text-center text-base text-black font-serif   md:text-xl">
            {cards.description}
          </article>

          <button className=" btn-with-arrow bg-blue-950 text-white font-bold text-base font-sans w-[180px] h-[40px] p-2  md:text-xl md:w-[200px] h-[50px] ">
            {cards.btn}
            Request <span className="arrows text-white font-bold ">&rarr;</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Approach;
