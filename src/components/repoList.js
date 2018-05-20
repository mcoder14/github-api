import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepoList extends Component {
  render() {
    const { repos } = this.props;

    const noRepos = repos === 404 ? <div>Cannot Find Repos For this User. Please Search Again</div> : false;

    return (
      <div className="container">
        {noRepos}
        {!noRepos && repos &&
          <div>
            {
                repos.map((repo) => {
                  return (
                    <div>
                      {repo.name}
                      {repo.description}
                      {repo.git_url}
                      {repo.stargazers_count}
                      {repo.forks_count}
                      {repo.open_issues}
                      {repo.size}
                    </div>
                  )
                  
                })
            }
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos,
  }
};

export default connect(mapStateToProps, null)(RepoList);