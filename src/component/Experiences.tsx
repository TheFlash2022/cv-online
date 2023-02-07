import React from "react";

const Experiences = () => {
  return (
    <div id="ex" className="ex_edu flex justify-around pt-14 pb-8 text-white">
      <div className="experiences wow animate__bounceInLeft">
        <h3 className="text-teal-300 text-4xl">Experiences</h3>
        <div className="mt-8">
          <h4 className="text-3xl mb-1 text-violet-300">
            FPT TELECOM 02/2019 - 04/2022
          </h4>
          <b className="text-yellow-300 text-xl">Technical Support</b>
          <p className="mt-1">
            Responsibilities: Inbound Contact Center Representative - Technical
            Support Collect clients' technical inquiries realated to internet,
            television stations and relevant services; Handle clients'
            complaints with clear explanations and solutions, especially for
            internet connection; Provide clear and detailed company's products,
            procedures and after sales services.
          </p>
        </div>
        <div className="mt-20">
          <h4 className="text-3xl mb-1 text-violet-300">
            E-WORLD E-COMMERCE AND TECHNOLOGY JOINT STOCK COMPANY 06/2016 -
            12/2018
          </h4>
          <b className="text-yellow-300 text-xl">Business Development</b>
          <p className="mt-1">
            Seek for potential retail customers who have demand for importing a
            varied range of consumer goods; Provide the package of importing
            goods from some Asia countries, for example, from China to Vietnam;
            Receive and give advice for clients' relevant inquiries.
          </p>
        </div>
      </div>
      <div className="education wow animate__bounceInRight">
        <h3 className="text-teal-300 text-4xl">Education</h3>
        <div className="mt-8">
          <h4 className="text-3xl mb-1 text-violet-300">
            CYBERLEARN.VN 08/2021 - 06/2022
          </h4>
          <b className="text-yellow-300 text-xl">Front End - Developer</b>
          <p></p>
        </div>
        <div className="mt-20">
          <h4 className="text-3xl mb-1 text-violet-300">
            HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY 06/2019 - 11/2021
          </h4>
          <b className="text-yellow-300 text-xl">
            Major: Information Technology
          </b>
          <p className="mt-1">
            Completed Project: Analyze and design system of e-commerce website
          </p>
        </div>
        <div className="mt-20">
          <h4 className="text-3xl mb-1 text-violet-300">
            UNIVERSITY OF TECHNOLOGY 09/2011 - 05/2016
          </h4>
          <b className="text-yellow-300 text-xl">
            Major: Faculty of Geology & Petroleum Engineering
          </b>
          <p>Earth Resources and Environment</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
