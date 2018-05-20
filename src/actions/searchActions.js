import axios from 'axios';
import { SEARCH_SUCCESS, REPOS_SUCCESS } from './types';

export function searchGithub(username) {
  return (dispatch) => {
    return axios.get(`https://api.github.com/users/${username}`)
      .then((json) => {
        dispatch(setUser(json.data));
        dispatch(getRepos(username));
      })   
      .catch((error) => {
        dispatch(setUser(error.response.status));
      })
  }
}

export function getRepos(username) {
  return (dispatch) => {
    return axios.get(`https://api.github.com/users/${username}/repos`)
      .then((json) => {
        dispatch(setUserRepos(json.data));
      })
      .catch((error) => {
        dispatch(setUserRepos(error.response.status));
      })
  }
}

export function setUser(value) {
  return {
    type: SEARCH_SUCCESS,
    value
  }
}

export function setUserRepos(value) {
  return {
    type: REPOS_SUCCESS,
    value
  }
}