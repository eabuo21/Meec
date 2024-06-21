/** @format */

import React from "react";

const Maps = () => {
  return (
    <div className=" hidden  md:flex  md:flex-col md:w-full md:h-[400px] md:justify-center md:items-center">
      <iframe
        className="w-full    h-[400px]"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Emeka%20ayaoko%20street%20abuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        marginHeight="100"
        marginWidth="100"
      ></iframe>
    </div>
  );
};

export default Maps;
