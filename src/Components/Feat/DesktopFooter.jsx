import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faLinkedin,
  faGoogle,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DesktopFooter = () => {
  return (
    <div className="footer-container  px-3     grid grid-cols-2    md:px-0  md:grid md:grid-cols-5 md:gap-2 md:justify-center md:items-center">
      <ul className="items-container      flex flex-col gap-3 justify-start items-start px-2  ">
        <h3 className="heading   text-white  font-bold  text-base md:text-2xl font-dm ">
          Company
        </h3>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Affiliates</Link>
        </li>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Publications</Link>
        </li>

        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Portfolios</Link>
        </li>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Partnerships</Link>
        </li>
      </ul>

      {/* section 2 */}

      <ul className="items-container      flex flex-col gap-3 justify-start items-start px-2  ">
        <h3 className="heading   text-white  font-bold  text-base md:text-2xl font-dm ">
          Legal
        </h3>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Terms & Conditions</Link>
        </li>

        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Privacy Policy</Link>
        </li>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Cookie Policy</Link>
        </li>
      </ul>

      {/* section 3 */}
      <ul className="items-container      flex flex-col gap-3 justify-start items-start px-2  ">
        <h3 className="heading   text-white  font-bold  text-base md:text-2xl font-dm ">
          Support
        </h3>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Contact Us </Link>
        </li>

        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Partner With Us</Link>
        </li>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Support Us</Link>
        </li>
      </ul>

      {/* section 4 */}

      <ul className="items-container      flex flex-col gap-3 justify-start items-start px-2  ">
        <h3 className="heading   text-white  font-bold  text-base md:text-2xl font-dm ">
          Quick Links
        </h3>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Contact </Link>
        </li>

        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Careers</Link>
        </li>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">FAQ</Link>
        </li>
        <li className="link-item text-opacity-70   text-white ">
          <Link to="#">Services</Link>
        </li>
      </ul>

      {/* section 5 */}
      <section className=" flex flex-col flex-wrap gap-2 justify-start items-start   w-full ">
        <h3 className="heading   text-white  font-bold  text-base md:text-2xl font-dm ">
          Get InTouch
        </h3>
        <ul className="items-container    flex  flex-row flex-wrap mr-6   gap-2 justify-start items-start   ">
          <li className="link-item text-opacity-70   text-white ">
            <span>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white  text-base md:text-2xl"
                />
              </a>
            </span>
          </li>

          <li className="link-item text-opacity-70   text-white ">
            <span>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white  text-base md:text-2xl"
                />
              </a>
            </span>
          </li>

          <li className="link-item text-opacity-70   text-white ">
            <span>
              <a href="#">
                {" "}
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-white  text-base md:text-2xl"
                />
              </a>
            </span>
          </li>

          <span>
            {" "}
            <p className="text-sm  text-opacity-70  text-white">
              14 Alaba Williams Street Lagos
            </p>
          </span>
        </ul>

        <ul className="items-container      flex flex-col gap-3 justify-start items-start px-2  ">
          <h5 className="heading   text-white  font-bold text-base font-dm  md:text-xl">
            Connect
          </h5>
          <section className="flex flex-col   gap-2 justify-start items-start ">
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white text-sm"
              />{" "}
              <a
                href="tel:09063688891"
                className="text-sm text-white text-opacity-70"
              >
                (+234)-906-368-8891
              </a>{" "}
            </span>
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-sm"
              />{" "}
              <a
                href="mailto:pr2.technicals@gmail.com"
                className="text-sm  text-opacity-70 text-white"
              >
                info@meec.co
              </a>{" "}
            </span>
          </section>
        </ul>
      </section>
    </div>
  );
};

export default DesktopFooter;
