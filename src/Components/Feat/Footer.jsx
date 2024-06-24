import React from "react";

import DesktopFooter from "./DesktopFooter";
import MailingList from "../Home/MailingList";
import { Link } from "react-router-dom";
import MeecLogo from "../../assets/images/logo.png";


const Footer = () => {
  return (
    <div className="footer-container  bg-dark    relative top-[7rem]  md:bg-dark  md:text-white h-[fixed]   p-2   w-full md:bg-gray   md:h-[fixed] md:justify-center md:p-7 md:items-center">
     
      <DesktopFooter />

      <div className="footer-container  flex  flex-col   md:bg-dark  md:flex  p-2    md:h-[200px] md:justify-center md:p-7 md:items-center  ">
        <section className="flex flex-col      md:flex-row mr-auto   ">
          <MailingList />
          <Link to="/">
          <img src={MeecLogo} className="w-[300px]  h-[250px]    "/>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Footer;
