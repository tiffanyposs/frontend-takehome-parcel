import React from 'react';
import FontAwesome from 'react-fontawesome';

const GemTile = props => {
  return (
    <div className="GemTile col-sm-4">
      <a className="GemTile-card card" href={props.data.project_uri} target="_blank">
        <FontAwesome name="star" className="GemTile-star" />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h4>
              <FontAwesome name="diamond" className="GemTile-gem" />
              <span className="ml-3">{props.data.name}</span>
            </h4>
            <p className="GemTile-info">{props.data.info}</p>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <p>
              <FontAwesome name="pencil"/>
              <span className="ml-2">{props.data.authors}</span>
            </p>
            <p>
              <FontAwesome name="download"/>
              <span className="ml-2">{props.data.downloads}</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default GemTile;
