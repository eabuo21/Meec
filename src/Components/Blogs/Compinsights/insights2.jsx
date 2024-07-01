import React from "react";

const insights = () => {
  return (
    <div
      className="flex flex-col gap-6   w-full  bg-white h-[fixed] 
    md:flex-row-reverse shadow-xl rounded-md"
    >
      <section className="first-container relative flex flex-col gap-4 justify-start items-start w-full md:w-[50%] h-[500px] transform scale-x-[-1]">
        <img
          className="w-full h-[500px] md:w-auto md:h-[500px] object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5wQW1qGUgCKAlzoOQI_UaMa19P7gOslA5w&usqp=CAU"
          alt=""
        />
        <div className="absolute inset-0 bg-blue-950 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
          <article className="text-white text-base  md:text-xl font-bold transform scale-x-[-1] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            illum ipsam cupiditate laboriosam provident maxime voluptatem magni
            blanditiis quidem sed?
          </article>
        </div>
      </section>

      <section
        className=" second-container grid grid-cols-2 justify-start items-start gap-2 w-full
        md:w-[50%]   h-[fixed]"
      >
        <div className=" item-1 rounded-md flex flex-col gap-3 justify-start items-start h-[fixed] p-2">
          <img
            src="https://em360tech.com/sites/default/files/styles/cropper_main_image/public/2024-03/what-is-social-engineering.jpeg.webp?itok=s4UWK99E"
            className=" shadow-xl"
            alt=""
          />
        
        </div>

        {/* item2 */}
        <div className=" item-1 rounded-md flex flex-col gap-3 justify-start items-start h-[fixed] p-2">
          <img
            src="https://sectigostore.com/blog/wp-content/uploads/2020/05/network-security-best-practices-940x588.jpg"
            className=" shadow-xl"
            alt=""
          />
        
        </div>

        {/* items 3 */}

        <div className=" item-1 rounded-md flex flex-col gap-3 justify-start items-start h-[fixed] p-2">
          <img
            src="https://ncube.com/wp-content/uploads/2020/02/Top-8-Software-Development-Models.jpg"
            className=" shadow-xl"
            alt=""
          />
         
        </div>
      </section>
    </div>
  );
};

export default insights;
