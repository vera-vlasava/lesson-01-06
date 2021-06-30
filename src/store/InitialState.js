const InitialState = {
  persons: {
    list: [],
    isAuth: localStorage.token ? true : false,
    activePerson: null,
    editMode: false,
    personById: null,
  },

  posts: {
    list: [],
    addPostMode: false,
    postById: null,
  },

  albums: {
    list: [],
    addAlbumMode: false,
    albumById: null,
  },

  photos: {
    list: [],
  },
};

export default InitialState;
