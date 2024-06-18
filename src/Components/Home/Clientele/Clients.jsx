/** @format */

import React from "react";

const Clients = ({ box, image }) => {
  return (
    <div
      className=" flex flex-row     w-[160px] h-[120px]   justify-center items-center  p-2 rounded-md shadow-current shadow-md    md:w-[200px] md:h-[200px]          md:hover:bg-blue-950  md:hover:transition-all  md:hover:duration-1000 md:hover:ease-in-out   md:transition-all md:duration-1000  md:ease-in-out"
      style={{
        background: box,
      }}
    >
      <img
        className="rounded-[50%] flex flex-col justify-center items-center p-2 w-[100px] h-[100px]  shadow-current shadow-md"
        src={image}
        alt="client-image"
      />
    </div>
  );
};

export default Clients;