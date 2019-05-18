import axios from "axios";

const api = axios.create({
  baseURL: `https://ring-village.herokuapp.com/api/`
});

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_FAIL = "FETCH_USERS";
export const getUsers = () => dispatch => {
  api
    .get(`users`)
    .then(res => {
      dispatch({ type: FETCH_USERS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_FAIL, payload: err });
    });
};

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_FAIL = "FETCH_POSTS";
export const getPosts = () => dispatch => {
  api
    .get(`posts`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_POSTS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_POSTS_FAIL, payload: err });
    });
};

export const FETCH_USERS_POSTS = "FETCH_USERS_POSTS";
export const FETCH_USERS_POSTS_FAIL = "FETCH_USERS_POSTS_FAIL";
export const getUsersPosts = id => dispatch => {
  api
    .get(`users/${id}/posts`)
    .then(res => {
      dispatch({ type: FETCH_USERS_POSTS, payload: res.data.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_POSTS_FAIL, payload: err });
    });
};
