import personsInitial, {
  activePersonId,
  setActivePersonIdToStorage,
  setPersonsToStorage,
} from "../../data/persons";
import {
  CHANGE_ACTIVE_PERSON,
  ADD_NEW_PERSON,
  FETCH_PERSONS,
  DELETE_PERSON,
  EDIT_PERSON,
  SET_PERSON_BY_ID,
  CHANGE_AUTH,
} from "../typesList";
import {URL} from "../utilites";

export const changeActivePersonId = (personId) => {
  return (dispatch) => {
    try {
      setActivePersonIdToStorage(personId);
      dispatch(setActivePerson(personId));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getPersons = () => {
  return async (dispatch) => {
    try {
      // const obj = getObject();
      const response = await fetch(`${URL}/users`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      dispatch(fetchPersons({list: json, activePerson: null}));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const doSignIn = (person) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/auth/signin`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
      });
      const json = await response.json();
      await localStorage.setItem('token', json.accessToken)
      await localStorage.setItem('userId', json.id)
      await changeAuth(true)
    } catch (err) {
      console.log(err.message);
    }
  }
}

export const doSignOut = () => {
  return () => {
    try {
      localStorage.removeItem("token")
      localStorage.removeItem("userId")
      changeAuth(false)
    } catch (err) {
      console.log(err.message);
    }
  }
}

export const addNewPerson = (data) => {
  return async (dispatch) => {
    try {
      // const person = createPerson(data);
      const response = await fetch(`${URL}/auth/signup`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      await dispatch(addPerson(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const deletePerson = (personId) => {
  return async (dispatch) => {
    try {
      await deleteFromServer(personId);
      await dispatch(deletePersonFromState(personId));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const editPerson = (person) => {
  return async (dispatch) => {
    try {
      await editPersonOnServer(person);
      await dispatch(editPersonInState(person));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const setPersonById = (personId) => {
  return (dispatch) => {
    try {
      dispatch(setPersonByIdInState(personId));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const setPersonByIdInState = (personId) => {
  return {
    type: SET_PERSON_BY_ID,
    payload: personId,
  };
};

const editPersonInState = (person) => {
  return {
    type: EDIT_PERSON,
    payload: person,
  };
};

const editPersonOnServer = (person) => {
  const idx = personsInitial.findIndex((p) => p.id === person.id);
  if (idx === -1) return null;
  personsInitial.splice(idx, 1, person);
  setPersonsToStorage(personsInitial);
};

const changeAuth = (authMode) => {
  return {
    type: CHANGE_AUTH,
    payload: authMode,
  }
}

const getObject = () => {
  return {
    list: [...personsInitial],
    activePerson: +activePersonId,
  };
};

const fetchPersons = (obj) => {
  return {
    type: FETCH_PERSONS,
    payload: obj,
  };
};

const addPerson = (person) => {
  return {
    type: ADD_NEW_PERSON,
    payload: person,
  };
};

const createPerson = (data) => {
  const newPerson = {
    ...data,
    id: Date.now(),
  };
  const persons = personsInitial;
  persons.push(newPerson);
  setPersonsToStorage(persons);
  return newPerson;
};

const setActivePerson = (personId) => {
  return {
    type: CHANGE_ACTIVE_PERSON,
    payload: personId,
  };
};

const deletePersonFromState = (personId) => {
  return {
    type: DELETE_PERSON,
    payload: personId,
  };
};

const deleteFromServer = (personId) => {
  const idx = personsInitial.findIndex((p) => p.id === personId);
  if (idx === -1) return null;
  personsInitial.splice(idx, 1);
  setPersonsToStorage(personsInitial);
};
