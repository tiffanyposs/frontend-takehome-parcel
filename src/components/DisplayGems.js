import React, { Component } from 'react';
import { connect } from 'react-redux';

import GemTile from './GemTile';
import FakeGemTiles from './FakeGemTiles';

const DisplayGems = props => {

  if (!props.gems.length) return <FakeGemTiles />

  return (
    <div className="DisplayGems">
      <div className="row">
        {props.gems.map((data) => {
          return <GemTile key={data.name} data={data}/>
        })}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return { gems: state.gems.data }
}

export default connect(mapStateToProps, null)(DisplayGems);
