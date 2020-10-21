import { SEARCH_USERS, GET_USER_INFO, CLEAR_USERS, GET_USER_REPOS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
