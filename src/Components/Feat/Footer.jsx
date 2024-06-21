import React from "react";
import MobileFeat from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";
import MailingList from "../Home/MailingList";


const Footer = () => {
  return (
    <div className="footer-container  bg-dance_blue      md:bg-dark  md:text-white h-[fixed]   p-2   w-full md:bg-gray   md:h-[fixed] md:justify-center md:p-7 md:items-center">
      <MobileFeat />
      <DesktopFooter />

      <div className="footer-container  hidden   md:bg-dark  md:flex  p-2    md:h-[200px] md:justify-center md:p-7 md:items-center  ">
        <section className="flex mr-auto ">
          <MailingList />
        </section>
      </div>
    </div>
  );
};

export default Footer;
