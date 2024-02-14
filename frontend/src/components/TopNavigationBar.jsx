import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';


const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <TopicList topics={props.topics} topic={props.topic} dispatch={props.dispatch} setNavTopic={props.setNavTopic} />
      </div>
      <FavBadge favPhotoCount={props.favPhotoCount} />
    </div>
  )
}

export default TopNavigation;