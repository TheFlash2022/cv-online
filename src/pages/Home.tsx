import React from "react";
import AboutMe from "../component/AboutMe";
import Contact from "../component/Contact";
import Experiences from "../component/Experiences";
import Footer from "../component/Footer";
import MyProject from "../component/MyProject";
import Skills from "../component/Skills";
import BasicSpeedDial from "../component/SpeedDial";

const Home = () => {
  return (
    <div>
      <BasicSpeedDial />
      <Contact />
      <AboutMe />
      <Skills />
      <Experiences />
      <MyProject />
      <Footer />
    </div>
  );
};

export default Home;
