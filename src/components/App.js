import React, { useEffect } from "react";
import { connect } from "react-redux";

import photosInitial, { setPhotosToStorage } from "../data/photos";

// import { getPosts } from "../store/actions/act_posts";
// import { getAlbums } from "../store/actions/act_albums";
// import { getPhotos } from "../store/actions/act_photos";

import Navigation from "./Navigation";
import Pages from "../layouts/Pages";

const App = ({ initPosts, initAlbums, initPhotos }) => {

  // useEffect(() => {
  //   initPosts();
  //   initAlbums();
  //   initPhotos();
  // }, []);


  return (
    <div>
      <Navigation />
      <Pages />
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     initPosts: () => dispatch(getPosts()),
//     initAlbums: () => dispatch(getAlbums()),
//     initPhotos: () => dispatch(getPhotos()),
//   };
// };

export default App;
