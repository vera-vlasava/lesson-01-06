import React, { useState } from "react";
import personsInitial, {
  setPersonsToStorage,
  activePersonId,
  setActivePersonIdToStorage,
} from "../data/persons";
import albumsInitial, { setAlbumsToStorage } from "../data/albums";
import photosInitial, { setPhotosToStorage } from "../data/photos";
import postsInitial, { setPostsToStorage } from "../data/posts";

import Navigation from "./Navigation";
import Pages from "../layouts/Pages";

export const GlobalContext = React.createContext(null);

const App = () => {
  const [persons, setPersons] = useState(personsInitial);
  const [activePerson, setActivePerson] = useState(+activePersonId);

  const addPerson = (data) => {
    const newPersons = [...persons, { ...data, id: Date.now() }];
    setPersons(newPersons);
    setPersonsToStorage(newPersons);
  };

  const editPerson = (person) => {
    const newPersons = [...persons];
    const idx = newPersons.findIndex((p) => p.id === person.id);
    if (idx === -1) return false;
    newPersons.splice(idx, 1, person);
    setPersons(newPersons);
    setPersonsToStorage(newPersons);
  };

  const changeActivePerson = (id) => {
    setActivePerson(+id);
    setActivePersonIdToStorage(+id);
  };

  const getPersonById = (id) => {
    const idx = persons.findIndex((person) => person.id === +id);
    if (idx === -1) {
      return null;
    }
    return persons[idx];
  };

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
    setPosts(newPosts)
    setPostsToStorage(newPosts)
  };

  return (
    <GlobalContext.Provider
      value={{
        addPerson,
        persons,
        getPersonById,
        activePerson,
        changeActivePerson,
        editPerson,
        albums,
        addNewAlbum,
        getAlbumById,
        photos,
        addNewPhoto,
        posts, 
        addNewPost
      }}
    >
      <Navigation />
      <Pages />
    </GlobalContext.Provider>
  );
};

export default App;
