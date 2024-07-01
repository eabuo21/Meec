import React from "react";

const insights = () => {
  return (
    <div
      className="flex flex-col gap-6   w-full  bg-white h-[fixed] 
    md:flex-row shadow-xl rounded-md"
    >
      <section
        className=" first-container flex flex-col gap-4 justify-start items-start w-full
        md:w-[50%]    h-[500px]  transform scale-x-[-1]"
      >
        <img
          className="w-full  h-[120px]       md:w-auto  h-[800px]"
          src="https://mail.almerja.com/en/images/large/1679978007-6039.jpg"
          alt=""
        />
      </section>
      
        <section
          className=" second-container grid grid-cols-2 justify-start items-start gap-2 w-full
        md:w-[50%]   h-[fixed]"
        >
          <div className=" item-1 rounded-md flex flex-col gap-3 justify-start items-start h-[fixed] p-2">
            <img src="https://em360tech.com/sites/default/files/styles/cropper_main_image/public/2024-03/what-is-social-engineering.jpeg.webp?itok=s4UWK99E"
            className=" shadow-xl"  alt=""/>
            <h6 className="text-base text-gray text-left font-passion   md:text-xl">
                Social Engineering
            </h6>
          </div>

          {/* item2 */}
          <div className=" item-1 rounded-md flex flex-col gap-3 justify-start items-start h-[fixed] p-2">
          <img src="https://sectigostore.com/blog/wp-content/uploads/2020/05/network-security-best-practices-940x588.jpg"
            className=" shadow-xl"  alt=""/>
            <h6 className="text-base text-gray text-left font-passion   md:text-xl">
                Network Security
            </h6>
          </div>

          {/* items 3 */}

          <div className=" item-1 rounded-md flex flex-col gap-3 justify-start items-start h-[fixed] p-2">
          <img src="https://ncube.com/wp-content/uploads/2020/02/Top-8-Software-Development-Models.jpg"
            className=" shadow-xl"  alt=""/>
            <h6 className="text-base text-gray text-left font-passion   md:text-xl">
                Software Engineering
            </h6>
          </div>
        </section>
      
    </div>
  );
};

export default insights;
