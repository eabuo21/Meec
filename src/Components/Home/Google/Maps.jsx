/** @format */

import React from "react";

const Maps = () => {
  return (
    <div className=" flex flex-col gap-5  md:flex  md:flex-col md:w-full md:h-[400px] md:justify-center md:items-center">
      <iframe
        className="w-full    h-[400px]"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=rasheed alaba street&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        frameBorder="0"
        marginHeight="100"
        marginWidth="100"
      ></iframe>
      <a href="https://embed-googlemap.com"></a>
    </div>
  );
};

export default Maps;
