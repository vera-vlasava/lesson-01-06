import postsInitial, { setPostsToStorage } from "../../data/posts";
import { FETCH_POSTS, ADD_POST} from "../typesList";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const obj = getObject();
      await dispatch(fetchPosts(obj));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const newPost = await addPostInServer(post);
      await dispatch(addPostInState(newPost));
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
