import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import photosInitial, { setPhotosToStorage } from "../data/photos";

import { getPosts } from "../store/actions/act_posts";
import { getAlbums } from "../store/actions/act_albums";
import { getPhotos } from "../store/actions/act_photos";

import Navigation from "./Navigation";
import Pages from "../layouts/Pages";


export const GlobalContext = React.createContext(null);

const App = ({ initPosts, initAlbums, initPhotos }) => {
  useEffect(() => {
    initPosts();
    initAlbums();
    initPhotos();
  }, []);

  const [photos, setPhotos] = useState(photosInitial);

  // const addPhotoReaction = (id, vote) => {
  //   const newPhotos = [...photos];
  //   const idx = newPhotos.findIndex((p) => p.id === id);
  //   if (idx === -1) return false;
  //   if (vote === 1) {
  //     newPhotos[idx].like++;
  //   } else {
  //     newPhotos[idx].dislike++;
  //   }

  //   setPhotos(newPhotos);
  //   setPhotosToStorage(newPhotos);
  // };

  return (
    <GlobalContext.Provider
      value={{
        photos,
        // addPhotoReaction,
      }}
    >
      <Navigation />
      <Pages />
    </GlobalContext.Provider>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    initPosts: () => dispatch(getPosts()),
    initAlbums: () => dispatch(getAlbums()),
    initPhotos: () => dispatch(getPhotos()),
  };
};

export default connect(null, mapDispatchToProps)(App);
