import React, { Component } from 'react';
import { connect } from 'react-redux';
import './userBadge.css';

class UserBadge extends Component {
  render() {
    const { user } = this.props;

    const noUser = user === 404 ? <h1>Cannot Find User. Please Search Again</h1> : false;

    return (
      <div className="user">
        {noUser}
        {!noUser && user &&
          <div className="user-container"> 
            <div className="user-title">
              <img src={user.avatar_url} className="user-image" alt=""/>
              <div className="name-title">{user.name ? user.name : user.login}</div>
            </div>

            <div className="follow-row">
              <div className="follower-group">
                <div className="follower-title">Followers</div>
                <div className="follower-data">{user.followers}</div>
              </div>

              <div className="follower-group">
                <div className="follower-title">Following</div>
                <div className="follower-data">{user.following}</div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps, null)(UserBadge);