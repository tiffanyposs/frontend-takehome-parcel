import React, { Component } from 'react';
import DisplayGems from './components/DisplayGems';
import Hero from './components/Hero';

import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Hero />
          <DisplayGems />
        </div>
      </div>
    )
  }
}

export default App;
