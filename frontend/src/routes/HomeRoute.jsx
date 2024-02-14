import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {


  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} topic={props.topic} setNavTopic={props.setNavTopic} dispatch={props.dispatch} favPhotoCount={props.favouritedPhotos.length}/>
      <PhotoList photos={props.photos} toggleFav={props.toggleFav} favouritedPhotos={props.favouritedPhotos} openModal={props.openModal}/>
    </div>
  );
};

export default HomeRoute;
