import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import GemTile from '../GemTile';
import FakeGemTiles from '../FakeGemTiles';

class SavedGemPage extends Component {

  showTiles() {
    const { savedGems } = this.props;
    if (!savedGems || Object.keys(savedGems).length === 0) return <FakeGemTiles />
    const keys = Object.keys(savedGems);

    return (
      <div className="row">
        {keys.map(name => {
          const data = savedGems[name];
          return <GemTile key={name} data={data} />
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="SavedGemPage">
        <div className="SavedGemPage-header">
          <FontAwesome name="star" />
          <h1>Saved Gems</h1>
        </div>
        {this.showTiles()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { savedGems: state.gems.savedGems };
}

export default connect(mapStateToProps, null)(SavedGemPage);
