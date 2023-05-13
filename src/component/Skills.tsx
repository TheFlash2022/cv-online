import React from "react";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div id="ski" className="skills mt-5 pb-6 text-amber-50">
      <h1 className="text-center text-teal-400 text-5xl font-black wow animate__bounceInDown">
        {t("MY SKILLS")}
      </h1>
      <div className="title_skills flex justify-around mt-9">
        <h3 className="text-3xl text-yellow-300">
          {t("Programming Languages")}
        </h3>
        <h3 className="text-3xl text-lime-300">{t("Frameworks/Library")}</h3>
        <h3 className="text-3xl text-purple-300">{t("Other skills")}</h3>
      </div>
      <div className="skill">
        <div className="FrontEnd mt-5 ml-10 flex justify-around relative">
          <h4 className="absolute top-1 left-1">Front-End</h4>
          <div className="languages">
            <p>JavaScript ES6</p>
            <p>TypeScript</p>
          </div>
          <div className="frameworks">
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
            <p>Git</p>
            <p>Git hub</p>
            <p>Balsamiq Wireframes</p>
          </div>
        </div>
        <div className="BackEnd mt-5 flex justify-start relative">
          <h4 className="ml-5">Back-End</h4>
          <div className="languages relative left-12">
            <p>C#</p>
            <p>OOP</p>
            <p>MS SQL Database Programming</p>
          </div>
          <div className="frameworks relative left-72">
            <p>ORMs (Entity framework) </p>
            <p>.NET MVC</p>
            <p>.NET Core</p>
            <p>Webforms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
