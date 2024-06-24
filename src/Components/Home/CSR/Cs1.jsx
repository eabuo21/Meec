import React, { useState, useEffect } from "react";
import "../../../assets/styles/Cs.css";

const CustomModal = ({ isOpen, onClose, url }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
  
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className="fixed  z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-[400px] z-50 relative top-[3rem] md:w-[500px]">
        <button onClick={onClose} className="text-red-500">
          Close
        </button>
        <iframe
          src={url}
          width="100%"
          height="100%"
          style={{ border: "none", minHeight: "80vh" }}
          title="Calendly"
        />
      </div>
    </div>
  );
};

const Cs1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease linear"
      data-aos-duration="2500"
      data-aos-delay="50"
      data-aos-anchor-placement="top-bottom"
      data-aos-throttle="true"
      className="flex flex-col gap-3 justify-center items-center px-2 w-full md:w-full md:justify-center md:items-center"
    >
      <h1 className="heading-csr text-center text-blue-950 text-xl font-bold font-passion md:text-2xl">
        Looking for expert consultancy services?
      </h1>
      <h3 className="sub-csr-text text-black text-base font-semibold font-dm text-center md:text-xl">
        Explore customized solutions with our highly skilled team of
        professionals
      </h3>
      <button
        className="book-consultant-button bg-blue-950 text-white relative top-[3rem] font-bold font-passion p-4 w-[30vh] text-center flex justify-center items-center md:top-0 hover:bg-blue-400 hover:text-blue-950 hover:transition-all hover:duration-1000 hover:ease-in-out transition-all duration-1000 ease-in-out"
        onClick={handleButtonClick}
      >
        <span>Schedule a Quick Call</span>
      </button>

      <CustomModal
        isOpen={isOpen}
        onClose={handleClose}
        url="https://calendly.com/pr2-technicals/meec-consulting" 
        className="z-50"// Replace with your actual Calendly URL
      />
    </div>
  );
};

export default Cs1;
