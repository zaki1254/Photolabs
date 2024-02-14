import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
//passes down all props for building a photo list item also maps thru each set of data
//also passes fav icon state and toggle
  const photoList = props.photos.map((photo) => <PhotoListItem 
  key={photo.id}
  photoId={photo.id}
  imageSource={photo.urls.regular}
  imageSourceFull={photo.urls.full}
  profile={photo.user.profile}
  name={photo.user.name}
  username={photo.user.username}
  city={photo.location.city}
  country={photo.location.country}
  toggleFav={props.toggleFav}
  favouritedPhotos={props.favouritedPhotos}
  openModal={props.openModal} 
  photo={photo}/>) 

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
