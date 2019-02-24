import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import SavedGemPage from './components/pages/SavedGemPage';
import Navbar from './components/Navbar';

import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Router>
            <div>
              <Navbar />
              <Route exact path='/' component={HomePage} />
              <Route path='/saved' component={SavedGemPage} />
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

export default App;
