import albumsInitial, { setAlbumsToStorage } from "../../data/albums";
import { FETCH_ALBUMS, ADD_ALBUM} from "../typesList";
import { URL } from "../utilites";

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
        const json = await response.json();
        await dispatch(fetchAlbums({list: json}));
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
  