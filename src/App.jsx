/** @format */

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feat from "./Components/Feat/Footer";
import Nav from "../src/Components/Nav/Navigation";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import LandingPage from "./Pages/LandingPage";
import Successful from "./Components/Home/Successful";
import BacktoTop from "./Components/BacktoTop";
import "react-toastify/dist/ReactToastify.css";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs&News";
import FAQ from "./Pages/FAQ";
import Careers from "./Pages/Careers";
import ContactUs from "./Pages/ContactUs";
import Mlogo from "./assets/images/logo.png";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    simulateWebsiteLoading()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Loading error:", error);
        setLoading(false);
      });
  }, []);

  const simulateWebsiteLoading = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container bg-blue-950 flex flex-col gap-4">
          {/* <HashLoader color={"red"} loading={true} size={80} /> */}
          <img src={Mlogo} className="w-[300px] h-[300px] "/>
        
        </div>
      ) : (
        <>
          <Nav className="navigation-container sticky top-0 z-50" />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/success" element={<Successful />} />
          </Routes>
          <ToastContainer className="notification-section" />

          <Feat className="footer-container sticky bottom-0 z-50" />
          <BacktoTop className="backtotop-section flex absolute bottom-[400px] right-4 z-50" />
        </>
      )}
    </div>
  );
}

export default App;
