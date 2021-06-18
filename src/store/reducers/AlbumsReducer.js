import { ADD_ALBUM, CHANGE_ADD_ALBUM, FETCH_ALBUMS } from "../typesList";

export const AlbumsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return { ...state, ...action.payload };

    case ADD_ALBUM:
      return { ...state, list: [...state.list, action.payload] };

    case CHANGE_ADD_ALBUM:
      return { ...state, addAlbumMode: !state.addAlbumMode };

    default:
      return state;
  }
};
