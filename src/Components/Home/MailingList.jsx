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
      .send("service_m0sgj2s", "template_ahwj8fl", templateParams, "NPd7Wszo4kPAco2ad")
      .then((response) => {
        setLoading(false);
        setEmail("");
        if (response.status === 200) {
          showSuccessNotification("subscribed");
          navigate("successful");
        } else {
          showErrorNotification("subscription failed try again");
        }
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("failed try again");
      });
  };

  return (
    <div   className="flex flex-col gap-5 ">
      <h2  className="text-2xl font-dm font-bold "> News Letter </h2>
      <form onSubmit={handleSubmit}   className="flex flex=row gap-4">
        <input
          type="email"
          placeholder="Enter  Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[450px] h-[45px]    px-3 text-xl text-dark  focus:outline-none "
        />
        <button 
        className="bg-blue-700 p-2   w-[20vh]  "
        type="submit" disabled={loading}>
          {loading ? "Please Wait..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default MailingList;
