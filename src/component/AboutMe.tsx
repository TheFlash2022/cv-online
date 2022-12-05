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
            I am a Front-End Software Engineer with 1 year of experience in Web
            Development. With my knowledge of UX/UI design, I enjoy solving
            front-end problems and creating the best user experience for users.
            I also spend time learning new technologies and best practices to
            become a better engineer.
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
