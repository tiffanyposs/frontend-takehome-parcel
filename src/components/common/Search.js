import React, { Component } from 'react';

class Search extends Component {
  submit(event) {
    event.preventDefault()
    this.props.handleSubmit();
  }

  render() {
    return (
      <form className="form-inline flex-row justify-content-center" onSubmit={this.submit.bind(this)}>
        <div className="form-group">
          <input
            className="form-control"
            value={this.props.value}
            placeholder={this.props.placeholder || ''}
            onChange={this.props.handleChange}
          />
        </div>
        <button
          type="submit"
          value="Submit"
          className="btn btn-success"
        >
          {this.props.cta || 'Submit'}
        </button>
      </form>
    )
  }
}
export default Search;
