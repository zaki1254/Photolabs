import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {
// passes down topics from the data as props
// maps thru the topics with different data each time and returns a list
  const topicList = props.topics.map((topic) => <TopicListItem 
  key={topic.id}
  slug={topic.slug}
  title={topic.title}
  id={topic.id}
  topic={props.topic}
  dispatch={props.dispatch}
  setNavTopic={props.setNavTopic}/>)


  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
