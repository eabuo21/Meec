import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const AccordionContainer = styled("div")({
  width: "100%",
});

const CustomAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <FontAwesomeIcon
        icon={faChevronDown}
        className="border-2 border-blue-950   p-2 text-blue-950 rounded-[50%]  "
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "black" : "#595E60",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const CustomAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Currentyear = new Date().getFullYear();

  //circular-icons
  const radius = 100; // Adjust the radius as needed
  const icons = [faFacebook, faLinkedin, faGithub, faGoogle];
  const angleStep = Math.PI / (icons.length - 1); // Calculate the angle step

  return (
    <div className="  flex   flex-col gap-5    h-[fixed] ">
      <section className="logo-section flex justify-start items-start px-2">
        <Link to="">
          <img src="" className="" alt="logo-image"></img>
          <p className="text-2xl font-bold font-pap text-left">MEEC </p>
        </Link>
      </section>
      <AccordionContainer className="md:hidden">
        <CustomAccordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography className="text-white">Company</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails className="bg-gray">
            <Typography>
              <div className=" flex flex-col gap-2 justify-start items-start px-1 ">
                <ul className=" list-[none]   flex flex-col font-bold text-blue-950 text-base gap-3 ">
                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/Affiliates"> Affiliates</Link>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/whitepaper"> Publications</Link>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/Portfolios"> Portfolios</Link>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/Partnership"> Partnership</Link>
                  </li>
                </ul>
              </div>
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>

        <CustomAccordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography className="text-white">Legal</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails className="bg-gray">
            <Typography></Typography>
            <div className=" flex flex-col gap-2 justify-start items-start px-1 ">
              <ul className=" list-[none]   flex flex-col font-bold text-blue-950 text-base gap-3 ">
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-blue-950 text-xl"
                    />{" "}
                  </span>{" "}
                  <Link to="/Terms"> Terms & Conditions</Link>
                </li>

                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-blue-950 text-xl"
                    />{" "}
                  </span>{" "}
                  <Link to="/Privacy"> Privacy Policy</Link>
                </li>

                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-blue-950 text-xl"
                    />{" "}
                  </span>{" "}
                  <Link to="/Cookies"> Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </CustomAccordionDetails>
        </CustomAccordion>

        <CustomAccordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography className="text-white">Support</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails className="bg-gray">
            <Typography>
              <div className=" flex flex-col gap-2 justify-start items-start px-1 ">
                <ul className=" list-[none]   flex flex-col font-bold text-blue-950 text-base gap-3 ">
                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/contact"> Contact Us</Link>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/partnership"> Partner With Us</Link>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/support"> Support Us</Link>
                  </li>
                </ul>
              </div>
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>

        <CustomAccordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography className="text-white">Quick Links</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails className="bg-gray">
            <Typography>
              <div className=" flex flex-col gap-2 justify-start items-start px-1 ">
                <ul className=" list-[none]   flex flex-col font-bold text-blue-950 text-base gap-3 ">
                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/about"> Contact Us</Link>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/Career"> Careers</Link>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/faq"> FAQ</Link>
                  </li>

                  <li>
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-blue-950 text-xl"
                      />{" "}
                    </span>{" "}
                    <Link to="/services"> Services</Link>
                  </li>
                </ul>
              </div>
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>

        <CustomAccordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography className="text-white">Socials</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails className="bg-gray">
            <Typography>
              {/* social link 1
               */}

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
                      <a href="">
                        <FontAwesomeIcon
                          icon={icon}
                          className="text-xl bg-blue-950 text-white font-bold rounded-full p-4 shadow-current shadow-md hover:bg-gold hover:text-blue-950 hover:transition-all hover:duration-1000 hover:ease-in-out transition-all duration-1000 ease-in-out"
                        />
                      </a>
                    </span>
                  );
                })}
              </div>
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>

        <CustomAccordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography className="text-white">Location</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails className="bg-gray">
            <Typography></Typography>
          </CustomAccordionDetails>
        </CustomAccordion>
      </AccordionContainer>
      <p className="copy-wright-text  text-black font-serif text-base text-center   ">
        &copy; MEEC-Technologies {Currentyear} all rights reserved
      </p>
    </div>
  );
}
