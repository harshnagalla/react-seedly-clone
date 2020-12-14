import UserPost from "../userPost/UserPost";
import style from "./QuestionUserPost.module.scss";
import React, { useState, useEffect } from "react";
import classNames from "classnames";

import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";

const filterItems = [
  {
    filterId: 0,
    filterName: "Recent Activity",
  },
  {
    filterId: 1,
    filterName: "Unanswered",
  },
];
const QuestionUserPost = ({ questions }) => {
  const [selectedFilter, setselectedFilter] = useState(filterItems[0]);
  const [questionToRender, setquestionToRender] = useState(questions);

  useEffect(() => {
    //Most recent question
    if (selectedFilter.filterId === 0) {
      let result = questions.sort(function (a, b) {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });
      setquestionToRender(result);
    } else {
      let result = questions.filter(
        (item) => !(item.answers && item.answers[0])
      );
      setquestionToRender(result);
    }
  }, [selectedFilter, questions]);

  const renderQuestions = questionToRender.map((questionItem) => {
    let answer;
    let timeString = "";

    if (
      questionItem.answers &&
      questionItem.answers[0] &&
      questionItem.answers[0].timestamp
    ) {
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
        {questionItem.answers && questionItem.answers[0] && (
          <UserPost
            fullName={answer.firstName}
            answer={answer.answer}
            time={timeString.replace("M", "")}
          />
        )}
      </div>
    );
  });

  const renderFilters = filterItems.map((item) => {
    let filterLabelStyle =
      selectedFilter.filterId !== item.filterId
        ? style.questionUserPost__unSelectedLabel
        : style.questionUserPost__selectedLabel;

    return (
      <label
        key={item.filterId}
        className={classNames(
          style.questionUserPost__filterLabel,
          filterLabelStyle
        )}
        onClick={() => setselectedFilter(item)}
      >
        {item.filterName}
      </label>
    );
  });

  return (
    <div className={style.questionUserPost}>
      <div className={style.questionUserPost__upperSection}>
        {renderFilters}
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
