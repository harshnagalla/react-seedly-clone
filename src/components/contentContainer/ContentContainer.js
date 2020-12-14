import Facade from "./facade/Facade";
import Content from "./Content";
import style from "./ContentContainer.module.scss";
import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";
export const Context = React.createContext();

const ContentContainer = () => {
  const [selectedTopic, setSelectedTopic] = useState({
    topicId: 0,
    topicName: "Let's Talk Finance",
  });
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      "http://localhost:7000/topic/" + selectedTopic.topicId,
      {
        method: "GET",
      }
    );
    const json = await res.json();
    setQuestions(json);
  }, [selectedTopic]);

  const getQuestionsforTopic = async (topic) => {
    setSelectedTopic(topic);
  };
  return (
    <div className={style.contentContainer}>
      <Facade
        headerText={selectedTopic.topicName}
        secondaryHeaderText={
          "Ask for opinions and get answers from other Singaporeans"
        }
        buttonText={"Ask Question"}
      />
      <Content
        questions={questions}
        getQuestionsforTopic={getQuestionsforTopic}
      />
    </div>
  );
};
export default ContentContainer;
