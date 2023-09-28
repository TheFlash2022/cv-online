import React from "react";
import { useTranslation } from "react-i18next";

const Experiences: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      data-testid="ex"
      id="ex"
      className="ex_edu flex justify-around pt-14 pb-8 text-white"
    >
      <div className="experiences wow animate__bounceInLeft">
        <h3 className="text-teal-300 text-4xl">{t("Experiences")}</h3>
        <div className="mt-8">
          <h4 className="text-3xl mb-1 text-violet-300">
            {t("BeeTech")} 02/2020 - now
          </h4>
          <b className="text-yellow-300 text-xl">
            {t("Fresher BackEnd Developer")}
          </b>
          <p className="mt-1">{t(`Development: Back-end developers use programming languages such as C#, JavaScript, and TypeScript to write the code that powers the application. They also work with databases, servers, and other infrastructure components.`)}</p>
          <p className="mt-1">{t(`Testing and deployment: Once the code is written, back-end developers test it to ensure that it works correctly. Once the code is tested and approved, they deploy it to production so that users can start using it.`)}</p>
          <p className="mt-1">{t(`Maintenance and support: Back-end developers are also responsible for maintaining and supporting the application after it is deployed. This includes fixing bugs, adding new features, and performance tuning.`)}</p>
        </div>
        <div className="mt-8">
          <h4 className="text-3xl mb-1 text-violet-300">
            {t("FPT Software")} 05/2019 - 12/2019
          </h4>
          <b className="text-yellow-300 text-xl">
            {t("Intern FrontEnd Developer")}
          </b>
          <p className="mt-1">
            {t(
              "Responsible for working on multiple projects at the same time, designing attractive websites, interacting daily with fellow graphic designers, back-end developers and marketing teams. Develop and maintain front-end functionality of websites. Engage in discussions with customers to clarify what they want. Design prototypes for apps and websites. Write cross-browser compatible HTML, CSS and JavaScript. Manage several databases and reporting tools. Contact external webmaster to determine link placement (for SEO purposes)"
            )}
          </p>
        </div>
        <div className="mt-8">
          <h4 className="text-3xl mb-1 text-violet-300">
            {t("FPT TELECOM")} 02/2017 - 04/2019
          </h4>
          <b className="text-yellow-300 text-xl">{t("Technical Support")}</b>
          <p className="mt-1">
            {t(
              "Responsibilities: Inbound Contact Center Representative - Technical Support Collect clients' technical inquiries realated to internet, television stations and relevant services; Handle clients' complaints with clear explanations and solutions, especially for internet connection; Provide clear and detailed company's products, procedures and after sales services."
            )}
          </p>
        </div>
      </div>
      <div className="education wow animate__bounceInRight">
        <h3 className="text-teal-300 text-4xl">{t("Education")}</h3>

        <div className="mt-20">
          <h4 className="text-3xl mb-1 text-violet-300">
            {t("HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY(Degree 2)")} 06/2019
            - 11/2021
          </h4>
          <b className="text-yellow-300 text-xl">
            {t("Major: Information Technology")}
          </b>
          <p className="mt-1">
            {t(
              "Completed Project: Analyze and design system of e-commerce website"
            )}
          </p>
        </div>
        <div className="mt-20">
          <h4 className="text-3xl mb-1 text-violet-300">
            {t("UNIVERSITY OF TECHNOLOGY")} 09/2011 - 05/2016
          </h4>
          <b className="text-yellow-300 text-xl">
            {t("Major: Faculty of Geology & Petroleum Engineering")}
          </b>
          <p>{t("Earth Resources and Environment")}</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
