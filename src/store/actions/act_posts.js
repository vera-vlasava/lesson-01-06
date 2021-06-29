import postsInitial, { setPostsToStorage } from "../../data/posts";
import { FETCH_POSTS, ADD_POST} from "../typesList";
import { URL } from "../utilites";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      await dispatch(fetchPosts({list: json}));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.token
        },
        body: JSON.stringify(post)


      });
      if (response.status !== 200) {
        return 
      }
      const data = await response.json();
      await dispatch(addPostInState(data));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const getObject = () => {
  return {
    list: [...postsInitial],
  };
};

const fetchPosts = (obj) => {
  return {
    type: FETCH_POSTS,
    payload: obj,
  };
};

const addPostInState = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const addPostInServer = (post) => {
  const newPost = {
    ...post,
    id: Date.now(),
  };
  postsInitial.push(newPost);
  setPostsToStorage(postsInitial);
  return newPost;
};
