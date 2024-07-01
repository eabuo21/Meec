import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BacktoTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibility);
    return () => {
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  return (
    <>
      {visible && (
        <button
          onClick={handleScroll}
          className="flex flex-col justify-center items-center p-4 bg-blue-500 rounded-full cursor-pointer fixed bottom-4 right-4 cursor-pointer  hover:b-opacity-70  hover:transition-all hover:ease-in-out hover:duration-1000  hover:text-red  transition-all duration-1000 ease-in-out"
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-white font-bold text-xl  "
          />
        </button>
      )}
    </>
  );
};

export default BacktoTop;
