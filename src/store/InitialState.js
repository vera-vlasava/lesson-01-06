const InitialState = {
  persons: {
    list: [],
    isAuth: localStorage.token ? true : false,
    activePerson: null,
    editMode: false,
    personById: {},
  },

  posts: {
    list: [],
    addPostMode: false,
  },

  albums: {
    list: [],
    addAlbumMode: false,
  },

  photos: {
    list: [],
  },
};

export default InitialState;
