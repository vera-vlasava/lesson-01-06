import albumsInitial, { setAlbumsToStorage } from "../../data/albums";
import { FETCH_ALBUMS, ADD_ALBUM} from "../typesList";

export const getAlbums = () => {
    return async (dispatch) => {
      try {
        const obj = getObject();
        await dispatch(fetchAlbums(obj));
      } catch (err) {
        console.log(err.message);
      }
    };
  };
  
  export const addAlbum = (post) => {
    return async (dispatch) => {
      try {
        const newAlbum = await addAlbumInServer(post);
        await dispatch(addAlbumInState(newAlbum));
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
  