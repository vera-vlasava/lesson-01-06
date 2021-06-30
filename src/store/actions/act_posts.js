import postsInitial, { setPostsToStorage } from "../../data/posts";
import {FETCH_POSTS, ADD_POST, FETCH_POST_BY_ID} from "../typesList";
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
      const data = await response.json();

      for (const p of data) {
        const response = await fetch(`${URL}/users/${p.person_id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        });
        p.person = await response.json();
      }

      await dispatch(fetchPosts({list: data}));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getPostById = (postId) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL}/posts/${postId}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status !== 200) {
        return
      }
      const data = await response.json();

        const response_user = await fetch(`${URL}/users/${data.person_id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          }
        });
      if (response_user.status !== 200) {
        data.person = null
      } else {
        data.person = await response_user.json();
      }

      await dispatch(fetchPostById(data));
    } catch (err) {
      console.log(err.message);
    }
  }
}

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

export const setPostsByPersonId = (person_id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts/person_id/${person_id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      await dispatch(fetchPosts({list: data}));
    } catch (err) {
      console.log(err.message);
    }
  };
}

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

const fetchPostById = (post) => {
  return {
    type: FETCH_POST_BY_ID,
    payload: post,
  }
}

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
