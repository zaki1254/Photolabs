import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  const topicOnClick = () => {
    props.setNavTopic(props.id); // Call setNavTopic with the topic's ID
  };

  return (
    <div className="topic-list__item">
      <span onClick={topicOnClick}>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
