import {
  ADD_NEW_PERSON,
  FETCH_PERSONS,
  CHANGE_ACTIVE_PERSON,
  DELETE_PERSON,
  EDIT_PERSON,
} from "./typesList";

const initState = {
  persons: {
    list: [],
    activePerson: null,
    editMode: null,
    personById: null
  },
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PERSONS:
      return { ...state, persons: { ...state.persons, ...action.payload } };

    case ADD_NEW_PERSON:
      return {
        ...state,
        persons: {
          ...state.persons,
          list: [...state.persons.list, action.payload],
        },
      };

    case CHANGE_ACTIVE_PERSON:
      return {
        ...state,
        persons: { ...state.persons, activePerson: action.payload },
      };

    case EDIT_PERSON:
      const index = state.persons.list.findIndex(
        (p) => p.id === action.payload.id
      );
      console.log(action.payload.id);
      if (index === -1) return state;
      const new_arr = [...state.persons.list];
      new_arr.splice(index, 1, action.payload);
      return {
        ...state,
        persons: { ...state.persons, list: new_arr },
      };

    case DELETE_PERSON:
      const idx = state.persons.list.findIndex((p) => p.id === action.payload);
      if (idx === -1) return state;
      const _arr = [...state.persons.list];
      _arr.splice(idx, 1);
      return {
        ...state,
        persons: { ...state.persons, list: _arr },
      };

    default:
      return state;
  }
};
