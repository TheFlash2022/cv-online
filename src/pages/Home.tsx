import React from "react";
import AboutMe from "../component/AboutMe";
import Contact from "../component/Contact";
import Experiences from "../component/Experiences";
import Footer from "../component/Footer";
import Language from "../component/Language";
import Skills from "../component/Skills";
import BasicSpeedDial from "../component/SpeedDial";
import Project from "../component/Project";

const Home = () => {
  return (
    <div>
      <BasicSpeedDial />
      <Language />
      <Contact />
      <AboutMe />
      <Skills />
      <Experiences />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
