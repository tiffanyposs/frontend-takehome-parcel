import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Search } from './common';
import { fetchGems } from '../actions/GemActions';

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

  handleSubmit(event) {
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
          hasCta={false}
        />
      </div>
    )
  }
}

export default connect(null, { fetchGems })(SearchGems);
