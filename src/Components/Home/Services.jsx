/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="man-services-container    flex flex-col gap-8  justify-center items-center   ">
        {/* first- section of the services items */}
        <h1 className="heading-description-text  text-white font-bold  font-dm text-2xl  text-center ">
          Customized features of Oscar
        </h1>

        <p className="text-white text-base font-normal font-serif text-center px-3 ">
          Oscar is a centralized product, that helps business streamline their
          link sharing and qr code generation for web addresses to streamline
          the overall efficiency and productivity of team members s
        </p>

        <div className="url-shortening        shadow-current shadow-md  rounded-md w-[320px] h-[300px] p-3 bg-[#f3f3f3] flex flex-col  gap-3 justify-center items-center  ">
          <h1 className="heading-for-url-shortening     text-black font-bold font-serf text-center text-xl ">
            Ultimate Url Shortener
          </h1>
          <p className="under-text-for-url-shortening   text-black text-base font-normal font-serif text-center  ">
            Experience a seamless and stress free link shortening and trimming
            that can change your link sharing approach, and give you a better
            and balanced work ethic
          </p>
          <button className="explore-shortener-button   bg-blue-950 p-2  w-[fixed] rounded-sm text-white   hover:bg-white hover:border hover:border-blue-950 hover:text-black hover:transition-all hover:duration-1000 hover:ease-in-out  ease-in-out transition-all duration-1000 ">
            <Link to="#">
              Explore Now <span className="arrow-movable   ">&rarr;</span>
            </Link>
          </button>
        </div>

        {/* qr-code generation section container */}

        <div className="qrcode-generating       shadow-current shadow-md  rounded-md w-[320px] h-[300px] p-3 bg-[#f3f3f3] flex flex-col  gap-3 justify-center items-center  ">
          <h1 className="heading-for-url-shortening     text-black font-bold font-serf text-center text-xl ">
            QR Code generation
          </h1>
          <p className="under-text-for-url-shortening   text-black text-base font-normal font-serif text-center  ">
            Let your website visitors experience an easy to use approach when
            trying to visit yor website, make things easy and seamless for them
            by giving them the leverage of a QR Code scanable ebsite{" "}
          </p>
          <button className="explore-shortener-button   bg-blue-950 p-2  w-[fixed] rounded-sm text-white   hover:bg-white hover:border hover:border-blue-950 hover:text-black hover:transition-all hover:duration-1000 hover:ease-in-out  ease-in-out transition-all duration-1000 ">
            <Link to="#">
              Explore Now <span className="arrow-movable   ">&rarr;</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default Services;
