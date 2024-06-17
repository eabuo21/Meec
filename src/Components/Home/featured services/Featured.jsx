import React from "react";

const Featured = () => {
  return (
    <>
      <div className="  flex flex-col gap-6 justify-center items-center  lg:pt-6">
        <h2 className="text-black font-bold font-sans text-3xl text-cdnter ">
          Featured  in
        </h2>
        <section className="  grid grid-cols-2 justify-center   gap-4 items-center px-12   mx-auto  lg:flex lg:flex-row lg:justify-between lg:items-center">
        <img src="#" alt="image-featured" className="" />
        <img src="#" alt="image-featured" className="" />
        <img src="#" alt="image-featured" className="" />
        <img src="#" alt="image-featured" className="" />
        <img src="#" alt="image-featured" className="" />
        <img src="#" alt="image-featured" className="" />
        </section>
      </div>
    </>
  );
};

export default Featured;
