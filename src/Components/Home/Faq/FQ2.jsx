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
      className="      h-[250px] w-full  overflow-y-auto  md:h-auto lg:w-[600px]   md:w-[350px  md:border   md:shadow-xl"
    >
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
            What steps do you take to ensure that the solutions you build are
            future-proof?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            To ensure our solutions are future-proof, we adopt flexible,
            scalable architectures and stay updated with the latest
            technological advancements. We prioritize modular designs that can
            evolve with changing requirements and integrate seamlessly with new
            technologies. Regularly revisiting and updating our solutions in
            line with industry trends helps us maintain their relevance and
            effectiveness over time.
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
            How do you balance creativity and practicality when creating new
            solutions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            Balancing creativity and practicality involves a strategic approach
            that includes thorough market research, stakeholder collaboration,
            and iterative development. We encourage our team to think outside
            the box while staying grounded in practical, achievable goals. This
            balance ensures that our creative solutions are not only innovative
            but also feasible and aligned with our clients' operational
            realities.
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
            In what ways do you innovate to stay competitive in the IT services
            market?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            We innovate to stay competitive by continually exploring new
            technologies, methodologies, and service models. Investing in
            research and development, embracing agile practices, and fostering a
            culture of continuous learning and improvement are key strategies.
            By staying adaptable and responsive to market demands, we ensure
            that our offerings remain cutting-edge and highly valuable to our
            clients.
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
            How do you measure the success of the solutions you build?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            The success of our solutions is measured by several key performance
            indicators, including client satisfaction, system performance, user
            adoption rates, and the achievement of specific business objectives.
            We use feedback mechanisms, analytics, and regular performance
            reviews to assess and refine our solutions, ensuring they deliver
            the desired outcomes and provide long-term value.
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
            What innovative approaches do you use to build sustainable IT
            solutions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            We employ a range of innovative approaches to build sustainable IT
            solutions, including the use of green technologies, energy-efficient
            infrastructure, and eco-friendly practices. Our commitment to
            sustainability is reflected in our choice of materials, development
            methodologies, and operational processes. By prioritizing
            sustainability, we help our clients reduce their environmental
            impact while achieving their business objectives.
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
            How do you ensure that the solutions you create are aligned with
            your clients' strategic goals?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-blue-950 text-white ">
          <Typography>
            We ensure that the solutions we create are aligned with our clients'
            strategic goals through comprehensive consultation and
            collaboration. Our process begins with in-depth discussions to
            understand their vision, mission, and objectives. Throughout the
            project lifecycle, we maintain open lines of communication,
            providing regular updates and incorporating feedback. This
            collaborative approach ensures that our solutions are not only
            technically sound but also strategically aligned with our clients'
            long-term goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
