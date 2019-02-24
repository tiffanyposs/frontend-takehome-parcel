import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Search } from './common';
import { fetchGems, clearGems } from '../actions/GemActions';

class SearchGems extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearGems();
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
    this.props.fetchGems(event.target.value);
  }

  render() {
    return (
      <div className="SearchGems">
        <Search
          handleChange={this.handleChange}
          value={this.state.text}
          placeholder={'Looking For Gems?'}
          hasCta={false}
        />
      </div>
    )
  }
}

export default connect(null, { fetchGems, clearGems })(SearchGems);
