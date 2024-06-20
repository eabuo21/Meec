import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function AccordionExpandIcon() {
  return (
    <div
      data-aos="fade-in"
      data-aos-easing="ease-in"
      data-aos-duration="2500"
      data-aos-delay="50"
      data-aos-anchor-placement="top-bottom"
      data-aos-throttle="true"
      className="      h-[250px] w-full  overflow-y-auto  md:h-auto lg:w-[600px]   md:w-[350px]"
    >
      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
