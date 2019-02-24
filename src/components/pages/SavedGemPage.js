import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import GemTile from '../GemTile';

const SavedGemPage = props => {
  const { savedGems } = props;
  const keys = Object.keys(savedGems);

  return (
    <div className="SavedGemPage">
      <div className="SavedGemPage-header">
        <FontAwesome name="star" />
        <h1>Saved Gems</h1>
      </div>
      <div className="row">
        {keys.map(name => {
          const data = savedGems[name];
          return <GemTile key={name} data={data} />
        })}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return { savedGems: state.gems.savedGems };
}

export default connect(mapStateToProps, null)(SavedGemPage);
