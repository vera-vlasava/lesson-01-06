import albumsInitial, {setAlbumsToStorage} from "../../data/albums";
import {ADD_ALBUM, FETCH_ALBUMS, FETCH_PHOTOS, SET_ALBUM_BY_ID} from "../typesList";
import {URL} from "../utilites";

export const setAlbumById = (albumId) => {
  return async(dispatch) => {
    try {
      const response = await fetch(`${URL}/albums/${albumId}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      await dispatch(setAlbumByIdInState(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const setAlbumByIdInState = (album) => {
  return {
    type: SET_ALBUM_BY_ID,
    payload: album,
  };
};

export const getAlbums = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL}/albums`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        for (const a of data) {
          const response = await fetch(`${URL}/users/${a.person_id}`, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            }
          });
          a.person = await response.json();
        }
        await dispatch(fetchAlbums({list: data}));
      } catch (err) {
        console.log(err.message);
      }
    };
  };
  
  export const addAlbum = (album) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${URL}/albums`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.token
          },
          body: JSON.stringify(album)
        });
        const json = await response.json();
        await dispatch(addAlbumInState(json));
      } catch (err) {
        console.log(err.message);
      }
    };
  };

export const setAlbumsByPersonId = (person_id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/albums/person_id/${person_id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();

     let photos = []

      for (const a of data) {
        const response = await fetch(`${URL}/photos/album_id/${a.id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        });
        photos = [...photos, ...await response.json()];
      }
      await dispatch({type: FETCH_PHOTOS, payload: {list: photos}});
      await dispatch(fetchAlbums({list: data}));
    } catch (err) {
      console.log(err.message);
    }
  };
}


const getObject = () => {
    return {
      list: [...albumsInitial],
    };
  };
  
  const fetchAlbums = (obj) => {
    return {
      type: FETCH_ALBUMS,
      payload: obj,
    };
  };
  
  const addAlbumInState = (album) => {
    return {
      type: ADD_ALBUM,
      payload: album,
    };
  };
  
  const addAlbumInServer = (album) => {
    const newAlbum = {
      ...album,
      id: Date.now(),
    };
    albumsInitial.push(newAlbum);
    setAlbumsToStorage(albumsInitial);
    return newAlbum;
  };
  