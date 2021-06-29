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
    albumById: {},
  },

  photos: {
    list: [],
  },
};

export default InitialState;
