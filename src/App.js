import React, { Component } from 'react';
import SearchGems from './components/SearchGems';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <SearchGems />
        </div>
      </div>
    )
  }
}

export default App;
