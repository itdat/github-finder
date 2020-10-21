import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER_INFO,
  CLEAR_USERS,
  GET_USER_REPOS,
  SET_LOADING,
} from "../types";

let githubClientId;
let githubClientSecret;
if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: null,
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get User Info
  const getUserInfo = async (login) => {
    setLoading();
    try {
      const res = await axios.get(
        `https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      dispatch({
        type: GET_USER_INFO,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_USER_INFO,
        payload: null,
      });
    }
  };

  // Get User Repos
  const getUserRepos = async (login) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: GET_USER_REPOS,
      payload: res.data,
    });
  };

  // Clear Users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        searchUsers,
        clearUsers,
        user: state.user,
        getUserInfo,
        repos: state.repos,
        getUserRepos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
