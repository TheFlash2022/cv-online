import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="aboutMe mt-5">
      <h2 className="text-center text-teal-400 text-5xl font-bold mb-5 wow animate__bounceInDown">
        ABOUT ME
      </h2>
      <div className="flex">
        <div className="wow animate__heartBeat">
          <h3 className="text-center text-amber-600 text-3xl mb-3">SUMMARY</h3>
          <p className="mx-11 text-xl">
            I am a Front-End Software Engineer, majored in Web Development. By
            utilizing and applying knowledge of UX/UI design, I aim to work as a
            a front-end solution provider and user experience creator. I am also
            eager to learn new technology and spend much time on practising to
            enhance my knowledge and skills.
          </p>
        </div>
        <img
          className="mr-5 wow animate__fadeInRight"
          src={require("../assets/images/ab7.jpg")}
          alt="..."
        />
      </div>
    </div>
  );
};

export default AboutMe;
