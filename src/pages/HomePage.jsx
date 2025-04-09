// src/pages/HomePage.jsx
import React from "react";
import Navbar from "../components/navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import BentroEvents from "../components/BentoGrid.jsx";
import Collaboration from "../components/collaboration.jsx";
import { Aboutus } from "../components/aboutUs.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BentroEvents />
      <section id="collaboration">
        <Collaboration />
      </section>

      <section id="about">
        <Aboutus />
      </section>
      
    </>
  );
};

export default HomePage;
