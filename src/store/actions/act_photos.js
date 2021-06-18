import photosInitial, { setPhotosToStorage } from "../../data/photos";
import { FETCH_PHOTOS, ADD_PHOTO, EDIT_PHOTO } from "../typesList";

export const getPhotos = () => {
  return async (dispatch) => {
    try {
      const obj = getObject();
      await dispatch(fetchPhotos(obj));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addPhoto = (photo) => {
  return async (dispatch) => {
    try {
      const newPhoto = await addPhotoInServer(photo);
      await dispatch(addPhotoInState(newPhoto));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const editPhoto = (photo) => {
  return async (dispatch) => {
    try {
      await editPhotoOnServer(photo);
      dispatch(editPhotoInState(photo));
    } catch (err) {
      console.log(err.message);
    }
  };
};


const editPhotoInState = (photo) => {
  return {
    type: EDIT_PHOTO,
    payload: photo,
  };
};

const editPhotoOnServer = (photo) => {
  const idx = photosInitial.findIndex((p) => p.id === photo.id);
  if (idx === -1) return null;
  photosInitial.splice(idx, 1, photo);
  setPhotosToStorage(photosInitial);
};

const getObject = () => {
  return {
    list: [...photosInitial],
  };
};

const fetchPhotos = (obj) => {
  return {
    type: FETCH_PHOTOS,
    payload: obj,
  };
};

const addPhotoInState = (photo) => {
  return {
    type: ADD_PHOTO,
    payload: photo,
  };
};

const addPhotoInServer = (photo) => {
  const newPhoto = {
    ...photo,
    id: Date.now(),
    like: 0,
    dislike: 0,
  };
  photosInitial.push(newPhoto);
  setPhotosToStorage(photosInitial);
  return newPhoto;
};
