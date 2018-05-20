import React, { Component } from 'react';
import SearchContainer from './containers/searchContainer';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <SearchContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
