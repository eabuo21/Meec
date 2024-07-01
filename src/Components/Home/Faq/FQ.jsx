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
      data-aos-anchor-placement="top-down"
      data-aos-throttle="true"
      className="   w-full   h-[250px]  overflow-y-auto  md:h-auto  lg:w-[600px]   md:w-[350px]  md:border    md:shadow-xl"
    >
      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700 hover:bg-blue-400 hover:transition-all hover:ease-in-out hover:duration-1000    transition-all duration-1000 ease-in-out"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            How does your company approach the mission to build innovative
            solutions? 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Our mission to build innovative solutions is driven by a deep
            understanding of our clients' unique needs and challenges. We
            leverage cutting-edge technologies and industry best practices to
            construct robust, scalable, and secure IT infrastructures that
            empower businesses, governments, and NGOs to achieve their goals.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700 hover:bg-blue-400 hover:transition-all hover:ease-in-out hover:duration-1000    transition-all duration-1000 ease-in-out"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            What are the key principles guiding your efforts to create value for
            your clients?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white hover:bg-blue-400 hover:transition-all hover:ease-in-out hover:duration-1000    transition-all duration-1000 ease-in-out ">
          <Typography>
            Creating value for our clients is rooted in our commitment to
            excellence, collaboration, and continuous improvement. We prioritize
            delivering high-quality, user-centric products and services that
            enhance efficiency, productivity, and user experience. By working
            closely with our clients, we ensure our solutions are tailored to
            their specific requirements, fostering long-term partnerships and
            sustainable growth.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700  hover:bg-blue-400 hover:transition-all hover:ease-in-out hover:duration-1000    transition-all duration-1000 ease-in-out"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            How does innovation play a role in your vision for the future?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Innovation is at the heart of our vision for the future. We strive
            to stay ahead of industry trends and technological advancements to
            provide forward-thinking solutions. By fostering a culture of
            creativity and experimentation, we encourage our team to explore new
            ideas and approaches that drive transformative change and offer our
            clients a competitive edge.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700  hover:bg-blue-400 hover:transition-all hover:ease-in-out hover:duration-1000    transition-all duration-1000 ease-in-out"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            Can you describe a project where you successfully built a solution
            that met a unique client need?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            One notable project involved developing a custom cloud-based
            application for a government agency to streamline their citizen
            services. By building a secure, scalable platform with user-friendly
            features, we significantly improved their service delivery and
            operational efficiency, demonstrating our ability to meet complex,
            unique client needs effectively
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700  hover:bg-blue-400 hover:transition-all hover:ease-in-out hover:duration-1000    transition-all duration-1000 ease-in-out"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            {" "}
            What processes do you follow to create and maintain high-quality
            services?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Our process for creating and maintaining high-quality services
            includes thorough planning, rigorous testing, and continuous
            feedback loops. We start with a comprehensive needs assessment,
            followed by detailed project planning and agile development
            methodologies. Regular testing and client feedback ensure that our
            services not only meet but exceed expectations, maintaining high
            standards of quality and performance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          className="border-2 border-blue-700  hover:bg-blue-400 hover:transition-all hover:ease-in-out hover:duration-1000    transition-all duration-1000 ease-in-out"
          expandIcon={
            <FontAwesomeIcon
              icon={faChevronDown}
              className="bg-blue-950  text-white  rounded-[50%] p-2"
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            {" "}
            How do you foster innovation within your team?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            We foster innovation within our team by promoting a collaborative
            and supportive environment where creativity can thrive. We invest in
            ongoing training and development, encourage open communication and
            idea sharing, and provide the necessary resources and tools for our
            team to experiment and innovate. Recognizing and rewarding
            innovative contributions also helps to motivate our team to push the
            boundaries of what’s possible.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
