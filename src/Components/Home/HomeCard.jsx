/** @format */

import React from "react";

const HomeC = ({ box, icon, description, designedline, halfbox }) => {
  return (
    <React.Fragment>
      <div
        className="main-box-container flex flex-col gap-4 rounded-md shadow-current shadow-md justify-center items-center p-2 mx-auto w-[300px] h-[300px] md:w-[300px] md:h-[300px] relative border border-2 shadow-2xl shadow-inherit "
        style={{
          background: box,
        }}
      >
        <img
          className="container-imag w-[100px] h-[120px]"
          alt="image"
          src={icon}
        />
        <p className="description_text text-base font-bold font-passion text-black  text-center z-50">
          {description}
        </p>
        <span
          className="design w-[30px] h-[30px] rounded-md animate-bounce"
          style={{
            background: designedline,
          }}
        ></span>
        <div className="triangle-box"
          style={{
          color: halfbox,
        }}> </div>
      </div>
    </React.Fragment>
  );
};

export default HomeC;
