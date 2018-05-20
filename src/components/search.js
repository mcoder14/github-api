import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash/debounce';
import './search.css';

import { searchGithub } from '../actions/searchActions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',

    }

    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {this.search()});
  }

  search = debounce(() => {
    this.props.searchGithub(this.state.search);
  }, 500);

  render() {
    const { search } = this.state;
    return (
      <div className="search-container">
        <label className="search-label">Search for a Github User</label>
        <input
          name="search"
          onChange={this.handleChange}
          value={search}
          className="search-box" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  searchGithub: searchGithub,
}, dispatch);

export default connect(null, mapDispatchToProps)(Search);
