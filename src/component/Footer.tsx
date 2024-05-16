import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="Footer text-slate-400 bg-zinc-900">
      <div className="text-center text-6xl">
        <a
          className="animate__animated animate__heartBeat animate__infinite"
          href="https://drive.google.com/file/d/1jLLfvQ3yMMV-DBaxM-3EYL8s10x7X6b0/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {t("DOWNLOAD CV")}
        </a>
      </div>
    </div>
  );
};

export default Footer;
