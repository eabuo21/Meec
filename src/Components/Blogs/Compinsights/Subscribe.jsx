import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Subscribe = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  //  function to submit the form

  //keys
  const Template_ID = "template_ahwj8fl";
  const Service_ID = "service_m0sgj2s";
  const API_Key = "NPd7Wszo4kPAco2ad";

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      email: email,
    };

    emailjs
      .send( Service_ID, Template_ID, templateParams, API_Key)
      .then((response) => {
        if (response.status ===200) {
          alert("Subscribed");
          navigate("/success");
          setEmail("");
          setLoading(false);
        } else {
          console.log("error encountered");
          alert("failed o subscribe");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("failed please check connection and  try again");
        setLoading(false);
      });
  };

  return (
    <div className="w-full h-[fixed]  p-2 flex flex-col justify-start items-center">
      <h2 className="text-center font-bold text-blue-950 text-xl md:text-4xl flex justify-center items-start pb-8">
        Get Latest Insights and Events
      </h2>
      <form
        onSubmit={handleSubmit}
        className="email-form-collector  w-full flex flex-col justify-center items-center gap-2 p-2"
      >
        <input
          type="email"
          value={email}
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email address"
          className="w-[300px]  h-[50px] rounded-full   border-b-2 border-t-2 border-t-blue-400 border-b-blue-950 border-r-2 border-l-2  border-r-blue-400  border-l-blue-950 focus:outline-none  focus:scale-[1.1] focus:transition-all 
          focus:duration-1000 focus:ease-in-out  transition-all duration-1000 ease-in-out 
          md:w-[550px] px-4"
          required
        />
        <button
          type="submit"
          className="submit-button   w-[150px] h-[50px] p-2 flex justify-center items-center text-center text-white bg-blue-400
        hover:bg-blue-950  hover:transition-transform hover:duration-1000 hover:ease-in-out
        transition-transform duration-1000 ease-in-out  rounded-full"
        >
          {loading ? "Submitting..." : " Submit"}
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
