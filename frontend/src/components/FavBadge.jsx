import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
//displays notification when there is a photo in favPhotoCount
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={props.favPhotoCount > 0} selected={true}/>
    </div>
  ) 
};

export default FavBadge;