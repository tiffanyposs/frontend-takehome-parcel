import React, { Component } from 'react';
import { Search } from './common';
import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/api/v1/search.json?query=';

class SearchGems extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getGems() {
    const query = `${API_ENDPOINT}${this.state.text}`;
    axios.get(query).then(res => {
      console.log('here: ', res.data);
    });
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }

  handleSubmit() {
    this.getGems();
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

export default SearchGems;
