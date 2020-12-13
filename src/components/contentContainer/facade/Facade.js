import style from "./Facade.module.scss";
import fetch from "isomorphic-unfetch";
import React, { useState, useEffect } from "react";

const Facade = ({ headerText, secondaryHeaderText, buttonText }) => {
  const [state, setstate] = useState();
  useEffect(() => {
    fetch(`http://localhost:7000/topics`)
      .then((response) => response.json())
      .then((data) => {
        setstate(data);
      });
  }, []);

  console.log("Data to fetch", state);
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
