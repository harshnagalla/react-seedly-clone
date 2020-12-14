import UserPost from "../userPost/UserPost";
import style from "./QuestionUserPost.module.scss";
import Reactƒ from "react";

import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";

const QuestionUserPost = ({ questions }) => {
  const renderQuestions = questions.map((questionItem) => {
    let answer;
    let timeString = "";

    if (questionItem.answers[0] && questionItem.answers[0].timestamp) {
      answer = questionItem.answers[0];
      timeString = getTimeStamp(answer.timestamp);
    }

    return (
      <div
        key={questionItem.questionId}
        className={style.questionUserPost_container}
      >
        <p className={style.questionUserPost__questionName}>
          {questionItem.question}
        </p>
        <button className={style.questionUserPost__button}>
          {"+ Follow  •  5"}
        </button>
        {questionItem.answers[0] && (
          <UserPost
            fullName={answer.firstName}
            answer={answer.answer}
            time={timeString.replace("M", "")}
          />
        )}
      </div>
    );
  });
  return (
    <div className={style.questionUserPost}>
      <div className={style.questionUserPost__upperSection}>
        <label>{"Recent Activity"}</label>
        <label>{"Unanswered"}</label>
      </div>
      {renderQuestions}
    </div>
  );
};

export default QuestionUserPost;

const getTimeStamp = (time) => {
  let timeString;

  let timeOfPostMinutes = differenceInMinutes(new Date(), new Date(time));
  let timeOfPostHours = differenceInHours(new Date(), new Date(time));
  let timeOfPostDays = differenceInDays(new Date(), new Date(time));
  if (timeOfPostMinutes < 59) {
    timeString = timeOfPostMinutes + "m ago";
  }
  if (timeOfPostHours != 0 && timeOfPostHours < 24) {
    timeString = timeOfPostHours + "h ago";
  }
  if (timeOfPostDays != 0) {
    timeString = timeOfPostDays + "d ago";
  }

  return timeString;
};
