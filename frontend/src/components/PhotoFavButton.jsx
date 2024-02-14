import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // toggles fav icon when photo is clicked and passes down props true/false

  return (
    <div className="photo-list__fav-icon" >
      <div className="photo-list__fav-icon-svg" onClick={() => props.toggleFav(props.photoId)}>
        <FavIcon selected={props.selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;