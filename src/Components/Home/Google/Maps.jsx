/** @format */

import React from "react";

const Maps = () => {
  return (
    <div>
      <section style={{ width: "70%", height: "300px" }}>
        <iframe
          style={{ width: "100%", height: "100%", borderRadius: "15px" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Emeka%20ayaoko%20street%20abuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </section>
    </div>
  );
};

export default Maps;
