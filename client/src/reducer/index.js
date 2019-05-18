import {
  FETCH_POSTS,
  FETCH_POSTS_FAIL,
  FETCH_USERS,
  FETCH_USERS_FAIL,
  FETCH_USERS_POSTS,
  FETCH_USERS_POSTS_FAIL
} from "../actions";

const initialState = {
  users: [],
  posts: [],
  error: null,
  userPost: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_USERS_POSTS:
      return {
        ...state,
        userPost: action.payload
      };
    case FETCH_USERS_POSTS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
