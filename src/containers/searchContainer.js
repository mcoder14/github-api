import React, { Component } from 'react';
import Search from '../components/search';
import UserBadge from '../components/userBadge';
import RepoList from '../components/repoList'

class SearchContainer extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <UserBadge />
        <RepoList />
      </div>
    );
  }
}

export default SearchContainer;
