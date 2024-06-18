/** @format */

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feat from "./Components/Feat/Footer";
import Nav from "../src/Components/Nav/Navigation";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import LandingPage from "./Pages/LandingPage";

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <HashLoader color={"red"} loading={true} size={80} />
        </div>
      ) : (
        <>
          <section className="navigation-container   sticky top-0 z-50 ">
            <Nav />
          </section>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
          <section className="notification-section">
            <ToastContainer />
          </section>

          <section className="navigation-container   sticky top-0 z-50 ">
            <Feat />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
