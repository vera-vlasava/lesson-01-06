import React, { useState } from "react";
import albumsInitial, { setAlbumsToStorage } from "../data/albums";
import photosInitial, { setPhotosToStorage } from "../data/photos";
import postsInitial, { setPostsToStorage } from "../data/posts";

import Navigation from "./Navigation";
import Pages from "../layouts/Pages";

export const GlobalContext = React.createContext(null);

const App = () => {

  const [albums, setAlbums] = useState(albumsInitial);

  const addNewAlbum = (formData) => {
    const newAlbums = [...albums, { ...formData, id: Date.now() }];
    setAlbums(newAlbums);
    setAlbumsToStorage(newAlbums);
  };

  const getAlbumById = (id) => {
    const idx = albums.findIndex((album) => album.id === id);
    if (idx === -1) {
      return null;
    }
    return albums[idx];
  };

  const [photos, setPhotos] = useState(photosInitial);

  const addNewPhoto = (formData) => {
    const newPhotos = [
      ...photos,
      { ...formData, id: Date.now(), like: 0, dislike: 0 },
    ];
    setPhotos(newPhotos);
    setPhotosToStorage(newPhotos);
  };

  const [posts, setPosts] = useState(postsInitial);

  const addNewPost = (formData) => {
    const newPosts = [
      ...posts,
      { ...formData, id: Date.now(), datetime: Date.now() },
    ];
    setPosts(newPosts);
    setPostsToStorage(newPosts);
  };

  const addPhotoReaction = (id, vote) => {
    const newPhotos = [...photos];
    const idx = newPhotos.findIndex((p) => p.id === id);
    if (idx === -1) return false;
    if (vote === 1) {
      newPhotos[idx].like++;
    } else {
      newPhotos[idx].dislike++;
    }

    setPhotos(newPhotos);
    setPhotosToStorage(newPhotos);
  };

  return (
    <GlobalContext.Provider
      value={{
        albums,
        addNewAlbum,
        getAlbumById,
        photos,
        addNewPhoto,
        posts,
        addNewPost,
        addPhotoReaction,
      }}
    >
      <Navigation />
      <Pages />
    </GlobalContext.Provider>
  );
};

export default App;
