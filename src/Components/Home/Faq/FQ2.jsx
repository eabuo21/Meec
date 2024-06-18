import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function AccordionExpandIcon() {
  return (
    <div className="   px-4   h-[250px]  overflow-y-auto  md:h-auto  md:w-[600px]">
      <Accordion>
        <AccordionSummary className="border-2 border-blue-700"
          expandIcon={<FontAwesomeIcon icon={faChevronDown}  className="bg-blue-950  text-white  rounded-[50%] p-2"/>}
          aria-controls="panel1-content"  
          id="panel1-header"
        >
          <Typography >Accordion 1</Typography>
        </AccordionSummary >
        <AccordionDetails  className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion>
        <AccordionSummary className="border-2 border-blue-700"
          expandIcon={<FontAwesomeIcon icon={faChevronDown}  className="bg-blue-950  text-white  rounded-[50%] p-2"/>}
          aria-controls="panel1-content"  
          id="panel1-header"
        >
          <Typography >Accordion 1</Typography>
        </AccordionSummary >
        <AccordionDetails  className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion>
        <AccordionSummary className="border-2 border-blue-700"
          expandIcon={<FontAwesomeIcon icon={faChevronDown}  className="bg-blue-950  text-white  rounded-[50%] p-2"/>}
          aria-controls="panel1-content"  
          id="panel1-header"
        >
          <Typography >Accordion 1</Typography>
        </AccordionSummary >
        <AccordionDetails  className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>





      <Accordion>
        <AccordionSummary className="border-2 border-blue-700"
          expandIcon={<FontAwesomeIcon icon={faChevronDown}  className="bg-blue-950  text-white  rounded-[50%] p-2"/>}
          aria-controls="panel1-content"  
          id="panel1-header"
        >
          <Typography >Accordion 1</Typography>
        </AccordionSummary >
        <AccordionDetails  className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>





      <Accordion>
        <AccordionSummary className="border-2 border-blue-700"
          expandIcon={<FontAwesomeIcon icon={faChevronDown}  className="bg-blue-950  text-white  rounded-[50%] p-2"/>}
          aria-controls="panel1-content"  
          id="panel1-header"
        >
          <Typography >Accordion 1</Typography>
        </AccordionSummary >
        <AccordionDetails  className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>





      <Accordion>
        <AccordionSummary className="border-2 border-blue-700"
          expandIcon={<FontAwesomeIcon icon={faChevronDown}  className="bg-blue-950  text-white  rounded-[50%] p-2"/>}
          aria-controls="panel1-content"  
          id="panel1-header"
        >
          <Typography >Accordion 1</Typography>
        </AccordionSummary >
        <AccordionDetails  className="bg-blue-950 text-white ">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
