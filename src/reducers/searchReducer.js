import { SEARCH_SUCCESS, REPOS_SUCCESS } from '../actions/types';

export const user = (USER = '', action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return USER = action.value;
    default:
      return USER;
  }
};

export const repos = (REPOS = '', action) => {
  switch (action.type) {
    case REPOS_SUCCESS: 
      return REPOS = action.value;
    default:
      return REPOS;
  }
}
