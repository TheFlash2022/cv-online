import React from "react";
import { useTranslation } from "react-i18next";
import CakeView from "../features/cake/CakeView";
import { Counter } from "../features/counter/Counter";

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
      <CakeView />
      <Counter />
    </div>
  );
};

export default Hello;
