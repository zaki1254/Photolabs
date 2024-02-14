import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

 const App = () => {

  const {
    state,
    dispatch,
    openModal,
    closeModal,
    toggleFav,
    setNavTopic
  } = useApplicationData();

  return(
   <div className="App">
    <HomeRoute photos={state.photos} topics={state.topics} setNavTopic={setNavTopic} dispatch={dispatch} openModal={openModal} toggleFav={toggleFav} favouritedPhotos={state.favPhotos}/>
    {state.isModalOpen && (
    <PhotoDetailsModal 
      clickedPhoto={state.clickedPhoto}
      openModal={openModal}
      closeModal={closeModal} 
      toggleFav={toggleFav} 
      favouritedPhotos={state.favPhotos} />)}
   </div>
   )
 }


export default App;
