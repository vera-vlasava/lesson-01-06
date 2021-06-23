import {
  ADD_PHOTO,
  FETCH_PHOTOS,
  ADD_LIKE_TO_PHOTO,
  ADD_DISLIKE_TO_PHOTO,
  EDIT_PHOTO,
} from "../typesList";

let idx, _arr;

export const PhotosReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return { ...state, ...action.payload };

    case ADD_PHOTO:
      return { ...state, list: [...state.list, action.payload] };

    case EDIT_PHOTO:
      idx = state.list.findIndex((p) => p.id === action.payload.id);
      console.log(action.payload.id);
      if (idx === -1) return state;
      _arr = [...state.list];
      _arr.splice(idx, 1, action.payload);
      return {
        ...state,
        list: _arr,
      };

    case ADD_LIKE_TO_PHOTO:
      _arr = [...state.list];
      idx = _arr.findIndex((p) => p.id === action.payload);
      if (idx === -1) return state;
      _arr[idx] = { ..._arr[idx], like: _arr[idx].like + 1 };

      return {
        ...state,
        list: _arr,
      };

    case ADD_DISLIKE_TO_PHOTO:
      _arr = [...state.list];
      idx = _arr.findIndex((p) => p.id === action.payload);
      if (idx === -1) return state;
      _arr[idx] = { ..._arr[idx], dislike: _arr[idx].dislike + 1 };

      return {
        ...state,
        list: _arr,
      };

    default:
      return state;
  }
};
