import React from "react";

const Skills = () => {
  return (
    <div className="skills mt-5 text-amber-50">
      <h1 className="text-center text-teal-400 text-5xl font-black wow animate__bounceInDown">
        MY SKILLS
      </h1>
      <div className="skill mt-5 ml-10 flex justify-around">
        <div className="languages">
          <h3 className="text-3xl text-yellow-300">Programming Languages</h3>
          <p>JavaScript ES6</p>
          <p>TypeScript</p>
        </div>
        <div className="frameworks">
          <h3 className="text-3xl text-lime-300">Frameworks/Library</h3>
          <p>UI/UX</p>
          <p>HTML & CSS, SCSS</p>
          <p>Tailwind, Bootstrap</p>
          <p>JQuery</p>
          <p>Ajax</p>
          <p>REST API</p>
          <p>ReactJS</p>
          <p>Redux, Redux-toolkit</p>
          <p>React Typescript</p>
          <p>Angular 9</p>
          <p></p>
        </div>
        <div className="other">
          <h3 className="text-3xl text-purple-300">Other skills</h3>
          <p>Git</p>
          <p>Git hub</p>
          <p>Balsamiq Wireframes</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
