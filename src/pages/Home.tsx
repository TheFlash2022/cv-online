import React from "react";
import AboutMe from "../component/AboutMe";
import Contact from "../component/Contact";
import Experiences from "../component/Experiences";
import Footer from "../component/Footer";
import Language from "../component/Language";
import Skills from "../component/Skills";
import BasicSpeedDial from "../component/SpeedDial";

const Home = () => {
  return (
    <div>
      <BasicSpeedDial />
      <Language />
      <Contact />
      <AboutMe />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
};

export default Home;
