import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserBadge extends Component {
  render() {
    const { user } = this.props;

    const noUser = user === 404 ? <div>Cannot Find User. Please Search Again</div> : false;

    return (
      <div className="container">
        {noUser}
        {!noUser && user &&
          <div>
            USER IS 
            {user.avatar_url}
            {user.name}
            {user.followers}
            {user.following}
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