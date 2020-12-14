import Grid from "@material-ui/core/Grid";
import style from "./Content.module.scss";
import QuestionUserPost from "./questionUserPost/QuestionUserPost";
import SideNavBar from "./sideNavBar/SideNavBar";
import React, { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

const Content = ({ topics, questions, getQuestionsforTopic }) => {
  // const [selectedTopicId, setSelectedTopicId] = useState(1);
  // const [questions, setQuestions] = useState([]);

  // useEffect(async () => {
  //   const res = await fetch("http://localhost:7000/topic/" + selectedTopicId, {
  //     method: "GET",
  //   });
  //   const json = await res.json();
  //   setQuestions(json);
  // }, [selectedTopicId]);

  // const getQuestionsforTopic = async (topic) => {
  //   setSelectedTopicId(topic.topicId);
  // };

  return (
    <div className={style.content}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideNavBar
            topics={topics}
            getQuestionsforTopic={getQuestionsforTopic}
          />
        </Grid>
        <Grid item xs={8}>
          <QuestionUserPost questions={questions} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Content;
