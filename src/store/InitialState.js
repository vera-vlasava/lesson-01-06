const InitialState = {
  persons: {
    list: [],
    isAuth: false,
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
