import React, { Component } from 'react';
import { connect } from 'react-redux';
import './repoList.css';

class RepoList extends Component {
  render() {
    const { repos } = this.props;
    
    const noRepos = repos === 404 ? <div>Cannot Find Repos For this User. Please Search Again</div> : false;

    return (
      <div className="repo">
        {noRepos}
        {!noRepos && repos &&
          <div className="repos-container">
            {
                repos.map((repo) => {
                  return (
                    <div className="repo-card">
                      <div className="repo-name"><a href={repo.git_url}>{repo.name}</a></div>
                
                      <div className="repo-description">{repo.description}</div>

                      <div className="repo-number-row">
                        <div className="repo-number-group">
                          <div className="repo-number-title">Stars </div>
                          <div className="repo-number">{repo.stargazers_count}</div>
                        </div>

                        <div className="repo-number-group">
                          <div className="repo-number-title">Forks </div>
                          <div className="repo-number">{repo.forks_count}</div>
                        </div>
                        
                        <div className="repo-number-group">
                          <div className="repo-number-title">Issues </div>
                          <div className="repo-number">{repo.open_issues}</div>
                        </div>
                        
                        <div className="repo-number-group">
                          <div className="repo-number-title">Size </div>
                          <div className="repo-number">{repo.size}</div>
                        </div>
                      </div>
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