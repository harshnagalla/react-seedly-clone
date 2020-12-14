import Facade from "./facade/Facade";
import Content from "./Content";
import React, { useEffect, useState } from "react";
import style from "./ContentContainer.module.scss";

export const Context = React.createContext();

const ContentContainer = ({ topics }) => {
  return (
    <div className={style.contentContainer}>
      <Facade
        headerText={"Let's Talk Finance"}
        secondaryHeaderText={
          "Ask for opinions and get answers from other Singaporeans"
        }
        buttonText={"Ask Question"}
      />
      <Content topics={topics} />
    </div>
  );
};
export default ContentContainer;
