import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { saveGem } from '../actions/GemActions';

class GemTile extends Component {

  constructor(props) {
    super(props);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  handleCardClick(event) {
    var win = window.open(this.props.data.project_uri, '_blank');
    win.focus();
  }

  handleStarClick(event) {
    event.stopPropagation();
    this.props.saveGem(this.props.data);
  }

  render() {
    const { data, savedGems } = this.props;
    const { name } = data;
    const isSavedClass = !!savedGems[name] ? 'GemTile-star-saved' : '';

    return (
      <div className="GemTile col-sm-4">
        <div className="GemTile-card card" onClick={this.handleCardClick}>
          <FontAwesome name="star" className={`GemTile-star ${isSavedClass}`} onClick={this.handleStarClick} />
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h4>
                <FontAwesome name="diamond" className="GemTile-gem" />
                <span className="ml-3">{data.name}</span>
              </h4>
              <p className="GemTile-info">{data.info}</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <p>
                <FontAwesome name="pencil"/>
                <span className="ml-2">{data.authors}</span>
              </p>
              <p>
                <FontAwesome name="download"/>
                <span className="ml-2">{data.downloads}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { savedGems: state.gems.savedGems };
}

export default connect(mapStateToProps, { saveGem })(GemTile);
