import React, { useCallback } from "react";
import style from "./SideNavBar.module.scss";

const SideNavBar = ({ topics, getQuestionsforTopic }) => {
  const onItemClick = useCallback(
    (topicId) => {
      getQuestionsforTopic(topicId);
    },
    [topics]
  );
  const renderTopics = () => {
    return topics.map((topic) => {
      return (
        <li
          onClick={() => onItemClick(topic.topicId)}
          className={style.sideNavBar__topics}
          key={topic.topicId}
        >
          {topic.topicName}
        </li>
      );
    });
  };
  return (
    <>
      <div className={style.sideNavBar__allContentTile}>
        <label className={style.sideNavBar__allContentTileLabel}>{"All Content"}</label>
      </div>
      <ul className={style.sideNavBar}>
        <li className={style.sideNavBar__featuredTopic}>{"Featured Topics"}</li>
        {renderTopics()}
      </ul>
    </>
  );
};

export default SideNavBar;
