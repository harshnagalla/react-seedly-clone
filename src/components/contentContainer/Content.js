import Grid from "@material-ui/core/Grid";
import style from "./Content.module.scss";
import QuestionUserPost from "./questionUserPost/QuestionUserPost";
import SideNavBar from "./sideNavBar/SideNavBar";
import React, { useContext } from "react";
import AppContext from "../../context/index";

const Content = ({ questions, getQuestionsforTopic }) => {
  const { topics, setTopics } = useContext(AppContext);

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
