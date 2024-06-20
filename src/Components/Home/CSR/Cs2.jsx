import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Cs2 = () => {
  const radius = 100; // Adjust the radius as needed
  const icons = [faPhone, faEnvelope, faLocationDot, faGoogle];
  const urls = [
    "tel:+1234567890", // Replace with your phone number URL
    "mailto:example@example.com", // Replace with your email URL
    "/location", // Replace with your location URL
    "https://www.google.com", // Replace with your Google URL or any other link
  ];
  const angleStep = Math.PI / (icons.length - 1); // Calculate the angle step

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease cubic"
      data-aos-duration="2500"
      data-aos-delay="50"
      data-aos-anchor-placement="top-bottom"
      data-aos-throttle="true"
      className="image-holder-cs2 w-full md:w-full md:flex"
    >
      <div className="relative w-48 h-48 mx-auto">
        {icons.map((icon, index) => {
          const angle = angleStep * index - Math.PI / 9; // Calculate the angle for each icon
          const x = radius * Math.cos(angle); // Calculate x position
          const y = radius * Math.sin(angle); // Calculate y position

          return (
            <span
              key={index}
              className="absolute transform"
              style={{
                left: `calc(40% + ${x}px)`,
                top: `calc(50% - ${y}px)`,
              }}
            >
              <a href={urls[index]} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={icon}
                  className="text-xl bg-blue-950 text-white font-bold rounded-full p-4 shadow-current shadow-md hover:bg-gold hover:text-blue-950 hover:transition-all hover:duration-1000 hover:ease-in-out transition-all duration-1000 ease-in-out"
                />
              </a>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Cs2;
