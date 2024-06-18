import React from "react";

const Cs1 = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center px-2    w-full   md:w-full  md:justify-center  md:items-center">
      <h1 className="heading-csr    text-center  text-blue-950 text-xl font-bold font-passion    md:text-2xl">
        Looking for expert consultancy services?
      </h1>
      <h3 className="sub-csr-text   text-black  text-base font-semibold font-dm text-center    md:text-xl">
        Explore customized solutions with our highly skilled team of
        professionals
      </h3>
      <button
        className="book-consultant-button     bg-blue-950 text-white font-bold font-passion p-4 w-[30vh]  
      text-center flex justify-center items-center   "
      >
        Schedule a Quick Call
      </button>
    </div>
  );
};

export default Cs1;
