import {
  ADD_NEW_PERSON,
  FETCH_PERSONS,
  CHANGE_ACTIVE_PERSON,
  DELETE_PERSON,
  EDIT_PERSON,
  SET_PERSON_BY_ID,
  CHANGE_EDIT_MODE, CHANGE_AUTH,
} from "../typesList";

let idx, _arr;

export const PersonsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PERSONS:
      return { ...state, ...action.payload };

    case ADD_NEW_PERSON:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case CHANGE_ACTIVE_PERSON:
      return {
        ...state,
        activePerson: action.payload,
      };

    case CHANGE_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    case EDIT_PERSON:
      idx = state.list.findIndex((p) => p.id === action.payload.id);
      console.log(action.payload.id);
      if (idx === -1) return state;
      _arr = [...state.list];
      _arr.splice(idx, 1, action.payload);
      return {
        ...state,
        list: _arr,
      };

    case DELETE_PERSON:
      idx = state.list.findIndex((p) => p.id === action.payload);
      if (idx === -1) return state;
      _arr = [...state.list];
      _arr.splice(idx, 1);
      return {
        ...state,
        list: _arr,
      };

    case SET_PERSON_BY_ID:
      idx = state.list.findIndex((p) => p.id === action.payload);
      if (idx === -1) return { ...state, personById: {} };
      return {
        ...state,
        personById: state.list[idx],
      };

    case CHANGE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode,
      };

    default:
      return state;
  }
};
