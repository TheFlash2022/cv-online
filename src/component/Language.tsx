import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const Language: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language bg-slate-700 text-white text-xl">
      <LanguageIcon />
      <button className="mr-4 ml-2" onClick={() => i18n.changeLanguage("en")}>
        English
      </button>
      <button onClick={() => i18n.changeLanguage("vi")}>Vietnamese</button>
    </div>
  );
};

export default Language;
