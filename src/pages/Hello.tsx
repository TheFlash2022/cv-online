import React from "react";
import { useTranslation } from "react-i18next";

const Hello: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <button
        onClick={() => {
          console.log(i18n);
        }}
      >
        {t("ABOUT ME")}
      </button>
    </div>
  );
};

export default Hello;
