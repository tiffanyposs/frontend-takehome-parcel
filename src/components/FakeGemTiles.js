import React from 'react';
import FontAwesome from 'react-fontawesome';

const FakeGemTiles = () => {
  let tiles = new Array(9).fill(0);
  return (
    <div className="FakeGemTiles row">
      {tiles.map((elem, index) => {
        return (
          <div className="col-sm-4" key={index}>
            <div className="FakeGemTiles-card card">
              <div className="card-body d-flex flex-row align-items-center justify-content-center">
                <FontAwesome name="diamond" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FakeGemTiles;
