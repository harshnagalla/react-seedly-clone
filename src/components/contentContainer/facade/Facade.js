import style from "./Facade.module.scss";
import React from "react";

const Facade = ({ headerText, secondaryHeaderText, buttonText }) => {
   return (
    <div className={style.facade}>
      <label className={style.facade__header}>{headerText}</label>
      <label className={style.facade__secondaryHeader}>
        {secondaryHeaderText}
      </label>
      <button className={style.facade__button}>{buttonText}</button>
    </div>
  );
};

export default Facade;
