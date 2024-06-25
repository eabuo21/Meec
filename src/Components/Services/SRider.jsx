import React from "react";
import { Link } from "react-router-dom";

const SRider = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in linear"
      data-aos-mirror="true"
      data-aos-throttle="true"
      className="w-full  py-8 z-50  p-2 gap-5  px-7 h-[fixed] flex flex-col justify-center items-center md:rounded-sm md:shadow-current md:shadow-md
      md:relative md:bottom-[2rem] bg-white  md:w-[900px]
      
  
  "
    >
      <h3 className="text-blue-950 font-bold text-xl text-center      md:text-3xl ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam
        fuga similique.
      </h3>
      <article className="text-black font-sans text-base  text-center  md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident est
        deleniti consequatur blanditiis libero! Iste possimus nobis eius!
        Ducimus dolorem cum ipsa voluptatum sunt qui beatae. Ad, eveniet
        deleniti? Sint numquam saepe modi itaque possimus amet iusto debitis hic
        quidem aperiam suscipit ad alias, consequatur inventore iure porro
        doloremque.
      </article>
      <button className="bg-blue-950 font-bold flex  text-white justify-center items-center text-center text-base   md:text-xl w-[150px] h-[40px]     ">
        request
      </button>

    </div>
  );
};

export default SRider;
