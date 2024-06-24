import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../Notification/Notification";
import { useNavigate } from "react-router-dom";

const MailingList = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      email: email,
    };

    emailjs
      .send(
        "service_m0sgj2s",
        "template_ahwj8fl",
        templateParams,
        "NPd7Wszo4kPAco2ad"
      )
      .then((response) => {
        setLoading(false);
        setEmail("");
        if (response.status === 200) {
          showSuccessNotification("subscribed");
          navigate("/success");
        } else {
          showErrorNotification("subscription failed try again");
        }
        if (response.status === 500) {
          console.log("check network connection");
        } else {
          console.log("success");
        }
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("failed try again");
      });
  };

  return (
    <div className="flex flex-col gap-5  h-[200px]  justify-center items-start md:justify-center md:items-center ">
      <h2 className="text-base font-dm font-bold   md:text-2xl text-white ">
        Subscribe to Our News Letter{" "}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-row gap-1   ">
        <input
          type="email"
          placeholder="Enter  Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[200px] h-[45px]    px-3 text-xl text-dark  focus:outline-none   md:w-[400px]"
        />
        <button
          className="bg-blue-700 p-2   w-[fixed] text-white  hover:bg-blue-400 hover:transition-all hover:ease-in-out hover:duration-1000    transition-all duration-1000 ease-in-out "
          type="submit"
          disabled={loading}
        >
          {loading ? "Please Wait..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default MailingList;
