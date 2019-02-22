import React, { Component } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';

import { Search } from './common';
import { fetchGems } from '../actions/GemActions';

const API_ENDPOINT = 'http://localhost:3000/api/v1/search.json?query=';

class SearchGems extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    this.props.fetchGems(event.target.value);
  }

  handleSubmit() {
    this.props.fetchGems(this.state.text);
  }

  render() {
    return (
      <div className="SearchGems">
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.text}
          placeholder={'Looking For Gems?'}
          cta={'Search'}
        />
      </div>
    )
  }
}

export default connect(null, { fetchGems })(SearchGems);
