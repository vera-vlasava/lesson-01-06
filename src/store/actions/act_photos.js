import photosInitial, { setPhotosToStorage } from "../../data/photos";
import { FETCH_PHOTOS, ADD_PHOTO, EDIT_PHOTO } from "../typesList";
import {URL} from "../utilites";

export const getPhotos = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/photos`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      await dispatch(fetchPhotos({list: json}));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addPhoto = (photo) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/photos`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.token
        },
        body: JSON.stringify(photo)
      });
      const json = await response.json();
      await dispatch(addPhotoInState(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};


export const addLikeToPhoto = (id) => {
  return async(dispatch, getState) => {
    const photo = getState().photos.list.find((photo) => photo.id === id);
    // const obj = {}
    // obj["like"] = photo.like+1
    try {
      const response = await fetch(`${URL}/photos/${photo.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.token
        },
        body: JSON.stringify({like: photo.like+1})
        
      });
      if (response.status !== 200) {
        return 
      }
      const data = await response.json();
      await dispatch(changePhotoInState(data))
    }  catch (err) {
      console.log(err.message);
    }
  }
}

export const addDislikeToPhoto = (id) => {
  return async(dispatch, getState) => {
    const photo = getState().photos.list.find((photo) => photo.id === id);
    // const obj = {}
    // obj["like"] = photo.like+1
    try {
      const response = await fetch(`${URL}/photos/${photo.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.token
        },
        body: JSON.stringify({dislike: photo.dislike+1})
        
      });
      if (response.status !== 200) {
        return 
      }
      const data = await response.json();
      await dispatch(changePhotoInState(data))
    }  catch (err) {
      console.log(err.message);
    }
  }
}
export const setPhotosByAlbumId = (album_id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/photos/album_id/${album_id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      await dispatch(fetchPhotos({list: json}));
    } catch (err) {
      console.log(err.message);
    }
  };
}

const changePhotoInState = (photo) => {
  return {type: EDIT_PHOTO, payload: photo}

}

export const editPhoto = (id) => {
  return (dispatch, getState) => {
    try {
      const photo = getState().photos.list.find((photo) => photo.id === id);
      editPhotoOnServer(photo);
    } catch (err) {
      console.log(err.message);
    }
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
